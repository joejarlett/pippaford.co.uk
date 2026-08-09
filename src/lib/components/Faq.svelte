<script lang="ts">
	interface Props {
		question: string;
		answer: string;
	}

	let { question, answer }: Props = $props();
</script>

<!--
	The original renders every answer open, separated by a rule — no accordion.
	Kept that way: with only three questions, hiding them behind a click costs
	more than it saves, and the text stays visible to crawlers without JS.
-->
<div class="border-b border-line py-5 first:pt-0">
	<h3 class="text-base font-semibold text-ink">{question}</h3>
	<p class="mt-2 text-sm leading-relaxed text-ink-soft">{answer}</p>
</div>
