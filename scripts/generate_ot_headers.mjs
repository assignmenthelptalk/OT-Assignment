import fs from 'fs';
import path from 'path';

const pages = [
  { slug: 'activity-analysis-assignment-help', title: 'Activity Analysis Assignment Help', photo: 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (4).png', subtitle: 'Occupational Therapy Student Guide' },
  { slug: 'anatomy-physiology-occupational-therapy-students', title: 'Anatomy & Physiology for OT Students', photo: 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf.png', subtitle: 'Foundations of Clinical Practice' },
  { slug: 'cmi-level-7-assignment-help', title: 'CMI Level 7 Assignment Help', photo: 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (9).png', subtitle: 'Advanced Management & Leadership' },
  { slug: 'cmop-e-assignment-help', title: 'CMOP-E Assignment Help', photo: 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (6).png', subtitle: 'Person-Environment-Occupation Focus' },
  { slug: 'contact', title: 'Contact Our OT Experts', photo: 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (8).png', subtitle: 'Get Your Quote Today' },
  { slug: 'evidence-based-practice-occupational-therapy-assignment-help', title: 'Evidence-Based Practice Help', photo: 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (8).png', subtitle: 'Critical Appraisal & Research Synthesis' },
  { slug: 'hcpc-standards-proficiency-occupational-therapy', title: 'HCPC Standards of Proficiency', photo: 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (9).png', subtitle: 'Regulatory Compliance for Students' },
  { slug: 'moho-assignment-help', title: 'MOHO Assignment Help', grid: ['Gemini_Generated_Image_4ikfvg4ikfvg4ikf.png', 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (5).png', 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (2).png'], subtitle: 'Human Occupation Frameworks' },
  { slug: 'occupational-science-ot-students', title: 'Occupational Science for Students', photo: 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (6).png', subtitle: 'Understanding Human Occupation' },
  { slug: 'occupational-therapy-assignment-help', title: 'OT Assignment Help', grid: ['Gemini_Generated_Image_4ikfvg4ikfvg4ikf (1).png', 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (3).png', 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (4).png', 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (9).png'], subtitle: 'Expert Support for Every Student' },
  { slug: 'ot-case-study-assignment-help', title: 'OT Case Study Help', photo: 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (1).png', subtitle: 'Clinical Reasoning & Intervention Planning' },
  { slug: 'ot-literature-review-assignment-help', title: 'OT Literature Review Help', photo: 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (8).png', subtitle: 'Database Searching & Synthesis' },
  { slug: 'ot-practice-placement-assignment-help', title: 'OT Practice Placement Support', photo: 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (5).png', subtitle: 'Clinical Competency & Portfolios' },
  { slug: 'ot-reflective-essay-assignment-help', title: 'OT Reflective Essay Help', photo: 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (8).png', subtitle: 'Gibbs, Schon & Johns Models' },
  { slug: 'otpf-assignment-help', title: 'OTPF Assignment Help', grid: ['Gemini_Generated_Image_4ikfvg4ikfvg4ikf (4).png', 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (3).png', 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (2).png', 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (7).png'], subtitle: 'Domain & Process Frameworks' },
  { slug: 'rcot-professional-standards-occupational-therapy', title: 'RCOT Professional Standards', photo: 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (9).png', subtitle: 'Professional Values & Ethics' },
  { slug: 'stroke-ot-case-study-assignment-help', title: 'Stroke OT Case Study Help', photo: 'Gemini_Generated_Image_4ikfvg4ikfvg4ikf (1).png', subtitle: 'Neurological Rehabilitation Focus' }
];

const outputDir = './scripts/temp_headers';
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const generateHTML = (page) => {
  const isGrid = !!page.grid;
  const imagePathPrefix = '../../public/OT_blog_images/';
  
  let backgroundHtml = '';
  if (isGrid) {
    const gridClass = page.grid.length === 2 ? 'grid-2nd' : (page.grid.length === 3 ? 'grid-3rd-hero' : 'grid-4th');
    backgroundHtml = `<div class="grid-container ${gridClass}">
      ${page.grid.map(img => `<div class="grid-item" style="background-image: url('${imagePathPrefix}${img}')"></div>`).join('\n')}
    </div>`;
  } else {
    backgroundHtml = `<div class="bg" style="background-image: url('${imagePathPrefix}${page.photo}')"></div>`;
  }

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 960px; height: 480px; overflow: hidden; font-family: 'Cinzel', serif; background: #111; }
  .header { position: relative; width: 960px; height: 480px; overflow: hidden; }
  .bg, .grid-container { position: absolute; inset: 0; }
  .bg { background-size: cover; background-position: center; filter: brightness(0.75); }
  .grid-container { display: grid; gap: 2px; background: white; }
  .grid-2nd { grid-template-columns: 1fr 1fr; }
  .grid-3rd-hero { grid-template-columns: 1.6fr 1fr; grid-template-rows: 1fr 1fr; }
  .grid-3rd-hero .grid-item:first-child { grid-row: span 2; }
  .grid-4th { grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; }
  .grid-item { background-size: cover; background-position: center; filter: brightness(0.8); }
  .border-frame { position: absolute; inset: 12px; border: 1px solid rgba(255,255,255,0.2); pointer-events: none; z-index: 5; }
  .title-panel {
    position: absolute;
    top: 40px; left: 40px; right: 160px;
    background: rgba(15, 35, 45, 0.88);
    padding: 32px 40px;
    backdrop-filter: blur(12px);
    z-index: 20;
    box-shadow: 0 15px 35px rgba(0,0,0,0.4);
  }
  .title-panel.centered { top: 50%; left: 50%; transform: translate(-50%, -50%); right: auto; width: 85%; max-width: 700px; text-align: center; }
  .title { font-size: 38px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.05em; line-height: 1.2; margin-bottom: 10px; }
  .subtitle { font-size: 16px; font-weight: 400; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.2em; }
  .logo-area { position: absolute; top: 40px; right: 40px; z-index: 25; color: white; text-align: right; }
</style>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
<div class="header">
  ${backgroundHtml}
  <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:15;" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="geo" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <polygon points="15,0 30,15 15,30 0,15" fill="none" stroke="rgba(100,180,160,0.25)" stroke-width="0.8"/>
        <circle cx="15" cy="15" r="2" fill="rgba(100,180,160,0.15)"/>
      </pattern>
    </defs>
    <rect x="0" y="0" width="960" height="18" fill="url(#geo)"/>
    <rect x="0" y="462" width="960" height="18" fill="url(#geo)"/>
    <rect x="0" y="0" width="18" height="480" fill="url(#geo)"/>
    <rect x="942" y="0" width="18" height="480" fill="url(#geo)"/>
  </svg>
  <div class="border-frame"></div>
  <div class="title-panel ${isGrid ? 'centered' : ''}">
    <div class="title">${page.title}</div>
    <div class="subtitle">${page.subtitle}</div>
  </div>
  <div class="logo-area">
    <div style="font-size:11px; letter-spacing:0.15em;">OT ASSIGNMENT HELP</div>
  </div>
</div>
</body>
</html>`;
};

pages.forEach(page => {
  const html = generateHTML(page);
  fs.writeFileSync(path.join(outputDir, `${page.slug}.html`), html);
});

console.log(`Generated 17 HTML headers in ${outputDir}`);
