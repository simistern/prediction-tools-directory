import toolsData from './tools.json';
import type { Tool } from './schema';

const tools = toolsData as unknown as Tool[];
const toolsBySlug = new Map(tools.map((tool) => [tool.slug, tool]));

/**
 * Comparison pages written by hand rather than rendered from `compareWith`.
 * Keyed by the sorted slug pair, valued by the URL the hand-written route lives at:
 * the pair keeps that slug so the bespoke page stays the canonical URL for it.
 */
const BESPOKE_SLUGS: Record<string, string> = {
	'kalshi|polymarket': 'polymarket-vs-kalshi'
};

export type ComparePair = {
	/** URL slug, e.g. `kalshi-vs-robinhood`. */
	slug: string;
	/** Alphabetical order, so the slug and the page order are stable. */
	a: Tool;
	b: Tool;
	bespoke: boolean;
};

export type CompareLink = {
	href: string;
	label: string;
	blurb: string;
};

const pairKey = (first: string, second: string) => [first, second].sort().join('|');

const bySlugOrder = (first: Tool, second: Tool) => first.slug.localeCompare(second.slug);

/**
 * Every pair declared in `compareWith`, deduplicated: one page per unordered pair, whichever
 * side declares it. validate-tools.mjs enforces that declarations are mutual and not self-referential.
 */
export const comparePairs = (): ComparePair[] => {
	const pairs = new Map<string, ComparePair>();

	for (const tool of tools) {
		for (const otherSlug of tool.compareWith ?? []) {
			const other = toolsBySlug.get(otherSlug);
			if (!other) continue;

			const key = pairKey(tool.slug, otherSlug);
			if (pairs.has(key)) continue;

			const [a, b] = [tool, other].sort(bySlugOrder);
			pairs.set(key, {
				slug: BESPOKE_SLUGS[key] ?? `${a.slug}-vs-${b.slug}`,
				a,
				b,
				bespoke: key in BESPOKE_SLUGS
			});
		}
	}

	return [...pairs.values()];
};

/** Pairs the generic template renders. Hand-written pages are excluded so nothing prerenders twice. */
export const generatedComparePairs = (): ComparePair[] =>
	comparePairs().filter((pair) => !pair.bespoke);

export const generatedComparePair = (slug: string): ComparePair | undefined =>
	generatedComparePairs().find((pair) => pair.slug === slug);

const pairForSlugs = (first: string, second: string): ComparePair | undefined =>
	comparePairs().find(
		(pair) =>
			(pair.a.slug === first && pair.b.slug === second) ||
			(pair.a.slug === second && pair.b.slug === first)
	);

/**
 * Link copy for pairs whose page carries more than the directory record, keyed
 * `<viewing tool>|<pair slug>`. Everything else falls back to a neutral description
 * of what the generated template actually shows.
 */
const LINK_COPY: Record<string, { label: string; blurb: string }> = {
	'polymarket|polymarket-vs-kalshi': {
		label: 'How Polymarket compares to Kalshi on fees, access and settlement',
		blurb: 'a dated comparison with both fee formulas, who can actually trade in which country, and how each venue settles'
	},
	'kalshi|polymarket-vs-kalshi': {
		label: 'How Kalshi compares to Polymarket on fees, access and settlement',
		blurb: 'a dated comparison with both fee formulas, who can actually trade in which country, and how each venue settles'
	},
	'robinhood|kalshi-vs-robinhood': {
		label: "Robinhood's event contracts against trading on Kalshi itself",
		blurb: 'the fee formula each route charges, who can open an account, and the platforms each reaches'
	},
	'robinhood|polymarket-vs-robinhood': {
		label: 'How Robinhood compares to Polymarket: brokerage rails against crypto rails',
		blurb: 'pricing notes, access and eligibility for both, with the date each record was last verified'
	}
};

/** Compare links to render on a tool profile, in the order the record declares them. */
export const compareLinksFor = (toolSlug: string): CompareLink[] => {
	const tool = toolsBySlug.get(toolSlug);
	if (!tool) return [];

	const links: CompareLink[] = [];

	for (const otherSlug of tool.compareWith ?? []) {
		const other = toolsBySlug.get(otherSlug);
		if (!other) continue;

		const pair = pairForSlugs(tool.slug, other.slug);
		if (!pair) continue;

		const copy = LINK_COPY[`${tool.slug}|${pair.slug}`];
		links.push({
			href: `/compare/${pair.slug}`,
			label:
				copy?.label ??
				`How ${tool.name} compares to ${other.name} on pricing, access and market coverage`,
			blurb:
				copy?.blurb ??
				'pricing notes, access, platforms and eligibility for both, with the date each record was last verified'
		});
	}

	return links;
};
