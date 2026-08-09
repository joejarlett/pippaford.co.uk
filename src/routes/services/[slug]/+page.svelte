<script lang="ts">
	import { services, site } from '$lib/content';
	import Seo from '$lib/components/Seo.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import Img from '$lib/components/Img.svelte';

	let { data } = $props();
	const service = $derived(data.service);

	/** The other two services, for onward links at the foot of the page. */
	const others = $derived(services.items.filter((s) => s.slug !== service.slug));
</script>

<Seo title={service.title} description={service.summary} image="{service.image.base}-800.webp" />

<PageHeader title={service.title} lede={service.summary} />

<section class="bg-mist">
	<div class="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_20rem] md:gap-16 md:py-28">
		<Prose paragraphs={service.body} class="max-w-3xl" />

		<aside>
			<Img
				base={service.image.base}
				widths={service.image.widths}
				width={service.image.width}
				height={service.image.height}
				alt={service.alt}
				sizes="(min-width: 768px) 20rem, 100vw"
				class="aspect-3/4 w-full object-cover"
			/>

			<h2 class="mt-8 text-sm font-semibold text-ink">Often helpful for</h2>
			<ul class="mt-3 space-y-2 text-sm text-ink-soft">
				{#each service.suitedFor as item (item)}
					<li class="border-l-2 border-blush pl-3">{item}</li>
				{/each}
			</ul>

			<p class="mt-6 text-xs leading-relaxed text-ink-faint">
				This list is indicative, not exhaustive. If you are unsure whether this way of working fits,
				please ask.
			</p>
		</aside>
	</div>
</section>

<section class="bg-periwinkle text-ink">
	<div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
		<div class="flex flex-wrap items-end justify-between gap-6">
			<div>
				<h2 class="display text-2xl md:text-3xl">Other ways of working</h2>
				<ul class="mt-4 flex flex-wrap gap-x-6 gap-y-2">
					{#each others as other (other.slug)}
						<li>
							<a
								href="/services/{other.slug}"
								class="underline decoration-ink/40 underline-offset-4 hover:opacity-70"
							>
								{other.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<a
				href="/contact"
				class="inline-block bg-ink px-8 py-3.5 font-serif text-lg text-white transition-opacity hover:opacity-90"
			>
				Get in touch
			</a>
		</div>

		<p class="mt-8 text-xs text-ink/70">
			Sessions are {site.deliveryModes.toLowerCase()}.
		</p>
	</div>
</section>
