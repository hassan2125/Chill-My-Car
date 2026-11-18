import { Link } from "react-router-dom";
import Icon from "./Icon";
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
            <Link to="/contact#book" className="btn p">Book Car AC Repair</Link>
            <a href="tel:+971553594858" className="btn phone-cta hero-phone-cta"><Icon n="phone" />055 359 4858</a>
          </div>
          <div className="hs"><div><b>24/7</b><span>Booking</span></div><div><b>Free</b><span>Diagnostics</span></div><div><b>At home</b><span>or our garage</span></div></div>
        </div>
      </div>
    </header>
  );
}
