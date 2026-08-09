import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			// Every route is prerendered, so nothing actually runs on a Node
			// lambda — but the adapter still wants an explicit runtime when the
			// local Node version is newer than the ones Vercel supports.
			adapter: adapter({ runtime: 'nodejs22.x' })
		})
	]
});
