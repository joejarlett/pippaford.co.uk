<script lang="ts">
	/**
	 * Responsive image.
	 *
	 * Variants are pre-generated at build time into `static/images` as
	 * `<base>-<width>.webp`. Pass the base name and the widths that exist and
	 * the browser picks the smallest file that still looks sharp.
	 */
	interface Props {
		/** Path without the width suffix, e.g. `/images/hero-bg` */
		base: string;
		widths: readonly number[];
		/** Intrinsic aspect ratio of the source, used to reserve layout space. */
		width: number;
		height: number;
		alt: string;
		/** `sizes` attribute — how wide the image renders at each breakpoint. */
		sizes?: string;
		priority?: boolean;
		class?: string;
	}

	let {
		base,
		widths,
		width,
		height,
		alt,
		sizes = '100vw',
		priority = false,
		class: klass = ''
	}: Props = $props();

	const srcset = $derived(widths.map((w) => `${base}-${w}.webp ${w}w`).join(', '));
	const fallback = $derived(`${base}-${widths[widths.length - 1]}.webp`);
</script>

<img
	src={fallback}
	{srcset}
	{sizes}
	{alt}
	{width}
	{height}
	loading={priority ? 'eager' : 'lazy'}
	fetchpriority={priority ? 'high' : 'auto'}
	decoding="async"
	class={klass}
/>
