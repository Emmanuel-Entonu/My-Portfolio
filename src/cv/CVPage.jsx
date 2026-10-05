import { useState } from 'react';
import { RiFileWord2Line, RiPrinterLine, RiArrowLeftLine } from 'react-icons/ri';
import { cv } from './cvData.js';

function Section({ title, children }) {
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function CVPage() {
  const [status, setStatus] = useState('idle');

  // The Word builder (and the docx library) only load when someone asks for the file
  const downloadWord = async () => {
    setStatus('loading');
    try {
      const { downloadCvDocx } = await import('./buildDocx.js');
      await downloadCvDocx();
      setStatus('idle');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <header className="cv-bar">
        <div className="cv-bar-inner">
          <a href="/" className="cv-back"><RiArrowLeftLine aria-hidden="true" /> <span>Emmanuel <b>Entonu</b></span></a>
          <div className="cv-actions">
            <button className="cv-btn cv-btn-red" onClick={downloadWord} disabled={status === 'loading'}>
              <RiFileWord2Line aria-hidden="true" />
              {status === 'loading' ? 'Preparing…' : 'Download Word'}
            </button>
            <button className="cv-btn cv-btn-outline" onClick={() => window.print()}>
              <RiPrinterLine aria-hidden="true" /> Print / PDF
            </button>
          </div>
        </div>
        {status === 'error' && <p className="cv-error" role="alert">Couldn't create the Word file. Please try again.</p>}
      </header>

      <main className="cv-paper">
        <header className="cv-head">
          <h1>{cv.name}</h1>
          <p className="cv-title">{cv.title}</p>
          {/* Two lines (location · phone · WhatsApp, then GitHub · portfolio), same as the Word file */}
          {[cv.contacts.slice(0, 2), cv.contacts.slice(2)].map((line, n) => (
            <p key={n} className="cv-contacts">
              {n === 0 && <span>{cv.location}</span>}
              {line.map(c => (
                <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {c.label === 'WhatsApp' ? `WhatsApp ${c.text}` : c.text}
                </a>
              ))}
            </p>
          ))}
        </header>

        <Section title="Profile">
          {cv.profile.map(p => <p key={p.slice(0, 24)}>{p}</p>)}
        </Section>

        <Section title="Experience">
          {cv.experience.map(job => (
            <article key={job.role} className="cv-job">
              <div className="cv-job-head">
                <h3>{job.role} <span>· {job.org}, {job.place}</span></h3>
                <span className="cv-dates">{job.dates}</span>
              </div>
              {job.intro && <p>{job.intro}</p>}
              <ul>
                {job.points.map(pt => typeof pt === 'string'
                  ? <li key={pt.slice(0, 32)}>{pt}</li>
                  : <li key={pt.lead}><strong>{pt.lead}</strong> {pt.text}</li>)}
              </ul>
            </article>
          ))}
        </Section>

        <Section title="Own products">
          <ul>
            {cv.projects.map(p => (
              <li key={p.name}><strong>{p.name}</strong> <em>({p.stack}).</em> {p.text}</li>
            ))}
          </ul>
        </Section>

        <Section title="Skills">
          <dl className="cv-skills">
            {cv.skills.map(s => (
              <div key={s.group}><dt>{s.group}</dt><dd>{s.items}</dd></div>
            ))}
          </dl>
        </Section>

        <Section title="Education">
          {cv.education.map(e => (
            <p key={e.title}><strong>{e.title}</strong> <span className="cv-muted">· {e.place}</span></p>
          ))}
        </Section>

        <Section title="Links">
          <ul className="cv-links">
            {cv.links.map(l => (
              <li key={l.label}><strong>{l.label}:</strong> <a href={l.href} target="_blank" rel="noopener noreferrer">{l.text}</a></li>
            ))}
          </ul>
        </Section>
      </main>
    </>
  );
}
