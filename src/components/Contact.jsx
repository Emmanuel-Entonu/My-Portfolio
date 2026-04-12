import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { RiSendPlaneLine, RiCheckLine } from 'react-icons/ri';
import DecryptedText from './DecryptedText';

const FORMSPREE = 'https://formspree.io/f/xzzrgnvr';

const socials = [
  { Icon: FaGithub,    href: 'https://github.com/YOUR_GITHUB',    label: 'GitHub' },
  { Icon: FaFacebook,  href: 'https://facebook.com/YOUR_PROFILE', label: 'Facebook' },
  { Icon: FaInstagram, href: 'https://instagram.com/YOUR_HANDLE', label: 'Instagram' },
  { Icon: FaWhatsapp,  href: 'https://wa.me/YOUR_NUMBER',         label: 'WhatsApp' },
];

const inputStyle = {
  width: '100%', background: 'transparent', border: 'none',
  borderBottom: '1px solid rgba(204,34,34,0.18)',
  color: '#e8e0cc', fontSize: 14, padding: '14px 0',
  outline: 'none', transition: 'border-color 0.25s',
  fontFamily: 'Outfit, sans-serif',
};

const labelStyle = {
  fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase',
  color: 'rgba(232,224,204,0.3)', display: 'block', marginBottom: 8,
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm]   = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = async e => {
    e.preventDefault(); setStatus('loading');
    try {
      const r = await fetch(FORMSPREE, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(form) });
      setStatus(r.ok ? 'success' : 'error');
      if (r.ok) setForm({ name: '', email: '', message: '' });
    } catch { setStatus('error'); }
  };

  return (
    <>
      <div className="divider" />
      <section id="contact" className="section-pad" ref={ref}>
        <div className="container">
          <div className="section-tag"><span><DecryptedText text="Contact" animateOn="view" speed={75} maxIterations={18} encryptedClassName="char-encrypted" className="char-revealed" /></span></div>

          <div className="contact-grid">

            {/* LEFT */}
            <motion.div initial={{ x: -30, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}>
              <h2 className="serif" style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, lineHeight: 1.05, color: '#e8e0cc', marginBottom: 20 }}>
                <DecryptedText text="Let's build" animateOn="view" sequential revealDirection="start" speed={110} maxIterations={25} encryptedClassName="char-encrypted" className="char-revealed" />
                <br /><span className="gold-gradient">something great.</span>
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(232,224,204,0.45)', marginBottom: 48, maxWidth: 340 }}>
                Have a project in mind or just want to say hello? My inbox is always open — I'll get back to you as soon as possible.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(232,224,204,0.2)', marginBottom: 14, display: 'block' }}>Find me on</span>
                {socials.map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0', borderBottom: '1px solid rgba(204,34,34,0.06)', color: 'rgba(232,224,204,0.35)', textDecoration: 'none', fontSize: 13, transition: 'color 0.25s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#CC2222'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,224,204,0.35)'}
                  >
                    <Icon style={{ fontSize: 16 }} />
                    <span style={{ letterSpacing: '0.06em' }}>{label}</span>
                    <span style={{ marginLeft: 'auto', fontSize: 11, opacity: 0.3 }}>→</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div initial={{ x: 30, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.8, ease: [0.22,1,0.36,1], delay: 0.15 }}>
              {status === 'success' ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 360, gap: 16, textAlign: 'center' }}>
                  <div style={{ width: 54, height: 54, border: '1px solid rgba(204,34,34,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <RiCheckLine style={{ color: '#CC2222', fontSize: 22 }} />
                  </div>
                  <h3 className="serif" style={{ fontSize: 24, color: '#e8e0cc' }}>Message Sent</h3>
                  <p style={{ fontSize: 13, color: 'rgba(232,224,204,0.4)' }}>Thank you — I'll be in touch soon.</p>
                  <button onClick={() => setStatus('idle')} style={{ marginTop: 16, background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(204,34,34,0.5)' }}>
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                  <div className="form-name-row">
                    <div>
                      <label style={labelStyle}>Name</label>
                      <input name="name" type="text" placeholder="Your name" value={form.name} onChange={onChange} required style={inputStyle}
                        onFocus={e => e.target.style.borderBottomColor = '#CC2222'}
                        onBlur={e => e.target.style.borderBottomColor = 'rgba(204,34,34,0.18)'} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={onChange} required style={inputStyle}
                        onFocus={e => e.target.style.borderBottomColor = '#CC2222'}
                        onBlur={e => e.target.style.borderBottomColor = 'rgba(204,34,34,0.18)'} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea name="message" placeholder="Tell me about your project..." value={form.message} onChange={onChange} required rows={6}
                      style={{ ...inputStyle, resize: 'none', display: 'block' }}
                      onFocus={e => e.target.style.borderBottomColor = '#CC2222'}
                      onBlur={e => e.target.style.borderBottomColor = 'rgba(204,34,34,0.18)'} />
                  </div>

                  {status === 'error' && <p style={{ fontSize: 12, color: '#f87171' }}>Something went wrong. Please try again.</p>}

                  <button type="submit" disabled={status === 'loading'}
                    style={{ background: '#CC2222', color: '#080808', border: 'none', padding: '16px 40px', fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'background 0.25s', opacity: status === 'loading' ? 0.6 : 1, width: '100%' }}
                    onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.background = '#EF4444'; }}
                    onMouseLeave={e => e.currentTarget.style.background = '#CC2222'}
                  >
                    {status === 'loading' ? 'Sending…' : <><span>Send Message</span><RiSendPlaneLine /></>}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
