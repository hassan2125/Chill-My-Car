import { Link } from "react-router-dom";
import { useState } from "react";
import { SV } from "@/lib/data";
import Icon from "./Icon";
export default function Nav() {
  const [o, setO] = useState(false);
  return (
    <nav className="nav">
      <Link to="/" className="logo">Chill<b>My</b>Car</Link>
      <div className={`links ${o ? "open" : ""}`} onClick={(e) => { if (e.target.closest("a")) setO(false); }}>
        <Link to="/">Home</Link>
        <div className="dd"><Link to="/services">Services</Link>
          <div className="service-menu">
            <div className="service-menu-head">
              <span>Expert car care</span>
              <strong>Explore our services</strong>
              <small>Specialist support to keep every drive cool.</small>
            </div>
            <div className="service-menu-list">
              {SV.map((s) => (
                <Link className="service-menu-item" key={s.s} to={`/services/${s.s}`}>
                  <span className="service-menu-icon"><Icon n={s.i} /></span>
                  <span className="service-menu-label">{s.t}<small>{s.tag}</small></span>
                  <Icon n="arrow" className="service-menu-arrow" />
                </Link>
              ))}
            </div>
            <Link to="/services" className="service-menu-all">View all services <Icon n="arrow" /></Link>
          </div>
        </div>
        <Link to="/about">About</Link><Link to="/gallery">Gallery</Link><Link to="/brands">Brands</Link><Link to="/contact">Contact</Link>
        <div className="mobile-nav-actions">
          <a href="tel:+971553594858" className="btn phone-cta"><Icon n="phone" />055 359 4858</a>
          <Link to="/contact#book" className="btn p">Book a Service</Link>
        </div>
      </div>
      <div className="nav-actions">
        <a href="tel:+971553594858" className="btn phone-cta"><Icon n="phone" />055 359 4858</a>
        <Link to="/contact#book" className="btn p">Book a Service</Link>
      </div>
      <button className="bg" aria-label="Menu" onClick={() => setO(!o)}>{o ? "✕" : "☰"}</button>
    </nav>
  );
}
