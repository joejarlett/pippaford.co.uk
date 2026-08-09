<script lang="ts">
	import { about, site, whoIWorkWith } from '$lib/content';
	import Seo from '$lib/components/Seo.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import Img from '$lib/components/Img.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<Seo
	title="About"
	description="Pippa Ford is a creative arts psychotherapist and HCPC-registered dramatherapist (AS14736), working with adults, children and young people across the UK."
/>

<PageHeader title={about.title} lede={about.lede} />

<section class="bg-mist">
	<div class="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_20rem] md:gap-16 md:py-28">
		<div>
			<Prose paragraphs={about.paragraphs} />

			{#each about.extended as block (block.heading)}
				<div class="mt-12">
					<h2 class="display text-2xl text-ink md:text-3xl">{block.heading}</h2>
					<Prose paragraphs={block.body} class="mt-5" />
				</div>
			{/each}
		</div>

		<div class="md:pt-1">
			<Img
				base={about.portrait.base}
				widths={about.portrait.widths}
				width={about.portrait.width}
				height={about.portrait.height}
				alt={about.portraitAlt}
				sizes="(min-width: 768px) 20rem, 100vw"
				class="w-full object-cover"
			/>
			<dl class="mt-6 space-y-3 text-sm text-ink-soft">
				<div>
					<dt class="font-semibold text-ink">Qualifications</dt>
					<dd class="mt-1">{site.credentials}</dd>
				</div>
				<div>
					<dt class="font-semibold text-ink">Further training</dt>
					<dd class="mt-1">{site.trainings}</dd>
				</div>
				<div>
					<dt class="font-semibold text-ink">HCPC registration</dt>
					<dd class="mt-1">no. {site.hcpc}</dd>
				</div>
			</dl>
		</div>
	</div>
</section>

<Section label={whoIWorkWith.title} tone="periwinkle">
	<h2 class="display text-3xl text-ink md:text-4xl">{whoIWorkWith.title}</h2>
	<div class="mt-10 grid gap-8 md:grid-cols-3">
		{#each whoIWorkWith.groups as group (group.title)}
			<article>
				<h3 class="text-lg font-semibold text-ink">{group.title}</h3>
				<p class="mt-3 text-sm leading-relaxed text-ink/90">{group.body}</p>
			</article>
		{/each}
	</div>
</Section>
