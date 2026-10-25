<script lang="ts">
  import tools from '$lib/data/tools.json';

  const polymarket = tools.find((t) => t.slug === 'polymarket')!;
  const kalshi = tools.find((t) => t.slug === 'kalshi')!;

  // Tools that support both Polymarket and Kalshi
  const crossPlatformTools = tools.filter(
    (t) =>
      t.supportedMarkets &&
      t.supportedMarkets.includes('Polymarket') &&
      t.supportedMarkets.includes('Kalshi')
  );

  // Date this page's facts were checked against their sources.
  const LAST_UPDATED = '2026-10-21';

  type Source = {
    id: string;
    short: string;
    label: string;
    url: string;
    date: string;
    note?: string;
  };

  // Every fact on this page traces to one of these. Dates are when we read them,
  // not when the page was published, unless the source states its own date.
  const sources: Source[] = [
    {
      id: 'pm-fees',
      short: 'Polymarket fees',
      label: 'Polymarket Documentation — Fees',
      url: 'https://docs.polymarket.com/trading/fees',
      date: '2026-10-21',
      note: 'Help-centre mirror of the same article is dated 2026-07-10.'
    },
    {
      id: 'pm-us-fees',
      short: 'Polymarket US fee schedule',
      label: 'Polymarket US Documentation — Fee Schedule',
      url: 'https://docs.polymarket.us/fees',
      date: '2026-10-21',
      note: 'Schedule effective exchange-wide from 13:00 ET on 2026-10-19.'
    },
    {
      id: 'kalshi-fee-pdf',
      short: 'Kalshi fee schedule',
      label: 'Kalshi — Fee Schedule (PDF)',
      url: 'https://kalshi.com/docs/kalshi-fee-schedule.pdf',
      date: '2026-10-21',
      note: 'Document states "Last updated and effective: July 7, 2026".'
    },
    {
      id: 'kalshi-fee-page',
      short: 'Kalshi fee page',
      label: 'Kalshi — Fee schedule',
      url: 'https://kalshi.com/fee-schedule',
      date: '2026-10-21',
      note: 'Listed "no upcoming fee changes scheduled" when checked.'
    },
    {
      id: 'pm-fee-page',
      short: 'Polymarket fee page',
      label: 'Polymarket — Fees (live category table)',
      url: 'https://polymarket.com/fees',
      date: '2026-10-21',
      note: 'Live active-event counts; also shows the US block.'
    },
    {
      id: 'pm-geo',
      short: 'Polymarket geoblocks',
      label: 'Polymarket Documentation — Geographic Restrictions',
      url: 'https://docs.polymarket.com/api-reference/geoblock',
      date: '2026-10-21',
      note: 'Machine-readable classification; the geoblock endpoint is the operational truth.'
    },
    {
      id: 'pm-geo-help',
      short: 'Polymarket geo Help Center',
      label: 'Polymarket Help Center — Geographic Restrictions',
      url: 'https://help.polymarket.com/en/articles/13364163-geographic-restrictions',
      date: '2026-10-21',
      note: 'Article itself dated 2026-08-14. Its classification differs from the API list for some countries.'
    },
    {
      id: 'pm-transparency',
      short: 'Polymarket on record',
      label: 'Polymarket — On Record (two platforms)',
      url: 'https://polymarket.com/transparency',
      date: '2026-10-21',
      note: 'States Polymarket US has been fully launched since May 2026.'
    },
    {
      id: 'pm-us-what',
      short: 'What is Polymarket US',
      label: 'Polymarket US Documentation — What is Polymarket US?',
      url: 'https://docs.polymarket.us/getting-started/what-is-polymarket-us',
      date: '2026-10-21'
    },
    {
      id: 'pm-us-signup',
      short: 'Polymarket US signup',
      label: 'Polymarket US Documentation — Create an Account',
      url: 'https://docs.polymarket.us/learn/get-started/signup',
      date: '2026-10-21'
    },
    {
      id: 'pm-clearing',
      short: 'Polymarket Clearing',
      label: 'Polymarket Clearing — QC Clearing LLC (DCO)',
      url: 'https://polymarketexchange.com/clearing',
      date: '2026-10-21'
    },
    {
      id: 'pm-resolution',
      short: 'Polymarket resolution',
      label: 'Polymarket Documentation — Resolution',
      url: 'https://docs.polymarket.com/concepts/resolution',
      date: '2026-10-21'
    },
    {
      id: 'pm-disputes',
      short: 'Polymarket disputes',
      label: 'Polymarket Help Center — How Are Markets Disputed?',
      url: 'https://help.polymarket.com/en/articles/13364551-how-are-markets-disputed',
      date: '2026-10-21',
      note: 'Article dated 2026-04-05.'
    },
    {
      id: 'pm-maker-rebates',
      short: 'Polymarket maker rebates',
      label: 'Polymarket Documentation — Maker Rebates Program',
      url: 'https://docs.polymarket.com/programs/maker-rebates',
      date: '2026-10-21'
    },
    {
      id: 'kalshi-intl',
      short: 'Kalshi international',
      label: 'Kalshi Help Center — Can I trade on Kalshi from outside the United States?',
      url: 'https://help.kalshi.com/en/articles/14026044-can-i-trade-on-kalshi-from-outside-the-united-states',
      date: '2026-10-21'
    },
    {
      id: 'kalshi-member-agreement',
      short: 'Kalshi Member Agreement',
      label: 'Kalshi — Member Agreement (restricted jurisdictions)',
      url: 'https://kalshi.com/docs/kalshi-member-agreement.pdf',
      date: '2026-10-21',
      note: 'The restricted list lives in Section VI and changes between versions; check the version date on the PDF.'
    },
    {
      id: 'kalshi-faq',
      short: 'Kalshi FAQ',
      label: 'Kalshi — FAQ (event contracts vs state gambling law)',
      url: 'https://kalshi.com/faq',
      date: '2026-10-21'
    },
    {
      id: 'kalshi-klear',
      short: 'Kalshi Klear',
      label: 'Kalshi Help Center — What is Kalshi Klear?',
      url: 'https://help.kalshi.com/en/articles/13823771-what-is-kalshi-klear',
      date: '2026-10-21'
    },
    {
      id: 'kalshi-settlement',
      short: 'Kalshi settlement FAQ',
      label: 'Kalshi Help Center — Market FAQs (settlement timing)',
      url: 'https://help.kalshi.com/markets/market-faqs',
      date: '2026-10-21'
    },
    {
      id: 'kalshi-api-settlement',
      short: 'Kalshi API settlement',
      label: 'Kalshi API Documentation — Market Settlement',
      url: 'https://docs.kalshi.com/getting_started/market_settlement',
      date: '2026-10-21'
    },
    {
      id: 'kalshi-lip',
      short: 'Kalshi liquidity programme',
      label: 'Kalshi Help Center — Liquidity Incentive Program',
      url: 'https://help.kalshi.com/en/articles/13823851-liquidity-incentive-program',
      date: '2026-10-21'
    },
    {
      id: 'coindesk-states',
      short: 'CoinDesk on state blocks',
      label: 'CoinDesk — "Kalshi off-limits in multiple states"',
      url: 'https://www.coindesk.com/news-analysis/2026/08/21/kalshi-off-limits-in-multiple-states-as-prediction-markets-cftc-team-up-for-battle',
      date: '2026-10-21',
      note: 'Article published 2026-08-22.'
    }
  ];

  const src = Object.fromEntries(sources.map((s) => [s.id, s])) as Record<string, Source>;

  type FeeRow = {
    venue: string;
    product: string;
    charge: string;
    formula: string;
    notes: string;
    sources: string[];
  };

  const feeRows: FeeRow[] = [
    {
      venue: 'Polymarket',
      product: 'International · polymarket.com',
      charge: 'Taker only',
      formula: 'shares × category rate × price × (1 − price), category rate 0.04–0.07',
      notes:
        'Makers pay nothing. Crypto 0.07, sports 0.05, politics / finance / tech / mentions 0.04, geopolitics 0. No Polymarket fee to deposit or withdraw USDC, though a bridge or on-ramp may charge its own.',
      sources: ['pm-fees']
    },
    {
      venue: 'Polymarket US',
      product: 'United States · polymarket.us',
      charge: 'Taker only',
      formula: 'contracts × 0.0695 × price × (1 − price), Table Tennis 0.10',
      notes:
        'Maker rebates from 0.0035 to 0.0104 of the same curve by tier; taker rebates of 3–30% paid weekly. Schedule effective 2026-10-19.',
      sources: ['pm-us-fees']
    },
    {
      venue: 'Kalshi',
      product: 'Event contracts · kalshi.com',
      charge: 'Taker, sometimes maker',
      formula: 'round up(multiplier × 0.07 × contracts × price × (1 − price))',
      notes:
        'That lands between $0.07 and $1.75 per 100 contracts. The default maker multiplier is 0; the fee schedule names the series that do charge maker fees, at 0.0175 on the same curve, and the ones with a multiplier of 0 (no fees at all). No settlement fee on simple yes/no contracts.',
      sources: ['kalshi-fee-pdf', 'kalshi-fee-page', 'kalshi-api-settlement']
    }
  ];

  // Worked example: 100 Yes contracts at 40c.
  const exampleRows = [
    {
      venue: 'Kalshi',
      math: 'round up(0.07 × 100 × 0.40 × 0.60) = $1.68',
      fee: '$1.68',
      share: '4.2% of the $40 at risk',
      net: '$58.32',
      sources: ['kalshi-fee-pdf']
    },
    {
      venue: 'Polymarket International — politics',
      math: '100 × 0.04 × 0.40 × 0.60 = $0.96',
      fee: '$0.96',
      share: '2.4% of the $40 at risk',
      net: '$59.04',
      sources: ['pm-fees']
    },
    {
      venue: 'Polymarket International — crypto',
      math: '100 × 0.07 × 0.40 × 0.60 = $1.68',
      fee: '$1.68',
      share: '4.2% of the $40 at risk',
      net: '$58.32',
      sources: ['pm-fees']
    },
    {
      venue: 'Polymarket US',
      math: '100 × 0.0695 × 0.40 × 0.60 = $1.67',
      fee: '$1.67',
      share: '4.2% of the $40 at risk',
      net: '$58.33',
      sources: ['pm-us-fees']
    }
  ];

  function copyLink() {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(
        'https://predictiontools.directory/compare/polymarket-vs-kalshi'
      );
    }
  }
