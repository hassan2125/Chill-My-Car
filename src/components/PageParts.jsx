import { Link } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_TEL, WA } from "@/lib/data";

export function Banner({ title, sub, children, image }) {
  return (
    <section className={`pb${image ? " pb-with-image" : ""}`}>
      {image && <img className="pb-background-image" src={image} alt="" aria-hidden="true" />}
      <div className="wrap">
        <h1>{title}</h1><p className="lead">{sub}</p><div className="ctas">
          <a href={WA()} target="_blank" rel="noopener noreferrer" className="btn p"><Icon n="whatsapp" className="whatsapp-cta-icon" />Book Car AC Repair</a>
          <a href={`tel:${PHONE_TEL}`} className="btn phone-cta hero-phone-cta"><Icon n="phone" />{PHONE_DISPLAY}</a>
          {children}
        </div>
      </div>
    </section>
  );
}

export function Cta({ title = "Ready for cooler air?" }) {
  return (
    <section style={{ padding: "10px 0 90px" }}><Reveal className="wrap"><div className="offer" style={{ gridTemplateColumns: "1fr" }}><div>
      <h2>{title}</h2><p>Car AC repair, diagnostics, gas refills, leak repair and AC cleaning across Dubai. Get a clear estimate before work begins.</p>
      <div className="ctas"><a href={WA()} target="_blank" rel="noopener noreferrer" className="btn">Book free diagnosis <Icon n="arrow" /></a><a className="btn g" href={WA()} target="_blank" rel="noopener noreferrer">WhatsApp us</a></div>
    </div></div></Reveal></section>
  );
}

export function Cards({ items }) {
  return (
    <div className="g3c">{items.map((x) => {
      const inner = (<><div className="ic"><Icon n={x.i} /></div><h3>{x.t}</h3><p>{x.p}</p></>);
      return x.h ? <Link key={x.t} to={x.h}>{inner}</Link> : <div key={x.t}>{inner}</div>;
    })}</div>
  );
}

export function Checklist({ title, items, icon = "check", className = "incl", children }) {
  return (<div className={className}><h3>{title}</h3>{items.map((x) => <div key={x}><Icon n={icon} />{x}</div>)}{children}</div>);
}
