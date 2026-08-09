<script lang="ts">
	import { about, approach, hero, services, site, supervision, testimonials } from '$lib/content';
	import Seo from '$lib/components/Seo.svelte';
	import Section from '$lib/components/Section.svelte';
	import Img from '$lib/components/Img.svelte';
</script>

<Seo />

<!-- ============================= Hero ============================= -->
<section class="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-ink">
	<Img
		base={hero.image.base}
		widths={hero.image.widths}
		width={hero.image.width}
		height={hero.image.height}
		alt=""
		sizes="100vw"
		priority
		class="absolute inset-0 -z-10 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 -z-10 bg-linear-to-t from-ink/60 via-transparent to-ink/30"></div>

	<div class="mx-auto w-full max-w-6xl px-6 pt-32 pb-12 md:pb-16">
		<h1 class="reveal-load display text-4xl text-white sm:text-5xl md:text-[3.7rem]">
			{hero.heading} - {hero.subheading}
		</h1>
		<p class="reveal-load mt-4 text-white/80">{site.deliveryModes}</p>
	</div>
</section>

<!-- ============================ Intro ============================= -->
<Section label="Introduction" tone="mist">
	<p class="reveal display max-w-5xl text-2xl text-ink sm:text-3xl md:text-[2.6rem]">
		{hero.intro}
	</p>
</Section>

<!-- ===================== About — navy ground ====================== -->
<section class="bg-ink text-white">
	<div
		class="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:gap-16 md:py-28"
	>
		<div class="reveal">
			<h2 class="display text-3xl md:text-4xl">About {site.name}</h2>
			<p class="mt-5 leading-relaxed text-white/85">{about.paragraphs[0]}</p>
			<a
				href="/about"
				class="mt-6 inline-block text-sm text-blush underline decoration-blush/50 underline-offset-4 hover:opacity-80"
			>
				More about Pippa and her training
			</a>
		</div>

		<div>
			<Img
				base={about.portrait.base}
				widths={about.portrait.widths}
				width={about.portrait.width}
				height={about.portrait.height}
				alt={about.portraitAlt}
				sizes="(min-width: 768px) 50vw, 100vw"
				class="w-full object-cover"
			/>
		</div>
	</div>
</section>

<!-- =========================== Approach =========================== -->
<Section label={approach.title} tone="mist">
	<h2 class="reveal display text-3xl text-ink md:text-5xl">{approach.title}</h2>
	<p class="reveal mt-5 max-w-3xl leading-relaxed text-ink-soft">{approach.lede}</p>

	<ul class="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
		{#each approach.items as item (item.slug)}
			<li class="reveal border-t border-line pt-5">
				<h3 class="display text-2xl text-ink">
					<a href="/approach#{item.slug}" class="hover:opacity-70">{item.title}</a>
				</h3>
				<p class="mt-3 text-sm leading-relaxed text-ink-soft">{item.summary}</p>
			</li>
		{/each}
	</ul>
</Section>

<!-- =========================== Services =========================== -->
<Section label="Therapeutic approaches" tone="periwinkle">
	<h2 class="reveal display text-4xl text-ink sm:text-5xl md:text-[3.7rem]">{services.heading}</h2>

	<div class="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
		{#each services.items as service (service.slug)}
			<article class="reveal flex flex-col">
				<h3 class="text-lg font-semibold text-ink">
					<a href="/services/{service.slug}" class="hover:opacity-70">{service.title}</a>
				</h3>
				<p class="mt-3 text-sm leading-relaxed text-ink/90">{service.summary}</p>
				<div class="mt-auto pt-8">
					<Img
						base={service.image.base}
						widths={service.image.widths}
						width={service.image.width}
						height={service.image.height}
						alt={service.alt}
						sizes="(min-width: 768px) 33vw, 100vw"
						class="aspect-3/4 w-full object-cover"
					/>
				</div>
			</article>
		{/each}
	</div>
</Section>

<!-- ========================= Testimonials ========================= -->
<section aria-label="Testimonials" class="bg-mist text-ink">
	<div class="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
		<div>
			<Img
				base={testimonials.image.base}
				widths={testimonials.image.widths}
				width={testimonials.image.width}
				height={testimonials.image.height}
				alt=""
				sizes="(min-width: 768px) 50vw, 100vw"
				class="h-full w-full object-cover"
			/>
		</div>

		<div class="flex flex-col justify-center gap-12 md:gap-20">
			<h2 class="sr-only">{testimonials.heading}</h2>
			{#each testimonials.items as item (item.quote)}
				<figure class="reveal">
					<blockquote class="text-xl leading-relaxed text-ink md:text-2xl">
						<p>&ldquo;{item.quote}&rdquo;</p>
					</blockquote>
					<figcaption class="mt-3 text-sm text-ink-soft">-- {item.attribution}</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<!-- ===================== Supervision + contact ==================== -->
<Section label="Supervision and contact" tone="ink">
	<div class="grid gap-12 md:grid-cols-2 md:gap-16">
		<div class="reveal">
			<h2 class="display text-3xl text-blush md:text-4xl">{supervision.title}</h2>
			<p class="mt-5 leading-relaxed text-white/85">{supervision.lede}</p>
			<a
				href="/supervision"
				class="mt-6 inline-block text-sm text-white underline decoration-blush decoration-2 underline-offset-4 hover:opacity-80"
			>
				More about supervision
			</a>
		</div>

		<div class="reveal">
			<h2 class="display text-3xl md:text-4xl">Get in touch</h2>
			<p class="mt-5 leading-relaxed text-white/85">
				If you have a question, or would like to arrange an initial conversation, I would be glad to
				hear from you.
			</p>
			<a
				href="/contact"
				class="mt-6 inline-block bg-blush px-8 py-3.5 font-serif text-lg text-ink transition-opacity hover:opacity-90"
			>
				Contact Pippa
			</a>
		</div>
	</div>
</Section>
