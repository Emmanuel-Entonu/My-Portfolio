import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import DecryptedText from './DecryptedText';
import { navLinks, socials } from '../content';

const spyIds = ['hero', ...navLinks.map(l => l.id), 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Scroll-spy: whichever section crosses the middle of the viewport is "active"
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    spyIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Lock page scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === 'Escape') setOpen(false); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Mobile links: release the scroll lock first, then scroll, so the jump isn't swallowed
  const goTo = id => e => {
    e.preventDefault();
    document.body.style.overflow = '';
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={`nav${scrolled ? ' is-scrolled' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="wrap nav-inner">
          <a href="#hero" className="logo" aria-label="Emmanuel Entonu, back to top">
            <DecryptedText text="Emmanuel" animateOn="hover" speed={70} maxIterations={14} encryptedClassName="char-encrypted" className="char-revealed" />{' '}
            <b><DecryptedText text="Entonu" animateOn="hover" speed={70} maxIterations={14} encryptedClassName="char-encrypted" className="char-revealed" /></b>
          </a>

          <nav className="nav-menu" aria-label="Primary">
            <ul className="nav-links">
              {navLinks.map(l => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className={`nav-link${active === l.id ? ' is-active' : ''}`}>{l.label}</a>
                </li>
              ))}
              <li><a href="/cv" className="nav-link">CV</a></li>
            </ul>
            <a href="#contact" className="btn btn-outline btn-sm">Get in touch</a>
          </nav>

          <button className="nav-toggle" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <RiMenu4Line />
          </button>
        </div>
      </motion.header>

      {/* Rendered outside <header>: its backdrop-filter would trap position:fixed children */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
          >
            <motion.nav
              className="mobile-panel"
              aria-label="Mobile"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <div className="mobile-panel-head">
                <button className="nav-toggle" aria-label="Close menu" onClick={() => setOpen(false)}>
                  <RiCloseLine />
                </button>
              </div>

              <ul className="mobile-links">
                {navLinks.map(l => (
                  <li key={l.id}><a href={`#${l.id}`} onClick={goTo(l.id)}>{l.label}</a></li>
                ))}
                <li><a href="/cv">CV</a></li>
              </ul>

              <a href="#contact" className="btn btn-red" onClick={goTo('contact')}>Get in touch</a>

              <div className="icon-links">
                {socials.map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-link"><Icon /></a>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
