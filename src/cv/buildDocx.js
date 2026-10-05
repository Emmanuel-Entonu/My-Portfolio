import { cv } from './cvData.js';

const RED = 'CC2222';
const INK = '1A1A1A';
const MUTED = '5F5F5F';
const FONT = 'Calibri';

/* Builds the CV as a Word document. Takes the `docx` module as an argument so the same
   code runs in the browser (loaded on demand) and in Node (for checking the output). */
export function buildCvDocument(d, data = cv) {
  const {
    Document, Paragraph, TextRun, ExternalHyperlink, AlignmentType, LevelFormat, BorderStyle,
    HeadingLevel, PositionalTab, PositionalTabAlignment, PositionalTabRelativeTo, PositionalTabLeader,
  } = d;

  const link = (text, href, opts = {}) =>
    new ExternalHyperlink({ link: href, children: [new TextRun({ text, color: MUTED, ...opts })] });

  const section = title =>
    new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(title.toUpperCase())] });

  const bullet = children => new Paragraph({ numbering: { reference: 'bullets', level: 0 }, children });

  // "Role, Org, Place ................ Dates" with the dates pinned to the right margin
  const roleLine = job =>
    new Paragraph({
      keepNext: true,
      spacing: { before: 160, after: 40 },
      children: [
        new TextRun({ text: job.role, bold: true }),
        new TextRun({ text: `  ·  ${job.org}, ${job.place}`, color: MUTED }),
        new TextRun({
          children: [
            new PositionalTab({
              alignment: PositionalTabAlignment.RIGHT,
              relativeTo: PositionalTabRelativeTo.MARGIN,
              leader: PositionalTabLeader.NONE,
            }),
            job.dates,
          ],
          color: MUTED,
        }),
      ],
    });

  // Two contact lines so long links never wrap mid-word:
  // location · phone · WhatsApp, then GitHub · portfolio
  const sep = () => new TextRun({ text: '   ·   ', color: 'B5B5B5' });
  const contactLine = (items, lead) => {
    const runs = lead ? [new TextRun({ text: lead, color: MUTED })] : [];
    items.forEach((c, i) => {
      if (lead || i > 0) runs.push(sep());
      runs.push(link(c.label === 'WhatsApp' ? `WhatsApp ${c.text}` : c.text, c.href));
    });
    return runs;
  };
  const [line1, line2] = [data.contacts.slice(0, 2), data.contacts.slice(2)];

  const children = [
    new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: data.name.toUpperCase(), bold: true, size: 44, characterSpacing: 30 })] }),
    new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: data.title, bold: true, size: 24, color: RED })] }),
    new Paragraph({ spacing: { after: 20 }, children: contactLine(line1, data.location) }),
    new Paragraph({ spacing: { after: 120 }, children: contactLine(line2) }),

    section('Profile'),
    ...data.profile.map(p => new Paragraph({ spacing: { after: 100 }, children: [new TextRun(p)] })),

    section('Experience'),
  ];

  data.experience.forEach(job => {
    children.push(roleLine(job));
    if (job.intro) children.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun(job.intro)] }));
    job.points.forEach(pt => {
      children.push(typeof pt === 'string'
        ? bullet([new TextRun(pt)])
        : bullet([new TextRun({ text: `${pt.lead} `, bold: true }), new TextRun(pt.text)]));
    });
  });

  children.push(section('Own products'));
  data.projects.forEach(p => {
    children.push(bullet([
      new TextRun({ text: p.name, bold: true }),
      new TextRun({ text: ` (${p.stack}). `, color: MUTED, italics: true }),
      new TextRun(p.text),
    ]));
  });

  children.push(section('Skills'));
  data.skills.forEach(s => {
    children.push(new Paragraph({
      spacing: { after: 60 },
      children: [new TextRun({ text: `${s.group}: `, bold: true }), new TextRun(s.items)],
    }));
  });

  children.push(section('Education'));
  data.education.forEach(e => {
    children.push(new Paragraph({
      children: [new TextRun({ text: e.title, bold: true }), new TextRun({ text: `  ·  ${e.place}`, color: MUTED })],
    }));
  });

  children.push(section('Links'));
  data.links.forEach(l => {
    children.push(new Paragraph({
      spacing: { after: 40 },
      children: [new TextRun({ text: `${l.label}: `, bold: true }), link(l.text, l.href, { color: RED })],
    }));
  });

  return new Document({
    creator: data.name,
    title: `${data.name} CV`,
    description: `${data.name}, ${data.title}`,
    styles: {
      default: { document: { run: { font: FONT, size: 21, color: INK }, paragraph: { spacing: { after: 60, line: 276 } } } },
      paragraphStyles: [
        {
          id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { font: FONT, size: 21, bold: true, color: RED, characterSpacing: 40 },
          paragraph: {
            keepNext: true,
            spacing: { before: 280, after: 120 },
            border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'D9D9D9', space: 4 } },
          },
        },
      ],
    },
    numbering: {
      config: [{
        reference: 'bullets',
        levels: [{
          level: 0,
          format: LevelFormat.BULLET,
          text: '•',
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 340, hanging: 220 } }, run: { color: RED } },
        }],
      }],
    },
    sections: [{
      properties: { page: { margin: { top: 900, bottom: 900, left: 1000, right: 1000 } } }, // A4 (default size)
      children,
    }],
  });
}

/* Browser: build the .docx on demand and save it. */
export async function downloadCvDocx() {
  const d = await import('docx');
  const blob = await d.Packer.toBlob(buildCvDocument(d));
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Emmanuel_Entonu_CV.docx';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
