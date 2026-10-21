import { error } from '@sveltejs/kit';
import { comparePairs, generatedComparePair } from '$lib/data/compare';
import type { PageLoad, EntryGenerator } from './$types';

// Only the pairs the generic template renders. Hand-written pages live in their own
// route directory and are excluded here, so no path prerenders twice.
export const entries: EntryGenerator = () =>
	comparePairs()
		.filter((pair) => !pair.bespoke)
		.map((pair) => ({ slug: pair.slug }));

export const load: PageLoad = ({ params }) => {
	const pair = generatedComparePair(params.slug);

	if (!pair) {
		throw error(404, 'Comparison not found');
	}

	// Other comparison pages either side appears on, so the page is not a dead end.
	const relatedPairs = comparePairs().filter(
		(other) =>
			other.slug !== pair.slug &&
			[other.a.slug, other.b.slug].some(
				(slug) => slug === pair.a.slug || slug === pair.b.slug
			)
	);

	return { pair, relatedPairs };
};
