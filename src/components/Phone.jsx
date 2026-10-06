export default function Phone({ src, alt = '', className = '', children }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-frame">
        <div className="phone-screen">
          {src ? <img src={src} alt={alt} loading="lazy" draggable="false" /> : children}
        </div>
      </div>
      <span className="phone-stripe" aria-hidden="true" />
      <span className="phone-header" aria-hidden="true" />
      <span className="phone-sensors" aria-hidden="true" />
      <span className="phone-btns" aria-hidden="true" />
      <span className="phone-power" aria-hidden="true" />
    </div>
  );
}
