import { error } from '@sveltejs/kit';
import { services } from '$lib/content';

export const prerender = true;

/** Enumerate the slugs so the prerenderer builds every service page. */
export function entries() {
	return services.items.map((s) => ({ slug: s.slug }));
}

export function load({ params }) {
	const service = services.items.find((s) => s.slug === params.slug);
	if (!service) error(404, 'Not found');
	return { service };
}
