import { useState } from "react";
import Reveal from "./Reveal";
const M = [
  { t: 32, p: 25, r: [28, 30, 22], n: "Warm air, weak airflow, low gas pressure. Your AC is working hard and losing." },
  { t: 4, p: 92, r: [95, 92, 96], n: "Ice-cold air, strong airflow, correct gas pressure. Full cooling power restored." },
];
export default function Simulator() {
  const [k, setK] = useState(0);
  const m = M[k];
  return (
    <section className="sim" id="feel"><Reveal className="wrap sg">
      <div>
        <span className="pill">The difference</span><h2>Feel it. Straight away.</h2>
        <p className="sub">A weak AC in Dubai’s heat isn’t just uncomfortable. It’s a daily drain. See what a proper service changes.</p>
        <div className="tog"><button className={k ? "" : "on hot"} onClick={() => setK(0)}>Before service</button><button className={k ? "on" : ""} onClick={() => setK(1)}>After service</button></div>
        <p className="sub">{m.n}</p>
      </div>
      <div className="dash">
        <div className="dial" style={{ "--p": m.p }}><div><strong>{m.t}°</strong><span>Vent air</span></div></div>
        {["Airflow", "Gas pressure", "Cooling power"].map((l, i) => (<div className="bar" key={l}>{l}<div><i style={{ width: m.r[i] + "%" }} /></div></div>))}
      </div>
    </Reveal></section>
  );
}
