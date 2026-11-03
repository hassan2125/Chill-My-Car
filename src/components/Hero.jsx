import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import Wave from "./Wave";
export default function Hero() {
  const [t, setT] = useState(52);
  useEffect(() => {
    let v = 52;
    const id = setInterval(() => { v -= 1; setT(v); if (v <= 18) clearInterval(id); }, 70);
    return () => clearInterval(id);
  }, []);
  return (
    <header className="hero" id="top">
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
        <div className="stage">
          <div className="orb" />
          <svg className="car" viewBox="0 0 640 260" aria-hidden="true">
            <defs>
              <linearGradient id="bd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#B9D8F5" /></linearGradient>
              <linearGradient id="gl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8FE0FA" /><stop offset="1" stopColor="#1F6BFF" /></linearGradient>
            </defs>
            <g className="air" strokeWidth="4"><path d="M30 34C140 -6 250 60 360 28S540 6 630 36" /><path d="M50 58C160 22 270 84 380 52S550 34 620 60" strokeWidth="3" /></g>
            <ellipse cx="320" cy="250" rx="285" ry="9" fill="#0A1F44" opacity=".28" />
            <path d="M24 186C24 166 44 158 84 152L168 100C192 84 222 76 262 76H398C436 76 466 90 494 118L548 136C590 144 616 158 616 182V206H24Z" fill="url(#bd)" />
            <path d="M186 112L228 92H290V132H162ZM306 92H398C424 92 444 104 466 132H306Z" fill="url(#gl)" />
            <path d="M298 92V196M24 192H616" stroke="#9CC3EE" strokeWidth="2" />
            <rect x="584" y="158" width="32" height="10" rx="5" fill="#FFB547" /><rect x="24" y="162" width="20" height="8" rx="4" fill="#FF6A2B" />
            {[156, 492].map((x) => (<g key={x}><circle cx={x} cy="206" r="50" fill="#0A2A7A" /><circle cx={x} cy="206" r="40" fill="#0A1F44" /><circle cx={x} cy="206" r="22" fill="#DCEBFA" /><circle cx={x} cy="206" r="7" fill="#1F6BFF" /></g>))}
          </svg>
          <div className="glass g1"><b>{t}°</b><span>{t > 20 ? "Cabin temp" : "Chilled ✓"}</span></div>
          <div className="glass g2"><b>4°C</b><span>Vent air after service</span></div>
          <div className="glass g3"><b>Free</b><span>Quote first</span></div>
        </div>
      </div>
      <Wave />
    </header>
  );
}
