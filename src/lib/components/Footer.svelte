<script lang="ts">
	import { site } from '$lib/content';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-line bg-shell">
	<div class="mx-auto max-w-6xl px-6 py-14 md:py-20">
		<div class="grid gap-10 md:grid-cols-2 md:gap-16">
			<div>
				<p class="font-serif text-2xl text-ink md:text-3xl">{site.credentials}</p>
				<dl class="mt-6 space-y-3 text-sm text-ink-soft">
					<div>
						<dt class="font-medium text-ink">Trainings</dt>
						<dd class="mt-1">{site.trainings}</dd>
					</div>
					<div>
						<dt class="font-medium text-ink">HCPC registered</dt>
						<dd class="mt-1">no. {site.hcpc}</dd>
					</div>
				</dl>
			</div>

			<div class="md:justify-self-end md:text-right">
				<h2 class="font-serif text-2xl text-ink md:text-3xl">Email</h2>
				<a
					href="mailto:{site.email}"
					class="mt-3 inline-block text-lg text-ink-soft underline decoration-blush decoration-2 underline-offset-4 transition-colors hover:text-ink"
				>
					{site.email}
				</a>
			</div>
		</div>

		<p class="mt-14 border-t border-line pt-6 text-xs text-ink-faint">
			© {year}
			{site.name}. All rights reserved.
		</p>
	</div>
</footer>
