import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const escapeXml = (value: string) => value.replace(/[<>&'"]/g, (character) => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;'
})[character] ?? character);

export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? new URL('https://dunhuangwithin.com/');
  const entries = (await getCollection('articles', ({ data }) => data.status === 'published' && !data.noindex))
    .sort((a, b) => (b.data.updatedAt ?? b.data.publishedAt).getTime() - (a.data.updatedAt ?? a.data.publishedAt).getTime())
    .slice(0, 40);
  const [latest] = entries;
  const updated = latest ? (latest.data.updatedAt ?? latest.data.publishedAt).toISOString() : new Date().toISOString();
  const items = entries.map((entry) => {
    const url = new URL(`/${entry.id}/`, origin).href;
    const date = (entry.data.updatedAt ?? entry.data.publishedAt).toISOString();
    return `<entry><title>${escapeXml(entry.data.title)}</title><id>${escapeXml(url)}</id><link href="${escapeXml(url)}"/><updated>${date}</updated><summary>${escapeXml(entry.data.description)}</summary><author><name>${escapeXml(entry.data.author)}</name></author></entry>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="utf-8"?><feed xmlns="http://www.w3.org/2005/Atom"><title>Dunhuang Within</title><subtitle>Dunhuang culture, symbols, inner practices and spiritual jewelry.</subtitle><id>${escapeXml(origin.href)}</id><link href="${escapeXml(new URL('/feed.xml', origin).href)}" rel="self"/><link href="${escapeXml(origin.href)}"/><updated>${updated}</updated>${items}</feed>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/atom+xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
};
