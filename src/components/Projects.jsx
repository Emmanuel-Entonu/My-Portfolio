import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { RiExternalLinkLine, RiImageLine, RiSmartphoneLine, RiAppleFill, RiFileList3Line, RiLockLine } from 'react-icons/ri';
import Reveal from './Reveal';
import DecryptedText from './DecryptedText';
import Gallery from './Gallery';
import DevNotes from './DevNotes';
import Phone from './Phone';
import { projects } from '../content';

// Masonry: the grid has tiny 4px rows and each card spans as many as its content needs
const ROW = 4;
const GAP = 20;

// Shown across the top of the gallery for projects the client has taken down
const DISCONTINUED_NOTICE = {
  title: 'Discontinued by the client.',
  text: 'This site is no longer live, so these screenshots are kept here to show the work.',
};

// Shown across the top of the gallery for private dashboards
const CONFIDENTIAL_NOTICE = {
  title: 'Confidential.',
  text: "This is a private dashboard, so it's shown here as screenshots only, with personal details removed.",
};

// Cards whose only visuals are a gallery stay hidden until screenshots are added
const shown = projects.filter(p => p.image || p.screens || (p.gallery && p.gallery.length > 0));

const CYCLE_MS = 1800;  // time each screen stays up in the card's phones

/* Crossfades between screenshots inside a phone screen */
function ScreenFade({ screen, alt }) {
  return (
    <AnimatePresence initial={false}>
      <motion.img
        key={screen.src}
        src={screen.src}
        alt={alt}
        draggable="false"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      />
    </AnimatePresence>
  );
}

/* Three phones that keep cycling through the app's screens while the card is in view:
   front shows the current screen, the two behind show the previous / next one.
   With no screenshots yet, a single phone shows the app's launch screen. */
function PhoneShowcase({ screens, launch, title }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-80px' });
  const [i, setI] = useState(0);

  // Warm the cache so every swap is instant
  useEffect(() => {
    screens.forEach(s => { const img = new Image(); img.src = s.src; });
  }, [screens]);

  useEffect(() => {
    if (!inView || screens.length < 2) return;
    const t = setInterval(() => setI(n => (n + 1) % screens.length), CYCLE_MS);
    return () => clearInterval(t);
  }, [inView, screens.length]);

  const at = n => screens[(i + n + screens.length) % screens.length];

  if (screens.length === 0) {
    return (
      <div className="phones">
        <Phone className="phone-front">
          <div className="phone-launch" style={{ background: launch?.background }}>
            {launch?.logo && <img src={launch.logo} alt={`${title} launch screen`} draggable="false" />}
          </div>
        </Phone>
      </div>
    );
  }

  return (
    <div className="phones" ref={ref}>
      {screens.length > 2 && <Phone className="phone-back is-left"><ScreenFade screen={at(-1)} alt="" /></Phone>}
      {screens.length > 1 && <Phone className="phone-back is-right"><ScreenFade screen={at(1)} alt="" /></Phone>}
      <Phone className="phone-front"><ScreenFade screen={at(0)} alt={`${title}: ${at(0).caption}`} /></Phone>
    </div>
  );
}

