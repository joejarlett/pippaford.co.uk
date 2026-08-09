<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/content';

	interface Props {
		/** Page title, without the site suffix. Omit on the home page. */
		title?: string;
		description?: string;
		/** Path to an OG image under /images, without the width suffix. */
		image?: string;
	}

	let { title, description = site.description, image }: Props = $props();

	const fullTitle = $derived(title ? `${title} — ${site.name}` : site.title);
	const canonical = $derived(new URL(page.url.pathname, site.url).href);
	const ogImage = $derived(`${site.url}${image ?? '/images/pippa-portrait-1200.webp'}`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.title} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:locale" content="en_GB" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>
