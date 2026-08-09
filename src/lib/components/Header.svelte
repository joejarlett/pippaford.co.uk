<script lang="ts">
	import { page } from '$app/state';
	import { nav, site } from '$lib/content';

	let open = $state(false);
	let scrolled = $state(false);

	function onScroll() {
		scrolled = window.scrollY > 24;
	}

	/**
	 * A nav item is active on its own page and on anything nested beneath it,
	 * so /services/emdr keeps "Therapy" marked. Matching on `href + '/'` rather
	 * than a bare prefix stops /about lighting up for a hypothetical /about-us.
	 */
	function isActive(href: string, pathname: string) {
		return pathname === href || pathname.startsWith(`${href}/`);
	}
</script>

<svelte:window onscroll={onScroll} />

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
>
	Skip to content
</a>

<!--
	Transparent over the dark hero, then solid navy once scrolled so the links
	stay legible against the pale sections below.
-->
<header
	class="fixed inset-x-0 top-0 z-40 transition-colors duration-300 {scrolled || open
		? 'bg-ink/95 backdrop-blur'
		: 'bg-transparent'}"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5">
		<a
			href="/"
			class="font-serif text-lg text-white italic transition-opacity hover:opacity-70 md:text-xl"
		>
			{site.name}
		</a>

		<!-- Desktop nav -->
		<nav aria-label="Primary" class="hidden md:block">
			<ul class="flex items-center gap-6">
				{#each nav as item (item.href)}
					{@const active = isActive(item.href, page.url.pathname)}
					<li>
						<a
							href={item.href}
							aria-current={active ? 'page' : undefined}
							class="relative py-1 text-sm transition-colors {active
								? 'text-white'
								: 'text-white/70 hover:text-white'}"
						>
							{item.label}
							<!-- The bar carries the state; colour alone would not be enough on its own. -->
							<span
								aria-hidden="true"
								class="absolute inset-x-0 -bottom-0.5 h-px origin-left bg-blush transition-transform duration-200 {active
									? 'scale-x-100'
									: 'scale-x-0'}"
							></span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Mobile toggle -->
		<button
			type="button"
			class="-mr-2 flex h-10 w-10 items-center justify-center text-white md:hidden"
			aria-expanded={open}
			aria-controls="mobile-nav"
			onclick={() => (open = !open)}
		>
			<span class="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
			<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5">
				{#if open}
					<path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
				{:else}
					<path d="M4 8h16M4 16h16" stroke-linecap="round" />
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile nav -->
	{#if open}
		<nav id="mobile-nav" aria-label="Primary" class="border-t border-white/15 bg-ink md:hidden">
			<ul class="mx-auto max-w-6xl px-6 py-2">
				{#each nav as item (item.href)}
					{@const active = isActive(item.href, page.url.pathname)}
					<li class="border-b border-white/10 last:border-0">
						<a
							href={item.href}
							aria-current={active ? 'page' : undefined}
							class="block border-l-2 py-3.5 pl-4 font-serif text-xl transition-colors {active
								? 'border-blush text-blush'
								: 'border-transparent text-white'}"
							onclick={() => (open = false)}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>
