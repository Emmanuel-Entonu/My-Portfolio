import { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { RiExternalLinkLine } from 'react-icons/ri';
import DecryptedText from './DecryptedText';

const projects = [
  {
    id: '01',
    type: 'client',
    featured: true,
    title: 'Place to Worship',
    desc: 'A church directory platform based in Germany, helping users find and connect with places of worship near them.',
    tags: ['Next.js', 'PostgreSQL'],
    image: '/Place to worshhip.png',
    github: '#',
    live: 'https://www.placetoworship.org',
  },
  {
    id: '02',
    type: 'client',
    featured: false,
    title: 'Glow Haven Beauty Lounge',
    desc: 'E-commerce beauty store with Firebase inventory, Paystack payments, and a glassmorphic UI.',
    tags: ['Firebase', 'Bootstrap', 'Paystack'],
    image: '/GlowHavenLOunge.png',
    github: '#',
    live: 'https://glowhavenbeautylounge.com.ng',
  },
  {
    id: '03',
    type: 'client',
    featured: false,
    title: 'Green Ambiant Lodge',
    desc: 'Full Airbnb-style listing site — photo gallery, video tour, Firebase reviews, and Google Maps.',
    tags: ['Firebase', 'Google Maps', 'JavaScript'],
    image: '/Cozy Haven.png',
    github: '#',
    live: 'https://thegreenambientlodge.com.ng',
  },
  {
    id: '04',
    type: 'personal',
    featured: true,
    title: 'Weather Application',
    desc: 'Interactive weather app with real-time data, location-based forecasts, and a fully responsive UI.',
    tags: ['JavaScript', 'CSS'],
    image: '/Modern Weather App - Opera 09_05_2025 01_13_02.png',
    github: '#',
    live: 'https://weather-app-mu-ten-91.vercel.app',
  },
  {
    id: '05',
    type: 'client',
    featured: false,
    title: 'EL & EN Estate Limited',
    desc: 'Premium real estate website built for a registered property development company based in Abuja.',
    tags: ['Bootstrap 5', 'CSS', 'JavaScript'],
    image: '/El AND EN.png',
    github: '#',
    live: 'https://emmanuel-entonu.github.io/El-EN/',
  },
];

function TypeBadge({ type }) {
  const isClient = type === 'client';
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600,
      padding: '4px 10px',
      border: `1px solid ${isClient ? 'rgba(204,34,34,0.45)' : 'rgba(232,224,204,0.12)'}`,
      color: isClient ? 'rgba(204,34,34,0.9)' : 'rgba(232,224,204,0.35)',
      background: isClient ? 'rgba(204,34,34,0.07)' : 'rgba(232,224,204,0.03)',
    }}>
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: isClient ? '#CC2222' : 'rgba(232,224,204,0.3)', flexShrink: 0 }} />
      {isClient ? 'Client Project' : 'Personal Project'}
    </div>
  );
}

