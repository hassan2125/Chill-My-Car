import Icon from "./Icon";
import { PHONE_DISPLAY, PHONE_TEL, WA } from "@/lib/data";
import { PAGE_HERO_IMAGES } from "@/lib/data";
export default function Hero() {
  return (
    <header className="hero" id="top">
      <img className="hero-background-image" src={PAGE_HERO_IMAGES.home} alt="" aria-hidden="true" />
      <div className="wrap hg">
        <div className="ht">
          <span className="pill">Dubai’s car AC specialists</span>
          <h1>Car AC repair <em>in Dubai.</em></h1>
          <p className="lead">Car AC repair, refrigerant regas, leak detection, diagnostics and cleaning across Dubai. Get a clear estimate before work begins.</p>
          <div className="ctas">
            <a href={WA()} target="_blank" rel="noopener noreferrer" className="btn p">Book Car AC Repair</a>
            <a href={`tel:${PHONE_TEL}`} className="btn phone-cta hero-phone-cta"><Icon n="phone" />{PHONE_DISPLAY}</a>
          </div>
          <div className="hs"><div><b>24/7</b><span>Booking</span></div><div><b>Free</b><span>Diagnostics</span></div><div><b>At home</b><span>or our garage</span></div></div>
        </div>
      </div>
    </header>
  );
}
