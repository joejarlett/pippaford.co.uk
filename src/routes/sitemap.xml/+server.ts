import { site } from '$lib/content';

export const prerender = true;

/** Routes to advertise to crawlers. Add entries here as new pages are created. */
const routes = ['/'];

export function GET() {
	const urls = routes
		.map(
			(route) => `	<url>
		<loc>${site.url}${route === '/' ? '/' : route}</loc>
		<changefreq>monthly</changefreq>
		<priority>${route === '/' ? '1.0' : '0.7'}</priority>
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
