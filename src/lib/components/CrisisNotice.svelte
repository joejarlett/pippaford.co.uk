<script lang="ts">
	import { contact } from '$lib/content';
</script>

<!--
	Standard safeguarding signpost for a therapy site. Deliberately present on
	every page rather than only on Contact — someone in difficulty should not
	have to navigate to find it.
-->
<aside aria-label={contact.crisis.heading} class="border-t border-line bg-mist">
	<div class="mx-auto max-w-6xl px-6 py-8">
		<h2 class="text-sm font-semibold text-ink">{contact.crisis.heading}</h2>
		<p class="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft">
			{contact.crisis.body}
		</p>
	</div>
</aside>
