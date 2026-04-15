import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { RiUser3Line } from 'react-icons/ri';
import DecryptedText from './DecryptedText';

const socials = [
  { Icon: FaGithub,    href: 'https://github.com/Emmanuel-Entonu',                     label: 'GitHub' },
  { Icon: FaFacebook,  href: 'https://web.facebook.com/profile.php?id=61582421490737', label: 'Facebook' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/entonu_emmanuel/',             label: 'Instagram' },
  { Icon: FaWhatsapp,  href: 'https://wa.me/2349129312395',                            label: 'WhatsApp' },
];

const stagger = { show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp  = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } };

export default function Hero() {
  return (
    <section id="hero" className="hero-section" style={{ minHeight: '100svh', display: 'flex', position: 'relative', overflow: 'hidden' }}>


      <div className="wrap hero-container">
        <div className="hero-grid">

          {/* TEXT */}
          <motion.div variants={stagger} initial="hidden" animate="show" style={{ display: 'flex', flexDirection: 'column' }}>
            <motion.div variants={fadeUp}>
              <div className="serif hero-name" style={{ color: '#e8e0cc', marginBottom: 6 }}>
                <DecryptedText
                  text="EMMANUEL"
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={140}
                  maxIterations={30}
                  encryptedClassName="char-encrypted"
                  className="char-revealed"
                />
              </div>
              <div className="serif gold-stroke hero-name" style={{ marginBottom: 36 }}>
                <DecryptedText
                  text="ENTONU"
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={140}
                  maxIterations={30}
                  encryptedClassName="char-encrypted"
                  className="char-revealed"
                />
              </div>
            </motion.div>

            <motion.p variants={fadeUp} style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(232,224,204,0.45)', maxWidth: 400, marginBottom: 40 }}>
              Building digital experiences that blend aesthetics with functionality.{' '}
              <span style={{ color: '#CC2222' }}>Full-stack developer</span> crafting with intention.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 44 }}>
              <a href="#projects"
                style={{ background: '#CC2222', color: '#080808', padding: '13px 30px', fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#EF4444'}
                onMouseLeave={e => e.currentTarget.style.background = '#CC2222'}
              >View Work</a>
              <a href="#contact"
                style={{ border: '1px solid rgba(204,34,34,0.4)', color: '#CC2222', padding: '13px 30px', fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#CC2222'; e.currentTarget.style.background = 'rgba(204,34,34,0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(204,34,34,0.4)'; e.currentTarget.style.background = 'transparent'; }}
              >Get In Touch</a>
            </motion.div>

            {/* Socials — always visible */}
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <span style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(232,224,204,0.2)', marginRight: 4 }}>Find me</span>
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{ color: 'rgba(232,224,204,0.3)', fontSize: 18, textDecoration: 'none', transition: 'color 0.25s, transform 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#CC2222'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(232,224,204,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                ><Icon /></a>
              ))}
            </motion.div>
          </motion.div>

          {/* PHOTO — hidden on mobile via CSS class */}
          <motion.div
            className="hero-photo"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22,1,0.36,1], delay: 0.3 }}
            style={{ position: 'relative', flexShrink: 0 }}
          >
            <div className="hero-photo-deco">
              <div style={{ position: 'absolute', top: -12, right: -12, width: '100%', height: '100%', border: '1px solid rgba(204,34,34,0.2)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -12, left: -12, width: '100%', height: '100%', border: '1px solid rgba(204,34,34,0.1)', pointerEvents: 'none' }} />
            </div>

            <div className="hero-photo-frame" style={{ overflow: 'hidden', position: 'relative', border: '1px solid rgba(204,34,34,0.25)', boxShadow: '0 0 60px rgba(204,34,34,0.08),0 30px 80px rgba(0,0,0,0.6)', background: '#0f0f0f' }}>
              {/* Fallback — sits at z-index 0, behind the image */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, color: 'rgba(204,34,34,0.2)' }}>
                <RiUser3Line style={{ fontSize: 52 }} />
                <span style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(204,34,34,0.25)' }}>profile.jpg</span>
              </div>
              {/* Image — z-index 1, covers the fallback */}
              <img src="/profile-photo.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block', position: 'relative', zIndex: 1 }}
                onError={e => { e.currentTarget.style.display = 'none'; }} />
              {/* Gradient overlay — z-index 2, sits above image */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', zIndex: 2, background: 'linear-gradient(to top,rgba(8,8,8,0.7),transparent)' }} />
            </div>

            {/* Status chip — sits below the frame, never overlaps */}
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }}
              style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 10, background: '#0f0f0f', border: '1px solid rgba(204,34,34,0.3)', padding: '8px 16px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                style={{ width: 7, height: 7, borderRadius: '50%', background: '#CC2222', flexShrink: 0 }}
              />
              <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(232,224,204,0.5)' }}>Open to work</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
