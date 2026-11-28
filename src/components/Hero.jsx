import Icon from "./Icon";
import { AVERAGE_ARRIVAL_MINUTES, PHONE_DISPLAY, PHONE_TEL, SERVICE_AVAILABILITY, WA } from "@/lib/data";
import { PAGE_HERO_IMAGES } from "@/lib/data";
export default function Hero() {
  return (
    <header className="hero" id="top">
      <img className="hero-background-image" src={PAGE_HERO_IMAGES.home} alt="" aria-hidden="true" />
      <div className="wrap hg">
        <div className="ht">
          <span className="pill">Dubai’s car AC specialists</span>
          <h1>Mobile car AC repair <em>in Dubai.</em></h1>
          <p className="lead">Car AC repair, gas refill, leak detection, diagnostics and cleaning across Dubai. Get a clear estimate before work begins.</p>
          <div className="ctas">
            <a href={WA()} target="_blank" rel="noopener noreferrer" className="btn p"><Icon n="whatsapp" className="whatsapp-cta-icon" />Book Car AC Repair</a>
            <a href={`tel:${PHONE_TEL}`} className="btn phone-cta hero-phone-cta"><Icon n="phone" />{PHONE_DISPLAY}</a>
          </div>
          <div className="hs"><div><b>{SERVICE_AVAILABILITY}</b><span>On-site service</span></div><div><b>{AVERAGE_ARRIVAL_MINUTES} min</b><span>Average arrival</span></div><div><b>Free</b><span>Diagnostics</span></div></div>
          <a className="hero-review-link" href="#testimonials" aria-label="View customer story previews">
            <span className="hero-review-avatars" aria-hidden="true">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=82" alt="" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=82" alt="" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=82" alt="" />
            </span>
            <span className="hero-review-copy">
              <span className="hero-review-stars" aria-label="4.7 out of 5 Google rating">★★★★★</span>
              <span><strong>2,000+ clients served</strong><small>· 4.7 Google rating</small></span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
