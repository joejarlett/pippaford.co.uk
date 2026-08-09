<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		label?: string;
		/** Matches the three grounds used on the original site. */
		tone?: 'mist' | 'ink' | 'periwinkle';
		class?: string;
		children: Snippet;
	}

	let { id, label, tone = 'mist', class: klass = '', children }: Props = $props();

	const tones = {
		mist: 'bg-mist text-ink',
		ink: 'bg-ink text-white',
		periwinkle: 'bg-periwinkle text-white'
	} as const;
</script>

<section {id} aria-label={label} class="{tones[tone]} {klass}">
	<div class="mx-auto max-w-6xl px-6 py-20 md:py-28">
		{@render children()}
	</div>
</section>
