import DecryptedText from './DecryptedText';
import { navLinks, socials } from '../content';

export default function Footer() {
  return (
    <>
      <div className="divider" />
      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <div>
              <a href="#hero" className="logo">
                <DecryptedText text="Emmanuel" animateOn="hover" speed={70} maxIterations={14} encryptedClassName="char-encrypted" className="char-revealed" />{' '}
                <b><DecryptedText text="Entonu" animateOn="hover" speed={70} maxIterations={14} encryptedClassName="char-encrypted" className="char-revealed" /></b>
              </a>
              <p className="footer-tagline">Chief Software Engineer, Moneta Capital Investment Limited. Full-stack software developer based in Nigeria.</p>
            </div>

            <ul className="footer-nav">
              {navLinks.map(l => <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>)}
              <li><a href="#contact">Contact</a></li>
              <li><a href="/cv">CV</a></li>
            </ul>

            <div className="icon-links">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-link"><Icon /></a>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Emmanuel Entonu. All rights reserved</span>
            <a href="#hero">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
