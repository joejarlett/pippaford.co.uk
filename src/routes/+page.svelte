<script lang="ts">
	import { about, contact, faqs, hero, services, site, testimonials } from '$lib/content';
	import Section from '$lib/components/Section.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Img from '$lib/components/Img.svelte';
</script>

<!-- ============================= Hero =============================
     Navy ground, full-bleed lake image, title sitting bottom-left —
     matching the original's arrangement.
-->
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
	</div>
</section>

<!-- ============================ Intro ============================= -->
<Section id="about" label="About" tone="mist">
	<p class="reveal display max-w-5xl text-2xl text-ink sm:text-3xl md:text-[2.6rem]">
		{hero.intro}
	</p>
</Section>

<!-- ===================== About — navy ground ====================== -->
<section class="bg-ink text-white">
	<div
		class="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:gap-16 md:py-28"
	>
		<div>
			<h2 class="sr-only">About {site.name}</h2>
			<div class="reveal space-y-5 text-sm leading-relaxed text-white/85 md:text-base">
				{#each about.paragraphs as paragraph (paragraph)}
					<p>{paragraph}</p>
				{/each}
			</div>
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

<!-- ========================= Testimonials =========================
     Image on the left, quotes stacked on the right, pale ground.
-->
<section id="testimonials" aria-label="Testimonials" class="bg-mist text-ink">
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
					<figcaption class="mt-3 text-sm text-ink-soft">
						-- {item.attribution}
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<!-- =========================== Services ===========================
     Periwinkle ground, blush heading, copy above image in each column.
-->
<Section id="services" label="Therapeutic approaches" tone="periwinkle">
	<!--
		The original set this heading in blush on periwinkle (1.4:1) and the body
		copy in white (2.2:1) — both well under the 4.5:1 WCAG AA threshold.
		Ink on periwinkle keeps the palette and reaches 7.4:1.
	-->
	<h2 class="reveal display text-4xl text-ink sm:text-5xl md:text-[3.7rem]">{services.heading}</h2>

	<div class="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
		{#each services.items as service (service.slug)}
			<article class="reveal flex flex-col">
				<h3 class="text-lg font-semibold text-ink">{service.title}</h3>
				<p class="mt-3 text-sm leading-relaxed text-ink/90">{service.body}</p>
				<Img
					base={service.image.base}
					widths={service.image.widths}
					width={service.image.width}
					height={service.image.height}
					alt={service.alt}
					sizes="(min-width: 768px) 33vw, 100vw"
					class="mt-8 aspect-3/4 w-full object-cover"
				/>
			</article>
		{/each}
	</div>
</Section>

<!-- ============================= FAQs =============================
     Heading in the left column, questions in the right.
-->
<Section id="faqs" label="Frequently asked questions" tone="mist">
	<div class="grid gap-10 md:grid-cols-2 md:gap-16">
		<h2 class="reveal display max-w-xs text-4xl text-ink sm:text-5xl md:text-[3.7rem]">
			{faqs.heading}
		</h2>

		<div>
			{#each faqs.items as faq (faq.question)}
				<Faq question={faq.question} answer={faq.answer} />
			{/each}
		</div>
	</div>
</Section>

<!-- ============================ Contact =========================== -->
<Section id="contact" label="Contact" tone="periwinkle">
	<div class="reveal max-w-3xl">
		<h2 class="display text-4xl text-ink sm:text-5xl">{contact.heading}</h2>
		<p class="mt-5 leading-relaxed text-ink/90">{contact.body}</p>
		<a
			href="mailto:{site.email}"
			class="mt-8 inline-block bg-ink px-8 py-3.5 font-serif text-lg text-white transition-opacity hover:opacity-90"
		>
			{site.email}
		</a>
	</div>
</Section>
