import { services, site } from '$lib/content';

export const prerender = true;

/**
 * Routes advertised to crawlers. Static pages are listed explicitly; the
 * service pages are derived so a new entry in `services.items` appears here
 * automatically rather than being forgotten.
 */
const staticRoutes = [
	{ path: '/', priority: '1.0' },
	{ path: '/about', priority: '0.8' },
	{ path: '/approach', priority: '0.8' },
	{ path: '/services', priority: '0.8' },
	{ path: '/supervision', priority: '0.7' },
	{ path: '/contact', priority: '0.7' }
];

export function GET() {
	const routes = [
		...staticRoutes,
		...services.items.map((s) => ({ path: `/services/${s.slug}`, priority: '0.9' }))
	];

	const urls = routes
		.map(
			({ path, priority }) => `	<url>
		<loc>${site.url}${path}</loc>
		<changefreq>monthly</changefreq>
		<priority>${priority}</priority>
	</url>`
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
