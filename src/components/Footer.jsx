import { Link } from "react-router-dom";
import { SV } from "@/lib/data";
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
        <div className="fl"><b>Company</b><Link to="/about">About</Link><Link to="/gallery">Gallery</Link><Link to="/brands">Brands</Link><Link to="/contact">Contact</Link><Link to="/contact#book">Book car AC repair</Link></div>
        <div className="fl footer-contact">
          <b>Contact</b>
          <a href="tel:+971553594858"><Icon n="phone" />055 359 4858</a>
          <a href="mailto:info@coolmycardubai.com"><Icon n="mail" />info@coolmycardubai.com</a>
          <a href="https://www.google.com/maps/search/?api=1&query=Al+Quoz%2C+Dubai" target="_blank" rel="noreferrer"><Icon n="pin" />Al Quoz, Dubai, UAE</a>
        </div>
      </div>
      <p className="footer-bottom">
        <span>© {new Date().getFullYear()} Cool My Car Dubai</span>
        <span className="footer-credit">Powered by <a href="https://prismxmedia.com/" target="_blank" rel="noreferrer">Prismx Media</a></span>
      </p>
    </div></footer>
  );
}
