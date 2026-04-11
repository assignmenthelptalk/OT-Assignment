import type { APIRoute } from 'astro';

const site = 'https://occupationtherapyassignment.help';

const pages = [
  '/',
  '/occupational-therapy-assignment-help/',
  '/activity-analysis-assignment-help/',
  '/anatomy-physiology-occupational-therapy-students/',
  '/cmi-level-7-assignment-help/',
  '/cmop-e-assignment-help/',
  '/contact/',
  '/evidence-based-practice-occupational-therapy-assignment-help/',
  '/hcpc-standards-proficiency-occupational-therapy/',
  '/moho-assignment-help/',
  '/occupational-science-ot-students/',
  '/ot-case-study-assignment-help/',
  '/ot-literature-review-assignment-help/',
  '/ot-practice-placement-assignment-help/',
  '/ot-reflective-essay-assignment-help/',
  '/otpf-assignment-help/',
  '/rcot-professional-standards-occupational-therapy/',
  '/stroke-ot-case-study-assignment-help/',
];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url>\n    <loc>${site}${page}</loc>\n  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
