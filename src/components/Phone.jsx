/* Google Pixel 6 Pro mockup (black), ported from Devices.css by picturepan2 (MIT) and made
   scalable: set --pw (phone width) and every part scales with it. Its screen is 376×816,
   the same shape as the app's 1080×2340 screenshots, so they fit with no cropping.
   Pass `src` for a screenshot, or children for custom screen content. */
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
