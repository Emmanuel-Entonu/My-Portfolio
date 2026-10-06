import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine, RiArrowLeftSLine, RiArrowRightSLine, RiErrorWarningLine } from 'react-icons/ri';
import Phone from './Phone';

const ease = [0.22, 1, 0.36, 1];

const slide = {
  enter:  dir => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:   dir => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function Gallery({ title, images, label = 'Gallery', notice, phone = false, onClose }) {
  const [[index, dir], setState] = useState([0, 0]);
  const closeRef = useRef(null);
  const thumbsRef = useRef(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => { onCloseRef.current = onClose; }, [onClose]);

  const go = useCallback(step => {
    setState(([i]) => [(i + step + images.length) % images.length, step]);
  }, [images.length]);
  const jump = i => setState(([cur]) => [i, i > cur ? 1 : -1]);

  useEffect(() => {
    const opener = document.activeElement;
    const onKey = e => {
      if (e.key === 'Escape') onCloseRef.current();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      opener?.focus?.();
    };
  }, [go]);

  useEffect(() => {
    thumbsRef.current?.children[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [index]);

  const img = images[index];

  return createPortal(
    <motion.div
      className={`gallery${phone ? ' is-phone' : ''}${notice ? ' has-notice' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="gallery-head">
        <div className="gallery-title">
          <small>{label}</small>
          <strong>{title}</strong>
        </div>
        <button ref={closeRef} className="gallery-btn" onClick={onClose} aria-label="Close gallery"><RiCloseLine /></button>
      </div>

      {notice && (
        <motion.p
          className="gallery-notice"
          role="note"
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
        >
          <RiErrorWarningLine aria-hidden="true" />
          <span><strong>{notice.title}</strong> {notice.text}</span>
        </motion.p>
      )}

      <div className="gallery-stage" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
        <button className="gallery-btn gallery-prev" onClick={() => go(-1)} aria-label="Previous image"><RiArrowLeftSLine /></button>

        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.figure
            key={img.src}
            className="gallery-figure"
            custom={dir}
            variants={slide}
            initial="enter" animate="center" exit="exit"
            transition={{ duration: 0.45, ease }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              else if (info.offset.x > 60) go(-1);
            }}
          >
            {phone
              ? <Phone src={img.src} alt={`${title}: ${img.caption}`} />
              : <img src={img.src} alt={`${title}: ${img.caption}`} draggable="false" />}
            <figcaption>{img.caption}</figcaption>
          </motion.figure>
        </AnimatePresence>

        <button className="gallery-btn gallery-next" onClick={() => go(1)} aria-label="Next image"><RiArrowRightSLine /></button>
      </div>

      <div className="gallery-thumbs" ref={thumbsRef}>
        {images.map((im, i) => (
          <button
            key={im.src}
            className={`gallery-thumb${i === index ? ' is-active' : ''}`}
            onClick={() => jump(i)}
            aria-label={`Show image ${i + 1}: ${im.caption}`}
            aria-current={i === index || undefined}
          >
            <img src={im.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </motion.div>,
    document.body,
  );
}
