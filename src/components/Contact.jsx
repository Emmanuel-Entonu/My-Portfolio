import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiSendPlaneLine, RiCheckLine, RiArrowRightUpLine } from 'react-icons/ri';
import Reveal from './Reveal';
import DecryptedText from './DecryptedText';
import { socials } from '../content';

const FORMSPREE = 'https://formspree.io/f/xzzrgnvr';

const inputStyle = {
  width: '100%', background: 'transparent', border: 'none',
  borderBottom: '1px solid rgba(204,34,34,0.18)',
  color: '#e8e0cc', fontSize: 14, padding: '14px 0',
  outline: 'none', transition: 'border-color 0.25s',
  fontFamily: 'Inter, sans-serif',
};

const labelStyle = {
  fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase',
  color: 'rgba(232,224,204,0.3)', display: 'block', marginBottom: 8,
};

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
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
      <section id="contact" className="section-pad">
        <div className="wrap">
          <div className="section-tag"><span><DecryptedText text="Contact" animateOn="view" speed={75} maxIterations={18} encryptedClassName="char-encrypted" className="char-revealed" /></span></div>

          <div className="contact-grid">
            <Reveal>
              <h2 className="h2" style={{ fontSize: 'clamp(40px, 6.5vw, 80px)', lineHeight: 0.98 }}>
                <DecryptedText text="Let's" animateOn="view" sequential revealDirection="start" speed={110} maxIterations={25} encryptedClassName="char-encrypted" className="char-revealed" />
                <br /><span className="gold-gradient">talk.</span>
              </h2>
              <p className="lead">
                Client work, a collab, or just a hello. My inbox is open, and I try to reply within a day.
              </p>

              <div className="contact-list">
                <small>Find me on</small>
                <ul>
                  {socials.map(({ Icon, href, label, handle }) => (
                    <li key={label}>
                      <a href={href} target="_blank" rel="noopener noreferrer" className="contact-row">
                        <span className="contact-ico"><Icon /></span>
                        <span className="contact-meta">
                          <small>{label}</small>
                          <span>{handle}</span>
                        </span>
                        <RiArrowRightUpLine className="contact-arrow" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, ease: [0.22,1,0.36,1], delay: 0.15 }}>
              {status === 'success' ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 360, gap: 16, textAlign: 'center' }}>
                  <div style={{ width: 54, height: 54, border: '1px solid rgba(204,34,34,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <RiCheckLine style={{ color: '#CC2222', fontSize: 22 }} />
                  </div>
                  <h3 className="serif" style={{ fontSize: 24, color: '#e8e0cc' }}>Message Sent</h3>
                  <p style={{ fontSize: 13, color: 'rgba(232,224,204,0.4)' }}>Thank you. I'll be in touch soon.</p>
                  <button onClick={() => setStatus('idle')} style={{ marginTop: 16, background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(204,34,34,0.5)' }}>
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                  <div className="form-name-row">
                    <div>
                      <label htmlFor="c-name" style={labelStyle}>Name</label>
                      <input id="c-name" name="name" type="text" placeholder="Your name" value={form.name} onChange={onChange} required style={inputStyle}
                        onFocus={e => e.target.style.borderBottomColor = '#CC2222'}
                        onBlur={e => e.target.style.borderBottomColor = 'rgba(204,34,34,0.18)'} />
                    </div>
                    <div>
                      <label htmlFor="c-email" style={labelStyle}>Email</label>
                      <input id="c-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={onChange} required style={inputStyle}
                        onFocus={e => e.target.style.borderBottomColor = '#CC2222'}
                        onBlur={e => e.target.style.borderBottomColor = 'rgba(204,34,34,0.18)'} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="c-message" style={labelStyle}>Message</label>
                    <textarea id="c-message" name="message" placeholder="Tell me about your project..." value={form.message} onChange={onChange} required rows={6}
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