function Card({ p, i, inView }) {
  const mx    = useMotionValue(0);
  const my    = useMotionValue(0);
  const rotX  = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 400, damping: 40 });
  const rotY  = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 400, damping: 40 });
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const spotBg = useTransform([spotX, spotY], ([x, y]) =>
    `radial-gradient(circle at ${x}px ${y}px, rgba(204,34,34,0.09) 0%, transparent 65%)`
  );

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top)  / r.height - 0.5);
    spotX.set(e.clientX - r.left);
    spotY.set(e.clientY - r.top);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  const imgH = p.featured ? 240 : 180;

  return (
    <motion.article
      initial={{ y: 32, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.65, ease: [0.22,1,0.36,1], delay: i * 0.09 }}
      className="card"
      style={{
        rotateX: rotX, rotateY: rotY,
        transformPerspective: 700,
        background: '#0f0f0f',
        border: '1px solid rgba(204,34,34,0.1)',
        display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
        height: '100%',
      }}
      whileHover={{
        borderColor: 'rgba(204,34,34,0.45)',
        boxShadow: '0 24px 64px rgba(204,34,34,0.13), 0 0 0 1px rgba(204,34,34,0.18)',
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Cursor spotlight */}
      <motion.div style={{ position: 'absolute', inset: 0, background: spotBg, pointerEvents: 'none', zIndex: 0 }} />

      {/* Top reveal line */}
      <motion.div
        style={{ position: 'absolute', top: 0, left: 0, height: 2, background: 'linear-gradient(90deg,#CC2222,#EF4444)', originX: 0, zIndex: 2 }}
        initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.45 }}
      />

      {/* EE Monogram — bottom left watermark */}
      <div style={{ position: 'absolute', bottom: 6, left: 14, display: 'flex', alignItems: 'flex-end', userSelect: 'none', zIndex: 1, lineHeight: 1 }}>
        {/* First E — filled, from Emmanuel */}
        <span className="serif" style={{
          fontSize: p.featured ? 88 : 64, fontWeight: 900, lineHeight: 1,
          color: 'rgba(232,224,204,0.055)', letterSpacing: '-0.04em',
        }}>E</span>
        {/* Second E — outlined, from Entonu */}
        <span className="serif" style={{
          fontSize: p.featured ? 88 : 64, fontWeight: 900, lineHeight: 1,
          WebkitTextStroke: '1.5px rgba(204,34,34,0.18)',
          color: 'transparent',
          fontFamily: 'Syne, sans-serif',
          marginLeft: '-0.18em',
        }}>E</span>
      </div>

      {/* Image */}
      <div style={{ margin: '-32px -28px 20px', height: imgH, overflow: 'hidden', position: 'relative', borderBottom: '1px solid rgba(204,34,34,0.1)', background: '#080808', zIndex: 1 }}>
        <img
          src={p.image}
          alt={p.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          onError={e => { e.currentTarget.style.display = 'none'; }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(15,15,15,0.65) 100%)' }} />
        <div style={{ position: 'absolute', top: 12, right: 12 }}>
          <TypeBadge type={p.type} />
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14, position: 'relative', zIndex: 1 }}>
        {p.tags.map(t => (
          <span key={t} style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(204,34,34,0.55)', border: '1px solid rgba(204,34,34,0.15)', padding: '3px 8px' }}>{t}</span>
        ))}
      </div>

      <h3 className="serif" style={{ fontSize: p.featured ? 24 : 20, fontWeight: 700, color: '#e8e0cc', marginBottom: 10, lineHeight: 1.2, position: 'relative', zIndex: 1 }}>
        <DecryptedText text={p.title} animateOn="hover" speed={65} maxIterations={14} encryptedClassName="char-encrypted" className="char-revealed" />
      </h3>
      <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(232,224,204,0.4)', marginBottom: 24, flex: 1, position: 'relative', zIndex: 1 }}>
        {p.desc}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid rgba(204,34,34,0.07)', position: 'relative', zIndex: 1 }}>
        {p.github && p.github !== '#' ? (
          <a href={p.github} target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(232,224,204,0.35)', textDecoration: 'none', transition: 'color 0.25s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#CC2222'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,224,204,0.35)'}
          >
            <FaGithub style={{ fontSize: 14 }} /> GitHub
          </a>
        ) : <span />}
        {p.live && (
          <a href={p.live} target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#CC2222', textDecoration: 'none', border: '1px solid rgba(204,34,34,0.45)', padding: '8px 18px', transition: 'all 0.25s', background: 'rgba(204,34,34,0.06)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#CC2222'; e.currentTarget.style.color = '#080808'; e.currentTarget.style.borderColor = '#CC2222'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(204,34,34,0.06)'; e.currentTarget.style.color = '#CC2222'; e.currentTarget.style.borderColor = 'rgba(204,34,34,0.45)'; }}
          >
            Live <RiExternalLinkLine style={{ fontSize: 13 }} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <>
      <div className="divider" />
      <section id="projects" className="section-pad" ref={ref}>
        <div className="wrap">
          <div className="section-tag"><span><DecryptedText text="Selected Work" animateOn="view" speed={75} maxIterations={18} encryptedClassName="char-encrypted" className="char-revealed" /></span></div>

          <div className="projects-head">
            <motion.h2 className="serif"
              initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7 }}
              style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, lineHeight: 1.05, color: '#e8e0cc' }}
            >
              <DecryptedText text="Projects that speak" animateOn="view" sequential revealDirection="start" speed={110} maxIterations={25} encryptedClassName="char-encrypted" className="char-revealed" />
              <br />
              <span className="gold-stroke" style={{ fontFamily: 'Syne, sans-serif' }}>for themselves.</span>
            </motion.h2>
            <motion.a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
              style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(204,34,34,0.5)', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color 0.25s', flexShrink: 0, paddingBottom: 6 }}
              onMouseEnter={e => e.currentTarget.style.color = '#CC2222'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(204,34,34,0.5)'}
            >View all on GitHub →</motion.a>
          </div>

          {/* Bento grid */}
          <div className="bento-grid">
            {projects.map((p, i) => <Card key={p.id} p={p} i={i} inView={inView} />)}
          </div>
        </div>
      </section>
    </>
  );
}
