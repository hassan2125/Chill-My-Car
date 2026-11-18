import { Link } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
import { SV, WA } from "@/lib/data";
import Icon from "./Icon";
export default function Nav() {
  const [o, setO] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const linksRef = useRef(null);
  useLayoutEffect(() => {
    if (o && servicesOpen && linksRef.current) linksRef.current.scrollTop = 0;
  }, [o, servicesOpen]);
  return (
    <nav className="nav">
      <Link to="/" className="logo" aria-label="Cool My Car home">
        <img src="/images/Logo/Cool%20My%20Car%20Main%20Logo.png" alt="Cool My Car Dubai" />
      </Link>
      <div ref={linksRef} className={`links ${o ? "open" : ""}`} onClick={(e) => { if (e.target.closest("a")) { setO(false); setServicesOpen(false); } }}>
        <Link to="/">Home</Link>
        <div className={`dd ${servicesOpen ? "open" : ""}`}>
          <Link to="/services">Services</Link>
          <button
            type="button"
            className="mobile-services-toggle"
            aria-label={servicesOpen ? "Hide service options" : "Show service options"}
            aria-expanded={servicesOpen}
            aria-controls="mobile-service-menu"
            onClick={() => setServicesOpen((open) => !open)}
          >{servicesOpen ? "−" : "+"}</button>
          <div className="service-menu" id="mobile-service-menu">
            <div className="service-menu-head">
              <span>Car AC services</span>
              <strong>Explore car AC services</strong>
              <small>Repair, diagnosis, refrigerant service and cleaning.</small>
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
          <a href={WA()} target="_blank" rel="noopener noreferrer" className="btn p">Book Car AC Repair</a>
        </div>
      </div>
      <div className="nav-actions">
        <a href="tel:+971553594858" className="btn phone-cta"><Icon n="phone" />055 359 4858</a>
        <a href={WA()} target="_blank" rel="noopener noreferrer" className="btn p">Book Car AC Repair</a>
      </div>
      <button className="bg" aria-label="Menu" onClick={() => { setO(!o); setServicesOpen(false); }}>{o ? "✕" : "☰"}</button>
    </nav>
  );
}
