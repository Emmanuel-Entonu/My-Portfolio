import { motion } from 'framer-motion';
import Reveal from './Reveal';
import DecryptedText from './DecryptedText';
import { skills } from '../content';

const ease = [0.22, 1, 0.36, 1];

export default function Skills() {
  return (
    <>
      <div className="divider" />
      <section id="stack" className="section-pad">
        <div className="wrap stack-grid-wrap">
          <Reveal>
            <div className="section-tag"><span><DecryptedText text="Tech Stack" animateOn="view" speed={75} maxIterations={18} encryptedClassName="char-encrypted" className="char-revealed" /></span></div>
            <h2 className="h2">
              <DecryptedText text="Technologies I" animateOn="view" sequential revealDirection="start" speed={110} maxIterations={25} encryptedClassName="char-encrypted" className="char-revealed" />
              <br /><span className="gold-stroke">work with.</span>
            </h2>
            <p className="lead">My working stack. What I reach for when a project actually needs to ship.</p>
            <div className="stack-count">
              <strong>{skills.length}</strong>
              <span>Technologies</span>
            </div>
          </Reveal>

          <ul className="stack-grid">
            {skills.map(({ name, Icon, color }, i) => (
              <motion.li
                key={name}
                className="tech"
                style={{ '--brand': color }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.05 }}
              >
                <Icon aria-hidden="true" />
                <span>{name}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
