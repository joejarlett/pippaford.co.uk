<script lang="ts">
	import { page } from '$app/state';
	import { nav, site } from '$lib/content';
</script>

<svelte:head>
	<title>Page not found — {site.name}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="flex min-h-[70vh] items-center bg-ink text-white">
	<div class="mx-auto w-full max-w-6xl px-6 py-24">
		<p class="text-sm tracking-wide text-blush">{page.status}</p>

		<h1 class="display mt-4 text-4xl sm:text-5xl">
			{page.status === 404 ? 'This page has moved' : 'Something went wrong'}
		</h1>

		<p class="mt-5 max-w-xl leading-relaxed text-white/80">
			{#if page.status === 404}
				The site was recently rebuilt, so some older links no longer exist. Everything is on the
				home page — or jump straight to a section below.
			{:else}
				Please try again, or get in touch by email if the problem continues.
			{/if}
		</p>

		<ul class="mt-8 flex flex-wrap gap-x-6 gap-y-3">
			<li>
				<a href="/" class="underline decoration-blush decoration-2 underline-offset-4">Home</a>
			</li>
			{#each nav as item (item.href)}
				<li>
					<a
						href={item.href}
						class="text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>

		<a
			href="mailto:{site.email}"
			class="mt-10 inline-block bg-blush px-8 py-3.5 font-serif text-lg text-ink transition-opacity hover:opacity-90"
		>
			{site.email}
		</a>
	</div>
</section>
