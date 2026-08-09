<script lang="ts">
	import { approach } from '$lib/content';
	import Seo from '$lib/components/Seo.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import Img from '$lib/components/Img.svelte';
</script>

<Seo
	title="My approach"
	description="Dramatherapy, eco-depth psychology, somatic approaches and trauma-informed practice — the four traditions Pippa Ford draws on, and what each contributes to the work."
/>

<PageHeader title={approach.title} lede={approach.lede} />

<section class="bg-mist">
	<div class="mx-auto max-w-6xl px-6 py-20 md:py-28">
		<p class="display max-w-4xl text-2xl text-ink sm:text-3xl">{approach.intro}</p>

		<!-- In-page navigation: four long sections is enough to warrant it. -->
		<nav aria-label="On this page" class="mt-12 border-t border-line pt-6">
			<ul class="flex flex-wrap gap-x-6 gap-y-2">
				{#each approach.items as item (item.slug)}
					<li>
						<a
							href="#{item.slug}"
							class="text-sm text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-ink"
						>
							{item.title}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</section>

{#each approach.items as item, i (item.slug)}
	<section
		id={item.slug}
		class="scroll-mt-24 {i % 2 === 0 ? 'bg-ink text-white' : 'bg-mist text-ink'}"
	>
		<div class="mx-auto max-w-6xl px-6 py-20 md:py-28">
			<div class="grid gap-8 md:grid-cols-[18rem_1fr] md:gap-16">
				<div>
					<h2 class="display text-3xl md:text-4xl {i % 2 === 0 ? 'text-blush' : 'text-ink'}">
						{item.title}
					</h2>
					<p class="mt-4 text-sm leading-relaxed {i % 2 === 0 ? 'text-white/70' : 'text-ink-soft'}">
						{item.summary}
					</p>

					<!-- A section may carry more than one image; they stack in the column. -->
					<div class="mt-8 space-y-4">
						{#each item.images as image (image.base)}
							<Img
								base={image.base}
								widths={image.widths}
								width={image.width}
								height={image.height}
								alt={image.alt}
								sizes="(min-width: 768px) 18rem, 100vw"
								class="aspect-3/2 w-full object-cover"
							/>
						{/each}
					</div>
				</div>

				<Prose paragraphs={item.body} tone={i % 2 === 0 ? 'light' : 'ink'} class="max-w-3xl" />
			</div>
		</div>
	</section>
{/each}
