import { Link } from "react-router-dom";
import { SV, PHONE_DISPLAY, PHONE_TEL, SERVICE_AVAILABILITY, WA } from "@/lib/data";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer><div className="wrap">
      <div className="fg">
        <div className="footer-about">
          <div className="logo sy">
            <img src="/images/Logo/Cool%20My%20Car%20Logo%20White.png" alt="Cool My Car Dubai" />
          </div>
          <p>Car AC care made simple. Serving drivers across Dubai.</p>
          <div className="social-icons" role="img" aria-label="Instagram, Facebook, and TikTok">
            <span title="Instagram"><Icon n="instagram" /></span>
            <span title="Facebook"><Icon n="facebook" /></span>
            <span title="TikTok"><Icon n="tiktok" /></span>
          </div>
        </div>
        <div className="fl"><b>Services</b><span id="fsv">{SV.map((s) => <Link key={s.s} to={`/services/${s.s}`}>{s.t}</Link>)}</span></div>
        <div className="fl"><b>Company</b><Link to="/about">About</Link><Link to="/gallery">Gallery</Link><Link to="/brands">Brands</Link><Link to="/contact">Contact</Link><a href={WA()} target="_blank" rel="noopener noreferrer">Book car AC repair</a></div>
        <div className="fl footer-contact">
          <b>Contact</b>
          <a href={`tel:${PHONE_TEL}`}><Icon n="phone" />{PHONE_DISPLAY}</a>
          <a href="mailto:info@coolmycardubai.com"><Icon n="mail" />info@coolmycardubai.com</a>
          <a className="footer-service-location" href="https://www.google.com/maps/search/?api=1&query=Al+Quoz+4%2C+Dubai" target="_blank" rel="noopener noreferrer"><Icon n="pin" />Mobile service across Dubai from Al Quoz 4</a>
          <div className="footer-contact-info"><Icon n="clock" /><p className="footer-info">Mobile Car AC Repair service: {SERVICE_AVAILABILITY}</p></div>
          <div className="footer-contact-info"><Icon n="check" /><p className="footer-info">Payments: Cash, bank transfer, Visa and Mastercard</p></div>
        </div>
      </div>
      <p className="footer-bottom">
        <span>© {new Date().getFullYear()} Cool My Car Dubai</span>
        <span className="footer-credit">Powered by <a href="https://prismxmedia.com/" target="_blank" rel="noreferrer">Prismx Media</a></span>
      </p>
    </div></footer>
  );
}
