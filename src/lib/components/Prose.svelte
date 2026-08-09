<script lang="ts">
	interface Props {
		/** Paragraphs. Text between *asterisks* is rendered as emphasis. */
		paragraphs: readonly string[];
		tone?: 'ink' | 'light';
		class?: string;
	}

	let { paragraphs, tone = 'ink', class: klass = '' }: Props = $props();

	const colour = $derived(tone === 'ink' ? 'text-ink-soft' : 'text-white/80');

	/** Split a paragraph into plain and emphasised runs, so copy can carry
	 *  light emphasis without needing raw HTML in the content module. */
	function runs(text: string) {
		return text
			.split(/(\*[^*]+\*)/)
			.map((part) =>
				part.startsWith('*') && part.endsWith('*') && part.length > 2
					? { em: true, text: part.slice(1, -1) }
					: { em: false, text: part }
			);
	}
</script>

<div class="space-y-5 leading-relaxed {colour} {klass}">
	{#each paragraphs as paragraph (paragraph)}
		<p>
			{#each runs(paragraph) as run, i (i)}
				{#if run.em}<em>{run.text}</em>{:else}{run.text}{/if}
			{/each}
		</p>
	{/each}
</div>
