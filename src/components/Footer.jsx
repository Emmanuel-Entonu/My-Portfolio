import { FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import DecryptedText from './DecryptedText';

const socials = [
  { Icon: FaGithub,    href: 'https://github.com/YOUR_GITHUB',    label: 'GitHub' },
  { Icon: FaFacebook,  href: 'https://facebook.com/YOUR_PROFILE', label: 'Facebook' },
  { Icon: FaInstagram, href: 'https://instagram.com/YOUR_HANDLE', label: 'Instagram' },
  { Icon: FaWhatsapp,  href: 'https://wa.me/YOUR_NUMBER',         label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <>
      <div className="divider" />
      <footer style={{ padding: '40px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <span className="serif" style={{ fontSize: 15, fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(204,34,34,0.5)', textTransform: 'uppercase' }}>
            <DecryptedText text="Emmanuel Entonu" animateOn="hover" speed={70} maxIterations={14} encryptedClassName="char-encrypted" className="char-revealed" />
          </span>
          <span style={{ fontSize: 12, color: 'rgba(232,224,204,0.18)', letterSpacing: '0.08em' }}>
            © {new Date().getFullYear()} — All rights reserved
          </span>
          <div style={{ display: 'flex', gap: 16 }}>
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{ color: 'rgba(232,224,204,0.2)', fontSize: 14, textDecoration: 'none', transition: 'color 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#CC2222'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,224,204,0.2)'}
              ><Icon /></a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
