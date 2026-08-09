<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		label?: string;
		tone?: 'shell' | 'mist' | 'ink';
		class?: string;
		children: Snippet;
	}

	let { id, label, tone = 'shell', class: klass = '', children }: Props = $props();

	const tones = {
		shell: 'bg-shell text-ink',
		mist: 'bg-mist text-ink',
		ink: 'bg-ink text-shell'
	} as const;
</script>

<section {id} aria-label={label} class="{tones[tone]} {klass}">
	<div class="mx-auto max-w-6xl px-6 py-20 md:py-28">
		{@render children()}
	</div>
</section>
