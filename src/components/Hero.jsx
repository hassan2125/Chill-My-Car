import { Link } from "react-router-dom";
import Icon from "./Icon";
import Wave from "./Wave";
import { PAGE_HERO_IMAGES } from "@/lib/data";
export default function Hero() {
  return (
    <header className="hero" id="top">
      <img className="hero-background-image" src={PAGE_HERO_IMAGES.home} alt="" aria-hidden="true" />
      <div className="wrap hg">
        <div className="ht">
          <span className="pill">Dubai’s car AC specialists</span>
          <h1>Beat the heat.<br /><em>Chill your car.</em></h1>
          <p className="lead">Expert car AC repair, regas and diagnostics for every make. We come to you in Dubai, with a free cost estimate before any work starts.</p>
          <div className="ctas">
            <Link to="/contact#book" className="btn p">Book a Service</Link>
            <a href="tel:+971553594858" className="btn phone-cta hero-phone-cta"><Icon n="phone" />055 359 4858</a>
          </div>
          <div className="hs"><div><b>24/7</b><span>Booking</span></div><div><b>Free</b><span>Diagnostics</span></div><div><b>At home</b><span>or our garage</span></div></div>
        </div>
      </div>
      <Wave />
    </header>
  );
}
