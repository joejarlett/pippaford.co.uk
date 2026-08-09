<script lang="ts">
	import './layout.css';
	import { faqs, services, site } from '$lib/content';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CrisisNotice from '$lib/components/CrisisNotice.svelte';

	let { children } = $props();

	/** Practitioner + service structured data, so search engines can build a rich result. */
	const schema = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': ['ProfessionalService', 'MedicalBusiness'],
				'@id': `${site.url}/#practice`,
				name: `${site.name} — ${site.tagline}`,
				description: site.description,
				url: site.url,
				email: site.email,
				image: `${site.url}/images/pippa-portrait-1200.webp`,
				// Remote-first practice: no street address, served nationally.
				areaServed: { '@type': 'Country', name: site.areaServed },
				availableChannel: {
					'@type': 'ServiceChannel',
					name: site.deliveryModes,
					serviceUrl: site.url
				},
				availableLanguage: 'English',
				founder: { '@id': `${site.url}/#pippa` },
				makesOffer: services.items.map((s) => ({
					'@type': 'Offer',
					itemOffered: { '@type': 'Service', name: s.title, description: s.body }
				}))
			},
			{
				'@type': 'Person',
				'@id': `${site.url}/#pippa`,
				name: site.name,
				jobTitle: 'Creative Arts Psychotherapist',
				description: site.description,
				email: site.email,
				url: site.url,
				image: `${site.url}/images/pippa-portrait-1200.webp`,
				hasCredential: [
					{ '@type': 'EducationalOccupationalCredential', name: 'BA Hons' },
					{ '@type': 'EducationalOccupationalCredential', name: 'Dramatherapy MA' },
					{
						'@type': 'EducationalOccupationalCredential',
						name: 'HCPC registered',
						identifier: site.hcpc
					}
				],
				knowsAbout: [
					'Creative arts psychotherapy',
					'Dramatherapy',
					'EMDR',
					'Ecotherapy',
					'Trauma-informed care',
					'Clinical supervision'
				]
			},
			{
				'@type': 'FAQPage',
				'@id': `${site.url}/#faqs`,
				mainEntity: faqs.items.map((f) => ({
					'@type': 'Question',
					name: f.question,
					acceptedAnswer: { '@type': 'Answer', text: f.answer }
				}))
			}
		]
	};
</script>

<svelte:head>
	<!--
		The "P" is the Instrument Serif glyph converted to a vector path, so it
		renders identically everywhere rather than depending on the viewer having
		a particular serif installed. The .ico carries 16/32/48 raster sizes drawn
		from a slightly heavier variant, because the typeface's hairlines drop out
		below about 32px.
	-->
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="icon" href="/favicon-96.png" type="image/png" sizes="96x96" />
	<link rel="alternate icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
	<meta name="theme-color" content="#171d3a" />

	<link
		rel="preload"
		as="font"
		type="font/woff2"
		href="/fonts/instrument-serif-latin.woff2"
		crossorigin="anonymous"
	/>

	<!-- Per-page title, description, canonical and OG tags come from <Seo />. -->
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<Header />

<main id="main">
	{@render children()}
</main>

<CrisisNotice />
<Footer />
