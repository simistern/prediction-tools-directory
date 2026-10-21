<script lang="ts">
	import type { PageData } from './$types';
	import type { Tool } from '$lib/data/schema';

	export let data: PageData;

	$: pair = data.pair;
	// JSON imports are typed broadly; the envelope fields are enforced by validate-tools.mjs.
	$: a = pair.a as unknown as Tool;
	$: b = pair.b as unknown as Tool;
	$: relatedPairs = data.relatedPairs;

	const SITE = 'https://predictiontools.directory';

	const join = (values: string[] | undefined): string | null =>
		values && values.length > 0 ? values.join(', ') : null;

	type Row = { label: string; a: string | null; b: string | null };

	// Everything on this page is a field of the two tool records. No field is interpreted,
	// scored or reworded, so the page can be regenerated whenever the records change.
	$: rows = (
		[
			{ label: 'Pricing tier', a: a.pricing ?? null, b: b.pricing ?? null },
			{ label: 'Access', a: a.access ?? null, b: b.access ?? null },
			{ label: 'Exchanges supported', a: join(a.supportedMarkets), b: join(b.supportedMarkets) },
			{ label: 'Platforms', a: join(a.platform), b: join(b.platform) },
			{ label: 'Chain', a: join(a.blockchain), b: join(b.blockchain) },
			{ label: 'Status', a: a.status ?? null, b: b.status ?? null },
			{ label: 'Eligibility', a: a.eligibility ?? null, b: b.eligibility ?? null },
			{ label: 'Data and API access', a: a.apiAccess ?? null, b: b.apiAccess ?? null },
			{
				label: 'Pricing notes (as recorded)',
				a: a.pricingDetails ?? null,
				b: b.pricingDetails ?? null
			},
			{ label: 'Record last verified', a: a.lastVerified ?? null, b: b.lastVerified ?? null }
		] as Row[]
	).filter((row) => row.a !== null || row.b !== null);

	// Fields where a difference changes which one someone would pick. The rest of the table still
	// renders; it just does not belong in the summary (two venues each naming themselves as the
	// exchange they run on is not a difference a reader can use).
	const SUMMARY_FIELDS = [
		'Pricing tier',
		'Access',
		'Platforms',
		'Eligibility',
		'Data and API access'
	];

	// The point of the page is the delta, so the summary lists only recorded fields that differ.
	$: differences = rows.filter((row) => SUMMARY_FIELDS.includes(row.label) && row.a !== row.b);

	// Field values are hand-written prose that usually ends in a full stop; sentences built from
	// them must not double it up.
	const clip = (value: string): string => value.replace(/\s*\.\s*$/, '');

	// First recorded difference that usually settles the choice, used by the verdict block.
	const DECISION_FIELDS = ['Pricing tier', 'Eligibility', 'Data and API access', 'Platforms'];
	$: firstDifference =
		DECISION_FIELDS.map((label) => rows.find((row) => row.label === label)).find(
			(row) => row && row.a !== row.b
		) ?? null;

	/** One line per tool, on the fields a reader can act on, built only from recorded values. */
	const essentials = (tool: Tool): string =>
		[
			`${tool.pricing} pricing`,
			`${join(tool.supportedMarkets) ?? 'no exchange recorded'} coverage`,
			`on ${join(tool.platform) ?? 'no platform recorded'}`
		].join(' · ');

	$: verifiedLine = [a, b]
		.map((tool) => `${tool.name} ${tool.lastVerified ?? 'not yet verified'}`)
		.join(' · ');

	// Verdict cards: the recorded decision line per tool, plus its own good-for notes when the
	// record has them. Nothing is composed that the record does not already say.
	$: verdictCards = [
		{ tool: a, tone: 'text-neon-green', reasons: (a.goodFor ?? []).slice(0, 3) },
		{ tool: b, tone: 'text-neon-blue', reasons: (b.goodFor ?? []).slice(0, 3) }
	];

	$: lastVerified = [a.lastVerified, b.lastVerified].filter(Boolean).sort().at(-1) ?? null;
</script>