function Card({ p, i, onGallery, onNotes }) {
  const isClient = p.type === 'client';
  const isApp = Boolean(p.screens);
  const ref = useRef(null);
  const [span, setSpan] = useState();

  // Keep the card's row span in sync with its real height (fonts, images, resizes)
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setSpan(Math.ceil((el.offsetHeight + GAP) / ROW)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <Reveal delay={(i % 3) * 0.08} className={p.size ? `is-${p.size}` : undefined} style={span ? { gridRowEnd: `span ${span}` } : undefined}>
      <article ref={ref} className={`project${p.discontinued ? ' is-discontinued' : ''}${p.confidential ? ' is-confidential' : ''}`}>
        <div className={`project-media${isApp ? ' is-phones' : ''}`}>
          {isApp ? (
            <PhoneShowcase screens={p.screens} launch={p.launch} title={p.title} />
          ) : (
            <img src={p.image || p.gallery?.[0]?.src} alt={`${p.title} screenshot`} loading="lazy"
              onError={e => { e.currentTarget.style.display = 'none'; }} />
          )}
          <span className={`badge ${isClient ? 'is-client' : 'is-personal'}`}>{isClient ? 'Client' : 'Personal'}</span>
        </div>

        <div className="project-body">
          <h3 className="project-title">
            <DecryptedText text={p.title} animateOn="hover" speed={65} maxIterations={14} encryptedClassName="char-encrypted" className="char-revealed" />
          </h3>
          {p.subtitle && <p className="project-subtitle">{p.subtitle}</p>}
          <p className="project-desc">{p.desc}</p>
          <ul className="tags">
            {p.tags.map(t => <li key={t} className="tag">{t}</li>)}
          </ul>

          <div className="project-foot">
            {isApp ? (
              <>
                {p.appStore && (
                  <a href={p.appStore} target="_blank" rel="noopener noreferrer" className="project-live" aria-label={`${p.title} on the App Store (opens in new tab)`}>
                    <RiAppleFill aria-hidden="true" /> App Store
                  </a>
                )}
                {p.screens.length > 0 && (
                  <button type="button" className="project-live" onClick={() => onGallery({ title: p.title, images: p.screens, phone: true, label: 'App screens' })} aria-haspopup="dialog">
                    <RiSmartphoneLine aria-hidden="true" /> Screens
                  </button>
                )}
              </>
            ) : (
              <>
                {p.gallery?.length > 0 && (
                  <button
                    type="button"
                    className="project-live"
                    onClick={() => onGallery(p.confidential
                      ? { title: p.title, images: p.gallery, label: 'Gallery · Confidential', notice: CONFIDENTIAL_NOTICE }
                      : p.discontinued
                        ? { title: p.title, images: p.gallery, label: 'Gallery · Discontinued by client', notice: DISCONTINUED_NOTICE }
                        : { title: p.title, images: p.gallery, label: 'Gallery' })}
                    aria-haspopup="dialog"
                  >
                    <RiImageLine aria-hidden="true" /> Gallery
                  </button>
                )}
                {p.notes && (
                  <button type="button" className="project-live" onClick={() => onNotes(p.notes)} aria-haspopup="dialog">
                    <RiFileList3Line aria-hidden="true" /> Developer notes
                  </button>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-live" aria-label={`Visit ${p.title} (opens in new tab)`}>
                    Live <RiExternalLinkLine aria-hidden="true" />
                  </a>
                )}
              </>
            )}
            {p.confidential
              ? <span className="project-status is-confidential"><RiLockLine aria-hidden="true" /> Confidential</span>
              : (p.discontinued || p.status) && <span className="project-status">{p.discontinued ? 'Discontinued' : p.status}</span>}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(null);
  const [notes, setNotes] = useState(null);

  return (
    <>
      <div className="divider" />
      <section id="projects" className="section-pad">
        <div className="wrap">
          <div className="section-tag"><span><DecryptedText text="Selected Work" animateOn="view" speed={75} maxIterations={18} encryptedClassName="char-encrypted" className="char-revealed" /></span></div>

          <Reveal className="projects-head">
            <h2 className="h2">
              <DecryptedText text="Things I've" animateOn="view" sequential revealDirection="start" speed={110} maxIterations={25} encryptedClassName="char-encrypted" className="char-revealed" />
              <br /><span className="gold-stroke">built.</span>
            </h2>
            <a href="https://github.com/Emmanuel-Entonu" target="_blank" rel="noopener noreferrer" className="link-arrow">View all on GitHub →</a>
          </Reveal>

          {/* Bento grid */}
          <div className="bento-grid">
            {shown.map((p, i) => <Card key={p.title} p={p} i={i} onGallery={setOpen} onNotes={setNotes} />)}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && <Gallery key={open.title} {...open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
      <AnimatePresence>
        {notes && <DevNotes key={notes.title} notes={notes} onClose={() => setNotes(null)} />}
      </AnimatePresence>
    </>
  );
}
