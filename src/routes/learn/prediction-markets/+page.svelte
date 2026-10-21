<script lang="ts">
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

  // Every claim on this page traces to one of these. `date` is when we read the
  // source; the note carries the source's own date where it has one.
  const sources: Source[] = [
    {
      id: 'cftc-kalshi-designation',
      short: 'CFTC designation, 2020',
      label: 'CFTC — CFTC Designates KalshiEX LLC as a Contract Market (Release 8302-20)',
      url: 'https://www.cftc.gov/PressRoom/PressReleases/8302-20',
      date: '2026-10-21',
      note: 'Release dated 2020-11-04.'
    },
    {
      id: 'cftc-polymarket-order',
      short: 'CFTC order, 2022',
      label: 'CFTC — Order against Blockratize, Inc. d/b/a Polymarket (Release 8478-22)',
      url: 'https://www.cftc.gov/PressRoom/PressReleases/8478-22',
      date: '2026-10-21',
      note: 'Release dated 2022-01-03; $1.4 million penalty.'
    },
    {
      id: 'cftc-qcx-order',
      short: 'QCX designation, 2025',
      label: 'CFTC — Order of Designation: QCX LLC (Polymarket US)',
      url: 'https://www.cftc.gov/filings/documents/2025/orgdcmqcexorderofd250709.pdf',
      date: '2026-10-21',
      note: 'Order dated 2025-07-09.'
    },
    {
      id: 'cftc-qcx-amended',
      short: 'QCX amended order, 2025',
      label: 'CFTC — Amended Order of Designation: QCX LLC d/b/a Polymarket US',
      url: 'https://www.cftc.gov/media/12806/Polymarket%20US%20Amended%20Order%20of%20Designation/download',
      date: '2026-10-21',
      note: 'Issued 2025-11-24; vacates the provision barring FCM intermediation.'
    },
    {
      id: 'cftc-states-az-ct-il',
      short: 'CFTC v. Arizona, Connecticut, Illinois',
      label:
        'CFTC — CFTC Sues Trio of States to Reaffirm its Exclusive Jurisdiction Over Prediction Markets (9206-26)',
      url: 'https://www.cftc.gov/PressRoom/PressReleases/9206-26',
      date: '2026-10-21',
      note: 'Release dated 2026-04-02.'
    },
    {
      id: 'cftc-ny-suit',
      short: 'CFTC v. New York',
      label: 'CFTC — CFTC Sues New York Over Prediction Markets (9218-26)',
      url: 'https://www.cftc.gov/PressRoom/PressReleases/9218-26',
      date: '2026-10-21',
      note: 'Release dated 2026-04-24.'
    },
    {
      id: 'cftc-wi-suit',
      short: 'CFTC v. Wisconsin',
      label: 'CFTC — CFTC Sues Wisconsin to Reaffirm its Exclusive Jurisdiction (9220-26)',
      url: 'https://www.cftc.gov/PressRoom/PressReleases/9220-26',
      date: '2026-10-21',
      note: 'Release dated 2026-04-28.'
    },
    {
      id: 'cftc-mn-suit',
      short: 'CFTC v. Minnesota',
      label: 'CFTC — CFTC Sues Minnesota to Block State Law (9233-26)',
      url: 'https://www.cftc.gov/PressRoom/PressReleases/9233-26',
      date: '2026-10-21',
      note: 'Release dated 2026-05-19.'
    },
    {
      id: 'cftc-ri-suit',
      short: 'CFTC v. Rhode Island',
      label: 'CFTC — CFTC Sues to Block State Enforcement in Rhode Island (9238-26)',
      url: 'https://www.cftc.gov/PressRoom/PressReleases/9238-26',
      date: '2026-10-21',
      note: 'Release dated 2026-05-28.'
    },
    {
      id: 'cftc-nm-suit',
      short: 'CFTC v. New Mexico',
      label: 'CFTC — CFTC Sues New Mexico (9251-26)',
      url: 'https://www.cftc.gov/PressRoom/PressReleases/9251-26',
      date: '2026-10-21',
      note: 'Release dated 2026-06-12.'
    },
    {
      id: 'cftc-emergency',
      short: 'CFTC emergency order, Aug 2026',
      label: 'CFTC — Emergency Order: Market Emergency Declaration (KalshiEX)',
      url: 'https://www.cftc.gov/media/14471/OGC_MarketEmergencyDeclarationOrder081126/download',
      date: '2026-10-21',
      note: 'Order dated 2026-08-11.'
    },
    {
      id: 'ca3-nj',
      short: 'Third Circuit, Apr 2026',
      label: 'KalshiEX LLC v. Flaherty, No. 25-1922 (3d Cir.)',
      url: 'https://www2.ca3.uscourts.gov/opinarch/251922p.pdf',
      date: '2026-10-21',
      note: 'Decided 2026-04-06; 2-1, CEA preemption found, Roth J. dissenting.'
    },
    {
      id: 'ca9-nv',
      short: 'Ninth Circuit, Aug 2026',
      label: 'KalshiEX LLC v. Assad, No. 25-7516 (9th Cir.)',
      url: 'https://cdn.ca9.uscourts.gov/datastore/opinions/2026/08/28/25-7516.pdf',
      date: '2026-10-21',
      note: 'Filed 2026-08-28; contracts held not to be swaps.'
    },
    {
      id: 'ca6-oh-tn',
      short: 'Sixth Circuit, Sept 2026',
      label: 'KalshiEX LLC v. Schuler, Nos. 26-3196/5235 (6th Cir.)',
      url: 'https://www.opn.ca6.uscourts.gov/opinions.pdf/26a0272p-06.pdf',
      date: '2026-10-21',
      note: 'Decided 2026-09-25; no swap status, no preemption.'
    },
    {
      id: 'scotus-docket',
      short: 'Supreme Court docket 26-299',
      label: 'Supreme Court — Flaherty v. KalshiEX, LLC, No. 26-299 (docket)',
      url: 'https://www.supremecourt.gov/docket/docketfiles/html/public/26-299.html',
      date: '2026-10-21',
      note: 'Petition filed 2026-09-02; response due 2026-11-09; no order as of this date.'
    },
    {
      id: 'scotus-amici',
      short: 'States\u2019 amicus brief, Oct 2026',
      label: 'Brief of Ohio and 38 other states and D.C., No. 26-299 (U.S.)',
      url: 'https://supremecourt.gov/DocketPDF/26/26-299/428759/20261007134816267_Kalshi%20Cert%20Amicus.pdf',
      date: '2026-10-21',
      note: 'Filed 2026-10-07; also lists the Crypto.com petition, No. 26-344.'
    },
    {
      id: 'nv-gcb',
      short: 'Nevada Gaming Control Board',
      label: 'Nevada GCB — Kalshi agrees to geofence Nevada',
      url: 'https://www.gaming.nv.gov/siteassets/content/about/press-release/nevada-gaming-control-board-shuts-down-kalshis-sports-prediction-market-business-in-nevada.pdf',
      date: '2026-10-21',
      note: 'Release 2026-07-24; injunction entered 2026-05-18; $120,000/day penalty.'
    },
    {
      id: 'wa-order',
      short: 'Washington order, Aug 2026',
      label: 'Washington State Standard — Kalshi ordered to sharply curtail operations in WA',
      url: 'https://washingtonstatestandard.com/2026/08/13/kalshi-ordered-to-sharply-curtail-operations-in-wa/',
      date: '2026-10-21',
      note: 'Published 2026-08-13.'
    },
    {
      id: 'coindesk-states',
      short: 'CoinDesk on state blocks',
      label: 'CoinDesk — Kalshi off-limits in multiple states',
      url: 'https://www.coindesk.com/news-analysis/2026/08/21/kalshi-off-limits-in-multiple-states-as-prediction-markets-cftc-team-up-for-battle',
      date: '2026-10-21',
      note: 'Published 2026-08-22; names Nevada, Washington and Michigan.'
    },
    {
      id: 'mass-ag',
      short: 'Massachusetts injunction',
      label:
        'Mass.gov — AG Campbell secures court order blocking Kalshi sports wagers in Massachusetts',
      url: 'https://www.mass.gov/news/ag-campbell-secures-court-order-that-will-block-kalshi-from-offering-unlawful-sports-wagers-in-massachusetts',
      date: '2026-10-21',
      note: 'Statement dated 2026-01-20.'
    },
    {
      id: 'reuters-ma',
      short: 'Reuters on Massachusetts SJC',
      label: 'Reuters — Massachusetts top court appears open to state ban on Kalshi sports betting',
      url: 'https://www.reuters.com/legal/government/massachusetts-top-court-appears-open-state-ban-kalshi-sports-betting-2026-05-04/',
      date: '2026-10-21',
      note: 'Published 2026-05-04; no ruling as of this date.'
    },
    {
      id: 'nyag-polymarket',
      short: 'New York v. Polymarket US',
      label: 'New York Attorney General — Lawsuit against Polymarket for running illegal gambling',
      url: 'https://ag.ny.gov/press-release/2026/attorney-general-james-and-governor-hochul-announce-lawsuit-against-polymarket',
      date: '2026-10-21',
      note: 'Filed 2026-09-24.'
    },
    {
      id: 'nyag-petition',
      short: 'NY verified petition',
      label: 'New York v. QCX LLC d/b/a Polymarket US — verified petition',
      url: 'https://ag.ny.gov/sites/default/files/court-filings/new-york-v-polymarket-us-petition-2026.pdf',
      date: '2026-10-21',
      note: 'Filed 2026-09-24; alleges the US app was open to 18-20 year-olds.'
    },
    {
      id: 'qc-v-james',
      short: 'Polymarket countersuit',
      label: 'QCX LLC d/b/a Polymarket US v. James — complaint, S.D.N.Y.',
      url: 'https://business.cch.com/srd/20260924_QCX-v-James_complaint092526.pdf',
      date: '2026-10-21',
      note: 'Filed 2026-09-24; preemption and swap-status theory.'
    },
    {
      id: 'pm-transparency',
      short: 'Polymarket on record',
      label: 'Polymarket — On Record (two platforms, same brand)',
      url: 'https://polymarket.com/transparency',
      date: '2026-10-21',
      note: 'Two platforms; international venue is non-custodial, US traders prohibited.'
    },
    {
      id: 'pmus-what',
      short: 'What is Polymarket US',
      label: 'Polymarket US Documentation — What is Polymarket US?',
      url: 'https://docs.polymarket.us/getting-started/what-is-polymarket-us',
      date: '2026-10-21'
    },
    {
      id: 'pmus-signup',
      short: 'Polymarket US signup',
      label: 'Polymarket US Documentation — Create an Account',
      url: 'https://docs.polymarket.us/learn/get-started/signup',
      date: '2026-10-21'
    },
    {
      id: 'pm-geo-docs',
      short: 'Polymarket geoblock docs',
      label: 'Polymarket Documentation — Geographic Restrictions (geoblock)',
      url: 'https://docs.polymarket.com/api-reference/geoblock',
      date: '2026-10-21',
      note: 'Machine-readable classification; three restriction tiers.'
    },
    {
      id: 'pm-geo-help',
      short: 'Polymarket geo Help Center',
      label: 'Polymarket Help Center — Geographic Restrictions',
      url: 'https://help.polymarket.com/en/articles/13364163-geographic-restrictions',
      date: '2026-10-21',
      note: 'Article dated 2026-08-14.'
    },
    {
      id: 'kalshi-intl',
      short: 'Kalshi international access',
      label: 'Kalshi Help Center — Can I trade on Kalshi from outside the United States?',
      url: 'https://help.kalshi.com/en/articles/14026044-can-i-trade-on-kalshi-from-outside-the-united-states',
      date: '2026-10-21'
    },
    {
      id: 'kalshi-member',
      short: 'Kalshi Member Agreement',
      label: 'Kalshi — Member Agreement (restricted jurisdictions)',
      url: 'https://kalshi.com/docs/kalshi-member-agreement.pdf',
      date: '2026-10-21',
      note: 'Country list lives in the agreement and changes between versions.'
    },
    {
      id: 'kalshi-faq',
      short: 'Kalshi FAQ',
      label: 'Kalshi — FAQ (18+ minimum, position on state gambling law)',
      url: 'https://kalshi.com/faq',
      date: '2026-10-21'
    },
    {
      id: 'fox5-nv',
      short: 'FOX5 on Nevada and Polymarket',
      label: 'FOX5 Las Vegas — Ninth Circuit ruling and Nevada enforcement',
      url: 'https://www.fox5vegas.com/2026/08/28/why-new-court-ruling-means-big-changes-online-sports-betting-apps-nevada/',
      date: '2026-10-21',
      note: 'Published 2026-08-28.'
    }
  ];

  const src = Object.fromEntries(sources.map((s) => [s.id, s])) as Record<string, Source>;

  const cases = [
    {
      court: 'Third Circuit',
      case: 'KalshiEX v. Flaherty (No. 25-1922)',
      decided: '2026-04-06',
      holding: 'Federal law preempts New Jersey gambling law, 2-1 — Kalshi wins.',
      source: 'ca3-nj'
    },
    {
      court: 'Ninth Circuit',
      case: 'KalshiEX v. Assad (No. 25-7516)',
      decided: '2026-08-28',
      holding: 'Sports event contracts are not "swaps", so Nevada law applies — states win.',
      source: 'ca9-nv'
    },
    {
      court: 'Sixth Circuit',
      case: 'KalshiEX v. Schuler (Nos. 26-3196/5235)',
      decided: '2026-09-25',
      holding: 'Not swaps, and no express or implied preemption — states win.',
      source: 'ca6-oh-tn'
    }
  ];
