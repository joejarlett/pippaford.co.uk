<script lang="ts">
	import { contact, faqs, site } from '$lib/content';
	import Seo from '$lib/components/Seo.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Prose from '$lib/components/Prose.svelte';
	import Faq from '$lib/components/Faq.svelte';
</script>

<Seo
	title="Contact"
	description="Get in touch with Pippa Ford to ask a question or arrange an initial conversation. Online and telephone sessions across the UK."
/>

<PageHeader title={contact.title} lede={contact.body} />

<section class="bg-mist">
	<div class="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
		<div>
			<Prose paragraphs={contact.detail} />

			<a
				href="mailto:{site.email}"
				class="mt-8 inline-block bg-ink px-8 py-4 font-serif text-lg text-white transition-opacity hover:opacity-90"
			>
				{site.email}
			</a>

			<dl class="mt-10 space-y-4 text-sm">
				<div>
					<dt class="font-semibold text-ink">Sessions</dt>
					<dd class="mt-1 text-ink-soft">{site.deliveryModes}</dd>
				</div>
				<div>
					<dt class="font-semibold text-ink">Registration</dt>
					<dd class="mt-1 text-ink-soft">
						HCPC no. {site.hcpc} — {site.credentials}
					</dd>
				</div>
			</dl>
		</div>

		<div>
			<h2 class="display text-2xl text-ink md:text-3xl">{faqs.title}</h2>
			<div class="mt-6">
				{#each faqs.items as faq (faq.question)}
					<Faq question={faq.question} answer={faq.answer} />
				{/each}
			</div>
		</div>
	</div>
</section>
