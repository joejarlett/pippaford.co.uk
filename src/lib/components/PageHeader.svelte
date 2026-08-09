<script lang="ts">
	interface Props {
		title: string;
		lede?: string;
	}

	let { title, lede }: Props = $props();
</script>

<header class="bg-ink text-white">
	<div class="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pt-40 md:pb-24">
		<h1 class="display text-4xl sm:text-5xl md:text-[3.7rem]">{title}</h1>
		{#if lede}
			<p class="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">{lede}</p>
		{/if}
	</div>
</header>
