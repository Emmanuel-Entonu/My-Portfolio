import Reveal from './Reveal';
import DecryptedText from './DecryptedText';
import { socials, stats } from '../content';

const facts = [
  { label: 'Current role', value: 'Chief Software Engineer, Moneta Capital Investment Limited', wide: true },
  { label: 'Focus',     value: 'Full-Stack Software Development' },
  { label: 'Available', value: 'Open to freelance work' },
  { label: 'Stack',     value: 'React · Next.js · React Native · Node · TypeScript', wide: true },
];

export default function About() {
  return (
    <>
      <div className="divider" />
      <section id="about" className="section-pad">
        <div className="wrap">
          <div className="section-tag"><span><DecryptedText text="About Me" animateOn="view" speed={75} maxIterations={18} encryptedClassName="char-encrypted" className="char-revealed" /></span></div>

          <div className="about-grid">
            <Reveal>
              <h2 className="h2" style={{ fontSize: 'clamp(40px, 6.5vw, 80px)', lineHeight: 0.98 }}>
                <DecryptedText text="Real work." animateOn="view" sequential revealDirection="start" speed={110} maxIterations={25} encryptedClassName="char-encrypted" className="char-revealed" />
                <br /><span className="gold-gradient">Real clients.</span>
              </h2>
              <div className="icon-links">
                {socials.map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-link"><Icon /></a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="lead">
                I'm a full-stack software developer based in Nigeria, and currently the Chief Software Engineer at Moneta Capital Investment Limited, where I built ETICO, a stock trading platform and its mobile app. On the side I've shipped an online college, and sites for churches, real estate firms, non-profits, and e-commerce brands across Nigeria, Germany, and Canada.
              </p>
              <p className="lead">
                I like code that's easy to read and interfaces that stay out of the way. I'd rather ship one thing that works well than three that kinda do.
              </p>
              <dl className="facts">
                {facts.map(f => (
                  <div key={f.label} className={`fact${f.wide ? ' is-wide' : ''}`}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal className="stats-band" delay={0.1}>
            {stats.map(s => (
              <div key={s.label}>
                <div className="stat-value gold-gradient">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