</script>

<svelte:head>
  <title>Is Kalshi Legal? Is Polymarket Legal? (2026) | Prediction Tools</title>
  <meta
    name="description"
    content="A dated, sourced answer to whether Kalshi and Polymarket are legal: the federal designations, the state court orders, the circuit split and the pending Supreme Court petitions. Facts checked 2026-10-21. Not legal advice."
  />
  <link rel="canonical" href="https://predictiontools.directory/learn/prediction-markets" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta
    property="og:title"
    content="Are Kalshi and Polymarket legal? A sourced answer (checked 2026-10-21)"
  />
  <meta
    property="og:description"
    content="Both run CFTC-regulated US exchanges. Both are in court against state regulators. Here is what is settled, what is not, and which documents say so."
  />
  <meta property="og:url" content="https://predictiontools.directory/learn/prediction-markets" />
  <meta property="og:image" content="https://predictiontools.directory/og-image.png" />
  <meta property="og:site_name" content="predictiontools.directory" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@predictiontools" />
  <meta name="twitter:title" content="Are Kalshi and Polymarket legal? A sourced answer" />
  <meta
    name="twitter:description"
    content="The federal answer, the state answer and the pending Supreme Court question, each with the court filing or regulator page we read. Checked 2026-10-21."
  />
  <meta name="twitter:image" content="https://predictiontools.directory/og-image.png" />

  <!-- JSON-LD -->
  {@html `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Are Kalshi and Polymarket legal? A sourced explainer',
    url: 'https://predictiontools.directory/learn/prediction-markets',
    description:
      'A dated, sourced answer on the legal status of Kalshi and Polymarket in the US: federal designations, state court orders, the circuit split and pending Supreme Court petitions.',
    dateModified: LAST_UPDATED,
    datePublished: LAST_UPDATED,
    author: {
      '@type': 'Organization',
      name: 'predictiontools.directory',
      url: 'https://predictiontools.directory'
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Prediction markets'
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Kalshi',
        applicationCategory: 'Prediction Market',
        url: 'https://kalshi.com'
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Polymarket',
        applicationCategory: 'Prediction Market',
        url: 'https://polymarket.com'
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
        <span class="text-gray-500 uppercase">LEARN</span>
      </li>
      <li class="flex items-center space-x-2">
        <span>/</span>
        <span class="text-white uppercase">PREDICTION MARKETS</span>
      </li>
    </ol>
  </nav>

  <!-- Hero -->
  <header class="space-y-5 py-6 mb-8 border-b border-terminal-slate pb-8">
    <h1
      class="text-3xl sm:text-5xl font-black font-sans tracking-tighter text-white uppercase leading-tight"
    >
      ARE <span class="text-neon-green">KALSHI</span> AND
      <span class="text-neon-blue">POLYMARKET</span> LEGAL?
    </h1>
    <p class="text-lg text-gray-300 max-w-3xl font-mono leading-relaxed">
      Both run federally regulated US exchanges. Both are being sued by state regulators over the
      same contracts. This page gives the federal answer, the state answer, and the answer nobody can
      give you yet — with the court filing or regulator page behind each one.
    </p>
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-gray-500">
      <span class="text-neon-green uppercase tracking-wider">Last updated {LAST_UPDATED}</span>
      <span class="text-terminal-slate">|</span>
      <span>{sources.length} sources, listed at the bottom</span>
      <span class="text-terminal-slate">|</span>
      <span class="text-neon-blue uppercase">Not legal advice</span>
    </div>
  </header>

  <!-- Short answers -->
  <div class="border border-neon-green/40 bg-terminal-dark p-6 mb-10">
    <h2 class="text-sm font-mono text-gray-500 uppercase tracking-wider mb-4 flex items-center">
      <span class="text-neon-green mr-2">★</span> The short answers
    </h2>
    <div class="space-y-5 font-mono text-sm">
      <div class="border-l-2 border-neon-green pl-4">
        <span class="text-neon-green font-bold uppercase block mb-2 text-xs tracking-wider"
          >Is Kalshi legal?</span
        >
        <p class="text-gray-300 leading-relaxed">
          Federally, yes: KalshiEX has been a CFTC-designated contract market since November 2020, so
          its event contracts trade as derivatives under federal rules rather than under state
          gambling licences
          <a
            href={src['cftc-kalshi-designation'].url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-neon-green underline decoration-dotted underline-offset-2"
            >({src['cftc-kalshi-designation'].short}, {src['cftc-kalshi-designation'].date})</a
          >. US members must be 18 or over and pass identity checks
          <a
            href={src['kalshi-faq'].url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-neon-green underline decoration-dotted underline-offset-2"
            >({src['kalshi-faq'].short})</a
          >. The complication is state courts: customers in Nevada, Washington and Michigan are
          currently cut off from its sports and event contracts while those cases run
          <a
            href={src['coindesk-states'].url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-neon-green underline decoration-dotted underline-offset-2"
            >({src['coindesk-states'].short}, checked {src['coindesk-states'].date})</a
          >.
        </p>
      </div>
      <div class="border-l-2 border-neon-blue pl-4">
        <span class="text-neon-blue font-bold uppercase block mb-2 text-xs tracking-wider"
          >Is Polymarket legal?</span
        >
        <p class="text-gray-300 leading-relaxed">
          It depends which Polymarket. polymarket.com is the international, non-custodial crypto
          venue: US users are prohibited and the United States sits on its own close-only list
          <a
            href={src['pm-transparency'].url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-neon-blue underline decoration-dotted underline-offset-2"
            >({src['pm-transparency'].short})</a
          >
          <a
            href={src['pm-geo-docs'].url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-neon-blue underline decoration-dotted underline-offset-2"
            >({src['pm-geo-docs'].short}, {src['pm-geo-docs'].date})</a
          >, and its operator paid a $1.4 million CFTC penalty in 2022 for running an unregistered
          facility for event-based binary options
          <a
            href={src['cftc-polymarket-order'].url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-neon-blue underline decoration-dotted underline-offset-2"
            >({src['cftc-polymarket-order'].short})</a
          >. polymarket.us — QCX LLC — is a separate CFTC-designated exchange, designated in July
          2025
          <a
            href={src['cftc-qcx-order'].url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-neon-blue underline decoration-dotted underline-offset-2"
            >({src['cftc-qcx-order'].short})</a
          >. New York sued it for unlicensed gambling on 24 September 2026; the case is pending
          <a
            href={src['nyag-polymarket'].url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-neon-blue underline decoration-dotted underline-offset-2"
            >({src['nyag-polymarket'].short})</a
          >.
        </p>
      </div>
      <div class="border-l-2 border-gray-600 pl-4">
        <span class="text-white font-bold uppercase block mb-2 text-xs tracking-wider"
          >Is that the final answer?</span
        >
        <p class="text-gray-400 leading-relaxed">
          No. Three federal appeals courts have split on whether federal law displaces state gambling
          law for sports event contracts, and petitions asking the Supreme Court to settle it were
          pending when we checked
          <a
            href={src['scotus-docket'].url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-300 underline decoration-dotted underline-offset-2"
            >({src['scotus-docket'].short}, {src['scotus-docket'].date})</a
          >. What you can rely on is narrower: each venue's own geofence and rulebook decide whether
          you can trade, and those change without much notice.
        </p>
      </div>
    </div>
  </div>

  <!-- On this page -->
  <nav class="mb-10 font-mono text-xs text-gray-500" aria-label="On this page">
    <span class="uppercase tracking-wider text-gray-600 mr-3">On this page:</span>
    <a href="#kalshi" class="text-neon-green hover:text-white">Kalshi</a>
    <span class="mx-2 text-terminal-slate">/</span>
    <a href="#polymarket" class="text-neon-blue hover:text-white">Polymarket</a>
    <span class="mx-2 text-terminal-slate">/</span>
    <a href="#split" class="text-gray-300 hover:text-white">The federal-state split</a>
    <span class="mx-2 text-terminal-slate">/</span>
    <a href="#what-is" class="text-gray-300 hover:text-white">What a prediction market is</a>
    <span class="mx-2 text-terminal-slate">/</span>
    <a href="#sources" class="text-gray-300 hover:text-white">Sources</a>
  </nav>

  <!-- Kalshi -->
  <section class="mb-12" aria-labelledby="kalshi">
    <h2
      id="kalshi"
      class="text-2xl font-black text-white uppercase tracking-tight mb-4 flex items-center"
    >
      <span class="text-neon-green mr-2">⬡</span> Is Kalshi legal?
    </h2>

    <p class="text-gray-300 font-mono text-sm leading-relaxed mb-6">
      Kalshi's legal basis is a federal designation, not a state licence. That single fact explains
      both why it can offer election and economic contracts nationwide and why state gaming
      regulators keep suing it.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="border border-terminal-slate bg-terminal-dark p-5 font-mono text-sm space-y-3">
        <h3 class="text-xs uppercase tracking-widest text-neon-green">The federal status</h3>
        <ul class="space-y-2 text-gray-300 text-xs leading-relaxed">
          <li class="flex items-start gap-2">
            <span class="text-neon-green shrink-0">›</span>
            <span
              >KalshiEX LLC received an Order of Designation as a designated contract market from the
              CFTC in November 2020
              <a
                href={src['cftc-kalshi-designation'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-green underline decoration-dotted underline-offset-2"
                >({src['cftc-kalshi-designation'].short}, {src['cftc-kalshi-designation'].date})</a
              >.</span
            >
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-green shrink-0">›</span>
            <span
              >A designated contract market is a federally supervised derivatives exchange. Its
              contracts are cleared and traded under the Commodity Exchange Act, not under a state
              sports-betting statute.</span
            >
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-green shrink-0">›</span>
            <span
              >US membership requires identity verification, and Kalshi sets its minimum age at 18+,
              which its own FAQ contrasts with the 21+ used by licensed sportsbooks
              <a
                href={src['kalshi-faq'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-green underline decoration-dotted underline-offset-2"
                >({src['kalshi-faq'].short})</a
              >.</span
            >
          </li>
        </ul>
      </div>

      <div class="border border-terminal-slate bg-terminal-dark p-5 font-mono text-sm space-y-3">
        <h3 class="text-xs uppercase tracking-widest text-neon-blue">The state complication</h3>
        <ul class="space-y-2 text-gray-300 text-xs leading-relaxed">
          <li class="flex items-start gap-2">
            <span class="text-neon-blue shrink-0">›</span>
            <span
              >Kalshi argues that federal regulation governs these contracts even where sports
              betting is prohibited, and states disagree
              <a
                href={src['kalshi-faq'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-blue underline decoration-dotted underline-offset-2"
                >({src['kalshi-faq'].short})</a
              >.</span
            >
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-blue shrink-0">›</span>
            <span
              >Nevada: a preliminary injunction was entered on 18 May 2026, and a July agreement
              committed Kalshi to geofencing the state, with a $120,000-per-day penalty for missing
              the deadline
              <a
                href={src['nv-gcb'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-blue underline decoration-dotted underline-offset-2"
                >({src['nv-gcb'].short}, {src['nv-gcb'].date})</a
              >.</span
            >
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-blue shrink-0">›</span>
            <span
              >Washington: a King County judge ordered a sharp cutback in August 2026
              <a
                href={src['wa-order'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-blue underline decoration-dotted underline-offset-2"
                >({src['wa-order'].short}, {src['wa-order'].date})</a
              >. Michigan is the third state where customers are currently blocked
              <a
                href={src['coindesk-states'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-blue underline decoration-dotted underline-offset-2"
                >({src['coindesk-states'].short})</a
              >.</span
            >
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-blue shrink-0">›</span>
            <span
              >Massachusetts: the attorney general secured a preliminary injunction in January 2026
              <a
                href={src['mass-ag'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-blue underline decoration-dotted underline-offset-2"
                >({src['mass-ag'].short}, {src['mass-ag'].date})</a
              >; it is on hold while Kalshi appeals, and the state's highest court heard argument in May
              2026 without a ruling so far
              <a
                href={src['reuters-ma'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-blue underline decoration-dotted underline-offset-2"
                >({src['reuters-ma'].short})</a
              >.</span
            >
          </li>
        </ul>
      </div>
    </div>

    <p class="text-gray-300 font-mono text-sm leading-relaxed mb-3">
      Outside the United States, Kalshi does accept members from many countries — but eligibility is
      governed by its Member Agreement, which is where the country restrictions actually live, and
      that document changes between versions
      <a
        href={src['kalshi-intl'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['kalshi-intl'].short}, {src['kalshi-intl'].date})</a
      >
      <a
        href={src['kalshi-member'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['kalshi-member'].short})</a
      >. Two practical differences: from abroad you fund by debit card, crypto or a wire of $1,000 or
      more, because ACH, PayPal and Venmo are US-only; and whatever country you sign in from, you are
      using the US exchange's rulebook
      <a
        href={src['kalshi-intl'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['kalshi-intl'].short})</a
      >.
    </p>
    <p class="text-gray-400 font-mono text-xs leading-relaxed">
      What we will not do: publish a definitive state-by-state list. Kalshi's own geofence is the
      operational truth, and it has changed more than once this year. Check the venue, then
      check your state regulator.
    </p>
  </section>

  <!-- Polymarket -->
  <section class="mb-12" aria-labelledby="polymarket">
    <h2
      id="polymarket"
      class="text-2xl font-black text-white uppercase tracking-tight mb-4 flex items-center"
    >
      <span class="text-neon-blue mr-2">⬡</span> Is Polymarket legal?
    </h2>

    <p class="text-gray-300 font-mono text-sm leading-relaxed mb-6">
      Two different products wear the Polymarket name, and the legal answer is different for each.
      They do not share users, currency or a rulebook.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="border border-terminal-slate bg-terminal-dark">
        <div class="px-5 py-3 border-b border-terminal-slate bg-terminal-black/50">
          <h3 class="font-mono text-xs uppercase tracking-widest text-neon-blue">
            polymarket.com — international
          </h3>
        </div>
        <ul class="p-5 space-y-2 font-mono text-xs text-gray-300 leading-relaxed">
          <li class="flex items-start gap-2">
            <span class="text-neon-blue shrink-0">›</span>
            <span
              >Non-custodial and crypto-based: you hold your own keys and collateral sits in a smart
              contract
              <a
                href={src['pm-transparency'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-blue underline decoration-dotted underline-offset-2"
                >({src['pm-transparency'].short})</a
              >.</span
            >
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-blue shrink-0">›</span>
            <span
              >US traders are prohibited, and the United States is on Polymarket's own close-only
              list
              <a
                href={src['pm-geo-docs'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-blue underline decoration-dotted underline-offset-2"
                >({src['pm-geo-docs'].short}, {src['pm-geo-docs'].date})</a
              >.</span
            >
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-blue shrink-0">›</span>
            <span
              >In 2022 the CFTC ordered Blockratize, Inc. (d/b/a Polymarket) to pay a $1.4 million
              penalty, wind down non-compliant markets on polymarket.com and cease violating the
              Commodity Exchange Act
              <a
                href={src['cftc-polymarket-order'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-blue underline decoration-dotted underline-offset-2"
                >({src['cftc-polymarket-order'].short})</a
              >.</span
            >
          </li>
        </ul>
      </div>

      <div class="border border-terminal-slate bg-terminal-dark">
        <div class="px-5 py-3 border-b border-terminal-slate bg-terminal-black/50">
          <h3 class="font-mono text-xs uppercase tracking-widest text-neon-green">
            polymarket.us — United States
          </h3>
        </div>
        <ul class="p-5 space-y-2 font-mono text-xs text-gray-300 leading-relaxed">
          <li class="flex items-start gap-2">
            <span class="text-neon-green shrink-0">›</span>
            <span
              >Operated by QCX LLC as a designated contract market and derivatives clearing
              organisation, trading in US dollars
              <a
                href={src['pmus-what'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-green underline decoration-dotted underline-offset-2"
                >({src['pmus-what'].short})</a
              >.</span
            >
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-green shrink-0">›</span>
            <span
              >Designated on 9 July 2025
              <a
                href={src['cftc-qcx-order'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-green underline decoration-dotted underline-offset-2"
                >({src['cftc-qcx-order'].short})</a
              >; a 24 November 2025 amended order removed the provision that had barred futures
              commission merchants from carrying customer accounts
              <a
                href={src['cftc-qcx-amended'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-green underline decoration-dotted underline-offset-2"
                >({src['cftc-qcx-amended'].short})</a
              >.</span
            >
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-green shrink-0">›</span>
            <span
              >KYC is mandatory: legal name, address, date of birth, Social Security number and
              phone, plus a government ID and selfie if the automated check needs more
              <a
                href={src['pmus-signup'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-green underline decoration-dotted underline-offset-2"
                >({src['pmus-signup'].short})</a
              >.</span
            >
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-green shrink-0">›</span>
            <span
              >The two products are separate: the international venue is crypto-based, while
              Polymarket US is fiat-based and trades in US dollars
              <a
                href={src['pmus-what'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-green underline decoration-dotted underline-offset-2"
                >({src['pmus-what'].short})</a
              >, and New York's filing says the US platform opened to the public in December 2025
              <a
                href={src['nyag-polymarket'].url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neon-green underline decoration-dotted underline-offset-2"
                >({src['nyag-polymarket'].short})</a
              >.</span
            >
          </li>
        </ul>
      </div>
    </div>

    <h3 class="text-sm font-mono uppercase tracking-wider text-gray-400 mb-3">
      Where the international product is restricted
    </h3>
    <p class="text-gray-300 font-mono text-sm leading-relaxed mb-4">
      Polymarket documents three tiers, and the distinction matters: "block completely" means no new
      orders and no closing existing positions, while "close-only" means you can exit but not open
      <a
        href={src['pm-geo-docs'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['pm-geo-docs'].short}, {src['pm-geo-docs'].date})</a
      >.
    </p>
    <div class="overflow-x-auto mb-4">
      <table class="w-full font-mono text-xs border border-terminal-slate">
        <thead>
          <tr class="bg-terminal-black/60 text-gray-400 uppercase tracking-wider">
            <th class="text-left px-4 py-3 border-b border-terminal-slate">Tier</th>
            <th class="text-left px-4 py-3 border-b border-terminal-slate">Where</th>
            <th class="text-left px-4 py-3 border-b border-terminal-slate">Examples</th>
          </tr>
        </thead>
        <tbody class="text-gray-300">
          <tr class="border-b border-terminal-slate/60">
            <td class="px-4 py-3 align-top text-white">Block completely</td>
            <td class="px-4 py-3 align-top">Site and API</td>
            <td class="px-4 py-3 align-top">
              Iran, Syria, Cuba, North Korea, plus Crimea, Donetsk and Luhansk
            </td>
          </tr>
          <tr class="border-b border-terminal-slate/60">
            <td class="px-4 py-3 align-top text-white">Close-only</td>
            <td class="px-4 py-3 align-top">Site and API</td>
            <td class="px-4 py-3 align-top">
              United States, United Kingdom, France, Germany, Australia, Brazil, Italy, Poland,
              Russia and others
            </td>
          </tr>
          <tr>
            <td class="px-4 py-3 align-top text-white">Close-only</td>
            <td class="px-4 py-3 align-top">Site only</td>
            <td class="px-4 py-3 align-top">Ireland, Japan, Malta (sports), Netherlands, South Korea</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-gray-400 font-mono text-xs leading-relaxed mb-8">
      Polymarket also publishes a country table in its Help Center, and the two lists are not
      identical — where they differ, the geoblock endpoint is the operational check
      <a
        href={src['pm-geo-help'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['pm-geo-help'].short})</a
      >.
    </p>

    <h3 class="text-sm font-mono uppercase tracking-wider text-gray-400 mb-3">
      The New York lawsuit against Polymarket US
    </h3>
    <p class="text-gray-300 font-mono text-sm leading-relaxed mb-3">
      On 24 September 2026 the New York Attorney General and the Governor announced a lawsuit against
      QCX LLC d/b/a Polymarket US, alleging an unlicensed gambling operation and seeking an
      injunction, disgorgement, restitution and penalties
      <a
        href={src['nyag-polymarket'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['nyag-polymarket'].short})</a
      >. The verified petition alleges that the US app was open to 18 to 20 year-olds in a state
      where mobile sports betting requires 21
      <a
        href={src['nyag-petition'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['nyag-petition'].short})</a
      >. Polymarket sued the state in federal court the same day, arguing that its contracts are
      swaps under the CFTC's exclusive jurisdiction
      <a
        href={src['qc-v-james'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['qc-v-james'].short})</a
      >. Nothing has been decided.
    </p>
    <p class="text-gray-400 font-mono text-xs leading-relaxed">
      Note that these are allegations in a filing, not findings. Nevada is the state where Polymarket
      US availability has visibly changed: the state ordered the platforms to stop operating there
      <a
        href={src['fox5-nv'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['fox5-nv'].short}, {src['fox5-nv'].date})</a
      >.
    </p>
  </section>

  <!-- The split -->
  <section class="mb-12" aria-labelledby="split">
    <h2
      id="split"
      class="text-2xl font-black text-white uppercase tracking-tight mb-4 flex items-center"
    >
      <span class="text-neon-green mr-2">⊚</span> Why there is no single answer yet
    </h2>

    <p class="text-gray-300 font-mono text-sm leading-relaxed mb-6">
      The argument is not about whether these platforms are legal in some abstract sense. It is about
      whether a contract traded on a federally designated exchange can be regulated as gambling by
      the state where the customer is sitting. The CFTC and three appeals courts have now
      answered that differently.
    </p>

    <h3 class="text-sm font-mono uppercase tracking-wider text-gray-400 mb-3">
      The regulator's position
    </h3>
    <p class="text-gray-300 font-mono text-sm leading-relaxed mb-6">
      The CFTC says it has exclusive jurisdiction over event contracts traded on designated contract
      markets, and it has sued the states that moved against exchanges: Arizona, Connecticut and
      Illinois on 2 April 2026
      <a
        href={src['cftc-states-az-ct-il'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['cftc-states-az-ct-il'].short})</a
      >, New York on 24 April
      <a
        href={src['cftc-ny-suit'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['cftc-ny-suit'].short})</a
      >, Wisconsin on 28 April
      <a
        href={src['cftc-wi-suit'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['cftc-wi-suit'].short})</a
      >, Minnesota on 19 May
      <a
        href={src['cftc-mn-suit'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['cftc-mn-suit'].short})</a
      >, Rhode Island on 28 May
      <a
        href={src['cftc-ri-suit'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['cftc-ri-suit'].short})</a
      >
      and New Mexico on 12 June
      <a
        href={src['cftc-nm-suit'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['cftc-nm-suit'].short})</a
      >. On 11 August 2026 it went further and issued an emergency order directing KalshiEX to keep
      operating in accordance with its normal practices, after New York sought a restraining order
      <a
        href={src['cftc-emergency'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['cftc-emergency'].short}, {src['cftc-emergency'].date})</a
      >.
    </p>

    <h3 class="text-sm font-mono uppercase tracking-wider text-gray-400 mb-3">
      The appeals courts, so far
    </h3>
    <div class="overflow-x-auto mb-4">
      <table class="w-full font-mono text-xs border border-terminal-slate">
        <thead>
          <tr class="bg-terminal-black/60 text-gray-400 uppercase tracking-wider">
            <th class="text-left px-4 py-3 border-b border-terminal-slate">Court</th>
            <th class="text-left px-4 py-3 border-b border-terminal-slate">Case</th>
            <th class="text-left px-4 py-3 border-b border-terminal-slate">Decided</th>
            <th class="text-left px-4 py-3 border-b border-terminal-slate">Holding</th>
          </tr>
        </thead>
        <tbody class="text-gray-300">
          {#each cases as c}
            <tr class="border-b border-terminal-slate/60 last:border-0">
              <td class="px-4 py-3 align-top text-white whitespace-nowrap">{c.court}</td>
              <td class="px-4 py-3 align-top">{c.case}</td>
              <td class="px-4 py-3 align-top whitespace-nowrap">{c.decided}</td>
              <td class="px-4 py-3 align-top">
                {c.holding}
                <a
                  href={src[c.source].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neon-blue underline decoration-dotted underline-offset-2"
                  >({src[c.source].short})</a
                >
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <p class="text-gray-400 font-mono text-xs leading-relaxed mb-6">
      Read together, the Ninth and Sixth Circuit opinions turn on whether an event contract fits the
      statutory definition of a swap — not on whether the topic is sport, politics or the weather.
      The Ninth Circuit also sent the election-contract question back to the district court
      <a
        href={src['ca9-nv'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['ca9-nv'].short})</a
      >.
    </p>

    <h3 class="text-sm font-mono uppercase tracking-wider text-gray-400 mb-3">
      What the Supreme Court has been asked to do
    </h3>
    <p class="text-gray-300 font-mono text-sm leading-relaxed mb-3">
      New Jersey petitioned for certiorari in Flaherty v. KalshiEX, LLC, No. 26-299 on 2 September
      2026; the petition was docketed on 8 September and the response deadline was extended to 9
      November 2026. There was no order on it when this page was checked
      <a
        href={src['scotus-docket'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['scotus-docket'].short}, {src['scotus-docket'].date})</a
      >. Ohio, 38 other states and the District of Columbia filed an amicus brief urging review on 7
      October 2026, and a second petition from Crypto.com (No. 26-344) is also pending
      <a
        href={src['scotus-amici'].url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-neon-blue underline decoration-dotted underline-offset-2"
        >({src['scotus-amici'].short})</a
      >.
    </p>
    <p class="text-gray-300 font-mono text-sm leading-relaxed mb-3">
      Until that is resolved, "is it legal?" has three answers at once: yes under the federal
      derivative regime, sometimes no under a state court order, and unresolved as a matter of
      appellate law. The practical test for a reader is not philosophical — it is whether the venue
      will let you open an account and place an order from where you are.
    </p>
  </section>

  <!-- What is a prediction market -->
  <section class="mb-12" aria-labelledby="what-is">
    <h2
      id="what-is"
      class="text-2xl font-black text-white uppercase tracking-tight mb-4 flex items-center"
    >
      <span class="text-neon-blue mr-2">◇</span> What is a prediction market?
    </h2>

    <p class="text-gray-300 font-mono text-sm leading-relaxed mb-6">
      A prediction market is an exchange where the thing being bought and sold is a yes/no contract on
      a future event. The CFTC and the courts call these event contracts; the industry calls the venue
      a prediction market. The contract is the product, and its price is the market's estimate of how
      likely the event is.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 font-mono text-sm">
      <div class="border border-terminal-slate bg-terminal-dark p-5">
        <div class="text-xs uppercase tracking-widest text-neon-green mb-2">1. Price is probability</div>
        <p class="text-gray-300 text-xs leading-relaxed">
          A contract priced at 62 cents is a market saying roughly a 62% chance the event happens
          <a
            href={src['pmus-what'].url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-neon-blue underline decoration-dotted underline-offset-2"
            >({src['pmus-what'].short})</a
          >. Nobody sets that number: it comes from orders other traders are willing to fill.
        </p>
      </div>
      <div class="border border-terminal-slate bg-terminal-dark p-5">
        <div class="text-xs uppercase tracking-widest text-neon-green mb-2">2. Settlement is binary</div>
        <p class="text-gray-300 text-xs leading-relaxed">
          A contract settles at $1 if the outcome happens and $0 if it does not
          <a
            href={src['pmus-what'].url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-neon-blue underline decoration-dotted underline-offset-2"
            >({src['pmus-what'].short})</a
          >. Buy at 55 cents and a win returns 45 cents per contract; a loss returns nothing.
        </p>
      </div>
      <div class="border border-terminal-slate bg-terminal-dark p-5">
        <div class="text-xs uppercase tracking-widest text-neon-green mb-2">3. You can exit early</div>
        <p class="text-gray-300 text-xs leading-relaxed">
          Unlike a sportsbook bet, the position can be sold before the event resolves, so a move in
          the odds can be banked without waiting for settlement
          <a
            href={src['pmus-what'].url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-neon-blue underline decoration-dotted underline-offset-2"
            >({src['pmus-what'].short})</a
          >.
        </p>
      </div>
    </div>

    <div class="space-y-4 font-mono text-sm text-gray-300 leading-relaxed">
      <p>
        <span class="text-white font-bold uppercase text-xs tracking-wider block mb-1"
          >There is no house on the other side.</span
        >
        Polymarket US describes its matching as a central limit order book: your order meets another
        user's order, and the venue says it does not take the other side of trades or set prices
        <a
          href={src['pmus-what'].url}
          target="_blank"
          rel="noopener noreferrer"
          class="text-neon-blue underline decoration-dotted underline-offset-2"
          >({src['pmus-what'].short})</a
        >. That is the structural difference from a sportsbook, and it is the reason the legal fight
        is about derivatives law rather than betting licences.
      </p>
      <p>
        <span class="text-white font-bold uppercase text-xs tracking-wider block mb-1"
          >Money is locked up, not lent.</span
        >
        The CFTC's designation order records that contracts on the Polymarket US exchange are cleared
        on a fully collateralised basis by a registered clearing organisation
        <a
          href={src['cftc-qcx-order'].url}
          target="_blank"
          rel="noopener noreferrer"
          class="text-neon-blue underline decoration-dotted underline-offset-2"
          >({src['cftc-qcx-order'].short})</a
        >. You are not trading on margin against the exchange.
      </p>
      <p>
        <span class="text-white font-bold uppercase text-xs tracking-wider block mb-1"
          >The legal question is a definition question.</span
        >
        The Commodity Exchange Act gives the CFTC exclusive jurisdiction over "swaps". Whether an
        event contract is a swap is precisely what the Third, Sixth and Ninth Circuits answered
        differently
        <a
          href={src['ca6-oh-tn'].url}
          target="_blank"
          rel="noopener noreferrer"
          class="text-neon-blue underline decoration-dotted underline-offset-2"
          >({src['ca6-oh-tn'].short})</a
        >
        <a
          href={src['ca9-nv'].url}
          target="_blank"
          rel="noopener noreferrer"
          class="text-neon-blue underline decoration-dotted underline-offset-2"
          >({src['ca9-nv'].short})</a
        >. Everything else on this page follows from that.
      </p>
    </div>
  </section>

  <!-- Summary table -->
  <section class="mb-12" aria-labelledby="who">
    <h2
      id="who"
      class="text-2xl font-black text-white uppercase tracking-tight mb-4 flex items-center"
    >
      <span class="text-neon-green mr-2">≡</span> Who can trade where
    </h2>
    <p class="text-gray-400 font-mono text-xs leading-relaxed mb-4">
      A summary of the four things a reader usually means by "Kalshi" or "Polymarket". Eligibility is
      set by each venue, not by this page; the sources for every row are linked in the sections above.
    </p>
    <div class="overflow-x-auto">
      <table class="w-full font-mono text-xs border border-terminal-slate">
        <thead>
          <tr class="bg-terminal-black/60 text-gray-400 uppercase tracking-wider">
            <th class="text-left px-4 py-3 border-b border-terminal-slate">Product</th>
            <th class="text-left px-4 py-3 border-b border-terminal-slate">Regulator</th>
            <th class="text-left px-4 py-3 border-b border-terminal-slate">Currency</th>
            <th class="text-left px-4 py-3 border-b border-terminal-slate">Eligibility</th>
          </tr>
        </thead>
        <tbody class="text-gray-300">
          <tr class="border-b border-terminal-slate/60">
            <td class="px-4 py-3 align-top text-white">Kalshi (US)</td>
            <td class="px-4 py-3 align-top">CFTC designated contract market</td>
            <td class="px-4 py-3 align-top">USD</td>
            <td class="px-4 py-3 align-top">
              US, 18+, identity verified. Sports and event contracts geofenced in Nevada,
              Washington and Michigan as of August 2026
            </td>
          </tr>
          <tr class="border-b border-terminal-slate/60">
            <td class="px-4 py-3 align-top text-white">Polymarket US (QCX LLC)</td>
            <td class="px-4 py-3 align-top">CFTC designated contract market and clearing house</td>
            <td class="px-4 py-3 align-top">USD</td>
            <td class="px-4 py-3 align-top">
              US, identity verified including SSN. State availability set by the venue and by
              litigation; New York sued in September 2026
            </td>
          </tr>
          <tr class="border-b border-terminal-slate/60">
            <td class="px-4 py-3 align-top text-white">Polymarket (international)</td>
            <td class="px-4 py-3 align-top">No US registration for this product</td>
            <td class="px-4 py-3 align-top">Crypto (USDC)</td>
            <td class="px-4 py-3 align-top">
              Non-US users only; US prohibited. Long restricted list, three tiers
            </td>
          </tr>
          <tr>
            <td class="px-4 py-3 align-top text-white">Kalshi (from abroad)</td>
            <td class="px-4 py-3 align-top">Same US exchange and rulebook</td>
            <td class="px-4 py-3 align-top">USD, card, crypto or wire</td>
            <td class="px-4 py-3 align-top">
              Many countries accepted; the restrictions live in the Member Agreement
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Disclaimer -->
  <div class="border border-neon-blue/40 bg-terminal-dark p-6 mb-10">
    <h2 class="text-sm font-mono text-neon-blue uppercase tracking-wider mb-3">
      Not legal advice
    </h2>
    <div class="font-mono text-xs text-gray-300 leading-relaxed space-y-2">
      <p>
        This page summarises public regulator filings, court opinions and venue documentation. It is
        not legal advice, it is not a recommendation to trade anywhere, and it does not establish
        whether you personally may use any of these products. Gambling and derivatives rules differ by
        state and country, change without notice, and can turn on facts this page does not know about
        you.
      </p>
      <p>
        If the answer matters legally — for a company, a licence, a tax position or a dispute — talk
        to a lawyer qualified in your jurisdiction. For everything else, the three checks below are
        what this page would do in your position.
      </p>
      <ol class="list-decimal list-inside space-y-1 text-gray-400">
        <li>The venue's own eligibility or geofence page, not a marketing page.</li>
        <li>The venue's rulebook or member agreement, where country and state restrictions live.</li>
        <li>Your state gaming or securities regulator's site, for injunctions in force this week.</li>
      </ol>
    </div>
  </div>

  <!-- Related -->
  <section class="mb-12" aria-labelledby="related">
    <h2
      id="related"
      class="text-sm font-mono uppercase tracking-wider text-gray-500 mb-4 flex items-center"
    >
      <span class="text-neon-green mr-2">→</span> Related pages
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm">
      <a
        href="/compare/polymarket-vs-kalshi"
        class="border border-terminal-slate hover:border-neon-green/60 bg-terminal-dark p-4 transition-colors group"
      >
        <div class="text-white group-hover:text-neon-green transition-colors">
          Polymarket vs Kalshi
        </div>
        <div class="text-gray-500 text-xs mt-1">
          Fees with the formulas, access, settlement — sourced and dated.
        </div>
      </a>
      <a
        href="/best/prediction-market-platforms"
        class="border border-terminal-slate hover:border-neon-green/60 bg-terminal-dark p-4 transition-colors group"
      >
        <div class="text-white group-hover:text-neon-green transition-colors">
          Best prediction market platforms
        </div>
        <div class="text-gray-500 text-xs mt-1">
          A dated monthly edition with comparable costs and eligibility.
        </div>
      </a>
      <a
        href="/tool/kalshi"
        class="border border-terminal-slate hover:border-neon-green/60 bg-terminal-dark p-4 transition-colors group"
      >
        <div class="text-white group-hover:text-neon-green transition-colors">Kalshi profile</div>
        <div class="text-gray-500 text-xs mt-1">What it is, what it costs, who it is for.</div>
      </a>
      <a
        href="/tool/polymarket"
        class="border border-terminal-slate hover:border-neon-green/60 bg-terminal-dark p-4 transition-colors group"
      >
        <div class="text-white group-hover:text-neon-green transition-colors">Polymarket profile</div>
        <div class="text-gray-500 text-xs mt-1">The international and US products, side by side.</div>
      </a>
      <a
        href="/tool/robinhood"
        class="border border-terminal-slate hover:border-neon-green/60 bg-terminal-dark p-4 transition-colors group"
      >
        <div class="text-white group-hover:text-neon-green transition-colors">Robinhood profile</div>
        <div class="text-gray-500 text-xs mt-1">
          Event contracts through a broker, with the costs that involves.
        </div>
      </a>
      <a
        href="/category/platforms"
        class="border border-terminal-slate hover:border-neon-green/60 bg-terminal-dark p-4 transition-colors group"
      >
        <div class="text-white group-hover:text-neon-green transition-colors">Platforms category</div>
        <div class="text-gray-500 text-xs mt-1">Every venue in the directory.</div>
      </a>
    </div>
  </section>

  <!-- Sources -->
  <section id="sources" class="mb-10" aria-labelledby="sources-heading">
    <h2
      id="sources-heading"
      class="text-sm font-mono uppercase tracking-wider text-gray-500 mb-4 flex items-center"
    >
      <span class="text-neon-green mr-2">⌗</span> Sources ({sources.length})
    </h2>
    <p class="font-mono text-xs text-gray-500 mb-4 leading-relaxed">
      All links were opened on {LAST_UPDATED}. Where a document carries its own date, the note says
      so; that date is when it was issued, not when we read it. Legal documents can be replaced
      without the URL changing, so re-check before relying on a claim.
    </p>
    <ol class="space-y-3 font-mono text-xs">
      {#each sources as source}
        <li class="border-l border-terminal-slate pl-4">
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-300 hover:text-neon-green transition-colors leading-relaxed"
            >{source.label}</a
          >
          <div class="text-gray-600 mt-1">
            checked {source.date}{#if source.note}
              <span class="text-terminal-slate">·</span>
              {source.note}
            {/if}
          </div>
        </li>
      {/each}
    </ol>
  </section>

  <footer class="border-t border-terminal-slate pt-6 font-mono text-xs text-gray-500">
    <p>
      Last updated {LAST_UPDATED}. This page is re-checked when a court rules, when the Supreme Court
      acts on No. 26-299, or when a venue changes its eligibility rules — whichever comes first.
    </p>
  </footer>
</div>
