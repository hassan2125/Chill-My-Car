import { Link } from "react-router-dom";
import { SV } from "@/lib/data";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer><div className="wrap">
      <div className="fg">
        <div className="footer-about">
          <div className="logo sy">ChillMyCar</div>
          <p>Car AC care made simple. Serving drivers across Dubai.</p>
          <div className="social-icons" role="img" aria-label="Instagram, Facebook, and TikTok">
            <span title="Instagram"><Icon n="instagram" /></span>
            <span title="Facebook"><Icon n="facebook" /></span>
            <span title="TikTok"><Icon n="tiktok" /></span>
          </div>
        </div>
        <div className="fl"><b>Services</b><span id="fsv">{SV.map((s) => <Link key={s.s} to={`/services/${s.s}`}>{s.t}</Link>)}</span></div>
        <div className="fl"><b>Company</b><Link to="/about">About</Link><Link to="/gallery">Gallery</Link><Link to="/brands">Brands</Link><Link to="/contact">Contact</Link><Link to="/contact#book">Book now</Link></div>
        <div className="fl footer-contact">
          <b>Contact</b>
          <a href="tel:+971553594858"><Icon n="phone" />055 359 4858</a>
          <a href="mailto:info@chillmycar.ae"><Icon n="mail" />info@chillmycar.ae</a>
          <a href="https://www.google.com/maps/search/?api=1&query=Business+Bay%2C+Dubai" target="_blank" rel="noreferrer"><Icon n="pin" />Business Bay, Dubai, UAE</a>
        </div>
      </div>
      <p className="footer-bottom">© {new Date().getFullYear()} Chill My Car</p>
    </div></footer>
  );
}
