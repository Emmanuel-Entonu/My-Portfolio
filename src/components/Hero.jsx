import { motion, useScroll, useTransform } from 'framer-motion';
import { PiCubeDuotone, PiCodeDuotone, PiGitBranchDuotone, PiGlobeDuotone } from 'react-icons/pi';
import { RiArrowDownLine, RiFileTextLine } from 'react-icons/ri';
import DecryptedText from './DecryptedText';
import MoltenMetal from './MoltenMetal';
import { socials } from '../content';

const ease = [0.22, 1, 0.36, 1];

const floaters = [
  { Icon: PiCubeDuotone,      className: 'floater f1', drift: 140, delay: 0.6 },
  { Icon: PiGlobeDuotone,     className: 'floater f2', drift: 260, delay: 0.8 },
  { Icon: PiCodeDuotone,      className: 'floater f3', drift: 200, delay: 0.7 },
  { Icon: PiGitBranchDuotone, className: 'floater f4', drift: 320, delay: 0.9 },
];

const stagger = { show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp  = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.7, ease } } };
const popIn   = { hidden: { scale: 0.85, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: 0.9, ease } } };

function Floater({ Icon, className, drift, delay }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, -drift]);
  return (
    <motion.div
      className={className}
      style={{ y }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 0.75, scale: 1 }}
      transition={{ duration: 1, ease, delay }}
      aria-hidden="true"
    >
      <Icon />
    </motion.div>
  );
}

function Blank({ text }) {
  return (
    <span className="blank">
      <DecryptedText text={text} animateOn="view" sequential revealDirection="start" speed={90} maxIterations={20} encryptedClassName="char-encrypted" className="char-revealed" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <MoltenMetal
          color1="#350e0e"
          color2="#EF4444"
          color3="#FFFFFF"
          speed={0.35}
          scale={4}
          detail={3}
          glow={1.6}
          coreSize={0.1}
          swirl={1}
          fold={-0.2}
          blackPoint={0.05}
          brightness={1.3}
          colorMode="molten"
          grain={true}
          grainIntensity={0.05}
          mouseInteraction={true}
          mouseStrength={0.3}
          opacity={1.0}
        />
      </div>

      <div className="floaters">
        {floaters.map(f => <Floater key={f.className} {...f} />)}
      </div>

      <motion.div className="wrap hero-inner" variants={stagger} initial="hidden" animate="show">
        <motion.div className="hero-photo" variants={popIn}>
          <img src="/profile-photo.jpg" alt="Emmanuel Entonu" width="176" height="176"
            onError={e => { e.currentTarget.style.visibility = 'hidden'; }} />
        </motion.div>

        <motion.div className="section-tag is-center hero-name" variants={fadeUp}>
          <span>
            <DecryptedText text="Emmanuel Entonu" animateOn="view" sequential revealDirection="start" speed={80} maxIterations={20} encryptedClassName="char-encrypted" className="char-revealed" />
          </span>
        </motion.div>

        <motion.h1 className="hero-title" variants={fadeUp}>
          I'm a full-stack software developer based in <span className="nowrap"><Blank text="Nigeria" />,</span> specializing in <span className="nowrap"><Blank text="React & Next.js" />.</span>
        </motion.h1>

        <motion.p className="hero-sub" variants={fadeUp}>
          Currently Chief Software Engineer at Moneta Capital Investment Limited. I build trading platforms, mobile apps, and web products, and I'm open to freelance work.
        </motion.p>

        <motion.div className="hero-actions" variants={fadeUp}>
          <a href="#projects" className="btn btn-red">View Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
          <a href="/cv" className="btn btn-outline"><RiFileTextLine aria-hidden="true" /> View CV</a>
        </motion.div>

        <motion.div className="hero-socials" variants={fadeUp}>
          <small>Find me</small>
          {socials.map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon /></a>
          ))}
        </motion.div>
      </motion.div>

      <a href="#about" className="scroll-cue">
        Scroll down
        <RiArrowDownLine aria-hidden="true" />
      </a>
    </section>
  );
}
