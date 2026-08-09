<script lang="ts">
	import { site } from '$lib/content';

	const year = new Date().getFullYear();
</script>

<!--
	Periwinkle ground, as on the original. Text is ink rather than white:
	white on this blue measures 2.2:1, which fails WCAG AA.
-->
<footer class="bg-periwinkle text-ink">
	<div class="mx-auto max-w-6xl px-6 py-14 md:py-20">
		<div class="grid gap-10 md:grid-cols-2 md:gap-16">
			<div>
				<p class="text-lg font-semibold">{site.credentials}</p>
				<dl class="mt-5 space-y-3 text-sm">
					<div>
						<dt class="font-semibold">Trainings:</dt>
						<dd class="mt-1 text-ink/90">{site.trainings}</dd>
					</div>
					<div>
						<dt class="font-semibold">HCPC registered no. {site.hcpc}</dt>
					</div>
					<div>
						<dt class="font-semibold">Practising in:</dt>
						<dd class="mt-1 text-ink/90">{site.region}, plus online sessions UK-wide</dd>
					</div>
				</dl>
			</div>

			<div>
				<h2 class="display text-3xl md:text-4xl">Email</h2>
				<a
					href="mailto:{site.email}"
					class="mt-2 inline-block font-serif text-2xl underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70 md:text-3xl"
				>
					{site.email}
				</a>
			</div>
		</div>

		<!-- ink/80 measures 5.03:1 on periwinkle; ink/70 falls to 3.99:1 and fails AA. -->
		<p class="mt-14 border-t border-ink/20 pt-6 text-xs text-ink/80">
			© {year}
			{site.name}. All rights reserved.
		</p>
	</div>
</footer>
