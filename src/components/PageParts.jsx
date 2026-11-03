import { Link } from "react-router-dom";
import Icon from "./Icon";
import Wave from "./Wave";
import Reveal from "./Reveal";
import { WA } from "@/lib/data";

export function Banner({ crumbs = [], title, sub, children }) {
  return (
    <section className="pb"><div className="wrap">
      <div className="cr"><Link to="/">Home</Link>{crumbs.map(([l, h]) => <span key={l}> / {h ? <Link to={h}>{l}</Link> : l}</span>)}</div>
      <h1>{title}</h1><p className="lead">{sub}</p><div className="ctas">
        <Link to="/contact#book" className="btn p">Book a Service</Link>
        <a href="tel:+971553594858" className="btn phone-cta hero-phone-cta"><Icon n="phone" />055 359 4858</a>
        {children}
      </div>
    </div><Wave /></section>
  );
}

export function Cta({ title = "Ready to chill your car?" }) {
  return (
    <section style={{ padding: "10px 0 90px" }}><Reveal className="wrap"><div className="offer" style={{ gridTemplateColumns: "1fr" }}><div>
      <h2>{title}</h2><p>Free diagnosis and a clear quote before any work starts.</p>
      <div className="ctas"><Link to="/contact#book" className="btn">Book free diagnosis <Icon n="arrow" /></Link><a className="btn g" href={WA()}>WhatsApp us</a></div>
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
