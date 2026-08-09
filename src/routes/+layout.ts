// The site is fully static — prerender every route at build time so Vercel
// serves plain HTML from the edge (fast, cheap, and ideal for crawlers).
export const prerender = true;
export const trailingSlash = 'never';
