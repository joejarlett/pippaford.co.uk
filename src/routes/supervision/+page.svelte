<script lang="ts">
	import { supervision } from '$lib/content';
	import Seo from '$lib/components/Seo.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
</script>

<Seo
	title="Clinical supervision"
	description="Creative and eco-informed clinical supervision for therapists, arts therapists and related practitioners, with Pippa Ford — online and by telephone."
/>

<PageHeader title={supervision.title} lede={supervision.lede} />

<section class="bg-mist">
	<div class="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_18rem] md:gap-16 md:py-28">
		<Prose paragraphs={supervision.body} class="max-w-3xl" />

		<aside>
			<h2 class="text-sm font-semibold text-ink">Who this is for</h2>
			<ul class="mt-3 space-y-2 text-sm text-ink-soft">
				{#each supervision.suitedFor as item (item)}
					<li class="border-l-2 border-blush pl-3">{item}</li>
				{/each}
			</ul>

			<a
				href="/contact"
				class="mt-8 inline-block bg-ink px-7 py-3 font-serif text-white transition-opacity hover:opacity-90"
			>
				Enquire about supervision
			</a>
		</aside>
	</div>
</section>
