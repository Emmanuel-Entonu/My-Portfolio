import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import DecryptedText from './DecryptedText';

const links = ['About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(204,34,34,0.08)' : '1px solid transparent',
        transition: 'background 0.4s, border-color 0.4s',
      }}
    >
      <div className="nav-inner">
        <a href="#" className="serif" style={{ fontSize: 17, fontWeight: 700, letterSpacing: '0.08em', color: '#CC2222', textDecoration: 'none', textTransform: 'uppercase' }}>
          <DecryptedText text="My Portfolio" animateOn="hover" speed={70} maxIterations={14} encryptedClassName="char-encrypted" className="char-revealed" />
        </a>

        {/* Desktop links */}
        <nav className="nav-links">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(232,224,204,0.5)', textDecoration: 'none', transition: 'color 0.25s' }}
              onMouseEnter={e => e.target.style.color = '#CC2222'}
              onMouseLeave={e => e.target.style.color = 'rgba(232,224,204,0.5)'}
            >{l}</a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button className="nav-hamburger" onClick={() => setOpen(o => !o)}
          style={{ background: 'none', border: 'none', color: '#CC2222', fontSize: 22, cursor: 'pointer', padding: 4 }}>
          {open ? <RiCloseLine /> : <RiMenu4Line />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
            style={{ background: 'rgba(8,8,8,0.97)', borderTop: '1px solid rgba(204,34,34,0.1)', overflow: 'hidden' }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, padding: '36px 0' }}>
              {links.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                  style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(232,224,204,0.55)', textDecoration: 'none' }}
                >{l}</a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
