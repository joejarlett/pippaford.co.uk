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

<!-- Just the section headings as jump links; no introductory paragraph. -->
<section class="bg-mist">
	<div class="mx-auto max-w-6xl px-6 py-10 md:py-14">
		<nav aria-label="On this page">
			<ul class="flex flex-wrap gap-x-8 gap-y-3">
				{#each approach.items as item (item.slug)}
					<li>
						<a
							href="#{item.slug}"
							class="font-serif text-xl text-ink underline decoration-blush decoration-2 underline-offset-6 transition-opacity hover:opacity-70 md:text-2xl"
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

				<div class="max-w-3xl">
					<Prose paragraphs={item.body} tone={i % 2 === 0 ? 'light' : 'ink'} />

					<!-- Somewhere to go for a reader convinced by this section. -->
					<a
						href={item.link.href}
						class="mt-8 inline-block text-sm underline decoration-2 underline-offset-4 transition-opacity hover:opacity-70 {i %
							2 ===
						0
							? 'text-blush decoration-blush/50'
							: 'text-ink decoration-blush'}"
					>
						{item.link.label}
					</a>
				</div>
			</div>
		</div>
	</section>
{/each}
