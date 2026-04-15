import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiReact, SiNextdotjs, SiHtml5, SiJavascript, SiMysql, SiBootstrap, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import DecryptedText from './DecryptedText';

const skills = [
  { name: 'React',       Icon: SiReact,      glow: 'rgba(97,218,251,0.15)'  },
  { name: 'Next.js',     Icon: SiNextdotjs,  glow: 'rgba(255,255,255,0.08)' },
  { name: 'JavaScript',  Icon: SiJavascript, glow: 'rgba(247,223,30,0.15)'  },
  { name: 'HTML',        Icon: SiHtml5,      glow: 'rgba(228,77,38,0.18)'   },
  { name: 'CSS',         Icon: FaCss3Alt,    glow: 'rgba(38,77,228,0.15)'   },
  { name: 'Bootstrap',   Icon: SiBootstrap,  glow: 'rgba(102,16,242,0.15)'  },
  { name: 'SQL',         Icon: SiMysql,      glow: 'rgba(0,117,143,0.15)'   },
  { name: 'TypeScript',  Icon: SiTypescript,  glow: 'rgba(49,120,198,0.18)'  },
  { name: 'Tailwind',    Icon: SiTailwindcss, glow: 'rgba(56,189,248,0.18)'  },
];

function Tile({ name, Icon, glow, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.22,1,0.36,1], delay }}
      whileHover={{ y: -8, scale: 1.06 }}
      style={{
        position: 'relative',
        aspectRatio: '1 / 1',
        background: '#0d0d0d',
        border: '1px solid rgba(204,34,34,0.1)',
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        cursor: 'default',
        overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      whileHover2={{ borderColor: 'rgba(204,34,34,0.4)', boxShadow: `0 20px 60px ${glow}, 0 0 0 1px rgba(204,34,34,0.2)` }}
    >
      {/* Brand glow blob behind icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ opacity: 1, scale: 1.4 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute',
          width: '60%', height: '60%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`,
          filter: 'blur(16px)',
          pointerEvents: 'none',
        }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.2, color: '#e8e0cc' }}
        transition={{ duration: 0.3 }}
        style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: 'rgba(232,224,204,0.35)', position: 'relative', zIndex: 1 }}
      >
        <Icon />
      </motion.div>

      {/* Name */}
      <motion.span
        whileHover={{ color: 'rgba(232,224,204,0.9)' }}
        transition={{ duration: 0.25 }}
        style={{
          fontSize: 10, fontWeight: 700,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(232,224,204,0.3)',
          fontFamily: 'Outfit, sans-serif',
          position: 'relative', zIndex: 1,
        }}
      >
        <DecryptedText text={name} animateOn="hover" speed={65} maxIterations={14} encryptedClassName="char-encrypted" className="char-revealed" />
      </motion.span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <div className="divider" />
      <section id="skills" className="section-pad" ref={ref}>
        <div className="wrap">
          <div className="section-tag"><span><DecryptedText text="Skills" animateOn="view" speed={75} maxIterations={18} encryptedClassName="char-encrypted" className="char-revealed" /></span></div>

          <div className="skills-layout">

            {/* Left — sticky info panel */}
            <div className="skills-info">
              <motion.h2
                className="serif"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7 }}
                style={{ fontSize: 'clamp(32px,4.5vw,52px)', fontWeight: 900, lineHeight: 1.05, color: '#e8e0cc', marginBottom: 24 }}
              >
                <DecryptedText text="What I" animateOn="view" sequential revealDirection="start" speed={110} maxIterations={25} encryptedClassName="char-encrypted" className="char-revealed" />
                <br />
                <span className="gold-stroke" style={{ fontFamily: 'Syne, sans-serif' }}>build with.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.15, duration: 0.6 }}
                style={{ fontSize: 13, lineHeight: 1.85, color: 'rgba(232,224,204,0.35)', marginBottom: 40 }}
              >
                My core stack — the technologies I reach for to ship fast, reliable, full-stack products from idea to deployment.
              </motion.p>

              {/* Stats */}
              {[
                { value: '9', label: 'Technologies' },
                { value: '3+', label: 'Years coding'  },
                { value: '5',  label: 'Live projects'  },
              ].map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 16 }}
                >
                  <span className="serif" style={{ fontSize: 36, fontWeight: 900, color: '#CC2222', lineHeight: 1 }}>{value}</span>
                  <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(232,224,204,0.3)', fontFamily: 'Outfit, sans-serif' }}>{label}</span>
                </motion.div>
              ))}
            </div>

            {/* Right — icon grid */}
            <div className="skills-tiles">
              {skills.map(({ name, Icon, glow }, i) => (
                <Tile key={name} name={name} Icon={Icon} glow={glow} delay={0.1 + i * 0.06} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
