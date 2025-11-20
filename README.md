Learning SSR, SSG and ISR

1. SSR (Server-Side Rendering)

Rendered on the server for every request.

Dynamic by nature — HTML + data are freshly generated each time.

SEO-friendly: Search engines can read the fully rendered HTML.

Use case: Dashboards, user-specific pages, frequently changing data.

2. SSG (Static Site Generation)

Rendered on the server only once at build time.

Static — same HTML served to all users until the next build.

SEO-friendly: Pre-rendered HTML is readable by search engines.

Use case: Homepage, About page, blog posts that rarely change.

3. ISR (Incremental Static Regeneration)

Enhances SSG by allowing static pages to regenerate after a set interval.

Controlled using revalidate.

Mostly static, but periodically updated in the background.

Use case: Blog listings, product pages that update occasionally.

const res = await fetch('https://api.example.com/data', { next: { revalidate: 60 } });

4. force-dynamic / cache: no-store

These disable static generation.

Page is rendered on every navigation/request → fully dynamic.

Useful when you need always fresh data.

export const dynamic = 'force-dynamic';
const res = await fetch('https://api.example.com/data', { cache: 'no-store' });