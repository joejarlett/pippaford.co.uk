<script lang="ts">
	interface Props {
		question: string;
		answer: string;
	}

	let { question, answer }: Props = $props();
</script>

<details class="group border-b border-line py-5">
	<summary
		class="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-xl text-ink md:text-2xl [&::-webkit-details-marker]:hidden"
	>
		{question}
		<span
			class="mt-1 shrink-0 text-ink-faint transition-transform duration-200 group-open:rotate-45"
			aria-hidden="true"
		>
			<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5">
				<path d="M12 5v14M5 12h14" stroke-linecap="round" />
			</svg>
		</span>
	</summary>
	<p class="mt-4 max-w-3xl leading-relaxed text-ink-soft">{answer}</p>
</details>
