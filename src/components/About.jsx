import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import DecryptedText from './DecryptedText';

const socials = [
  { Icon: FaGithub,    href: 'https://github.com/YOUR_GITHUB',    label: 'GitHub' },
  { Icon: FaFacebook,  href: 'https://facebook.com/YOUR_PROFILE', label: 'Facebook' },
  { Icon: FaInstagram, href: 'https://instagram.com/YOUR_HANDLE', label: 'Instagram' },
  { Icon: FaWhatsapp,  href: 'https://wa.me/YOUR_NUMBER',         label: 'WhatsApp' },
];

const stats = [
  { value: '6+',   label: 'Projects' },
  { value: '3+',   label: 'Years Coding' },
  { value: '100%', label: 'Dedicated' },
];

const fadeL = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22,1,0.36,1] } } };
const fadeR = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22,1,0.36,1], delay: 0.15 } } };

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <>
      <div className="divider" />
      <section id="about" className="section-pad" ref={ref}>
        <div className="wrap">
          <div className="section-tag"><span><DecryptedText text="About Me" animateOn="view" speed={75} maxIterations={18} encryptedClassName="char-encrypted" className="char-revealed" /></span></div>

          <div className="two-col">
            {/* LEFT */}
            <motion.div variants={fadeL} initial="hidden" animate={inView ? 'show' : 'hidden'}>
              <h2 className="serif" style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 900, lineHeight: 1.05, color: '#e8e0cc', marginBottom: 28 }}>
                <DecryptedText text="Crafting with" animateOn="view" sequential revealDirection="start" speed={110} maxIterations={25} encryptedClassName="char-encrypted" className="char-revealed" />
                <br /><span className="gold-gradient">purpose.</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(232,224,204,0.5)', marginBottom: 16 }}>
                I'm a developer who believes great software is a blend of clean code and thoughtful design. Every project I take on is approached with precision and a relentless drive for quality.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(232,224,204,0.5)', marginBottom: 44 }}>
                When I'm not building things, I'm exploring new technologies and pushing the boundaries of what's possible on the web.
              </p>

              {/* Social icons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(232,224,204,0.2)', marginRight: 6 }}>Connect</span>
                {socials.map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    style={{ width: 38, height: 38, border: '1px solid rgba(204,34,34,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(232,224,204,0.35)', fontSize: 14, textDecoration: 'none', transition: 'all 0.25s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#CC2222'; e.currentTarget.style.borderColor = 'rgba(204,34,34,0.6)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(232,224,204,0.35)'; e.currentTarget.style.borderColor = 'rgba(204,34,34,0.18)'; }}
                  ><Icon /></a>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div variants={fadeR} initial="hidden" animate={inView ? 'show' : 'hidden'} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {/* Stats */}
              <div className="about-stats">
                {stats.map((s, i) => (
                  <div key={s.label} style={{ padding: '32px 16px', textAlign: 'center', background: '#080808', borderRight: i < stats.length - 1 ? '1px solid rgba(204,34,34,0.08)' : 'none' }}>
                    <div className="serif gold-gradient" style={{ fontSize: 38, fontWeight: 900, lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                    <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(232,224,204,0.3)' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Info rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { label: 'Focus',     value: 'Full-Stack Development' },
                  { label: 'Stack',     value: 'React · Next.js · Node · SQL' },
                  { label: 'Available', value: 'Open to new opportunities' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', border: '1px solid rgba(204,34,34,0.08)', borderLeft: '2px solid rgba(204,34,34,0.4)', flexWrap: 'wrap', gap: 8 }}>
                    <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(232,224,204,0.3)' }}>{item.label}</span>
                    <span style={{ fontSize: 13, color: 'rgba(232,224,204,0.65)' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
