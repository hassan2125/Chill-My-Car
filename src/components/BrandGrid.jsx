import { useState } from "react";
import Icon from "./Icon";
import { BR, WA, brandLogoUrl } from "@/lib/data";
const TABS = ["All", "Luxury", "Supercar", "Everyday", "American"];

function BrandLogo({ name }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="brand-logo">
      {!failed ? <img src={brandLogoUrl(name)} alt="" loading="lazy" onError={() => setFailed(true)} /> : <span aria-hidden="true">{name[0]}</span>}
    </div>
  );
}

export default function BrandGrid() {
  const [c, setC] = useState("All");
  const [q, setQ] = useState("");
  const list = BR.filter((x) => (c === "All" || x[1] === c) && x[0].toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <div style={{ display: "flex", gap: 20, justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
        <div className="tabs" style={{ margin: 0 }}>{TABS.map((t) => <button key={t} className={c === t ? "on" : ""} onClick={() => setC(t)}>{t}</button>)}</div>
        <div className="srch"><Icon n="search" /><input placeholder="Search your car brand" value={q} onChange={(e) => setQ(e.target.value)} /></div>
      </div>
      <div className="bg4" style={{ marginTop: 30 }}>
        {list.map((x) => (<div className="br" key={x[0]}><BrandLogo name={x[0]} /><b>{x[0]}</b><span>{x[1]} car AC service</span></div>))}
        {!list.length && <p className="sub">No match. Message us anyway.</p>}
      </div>
      <p className="sub" style={{ marginTop: 28 }}>Don’t see your car? <a href={WA("Hi, can you service my car AC?")} style={{ color: "var(--blue)", fontWeight: 600 }}>Ask us on WhatsApp</a>.</p>
    </>
  );
}