<svelte:head>
	<title>{a.name} vs {b.name}: pricing, access and market coverage | Prediction Tools</title>
	<meta
		name="description"
		content="Pricing, access, markets, platforms and eligibility for {a.name} and {b.name}, side by side from the directory record, with the date each was last verified."
	/>
	<link rel="canonical" href="{SITE}/compare/{pair.slug}" />

	<!-- Open Graph -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{a.name} vs {b.name}: the directory record, side by side" />
	<meta
		property="og:description"
		content="Pricing notes, access, markets, platforms and eligibility for both, each with the date its record was last checked."
	/>
	<meta property="og:url" content="{SITE}/compare/{pair.slug}" />
	<meta property="og:image" content="{SITE}/og-image.png" />
	<meta property="og:site_name" content="predictiontools.directory" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@predictiontools" />
	<meta name="twitter:title" content="{a.name} vs {b.name}: pricing, access, market coverage" />
	<meta
		name="twitter:description"
		content="The two directory records side by side, with the date each was last verified."
	/>
	<meta name="twitter:image" content="{SITE}/og-image.png" />

	<!-- JSON-LD -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: `${a.name} vs ${b.name}: pricing, access and market coverage`,
		url: `https://predictiontools.directory/compare/${pair.slug}`,
		description: `The directory records for ${a.name} and ${b.name} compared field by field.`,
		...(lastVerified ? { dateModified: lastVerified } : {}),
		author: {
			'@type': 'Organization',
			name: 'predictiontools.directory',
			url: 'https://predictiontools.directory'
		},
		about: [a, b].map((tool) => ({
			'@type': 'SoftwareApplication',
			name: tool.name,
			applicationCategory: 'Prediction Market',
			url: tool.url
		}))
	})}</script>`}
</svelte:head>

<div class="max-w-5xl mx-auto">
	<!-- Breadcrumb -->
	<nav class="flex mb-8 font-mono text-xs sm:text-sm tracking-tight" aria-label="Breadcrumb">
		<ol class="flex items-center space-x-2 text-dim-gray">
			<li>
				<a href="/" class="hover:text-white transition-colors uppercase">HOME</a>
			</li>
			<li class="flex items-center space-x-2">
				<span>/</span>
				<span class="text-gray-500 uppercase">COMPARE</span>
			</li>
			<li class="flex items-center space-x-2">
				<span>/</span>
				<span class="text-white uppercase">{a.name} VS {b.name}</span>
			</li>
		</ol>
	</nav>

	<!-- Hero -->
	<header class="space-y-5 py-6 mb-8 border-b border-terminal-slate pb-8">
		<h1
			class="text-3xl sm:text-5xl font-black font-sans tracking-tighter text-white uppercase leading-tight"
		>
			<span class="text-neon-green">{a.name}</span>
			<span class="text-gray-600 mx-3 text-4xl">VS</span>
			<span class="text-neon-blue">{b.name}</span>
		</h1>
		<p class="text-lg text-gray-300 max-w-3xl font-mono leading-relaxed">
			What this directory records about each, side by side: pricing tier and the fee note each
			points to, who can open an account, which markets and platforms each covers. Nothing here is
			scored or estimated — every cell is a field of the two tool records.
		</p>
		<div class="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-gray-500">
			<span class="text-neon-green uppercase tracking-wider">
				Records last verified {verifiedLine}
			</span>
			<span class="text-terminal-slate">|</span>
			<a
				href="/tool/{a.slug}"
				class="text-neon-green hover:text-white underline decoration-dotted underline-offset-2"
				>{a.name} profile</a
			>
			<span class="text-terminal-slate">·</span>
			<a
				href="/tool/{b.slug}"
				class="text-neon-blue hover:text-white underline decoration-dotted underline-offset-2"
				>{b.name} profile</a
			>
		</div>
	</header>

	<!-- Verdict. Generated from the two records: what each one is, the first recorded difference
	     that decides most people, and an explicit refusal to rank what the records do not measure. -->
	<div class="border border-neon-green/40 bg-terminal-dark p-6 mb-10">
		<h2 class="text-sm font-mono text-gray-500 uppercase tracking-wider mb-4 flex items-center">
			<span class="text-neon-green mr-2">★</span> The verdict these records support
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
			{#each verdictCards as card}
				<div class="border border-terminal-slate bg-terminal-black/40 p-4">
					<p class="{card.tone} font-mono text-xs uppercase tracking-wider mb-2">
						Choose {card.tool.name} if
					</p>
					<p class="text-gray-200 font-mono text-xs leading-relaxed mb-3">
						{essentials(card.tool)}
					</p>
					{#if card.reasons.length > 0}
						<ul class="space-y-2">
							{#each card.reasons as item}
								<li class="flex items-start gap-2 text-gray-400 font-mono text-xs leading-relaxed">
									<span class="text-neon-green/70 mt-0.5 shrink-0">›</span>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					{:else}
						<p class="text-gray-500 font-mono text-xs leading-relaxed">
							Its record carries no good-for notes yet, so the fields above are all it claims.
						</p>
					{/if}
				</div>
			{/each}
		</div>

		<p class="font-mono text-sm text-gray-300 leading-relaxed">
			{#if firstDifference}
				<span class="text-white">First recorded difference that usually settles it:</span>
				{firstDifference.label.toLowerCase()} —
				{a.name} records {firstDifference.a ? clip(firstDifference.a) : 'no entry'};
				{b.name} records {firstDifference.b ? clip(firstDifference.b) : 'no entry'}.
			{:else}
				<span class="text-white">On every field this page tracks, the two records match.</span>
			{/if}
			This page does not name a winner. The fee notes below carry the formulas, and what a given
			trade costs depends on that formula, the contract price and how many contracts are traded —
			not on the pricing tier.
		</p>

		{#if differences.length > 0}
			<ul class="space-y-3 font-mono text-sm text-gray-300 mt-5 pt-4 border-t border-terminal-slate">
				{#each differences as row}
					<li class="flex items-start gap-2">
						<span class="text-neon-green shrink-0">›</span>
						<span>
							<span class="text-white">{row.label}:</span>
							{#if row.a && row.b}
								{a.name} records {clip(row.a)}; {b.name} records {clip(row.b)}.
							{:else if row.a}
								only {a.name} has an entry here — {clip(row.a)}.
							{:else}
								only {b.name} has an entry here — {clip(row.b ?? '')}.
							{/if}
						</span>
					</li>
				{/each}
			</ul>
		{/if}

		<p class="font-mono text-xs text-gray-400 mt-5 pt-4 border-t border-terminal-slate leading-relaxed">
			This page does not model what a trade costs, how much liquidity sits behind a market, or how
			many markets are open today. Those numbers change daily and belong to the venues; each
			pricing note below names the document it came from and the date it was read.
		</p>
	</div>

	<!-- Field-by-field table -->
	<section class="mb-12">
		<h2 class="text-xl font-black font-sans tracking-tighter text-white uppercase mb-4 flex items-center">
			<span class="text-neon-green mr-3">▸</span>Field by field
		</h2>
		<div class="border border-terminal-slate bg-terminal-dark overflow-hidden">
			<table class="w-full text-sm font-mono">
				<thead>
					<tr class="border-b border-terminal-slate">
						<th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs w-44">
							Field
						</th>
						<th class="text-left px-5 py-3 text-xs uppercase tracking-wider w-1/3">
							<a href="/tool/{a.slug}" class="text-neon-green hover:text-white">{a.name}</a>
						</th>
						<th class="text-left px-5 py-3 text-xs uppercase tracking-wider w-1/3">
							<a href="/tool/{b.slug}" class="text-neon-blue hover:text-white">{b.name}</a>
						</th>
					</tr>
				</thead>
				<tbody>
					{#each rows as row, i}
						<tr
							class="border-b border-terminal-slate/50 {i % 2 === 0
								? 'bg-terminal-black/30'
								: ''} align-top"
						>
							<td class="px-5 py-4 text-gray-500 text-xs uppercase tracking-wider">{row.label}</td>
							<td class="px-5 py-4 text-gray-300 text-xs leading-relaxed">
								{row.a ?? '—'}
							</td>
							<td class="px-5 py-4 text-gray-300 text-xs leading-relaxed">
								{row.b ?? '—'}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="text-gray-400 font-mono text-xs leading-relaxed mt-4">
			A dash means this directory holds no entry for that field yet — not that the venue has no
			such rule. The records are written and dated by hand, not scraped, and each pricing note
			names its own source.
		</p>
	</section>

	<!-- Both records in full -->
	<section class="mb-12">
		<h2 class="text-xl font-black font-sans tracking-tighter text-white uppercase mb-4 flex items-center">
			<span class="text-neon-green mr-3">▸</span>Both records in full
		</h2>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
			{#each [{ tool: a, linkClass: 'text-neon-green hover:text-white underline decoration-dotted underline-offset-2' }, { tool: b, linkClass: 'text-neon-blue hover:text-white underline decoration-dotted underline-offset-2' }] as entry}
				<div class="border border-terminal-slate bg-terminal-dark p-6">
					<h3 class="text-lg font-black font-sans tracking-tight text-white uppercase mb-1">
						{entry.tool.name}
					</h3>
					<p class="text-gray-500 font-mono text-xs mb-4">
						{entry.tool.shortDescription}
					</p>
					<p class="text-gray-300 font-mono text-sm leading-relaxed mb-5">
						{entry.tool.description}
					</p>

					{#if entry.tool.goodFor && entry.tool.goodFor.length > 0}
						<div class="border-l-2 border-neon-green pl-4 mb-4">
							<span
								class="text-neon-green font-bold uppercase block mb-2 text-xs tracking-wider font-mono"
							>
								Good for
							</span>
							<ul class="space-y-2">
								{#each entry.tool.goodFor as item}
									<li class="flex items-start gap-2 text-gray-300 font-mono text-sm">
										<span class="text-neon-green mt-0.5 shrink-0">›</span>
										<span>{item}</span>
									</li>
								{/each}
							</ul>
						</div>
					{/if}

					{#if entry.tool.notGoodFor && entry.tool.notGoodFor.length > 0}
						<div class="border-l-2 border-terminal-slate pl-4 mb-4">
							<span
								class="text-gray-500 font-bold uppercase block mb-2 text-xs tracking-wider font-mono"
							>
								Not good for
							</span>
							<ul class="space-y-2">
								{#each entry.tool.notGoodFor as item}
									<li class="flex items-start gap-2 text-gray-400 font-mono text-sm">
										<span class="text-gray-600 mt-0.5 shrink-0">–</span>
										<span>{item}</span>
									</li>
								{/each}
							</ul>
						</div>
					{/if}

					{#if entry.tool.eligibility}
						<div class="border-t border-terminal-slate pt-3 mb-3">
							<span class="text-gray-500 font-mono text-xs uppercase tracking-wider block mb-1.5">
								Eligibility
							</span>
							<p class="text-gray-300 font-mono text-xs leading-relaxed">
								{entry.tool.eligibility}
							</p>
						</div>
					{/if}

					{#if entry.tool.apiAccess}
						<div class="border-t border-terminal-slate pt-3 mb-3">
							<span class="text-gray-500 font-mono text-xs uppercase tracking-wider block mb-1.5">
								Data and API access
							</span>
							<p class="text-gray-300 font-mono text-xs leading-relaxed">
								{entry.tool.apiAccess}
							</p>
						</div>
					{/if}

					<div class="border-t border-terminal-slate pt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
						<a
							href="/tool/{entry.tool.slug}"
							class={entry.linkClass}
						>
							Full profile
						</a>
						<a
							href={entry.tool.url}
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-400 hover:text-white underline decoration-dotted underline-offset-2"
						>
							Official site
						</a>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Provenance -->
	<section class="mb-12">
		<h2 class="text-xl font-black font-sans tracking-tighter text-white uppercase mb-4 flex items-center">
			<span class="text-neon-green mr-3">▸</span>Where these records come from
		</h2>
		<div class="border border-terminal-slate bg-terminal-dark overflow-hidden">
			<table class="w-full text-sm font-mono">
				<thead>
					<tr class="border-b border-terminal-slate">
						<th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs">Tool</th>
						<th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs">
							Official site
						</th>
						<th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs w-36">
							Record verified
						</th>
					</tr>
				</thead>
				<tbody>
					{#each [a, b] as tool, i}
						<tr class="border-b border-terminal-slate/50 {i % 2 === 0 ? 'bg-terminal-black/30' : ''}">
							<td class="px-5 py-4 text-white text-xs">{tool.name}</td>
							<td class="px-5 py-4 text-xs">
								<a
									href={tool.url}
									target="_blank"
									rel="noopener noreferrer"
									class="text-neon-blue hover:text-white underline decoration-dotted underline-offset-2"
								>
									{tool.url}
								</a>
							</td>
							<td class="px-5 py-4 text-gray-400 text-xs">{tool.lastVerified ?? 'unknown'}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="text-gray-400 font-mono text-xs leading-relaxed mt-4">
			Each profile carries the full citation list for its own claims. This page only restates what
			those records already say, so a correction belongs on the profile and reaches this page on
			the next build.
		</p>
	</section>

	<!-- Next steps -->
	<section>
		<h2 class="text-xl font-black font-sans tracking-tighter text-white uppercase mb-4 flex items-center">
			<span class="text-neon-green mr-3">▸</span>Keep reading
		</h2>
		<ul class="space-y-3 font-mono text-sm">
			{#each relatedPairs as related}
				<li class="flex items-start gap-2">
					<span class="text-neon-green shrink-0">›</span>
					<a
						href="/compare/{related.slug}"
						class="text-neon-green hover:text-white underline decoration-dotted underline-offset-2"
					>
						{related.a.name} vs {related.b.name}
					</a>
					<span class="text-gray-500">— another comparison on this site</span>
				</li>
			{/each}
			<li class="flex items-start gap-2">
				<span class="text-neon-green shrink-0">›</span>
				<a
					href="/best/prediction-market-platforms"
					class="text-neon-green hover:text-white underline decoration-dotted underline-offset-2"
				>
					Best prediction market platforms
				</a>
				<span class="text-gray-500">— the dated edition, with a fee-comparable table</span>
			</li>
			<li class="flex items-start gap-2">
				<span class="text-neon-green shrink-0">›</span>
				<a
					href="/category/platforms"
					class="text-neon-green hover:text-white underline decoration-dotted underline-offset-2"
				>
					Every platform in the directory
				</a>
				<span class="text-gray-500">— {a.category} category</span>
			</li>
		</ul>
	</section>
</div>
