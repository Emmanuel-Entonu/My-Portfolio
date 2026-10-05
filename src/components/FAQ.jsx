import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiAddLine } from 'react-icons/ri';
import Reveal from './Reveal';
import DecryptedText from './DecryptedText';
import { faqs } from '../content';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <div className="divider" />
      <section id="faq" className="section-pad">
        <div className="wrap faq-wrap">
          <Reveal className="faq-head">
            <div className="section-tag is-center"><span><DecryptedText text="FAQs" animateOn="view" speed={75} maxIterations={18} encryptedClassName="char-encrypted" className="char-revealed" /></span></div>
            <h2 className="h2">
              <DecryptedText text="Questions," animateOn="view" sequential revealDirection="start" speed={110} maxIterations={25} encryptedClassName="char-encrypted" className="char-revealed" />
              {' '}<span className="gold-gradient">answered.</span>
            </h2>
          </Reveal>

          <Reveal>
            <ul className="faq-list">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q} className={`faq-item${isOpen ? ' is-open' : ''}`}>
                    <button
                      className="faq-q"
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span className="faq-q-text">{f.q}</span>
                      <span className="faq-icon" aria-hidden="true"><RiAddLine /></span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="faq-a"
                          id={`faq-a-${i}`}
                          role="region"
                          aria-labelledby={`faq-q-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p>{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <p className="faq-foot">
            Still have a question?
            <a href="#contact" className="link-arrow">Ask me directly →</a>
          </p>
        </div>
      </section>
    </>
  );
}