</script>

<svelte:head>
  <title>Polymarket vs Kalshi (2026): Fees, Access and Settlement Compared | Prediction Tools</title>
  <meta
    name="description"
    content="A dated, sourced comparison of Polymarket and Kalshi: taker fees with the formulas, who can trade in which country, how contracts settle, and a plain recommendation. Facts checked 2026-10-21."
  />
  <link rel="canonical" href="https://predictiontools.directory/compare/polymarket-vs-kalshi" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Polymarket vs Kalshi: fees, access, settlement (checked 2026-10-21)" />
  <meta
    property="og:description"
    content="Fees with the formulas and sources, country access, settlement mechanics, and a one-line recommendation for US and non-US traders."
  />
  <meta property="og:url" content="https://predictiontools.directory/compare/polymarket-vs-kalshi" />
  <meta property="og:image" content="https://predictiontools.directory/og-image.png" />
  <meta property="og:site_name" content="predictiontools.directory" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@predictiontools" />
  <meta name="twitter:title" content="Polymarket vs Kalshi: fees, access, settlement" />
  <meta
    name="twitter:description"
    content="Taker fees, country access and settlement, each with a source and a date checked. Facts checked 2026-10-21."
  />
  <meta name="twitter:image" content="https://predictiontools.directory/og-image.png" />

  <!-- JSON-LD -->
  {@html `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Polymarket vs Kalshi: fees, access and settlement compared',
    url: 'https://predictiontools.directory/compare/polymarket-vs-kalshi',
    description:
      'A dated, sourced comparison of Polymarket and Kalshi: fees, country access, settlement mechanics and a plain recommendation.',
    dateModified: LAST_UPDATED,
    datePublished: '2026-03-01',
    author: {
      '@type': 'Organization',
      name: 'predictiontools.directory',
      url: 'https://predictiontools.directory'
    },
    about: [
      {
        '@type': 'SoftwareApplication',
        name: 'Polymarket',
        applicationCategory: 'Prediction Market',
        url: 'https://polymarket.com'
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Kalshi',
        applicationCategory: 'Prediction Market',
        url: 'https://kalshi.com'
      }
    ]
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
        <span class="text-white uppercase">POLYMARKET VS KALSHI</span>
      </li>
    </ol>
  </nav>

  <!-- Hero -->
  <header class="space-y-5 py-6 mb-8 border-b border-terminal-slate pb-8">
    <h1
      class="text-3xl sm:text-5xl font-black font-sans tracking-tighter text-white uppercase leading-tight"
    >
      <span class="text-neon-green">POLYMARKET</span>
      <span class="text-gray-600 mx-3 text-4xl">VS</span>
      <span class="text-neon-blue">KALSHI</span>
    </h1>
    <p class="text-lg text-gray-300 max-w-3xl font-mono leading-relaxed">
      Two different products wear the Polymarket name, and that is where most comparisons go wrong.
      This page prices all three fee schedules, checks who can actually trade where, and explains
      how each venue settles. Every number links to the source we read.
    </p>
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-gray-500">
      <span class="text-neon-green uppercase tracking-wider">Last updated {LAST_UPDATED}</span>
      <span class="text-terminal-slate">|</span>
      <span>Fees re-checked against both venues' own schedules</span>
      <span class="text-terminal-slate">|</span>
      <span>{sources.length} sources, listed at the bottom</span>
    </div>
  </header>

  <!-- Short answer -->
  <div class="border border-neon-green/40 bg-terminal-dark p-6 mb-10">
    <h2 class="text-sm font-mono text-gray-500 uppercase tracking-wider mb-3 flex items-center">
      <span class="text-neon-green mr-2">★</span> TL;DR — which one should you pick?
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
      <div class="border-l-2 border-neon-green pl-4">
        <span class="text-neon-green font-bold uppercase block mb-2 text-xs tracking-wider">
          Choose Polymarket if…
        </span>
        <ul class="space-y-2 text-gray-300">
          <li class="flex items-start gap-2">
            <span class="text-neon-green shrink-0">›</span>
            <span
              >You are outside the US in a country it still serves — and you accept that the list is
              long: the UK, France, Germany, Australia and Brazil are all restricted
              <a
                href={src['pm-geo'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-green underline decoration-dotted underline-offset-2"
                >(geoblock list, {src['pm-geo'].date})</a
              >.</span
            >
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-green shrink-0">›</span>
            <span
              >You want self-custody and crypto rails: an email address or a wallet is enough to open
              an account, USDC moves in and out with no platform deposit or withdrawal fee
              <a
                href={src['pm-fees'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-green underline decoration-dotted underline-offset-2"
                >(fees, {src['pm-fees'].date})</a
              >.</span
            >
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-green shrink-0">›</span>
            <span
              >You trade politics, finance or tech: its 0.04 taker rate is the cheapest of the
              three schedules — and geopolitics markets are fee-free.</span
            >
          </li>
        </ul>
      </div>
      <div class="border-l-2 border-neon-blue pl-4">
        <span class="text-neon-blue font-bold uppercase block mb-2 text-xs tracking-wider">
          Choose Kalshi if…
        </span>
        <ul class="space-y-2 text-gray-300">
          <li class="flex items-start gap-2">
            <span class="text-neon-blue shrink-0">›</span>
            <span
              >You want a regulated exchange in plain USD, with bank rails and no wallet to manage —
              KYC is required for everyone, everywhere
              <a
                href={src['kalshi-intl'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-blue underline decoration-dotted underline-offset-2"
                >(Kalshi, {src['kalshi-intl'].date})</a
              >.</span
            >
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-blue shrink-0">›</span>
            <span
              >You are in the US, or in one of the many countries its Member Agreement allows —
              the exceptions are listed there, not on the marketing pages.</span
            >
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-blue shrink-0">›</span>
            <span
              >You want one fee formula across most of the book, a $1.75-per-100-contracts cap on
              standard series, no settlement fee on simple yes/no, and interest on idle cash.</span
            >
          </li>
        </ul>
      </div>
    </div>
    <p class="font-mono text-xs text-gray-400 mt-5 pt-4 border-t border-terminal-slate leading-relaxed">
      In the US this is really Kalshi vs Polymarket US, and their fees are near-identical: $1.75 vs
      $1.74 per 100 contracts at 50¢. Pick on market selection and cash handling, not fees. Outside
      the US the choice is Kalshi vs Polymarket International, where fees can differ by 40% or more
      — but access decides for you before fees get a vote.
    </p>
  </div>

  <!-- Profile cards -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
    <div class="relative bg-terminal-dark border border-neon-green/40 p-6 group">
      <div class="flex items-center justify-between mb-3">
        <h2
          class="text-2xl font-black uppercase tracking-tight text-white font-sans group-hover:text-neon-green transition-colors"
        >
          {polymarket.name}
        </h2>
        <span class="px-2 py-1 text-xs font-mono uppercase bg-neon-green text-terminal-black rounded font-bold">
          Decentralized
        </span>
      </div>
      <p class="text-gray-400 text-sm font-mono mb-4 leading-relaxed">{polymarket.shortDescription}</p>
      <div class="flex flex-col sm:flex-row gap-3">
        <a
          href="{polymarket.url}?utm_source=predictiontools.directory"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-4 py-2 border border-neon-green text-neon-green hover:bg-neon-green hover:text-terminal-black transition-colors font-mono text-sm uppercase"
        >
          VISIT WEBSITE
        </a>
        <a
          href="/tool/polymarket"
          class="inline-flex items-center justify-center px-4 py-2 border border-terminal-slate text-gray-400 hover:border-white hover:text-white transition-colors font-mono text-sm uppercase"
        >
          FULL PROFILE
        </a>
      </div>
    </div>

    <div class="relative bg-terminal-dark border border-neon-blue/40 p-6 group">
      <div class="flex items-center justify-between mb-3">
        <h2
          class="text-2xl font-black uppercase tracking-tight text-white font-sans group-hover:text-neon-blue transition-colors"
        >
          {kalshi.name}
        </h2>
        <span class="px-2 py-1 text-xs font-mono uppercase bg-neon-blue text-white rounded font-bold">
          Regulated
        </span>
      </div>
      <p class="text-gray-400 text-sm font-mono mb-4 leading-relaxed">{kalshi.shortDescription}</p>
      <div class="flex flex-col sm:flex-row gap-3">
        <a
          href="{kalshi.url}?utm_source=predictiontools.directory"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-4 py-2 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white transition-colors font-mono text-sm uppercase"
        >
          VISIT WEBSITE
        </a>
        <a
          href="/tool/kalshi"
          class="inline-flex items-center justify-center px-4 py-2 border border-terminal-slate text-gray-400 hover:border-white hover:text-white transition-colors font-mono text-sm uppercase"
        >
          FULL PROFILE
        </a>
      </div>
    </div>
  </div>

  <!-- Fees -->
  <section class="mb-12" aria-labelledby="fees">
    <h2
      id="fees"
      class="text-2xl font-black text-white uppercase tracking-tight mb-3 flex items-center"
    >
      <span class="text-neon-green mr-2">$</span> Fees: three schedules, not two
    </h2>
    <p class="text-gray-300 font-mono text-sm leading-relaxed mb-6">
      Polymarket International and Polymarket US are separate venues with separate fee schedules,
      and Kalshi's schedule has per-series exceptions. Comparing "Polymarket" to Kalshi as if there
      were one Polymarket fee is the most common way this comparison goes wrong. All three use the
      same shape — a fee that scales with price uncertainty,
      <code class="text-neon-green">p × (1 − p)</code> — which is why they land so close together.
    </p>

    <div class="bg-terminal-dark border border-terminal-slate overflow-hidden mb-6">
      <div class="px-6 py-4 border-b border-terminal-slate bg-terminal-black/50 flex items-center justify-between">
        <h3 class="text-sm font-mono text-gray-500 uppercase tracking-wider">
          <span class="text-neon-green mr-2">⬌</span> Trading fees
        </h3>
        <button
          on:click={copyLink}
          class="text-xs font-mono text-gray-500 hover:text-neon-green transition-colors"
        >
          COPY LINK
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm font-mono">
          <thead>
            <tr class="border-b border-terminal-slate">
              <th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs w-52">Venue</th>
              <th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs w-32">Charged to</th>
              <th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs">Formula</th>
              <th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs w-24">Checked</th>
            </tr>
          </thead>
          <tbody>
            {#each feeRows as row, i}
              <tr class="border-b border-terminal-slate/50 {i % 2 === 0 ? 'bg-terminal-black/30' : ''} align-top">
                <td class="px-5 py-4">
                  <div class="text-white font-bold">{row.venue}</div>
                  <div class="text-gray-500 text-xs mt-1">{row.product}</div>
                </td>
                <td class="px-5 py-4 text-gray-300 text-xs">{row.charge}</td>
                <td class="px-5 py-4 text-gray-300 text-xs leading-relaxed">
                  <code class="text-neon-green/90">{row.formula}</code>
                  <p class="text-gray-400 mt-2">{row.notes}</p>
                  <div class="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                    {#each row.sources as id}
                      <a
                        href={src[id].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-neon-blue hover:text-white underline decoration-dotted underline-offset-2 text-xs"
                        >{src[id].short} ({src[id].date})</a
                      >
                    {/each}
                  </div>
                </td>
                <td class="px-5 py-4 text-gray-500 text-xs">{LAST_UPDATED}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
      <div class="border border-terminal-slate bg-terminal-black p-4">
        <div class="text-neon-green uppercase tracking-wider mb-2">Same trade, 100 contracts</div>
        <p class="text-gray-400 leading-relaxed">
          At 50¢: Kalshi $1.75, Polymarket US $1.74, Polymarket International $1.00 (politics) or
          $1.75 (crypto).
        </p>
      </div>
      <div class="border border-terminal-slate bg-terminal-black p-4">
        <div class="text-neon-green uppercase tracking-wider mb-2">Where the fee peaks</div>
        <p class="text-gray-400 leading-relaxed">
          At 50% probability, for all three. It falls toward both 0¢ and $1, so longshots and
          heavy favourites are cheap to trade everywhere.
        </p>
      </div>
      <div class="border border-terminal-slate bg-terminal-black p-4">
        <div class="text-neon-green uppercase tracking-wider mb-2">Who pays nothing</div>
        <p class="text-gray-400 leading-relaxed">
          Makers on Polymarket International, always. Makers on Kalshi, except on the series its fee
          schedule names. Nobody pays a settlement fee on a simple yes/no.
        </p>
      </div>
    </div>
  </section>

  <!-- Worked example -->
  <section class="mb-12" aria-labelledby="example">
    <h2
      id="example"
      class="text-2xl font-black text-white uppercase tracking-tight mb-3 flex items-center"
    >
      <span class="text-neon-green mr-2">=</span> Worked cost example
    </h2>
    <p class="text-gray-300 font-mono text-sm leading-relaxed mb-5">
      <span class="text-neon-green uppercase">Example, not a quote.</span> Buy 100 Yes contracts at
      40¢, so $40 at risk. If the market resolves Yes you receive $100. Here is what each schedule
      charges on the way in, using the formulas above and nothing else.
    </p>

    <div class="bg-terminal-dark border border-terminal-slate overflow-x-auto">
      <table class="w-full text-sm font-mono">
        <thead>
          <tr class="border-b border-terminal-slate">
            <th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs">Venue and market type</th>
            <th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs">The arithmetic</th>
            <th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs">Fee</th>
            <th class="text-left px-5 py-3 text-gray-500 uppercase tracking-wider text-xs">Net if right</th>
          </tr>
        </thead>
        <tbody>
          {#each exampleRows as row, i}
            <tr class="border-b border-terminal-slate/50 {i % 2 === 0 ? 'bg-terminal-black/30' : ''} align-top">
              <td class="px-5 py-4 text-gray-200 text-xs">{row.venue}</td>
              <td class="px-5 py-4 text-gray-400 text-xs">{row.math}</td>
              <td class="px-5 py-4">
                <div class="text-neon-green font-bold">{row.fee}</div>
                <div class="text-gray-500 text-xs mt-1">{row.share}</div>
              </td>
              <td class="px-5 py-4 text-white font-bold">{row.net}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <p class="text-gray-400 font-mono text-xs leading-relaxed mt-4">
      Two things fall out of that. First, the fee is symmetric in price: a 10¢ contract and a 90¢
      contract cost the same $0.63 per 100 on Kalshi, because 0.1 × 0.9 equals 0.9 × 0.1. Second,
      Kalshi and Polymarket US differ by one cent on this trade. If you are a US trader, fees are not
      your tiebreaker — market selection and how you move money are.
    </p>
  </section>

  <!-- Access -->
  <section class="mb-12" aria-labelledby="access">
    <h2
      id="access"
      class="text-2xl font-black text-white uppercase tracking-tight mb-3 flex items-center"
    >
      <span class="text-neon-green mr-2">⬡</span> Who can actually trade
    </h2>
    <p class="text-gray-300 font-mono text-sm leading-relaxed mb-6">
      This is the section that decides the question for most readers, and it is the one the
      marketing pages are least honest about. There are two Polymarket products: an international,
      non-custodial crypto venue at polymarket.com, and a CFTC-regulated, USD venue at
      polymarket.us. They do not share users, currency, or a fee schedule.
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <!-- In the US -->
      <div class="border border-terminal-slate bg-terminal-dark">
        <div class="px-5 py-3 border-b border-terminal-slate bg-terminal-black/50">
          <h3 class="font-mono text-xs uppercase tracking-widest text-neon-green">If you are in the United States</h3>
        </div>
        <div class="p-5 space-y-5 font-mono text-sm">
          <div>
            <div class="text-white font-bold uppercase text-xs tracking-wider mb-2">
              Polymarket US
            </div>
            <ul class="space-y-2 text-gray-300 text-xs leading-relaxed">
              <li>
                polymarket.com blocks US trading outright and points US visitors to polymarket.us
                <a
                  href={src['pm-fee-page'].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neon-blue hover:text-white underline decoration-dotted"
                  >({src['pm-fee-page'].short}, {src['pm-fee-page'].date})</a
                >.
              </li>
              <li>
                Operated by QCX LLC as a CFTC-designated contract market, live in full since May
                2026, trading in USD
                <a
                  href={src['pm-transparency'].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neon-blue hover:text-white underline decoration-dotted"
                  >({src['pm-transparency'].short}, {src['pm-transparency'].date})</a
                >
                <a
                  href={src['pm-us-what'].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neon-blue hover:text-white underline decoration-dotted"
                  >({src['pm-us-what'].short}, {src['pm-us-what'].date})</a
                >.
              </li>
              <li>
                KYC is not optional: legal name, address, date of birth, SSN, phone, and a
                government ID plus selfie check if the automated check wants more
                <a
                  href={src['pm-us-signup'].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neon-blue hover:text-white underline decoration-dotted"
                  >({src['pm-us-signup'].short}, {src['pm-us-signup'].date})</a
                >.
              </li>
            </ul>
          </div>
          <div class="border-t border-terminal-slate pt-4">
            <div class="text-white font-bold uppercase text-xs tracking-wider mb-2">Kalshi</div>
            <ul class="space-y-2 text-gray-300 text-xs leading-relaxed">
              <li>
                KalshiEX is a CFTC-designated contract market too, and takes US members in USD with
                full identity verification.
              </li>
              <li>
                Kalshi's position on state gambling law is federal preemption: it argues CFTC
                regulation governs these contracts even where sports betting is prohibited
                <a
                  href={src['kalshi-faq'].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neon-blue hover:text-white underline decoration-dotted"
                  >({src['kalshi-faq'].short}, {src['kalshi-faq'].date})</a
                >.
              </li>
              <li>
                That argument is being tested. Washington, Michigan and Nevada customers were
                blocked in August 2026 while it litigates
                <a
                  href={src['coindesk-states'].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neon-blue hover:text-white underline decoration-dotted"
                  >({src['coindesk-states'].short}, {src['coindesk-states'].date})</a
                >.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Outside the US -->
      <div class="border border-terminal-slate bg-terminal-dark">
        <div class="px-5 py-3 border-b border-terminal-slate bg-terminal-black/50">
          <h3 class="font-mono text-xs uppercase tracking-widest text-neon-blue">If you are outside the United States</h3>
        </div>
        <div class="p-5 space-y-5 font-mono text-sm">
          <div>
            <div class="text-white font-bold uppercase text-xs tracking-wider mb-2">
              Polymarket International
            </div>
            <ul class="space-y-2 text-gray-300 text-xs leading-relaxed">
              <li>
                Non-custodial: you hold your own keys, collateral sits in a smart contract, and
                signing up is an email address or a self-custody wallet
                <a
                  href={src['pm-transparency'].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neon-blue hover:text-white underline decoration-dotted"
                  >({src['pm-transparency'].short}, {src['pm-transparency'].date})</a
                >.
              </li>
              <li>
                But it is closed to a long list of countries: blocked completely in four
                OFAC-sanctioned countries and three Ukrainian regions, close-only on both the site
                and the API in roughly three dozen more —
                the UK, France, Germany, Australia and Brazil among them — and close-only on the
                site alone in Ireland, Japan, Malta (sports), the Netherlands and South Korea
                <a
                  href={src['pm-geo'].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neon-blue hover:text-white underline decoration-dotted"
                  >({src['pm-geo'].short}, {src['pm-geo'].date})</a
                >.
              </li>
              <li>
                The Help Center's own list, dated 2026-08-14, classifies 39 countries as fully
                blocked and disagrees with the API list on a few of them. Where they conflict, trust
                the geoblock endpoint, and never a VPN
                <a
                  href={src['pm-geo-help'].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neon-blue hover:text-white underline decoration-dotted"
                  >({src['pm-geo-help'].short})</a
                >.
              </li>
            </ul>
          </div>
          <div class="border-t border-terminal-slate pt-4">
            <div class="text-white font-bold uppercase text-xs tracking-wider mb-2">Kalshi</div>
            <ul class="space-y-2 text-gray-300 text-xs leading-relaxed">
              <li>
                Kalshi accepts members from many countries outside the US, but you trade on the US
                exchange under US rules
                <a
                  href={src['kalshi-intl'].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neon-blue hover:text-white underline decoration-dotted"
                  >({src['kalshi-intl'].short}, {src['kalshi-intl'].date})</a
                >.
              </li>
              <li>
                The exceptions are named in the Member Agreement, not on the marketing pages, and
                the list changes between versions — check the PDF's version date before you rely on
                it
                <a
                  href={src['kalshi-member-agreement'].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neon-blue hover:text-white underline decoration-dotted"
                  >({src['kalshi-member-agreement'].short}, {src['kalshi-member-agreement'].date})</a
                >.
              </li>
              <li>
                Funding from abroad is debit card (Visa or Mastercard), crypto, or a wire of $1,000
                or more; ACH, PayPal and Venmo are US-only
                <a
                  href={src['kalshi-intl'].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neon-blue hover:text-white underline decoration-dotted"
                  >({src['kalshi-intl'].short}, {src['kalshi-intl'].date})</a
                >.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <p class="text-gray-400 font-mono text-xs leading-relaxed">
      One asymmetry worth naming: Kalshi holds no local licences outside the US, so an international
      member is trading a US-regulated product without local investor protection. Polymarket
      International is a non-custodial protocol, so there is no broker to complain to when a market
      resolves in a way you disagree with — the dispute process described below is the only recourse.
      Neither is the safer choice in the abstract; they fail differently.
    </p>

    <p class="text-gray-400 font-mono text-xs leading-relaxed mt-4">
      The paperwork behind that — the CFTC designations, the state suits and the appeals — is set out
      with sources in
      <a
        href="/learn/prediction-markets"
        class="text-neon-green underline decoration-dotted underline-offset-2 hover:text-white transition-colors"
        >prediction market regulation explained</a
      >, and if you are choosing between more than these two venues, the
      <a
        href="/best/prediction-market-platforms"
        class="text-neon-blue underline decoration-dotted underline-offset-2 hover:text-white transition-colors"
        >wider platform comparison</a
      >
      prices Robinhood on the same trade.
    </p>
  </section>

  <!-- Settlement -->
  <section class="mb-12" aria-labelledby="settlement">
    <h2
      id="settlement"
      class="text-2xl font-black text-white uppercase tracking-tight mb-3 flex items-center"
    >
      <span class="text-neon-green mr-2">⊚</span> Settlement: who decides, and when you get paid
    </h2>
    <p class="text-gray-300 font-mono text-sm leading-relaxed mb-6">
      Both venues pay $1 for a winning contract and $0 for a loser. The difference is who is allowed
      to determine the outcome and how long that determination can be argued about.
    </p>

    <div class="space-y-4">
      <div class="border border-neon-blue/30 bg-terminal-dark p-5">
        <h3 class="font-mono text-xs uppercase tracking-widest text-neon-blue mb-3">
          Kalshi — an exchange decides, against a named source
        </h3>
        <ul class="space-y-2 text-gray-300 font-mono text-xs leading-relaxed">
          <li>
            Each market's rules name a settlement source — a league's official stats, a government
            release, a specific report — and Kalshi's markets team finalises against it. Most
            markets settle within a few hours of the outcome being known, often about three; waiting
            on an agency pushes it out
            <a
              href={src['kalshi-settlement'].url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-neon-blue hover:text-white underline decoration-dotted"
              >({src['kalshi-settlement'].short}, {src['kalshi-settlement'].date})</a
            >.
          </li>
          <li>
            Clearing runs through Kalshi Klear LLC, an affiliate and CFTC-regulated clearinghouse
            that replaced MIAXdx
            <a
              href={src['kalshi-klear'].url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-neon-blue hover:text-white underline decoration-dotted"
              >({src['kalshi-klear'].short}, {src['kalshi-klear'].date})</a
            >. Idle USD in the account earns 3.25% APY, variable and subject to eligibility rules,
            while it sits there.
          </li>
          <li>
            Simple yes/no settlement carries no fee; only sub-cent scalar settlement can
            <a
              href={src['kalshi-api-settlement'].url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-neon-blue hover:text-white underline decoration-dotted"
              >({src['kalshi-api-settlement'].short}, {src['kalshi-api-settlement'].date})</a
            >.
          </li>
        </ul>
      </div>

      <div class="border border-neon-green/30 bg-terminal-dark p-5">
        <h3 class="font-mono text-xs uppercase tracking-widest text-neon-green mb-3">
          Polymarket International — an oracle decides, and it can be argued with
        </h3>
        <ul class="space-y-2 text-gray-300 font-mono text-xs leading-relaxed">
          <li>
            Resolution goes through UMA's optimistic oracle. Anyone can propose an outcome by posting
            a bond, typically $750 pUSD; there is a two-hour challenge window; if nobody disputes,
            the market resolves in about two hours
            <a
              href={src['pm-resolution'].url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-neon-green hover:text-white underline decoration-dotted"
              >({src['pm-resolution'].short}, {src['pm-resolution'].date})</a
            >.
          </li>
          <li>
            One dispute starts a second proposal round. Two disputes escalate to a UMA token-holder
            vote, and the full path takes four to six days. That is the trade you make for
            permissionless resolution: slow, expensive, and hard to capture
            <a
              href={src['pm-disputes'].url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-neon-green hover:text-white underline decoration-dotted"
              >({src['pm-disputes'].short}, {src['pm-disputes'].date})</a
            >.
          </li>
          <li>
            Winning tokens redeem for $1 each on-chain. Polymarket is non-custodial and states that
            outcomes are immutable once finalised — there is no support desk that can reverse a
            resolution.
          </li>
        </ul>
      </div>

      <div class="border border-terminal-slate bg-terminal-dark p-5">
        <h3 class="font-mono text-xs uppercase tracking-widest text-gray-400 mb-3">
          Polymarket US — a clearinghouse decides, in dollars
        </h3>
        <ul class="space-y-2 text-gray-300 font-mono text-xs leading-relaxed">
          <li>
            Cleared by Polymarket Clearing (QC Clearing LLC), a CFTC-registered derivatives clearing
            organisation that clears only fully collateralised positions and runs no margin
            methodology
            <a
              href={src['pm-clearing'].url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-neon-blue hover:text-white underline decoration-dotted"
              >({src['pm-clearing'].short}, {src['pm-clearing'].date})</a
            >. Same $1 or $0 payout, but inside a regulated clearinghouse and a USD account.
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Breadth vs liquidity -->
  <section class="mb-12" aria-labelledby="depth">
    <h2
      id="depth"
      class="text-2xl font-black text-white uppercase tracking-tight mb-3 flex items-center"
    >
      <span class="text-neon-green mr-2">#</span> Market breadth vs liquidity
    </h2>
    <p class="text-gray-300 font-mono text-sm leading-relaxed mb-5">
      Market count is the number everyone quotes and the one that matters least. On 2026-10-21
      Polymarket's own fee page listed 13,287 active sports events, 4,199 crypto events and 3,988
      events with no platform fee
      <a
        href={src['pm-fee-page'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-green underline decoration-dotted underline-offset-2"
        >({src['pm-fee-page'].short}, {src['pm-fee-page'].date})</a
      >. Two reads of that same table hours apart gave 13,479 and then 13,287 sports events. The
      count moves because markets open and close all day, and none of that tells you whether the
      market you want has size at the price you see.
    </p>

    <div class="border border-terminal-slate bg-terminal-dark p-6 mb-5">
      <h3 class="font-mono text-xs uppercase tracking-widest text-neon-green mb-4">
        What to check instead, in order
      </h3>
      <ol class="space-y-3 text-gray-300 font-mono text-xs leading-relaxed list-decimal list-inside">
        <li>
          <span class="text-white">Spread and top-of-book size on the exact market.</span> A 1¢ spread
          with real size behind it is a deeper market than a 4¢ spread with $200 on the touch. This
          is the only liquidity number that affects your fill.
        </li>
        <li>
          <span class="text-white">Whether you will be maker or taker.</span> On Polymarket
          International, makers never pay and takers fund a rebate pool paid out daily in pUSD
          <a
            href={src['pm-maker-rebates'].url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-neon-green hover:text-white underline decoration-dotted"
            >({src['pm-maker-rebates'].short}, {src['pm-maker-rebates'].date})</a
          >. On Kalshi the default maker multiplier is 0, and the schedule names the series that do
          charge maker fees — check before you rest an order
          <a
            href={src['kalshi-fee-page'].url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-neon-green hover:text-white underline decoration-dotted"
            >({src['kalshi-fee-page'].short}, {src['kalshi-fee-page'].date})</a
          >.
        </li>
        <li>
          <span class="text-white">Whether the price survives your size.</span> Price impact is not
          captured by any market count, and it is where a "liquid" venue stops being liquid for the
          order you actually want to place.
        </li>
        <li>
          <span class="text-white">Which category you are actually trading.</span> Coverage differs
          by category and shifts month to month. Open both live lists — kalshi.com and
          polymarket.com — and search the category that matters to you rather than trusting a
          screenshot from a comparison article, including this one.
        </li>
      </ol>
    </div>

    <p class="text-gray-400 font-mono text-xs leading-relaxed">
      Both venues now pay for liquidity: Polymarket redistributes a share of taker fees to makers
      daily in pUSD, and Kalshi runs a Liquidity Incentive Program
      <a
        href={src['kalshi-lip'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue hover:text-white underline decoration-dotted"
        >({src['kalshi-lip'].short}, {src['kalshi-lip'].date})</a
      >. If you plan to provide liquidity rather than take it, read both programmes before choosing.
      That is where the real cost difference between these venues sits, and it is invisible in every
      side-by-side fee table.
    </p>
  </section>

  <!-- Verdict -->
  <section class="mb-12" aria-labelledby="verdict">
    <h2
      id="verdict"
      class="text-2xl font-black text-white uppercase tracking-tight mb-3 flex items-center"
    >
      <span class="text-neon-green mr-2">→</span> The decision, in one paragraph
    </h2>
    <div class="border-l-2 border-neon-green pl-5 space-y-4 font-mono text-sm text-gray-300 leading-relaxed">
      <p>
        <span class="text-white font-bold">In the US:</span> Kalshi and Polymarket US are the two
        legal doors, both CFTC-regulated, both in dollars, both requiring KYC. Fees differ by about
        one cent per 100 contracts. Choose on market selection, on whether you want interest on idle
        cash, and on which app you actually enjoy using — fees will not decide it.
      </p>
      <p>
        <span class="text-white font-bold">Outside the US:</span> check the geoblock list before
        anything else, because Polymarket is closed to a large part of Europe and the Anglosphere and
        Kalshi's restricted list is buried in its Member Agreement. If both are open to you, Kalshi
        gives you a regulated USD account and one fee formula; Polymarket International gives you
        self-custody, signup with an email address or a wallet, cheaper taker fees in politics and
        finance, and fee-free
        geopolitics markets.
      </p>
      <p class="text-gray-400">
        <span class="text-white font-bold">What would change this answer:</span> fees. Polymarket US
        replaced its fee schedule on 2026-10-19 and Kalshi last repriced on 2026-07-07, so any
        comparison older than a quarter is worth re-checking. Access changes faster still — state
        blocks and country blocks have both moved during 2026.
      </p>
    </div>
  </section>

  <!-- Cross-platform tools -->
  {#if crossPlatformTools.length > 0}
    <section class="space-y-6 mb-12" aria-labelledby="tools">
      <div class="border-b border-terminal-slate pb-4">
        <h2
          id="tools"
          class="text-xl font-black text-white uppercase tracking-tight flex items-center"
        >
          <span class="text-neon-green mr-2">#</span>
          Tools that work with both platforms
        </h2>
        <p class="text-gray-500 font-mono text-xs mt-2">
          If you cannot pick one, these {crossPlatformTools.length} tools read both.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each crossPlatformTools as tool}
          <a
            href="/tool/{tool.slug}"
            class="group relative bg-terminal-dark border border-terminal-slate p-5 hover:border-neon-green transition-all duration-300"
          >
            <h3
              class="text-base font-black uppercase tracking-tight text-white font-sans mb-1.5 group-hover:text-neon-green transition-colors"
            >
              {tool.name}
            </h3>
            <p class="text-gray-400 text-xs font-mono leading-relaxed line-clamp-2">
              {tool.shortDescription}
            </p>
          </a>
        {/each}
      </div>
    </section>
  {/if}

  <!-- Sources -->
  <section class="mb-10" aria-labelledby="sources">
    <h2
      id="sources"
      class="text-xl font-black text-white uppercase tracking-tight mb-2 flex items-center"
    >
      <span class="text-neon-green mr-2">↗</span> Sources
    </h2>
    <p class="text-gray-500 font-mono text-xs mb-4">
      Every figure above traces to one of these. The date is when we read it, and where the source
      publishes its own effective date we list that too. Fee schedules are read from the venue
      itself, never from a summary.
    </p>
    <ol class="space-y-3 font-mono text-xs">
      {#each sources as source, i}
        <li class="flex gap-3 border-b border-terminal-slate/40 pb-3">
          <span class="text-dim-gray shrink-0 w-6">{i + 1}.</span>
          <div class="min-w-0">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-neon-blue hover:text-white underline decoration-dotted underline-offset-2 break-words"
              >{source.label}</a
            >
            <span class="text-gray-500 ml-2 whitespace-nowrap">checked {source.date}</span>
            {#if source.note}
              <p class="text-gray-500 mt-1 leading-relaxed">{source.note}</p>
            {/if}
          </div>
        </li>
      {/each}
    </ol>
  </section>

  <!-- Bottom CTA -->
  <div class="text-center py-6 border-t border-terminal-slate">
    <p class="text-gray-500 font-mono text-xs mb-3">
      Spotted a fee change we missed, or a country that should be listed differently?
    </p>
    <a
      href="/submit"
      class="inline-flex items-center justify-center px-5 py-2.5 border border-neon-green text-neon-green hover:bg-neon-green hover:text-terminal-black transition-colors font-mono text-xs uppercase"
    >
      TELL US
    </a>
  </div>
</div>
