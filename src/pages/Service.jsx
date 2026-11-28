import { Link, useParams } from "react-router-dom";
import { useTitle } from "@/lib/useTitle";
import NotFound from "./NotFound";
import { Banner, Cards, Cta } from "@/components/PageParts";
import PageConversion from "@/components/PageConversion";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { Marquee, ServiceCards, Testimonials } from "@/components/Sections";
import { AVERAGE_ARRIVAL_MINUTES, PAGE_HERO_IMAGES, PHONE_DISPLAY, PHONE_TEL, SERVICE_AVAILABILITY, SERVICE_IMAGES, SERVICE_INCLUDE_DETAILS, SV, WA } from "@/lib/data";

const RELATED_SERVICES = {
  "ac-repair": ["diagnosis", "gas-leak-repair", "car-ac-gas-refill"],
  "car-ac-gas-refill": ["gas-leak-repair", "diagnosis", "ac-repair"],
  "gas-leak-repair": ["car-ac-gas-refill", "ac-repair", "diagnosis"],
  diagnosis: ["ac-repair", "car-ac-gas-refill", "gas-leak-repair"],
  "deep-cleaning": ["diagnosis", "ac-repair"],
};

export default function ServicePage() {
  const { slug } = useParams();
  const s = SV.find((x) => x.s === slug);
  useTitle(
    s ? s.seoTitle : "Page not found",
    s ? s.seoDescription : "This page could not be found. Explore car AC repair and services from Cool My Car Dubai."
  );
  if (!s) return <NotFound />;
  const relatedServices = (RELATED_SERVICES[s.s] || SV.filter((service) => service !== s).map((service) => service.s))
    .map((serviceSlug) => SV.find((service) => service.s === serviceSlug))
    .filter(Boolean);
  const workImages = [s, ...relatedServices.slice(0, 2)];
  const overviewImages = s.s === "deep-cleaning"
    ? [
        workImages[0],
        workImages[1],
        { ...workImages[2], overviewImage: "https://i.pinimg.com/1200x/26/29/f9/2629f9327a51f9b9f03000b4f7f80e00.jpg" },
      ].filter(Boolean)
    : workImages;
  const faqItems = s.faq;
  return (<main className="service-detail-page">
    <Banner title={s.t} sub={s.heroDescription} image={PAGE_HERO_IMAGES.services} />
    <section className="service-overview-section"><Reveal className="wrap">
      <div className="service-overview-layout">
        <div className="service-overview-copy">
          <span className="pill">Overview</span>
          <h2>{s.t}: a focused fix for a cooler drive.</h2>
          <p className="sub">{s.intro}</p>
          <p className="service-overview-detail">We check the system, explain what we find and confirm the estimate before any work begins.</p>
          <ul className="service-overview-points" aria-label="Service benefits">
            <li className="service-overview-point">
              <span className="service-overview-point-icon"><Icon n="check" /></span>
              <span className="service-overview-point-copy"><strong>System checked</strong><small>Before recommendations</small></span>
            </li>
            <li className="service-overview-point">
              <span className="service-overview-point-icon"><Icon n="mail" /></span>
              <span className="service-overview-point-copy"><strong>Clear communication</strong><small>Throughout your service</small></span>
            </li>
            <li className="service-overview-point">
              <span className="service-overview-point-icon"><Icon n="clock" /></span>
              <span className="service-overview-point-copy"><strong>{SERVICE_AVAILABILITY} on-site mobile service</strong><small>Available across Dubai</small></span>
            </li>
            <li className="service-overview-point">
              <span className="service-overview-point-icon"><Icon n="truck" /></span>
              <span className="service-overview-point-copy"><strong>{AVERAGE_ARRIVAL_MINUTES} minutes</strong><small>Average technician arrival time</small></span>
            </li>
          </ul>
          <div className="ctas service-overview-actions">
            <a className="btn p" href={`tel:${PHONE_TEL}`}><Icon n="phone" />Call to discuss</a>
            <a className="btn service-overview-outline" href={WA()} target="_blank" rel="noopener noreferrer"><Icon n="whatsapp" className="service-overview-whatsapp-icon" />{s.bookingLabel || "Book Car AC Repair"}</a>
          </div>
        </div>
        <div className="service-overview-gallery">
          {overviewImages.map((service) => (
            <figure className={`service-overview-image${service.s === s.s ? " featured" : ""}`} key={service.s}>
              <img src={service.overviewImage || SERVICE_IMAGES[service.s]} alt={`${service.t} service`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </Reveal></section>
    <section className="service-signs-section"><Reveal className="wrap">
      <div className="service-signs-heading">
        <div><span className="pill">When to book</span><h2>Signs you may need {s.t.toLowerCase()}.</h2></div>
        <p>These symptoms can point to an issue. A proper check helps identify the cause and the right next step.</p>
      </div>
      <div className="service-signs-grid">
        {s.sig.map((sign, index) => (
          <div className="service-sign-card" key={sign}>
            <span className="service-sign-number">0{index + 1}</span>
            <Icon n="gauge" />
            <p>{sign}</p>
          </div>
        ))}
      </div>
    </Reveal></section>
    <section className="service-included-section"><Reveal className="wrap">
      <div className="service-included-heading">
        <div><span className="pill">What’s included</span><h2>AC care tailored to your car.</h2></div>
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
      <div
        className="service-included-footer"
        style={{ backgroundImage: 'linear-gradient(100deg, rgba(11,59,168,.72) 0%, rgba(11,59,168,.45) 58%, rgba(11,59,168,.3) 100%), url("https://images.pexels.com/photos/12986023/pexels-photo-12986023.jpeg")' }}
      >
        <div className="service-included-message">
          <span className="service-included-eta-label"><Icon n="clock" />Average technician arrival</span>
          <h3>{AVERAGE_ARRIVAL_MINUTES}<small>min</small></h3>
          <p>Not sure which AC work your car needs? We’ll explain the findings and answer your questions.</p>
        </div>
        <div className="service-included-actions">
          <a href={WA()} target="_blank" rel="noopener noreferrer" className="btn p"><Icon n="whatsapp" className="whatsapp-cta-icon" />Get a free quote</a>
          <a href={`tel:${PHONE_TEL}`} className="btn phone-cta service-phone-cta"><Icon n="phone" />{PHONE_DISPLAY}</a>
        </div>
      </div>
    </Reveal></section>
    <section style={{ background: "#fff" }}><Reveal className="wrap">
      <span className="pill">Our process</span><h2>Simple, transparent.</h2>
      <Cards items={[{ i: "search", t: "1. Inspect", p: "A full check of the system to find the real cause." }, { i: "wrench", t: "2. Fix what’s needed", p: "Genuine parts and clear pricing, no surprises." }, { i: "gauge", t: "3. Test the cooling", p: "We confirm real cooling performance before handover." }]} />
    </Reveal></section>
    <section className="service-brands-section"><Reveal className="wrap">
      <span className="pill">Brands we service</span><h2>Car AC care for every make.</h2>
      <p className="sub">From everyday vehicles to luxury and supercars, we work with the makes you drive across Dubai.</p>
    </Reveal><Marquee /></section>
    <section className="service-related-section"><Reveal className="wrap"><span className="pill">More car AC services</span>
      <h2>Related AC services.</h2><ServiceCards services={relatedServices} /></Reveal></section>
    <Testimonials />
    <PageConversion faqTitle={`Questions about ${s.t}.`} faqItems={faqItems} />
    <Cta />
  </main>);
}
