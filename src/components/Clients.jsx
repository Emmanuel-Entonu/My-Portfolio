import { PiAsteriskBold } from 'react-icons/pi';
import DecryptedText from './DecryptedText';
import { clients } from '../content';

const logoHeight = ar => Math.min(84, Math.round(Math.sqrt(8100 / ar)));

function Group({ hidden }) {
  return (
    <ul className="marquee-group" aria-hidden={hidden || undefined}>
      {clients.map(({ name, logo, ar }) => (
        <li key={name} className="client">
          <span
            className="client-logo"
            role="img"
            aria-label={name}
            title={name}
            style={{ '--logo': `url("${logo}")`, '--h': `${logoHeight(ar)}px`, '--ar': ar }}
          />
          <PiAsteriskBold aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

export default function Clients() {
  return (
    <>
      <div className="divider" />
      <section className="clients" aria-label="Clients">
        <div className="section-tag is-center">
          <span><DecryptedText text="Trusted by" animateOn="view" speed={75} maxIterations={18} encryptedClassName="char-encrypted" className="char-revealed" /></span>
        </div>
        <div className="marquee-mask">
          <div className="marquee">
            {[0, 1, 2, 3].map(i => <Group key={i} hidden={i > 0} />)}
          </div>
        </div>
      </section>
    </>
  );
}
