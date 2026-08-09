<script lang="ts">
	import { about, contact, faqs, hero, services, site, testimonials } from '$lib/content';
	import Section from '$lib/components/Section.svelte';
	import Faq from '$lib/components/Faq.svelte';
</script>

<!-- ============================= Hero ============================= -->
<section class="relative isolate flex min-h-[86vh] items-end overflow-hidden">
	<img
		src={hero.image}
		alt=""
		fetchpriority="high"
		decoding="async"
		class="absolute inset-0 -z-10 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 -z-10 bg-gradient-to-t from-ink/70 via-ink/25 to-ink/10"></div>

	<div class="mx-auto w-full max-w-6xl px-6 pt-32 pb-16 md:pb-24">
		<h1 class="font-serif text-5xl leading-[0.95] text-shell sm:text-6xl md:text-7xl lg:text-8xl">
			{hero.heading}
			<span class="block italic text-blush">{hero.subheading}</span>
		</h1>
	</div>
</section>

<!-- ============================ Intro ============================= -->
<Section id="about" label="About" tone="mist">
	<p class="max-w-4xl font-serif text-2xl leading-snug text-ink sm:text-3xl md:text-4xl">
		{hero.intro}
	</p>
</Section>

<!-- ============================ About ============================= -->
<section class="bg-shell">
	<div class="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:gap-16 md:py-28">
		<div class="order-2 md:order-1">
			<h2 class="font-serif text-3xl text-ink md:text-4xl">About {site.name}</h2>
			<div class="mt-6 space-y-5 leading-relaxed text-ink-soft">
				{#each about.paragraphs as paragraph (paragraph)}
					<p>{paragraph}</p>
				{/each}
			</div>
		</div>

		<div class="order-1 md:order-2">
			<img
				src={about.portrait}
				alt={about.portraitAlt}
				width="1200"
				height="1599"
				loading="lazy"
				decoding="async"
				class="w-full rounded-sm object-cover shadow-sm"
			/>
		</div>
	</div>
</section>

<!-- ========================= Testimonials ========================= -->
<section id="testimonials" aria-label="Testimonials" class="relative isolate overflow-hidden">
	<img
		src={testimonials.background}
		alt=""
		loading="lazy"
		decoding="async"
		class="absolute inset-0 -z-10 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 -z-10 bg-ink/70"></div>

	<div class="mx-auto max-w-6xl px-6 py-20 md:py-28">
		<h2 class="font-serif text-3xl text-shell md:text-4xl">{testimonials.heading}</h2>
		<div class="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
			{#each testimonials.items as item (item.quote)}
				<figure>
					<blockquote class="font-serif text-2xl leading-snug text-shell md:text-3xl">
						<p>&ldquo;{item.quote}&rdquo;</p>
					</blockquote>
					<figcaption class="mt-4 text-sm tracking-wide text-blush">
						— {item.attribution}
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<!-- =========================== Services =========================== -->
<Section id="services" label="Therapeutic approaches">
	<h2 class="font-serif text-3xl text-ink md:text-5xl">{services.heading}</h2>

	<div class="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
		{#each services.items as service (service.slug)}
			<article>
				<img
					src={service.image}
					alt={service.alt}
					width="2500"
					height="1667"
					loading="lazy"
					decoding="async"
					class="aspect-[4/3] w-full rounded-sm object-cover"
				/>
				<h3 class="mt-6 font-serif text-2xl text-ink">{service.title}</h3>
				<p class="mt-3 leading-relaxed text-ink-soft">{service.body}</p>
			</article>
		{/each}
	</div>
</Section>

<!-- ============================= FAQs ============================= -->
<Section id="faqs" label="Frequently asked questions" tone="mist">
	<h2 class="font-serif text-3xl text-ink md:text-5xl">{faqs.heading}</h2>
	<div class="mt-10 max-w-4xl">
		{#each faqs.items as faq (faq.question)}
			<Faq question={faq.question} answer={faq.answer} />
		{/each}
	</div>
</Section>

<!-- ============================ Contact =========================== -->
<Section id="contact" label="Contact" tone="ink">
	<div class="max-w-3xl">
		<h2 class="font-serif text-3xl md:text-5xl">{contact.heading}</h2>
		<p class="mt-5 text-lg leading-relaxed text-shell/80">{contact.body}</p>
		<a
			href="mailto:{site.email}"
			class="mt-8 inline-block rounded-full bg-blush px-8 py-3.5 font-serif text-lg text-ink transition-opacity hover:opacity-90"
		>
			{site.email}
		</a>
	</div>
</Section>
