import { Link, useParams } from "react-router-dom";
import { useTitle } from "@/lib/useTitle";
import NotFound from "./NotFound";
import { Banner, Cards, Cta, Checklist } from "@/components/PageParts";
import PageConversion from "@/components/PageConversion";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { ServiceCards } from "@/components/Sections";
import { SERVICE_IMAGES, SERVICE_INCLUDE_DETAILS, SV } from "@/lib/data";

const RELATED_SERVICES = {
  "ac-repair": ["diagnosis", "gas-leak-repair", "gas-top-up"],
  "gas-top-up": ["gas-leak-repair", "diagnosis", "ac-repair"],
  "gas-leak-repair": ["gas-top-up", "ac-repair", "diagnosis"],
  diagnosis: ["ac-repair", "gas-top-up", "gas-leak-repair"],
  "deep-cleaning": ["diagnosis", "ac-repair", "battery"],
  battery: ["diagnosis", "ac-repair", "gas-top-up"],
};

export default function ServicePage() {
  const { slug } = useParams();
  const s = SV.find((x) => x.s === slug);
  useTitle(s ? s.t + " in Dubai" : "Not found");
  if (!s) return <NotFound />;
  const relatedServices = (RELATED_SERVICES[s.s] || SV.filter((service) => service !== s).map((service) => service.s))
    .map((serviceSlug) => SV.find((service) => service.s === serviceSlug))
    .filter(Boolean);
  const workImages = [s, ...relatedServices.slice(0, 2)];
  const faqItems = [
    ...s.faq,
    [`What signs may mean I need ${s.t.toLowerCase()}?`, `Look out for ${s.sig.slice(0, 3).join(", ").toLowerCase()}. A diagnosis can confirm the cause.`],
    [`What is included with ${s.t.toLowerCase()}?`, `${s.inc.slice(0, 3).join(", ")}. The exact work is confirmed after inspection.`],
    [`Can I get an estimate before ${s.t.toLowerCase()}?`, "The team can inspect the issue and explain the recommended work and estimate before repairs begin."],
  ];
  return (<main>
    <Banner crumbs={[["Services", "/services"], [s.t]]} title={s.t} sub={s.tag} />
    <section className="service-overview-section"><Reveal className="wrap">
      <div className="two service-overview">
        <div><span className="pill">Overview</span><h2>{s.t} in Dubai</h2><p className="sub">{s.intro}</p></div>
        <Checklist className="sig service-signs" title="Signs you may need it" items={s.sig} icon="gauge" />
      </div>
      <div className="service-overview-gallery">
        {workImages.map((service) => (
          <figure className={`service-overview-image${service.s === s.s ? " featured" : ""}`} key={service.s}>
            <img src={SERVICE_IMAGES[service.s]} alt={`${service.t} service`} loading="lazy" />
            <figcaption>{service.t}</figcaption>
          </figure>
        ))}
      </div>
    </Reveal></section>
    <section className="service-included-section"><Reveal className="wrap">
      <div className="service-included-heading">
        <div><span className="pill">What’s included</span><h2>Care tailored to your car.</h2></div>
        <p className="sub">We inspect your vehicle, explain what we find and confirm the work and estimate with you before repairs begin. Here’s what this service can cover:</p>
      </div>
      <div className="service-included-grid">
        {s.inc.map((item, index) => (
          <div className="service-included-item" key={item}>
            <span className="service-included-number">0{index + 1}</span>
            <span className="service-included-copy"><strong>{item}</strong><small>{SERVICE_INCLUDE_DETAILS[s.s][index]}</small></span>
            <Icon n="check" />
          </div>
        ))}
      </div>
      <div className="service-included-footer">
        <p>Not sure which item your car needs? We’ll explain the findings and answer your questions.</p>
        <div className="service-included-actions">
          <Link to="/contact#book" className="btn p">Get a free quote <Icon n="arrow" /></Link>
          <a href="tel:+971553594858" className="btn phone-cta service-phone-cta"><Icon n="phone" />055 359 4858</a>
        </div>
      </div>
    </Reveal></section>
    <section style={{ background: "#fff" }}><Reveal className="wrap">
      <span className="pill">Our process</span><h2>Simple, transparent.</h2>
      <Cards items={[{ i: "search", t: "1. Inspect", p: "A full check of the system to find the real cause." }, { i: "wrench", t: "2. Fix what’s needed", p: "Genuine parts and clear pricing, no surprises." }, { i: "gauge", t: "3. Test the cooling", p: "We confirm real cooling performance before handover." }]} />
    </Reveal></section>
    <section style={{ paddingTop: 0 }}><Reveal className="wrap"><span className="pill">More services</span>
      <h2>Related services.</h2><ServiceCards services={relatedServices} /></Reveal></section>
    <PageConversion faqTitle={`About ${s.t.toLowerCase()}.`} faqItems={faqItems} />
    <Cta />
  </main>);
}
