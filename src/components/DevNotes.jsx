import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { RiCloseLine, RiExternalLinkLine, RiArrowRightUpLine } from 'react-icons/ri';

const ease = [0.22, 1, 0.36, 1];

/* Full-screen "developer notes" write-up for a project: what was done, then whichever of
   results, screenshots and pages built the notes include. Esc or the close button to leave. */
export default function DevNotes({ notes, onClose }) {
  const closeRef = useRef(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => { onCloseRef.current = onClose; }, [onClose]);

  useEffect(() => {
    const opener = document.activeElement;
    const onKey = e => { if (e.key === 'Escape') onCloseRef.current(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      opener?.focus?.();
    };
  }, []);

  const { results, figures, live } = notes;
  const pageCount = notes.pageGroups?.reduce((n, g) => n + g.pages.length, 0) ?? 0;

  const figure = f => (
    <figure key={f.src}>
      <a href={f.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full size: ${f.caption}`}>
        <img src={f.src} alt={f.caption} loading="lazy" />
      </a>
      <figcaption>{f.caption}</figcaption>
    </figure>
  );

  return createPortal(
    <motion.div
      className="notes"
      role="dialog"
      aria-modal="true"
      aria-label={`${notes.title} developer notes`}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <header className="notes-head">
        <div className="notes-head-title">
          <small>Developer notes</small>
          <strong>{notes.title}</strong>
        </div>
        {live && (
          <a href={live.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm notes-live">
            {live.label} <RiExternalLinkLine aria-hidden="true" />
          </a>
        )}
        <button ref={closeRef} className="gallery-btn" onClick={onClose} aria-label="Close developer notes"><RiCloseLine /></button>
      </header>

      <motion.div
        className="notes-body"
        initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
      >
        <p className="notes-sub">{notes.subtitle}</p>
        {notes.brief.map(p => <p key={p.slice(0, 30)} className="notes-lead">{p}</p>)}

        {notes.sections.map(s => (
          <section key={s.title} className="notes-section">
            <h3>{s.title}</h3>
            <ul className="notes-list">
              {s.points.map(pt => <li key={pt.slice(0, 40)}>{pt}</li>)}
            </ul>
          </section>
        ))}

        {results && (
          <section className="notes-section">
            <h3>{results.title}</h3>
            <p className="notes-period">{results.period}</p>
            <div className="notes-stats">
              {results.stats.map(st => (
                <div key={st.label}>
                  <strong>{st.value}</strong>
                  <span>{st.label}</span>
                </div>
              ))}
            </div>
            <ul className="notes-list">
              {results.points.map(pt => <li key={pt.slice(0, 40)}>{pt}</li>)}
            </ul>
            <div className="notes-figures">
              {results.figures.map(figure)}
            </div>
          </section>
        )}

        {figures && (
          <section className="notes-section">
            <h3>{figures.title}</h3>
            {figures.note && <p className="notes-period">{figures.note}</p>}
            <div className="notes-figures">
              {figures.items.map(figure)}
            </div>
          </section>
        )}

        {notes.pageGroups && (
          <section className="notes-section">
            <h3>{notes.pagesTitle}</h3>
            <p className="notes-period">All {pageCount} pages are live and in the sitemap submitted to Google.</p>
            <div className="notes-pages">
              {notes.pageGroups.map(g => (
                <div key={g.group}>
                  <h4>{g.group}</h4>
                  <ul>
                    {g.pages.map(pg => (
                      <li key={pg.href}>
                        <a href={pg.href} target="_blank" rel="noopener noreferrer">
                          {pg.label} <RiArrowRightUpLine aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {live && (
          <div className="notes-foot">
            <a href={live.href} target="_blank" rel="noopener noreferrer" className="btn btn-red">
              {live.label} <RiExternalLinkLine aria-hidden="true" />
            </a>
          </div>
        )}
      </motion.div>
    </motion.div>,
    document.body,
  );
}
