<script lang="ts">
	import { services } from '$lib/content';
	import Seo from '$lib/components/Seo.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Img from '$lib/components/Img.svelte';
</script>

<Seo
	title="Therapy"
	description="Individual therapy, EMDR and ecotherapy with Pippa Ford — creative, somatic and trauma-informed approaches, online and by telephone across the UK."
/>

<PageHeader title={services.title} lede={services.lede} />

<section class="bg-mist">
	<div class="mx-auto max-w-6xl px-6 py-20 md:py-28">
		<div class="grid gap-12 md:grid-cols-3 md:gap-8">
			{#each services.items as service (service.slug)}
				<article class="flex flex-col">
					<h2 class="display text-2xl text-ink md:text-3xl">
						<a href="/services/{service.slug}" class="hover:opacity-70">{service.title}</a>
					</h2>
					<p class="mt-3 text-sm leading-relaxed text-ink-soft">{service.summary}</p>

					<div class="mt-auto pt-8">
						<a href="/services/{service.slug}" tabindex="-1" aria-hidden="true">
							<Img
								base={service.image.base}
								widths={service.image.widths}
								width={service.image.width}
								height={service.image.height}
								alt=""
								sizes="(min-width: 768px) 33vw, 100vw"
								class="aspect-3/4 w-full object-cover"
							/>
						</a>
						<a
							href="/services/{service.slug}"
							class="mt-5 inline-block text-sm text-ink underline decoration-blush decoration-2 underline-offset-4"
						>
							More about {service.title}
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
