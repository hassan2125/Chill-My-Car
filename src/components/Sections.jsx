import { Link } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SV, A, BR, WA, SERVICE_IMAGES, brandLogoUrl } from "@/lib/data";

export function Marquee() {
  const logoBrands = ["Aston Martin", "Bentley", "BMW", "Jaguar", "Land Rover", "Mercedes", "Ferrari", "Lamborghini", "Hyundai", "Honda", "Nissan", "Ford"];
  const brands = logoBrands.map((name) => {
    return { name, image: brandLogoUrl(name) };
  }).filter((brand) => BR.some(([name]) => name === brand.name));
  const duplicated = [...brands, ...brands];
  return (
    <div className="mq" aria-label="Car brands available for AC service">
      <div className="mq-frame">
        <div className="mq-track">{duplicated.map((brand, i) => (
          <Link key={`${brand.name}-${i}`} to="/brands" className="brand-pill" aria-label={`${brand.name} car AC service`}>
            <img src={brand.image} alt="" loading={i < brands.length ? "eager" : "lazy"} onError={(e) => { e.currentTarget.hidden = true; }} />
            <span>{brand.name}</span>
          </Link>
        ))}</div>
      </div>
    </div>
  );
}

export function Services() {
  const serviceOrder = ["ac-repair", "diagnosis", "gas-top-up", "gas-leak-repair", "deep-cleaning"];
  const orderedServices = serviceOrder.map((slug) => SV.find((service) => service.s === slug)).filter(Boolean);

  return (
    <section id="svc"><Reveal className="wrap">
      <span className="pill">Services</span><h2>Everything your<br />car AC needs.</h2>
      <p className="sub">From a quick regas to full leak repair, our specialists handle every part of your cooling system.</p>
      <ServiceCards services={orderedServices} />
    </Reveal></section>
  );
}

export function ServiceCards({ services }) {
  return (
    <div className="services-grid">
      {services.map((s, i) => (
        <Link key={s.s} to={`/services/${s.s}`} className="service-card">
          <div className="service-image-wrap">
            <img className="service-photo" src={SERVICE_IMAGES[s.s]} alt={`${s.t} service`} loading={i < 3 ? "eager" : "lazy"} />
          </div>
          <div className="service-copy">
            <div className="service-heading">
              <span className="service-icon"><Icon n={s.i} /></span>
              <h3>{s.t}</h3>
            </div>
            <div className="service-details">
              <p>{s.intro}</p>
              <ul className="service-includes">
                {s.inc.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
              </ul>
              <span className="service-link">Explore service <Icon n="arrow" /></span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function Offer() {
  return (
    <section className="home-offer"><Reveal className="wrap"><div className="offer">
      <div className="n">50%</div>
      <div><h2>Off car AC repairs.</h2><p>Chat on WhatsApp and share your AC symptoms. We’ll confirm the offer terms, inspection details and estimate before any AC work begins.</p>
        <a href={WA()} target="_blank" rel="noopener noreferrer" className="btn">Claim 50% off <Icon n="arrow" /></a></div>
    </div></Reveal></section>
  );
}

export function Steps() {
  const st = [["Book", "Online or on WhatsApp, any time."], ["Diagnose", "Free check and a clear quote."], ["Repair", "Genuine parts, expert hands."], ["Chill", "Drive away to ice-cold air."]];
  return (
    <section><Reveal className="wrap" style={{ textAlign: "center" }}>
      <span className="pill">How it works</span><h2>Cold air in four steps.</h2>
      <div className="steps">{st.map(([t, p], i) => (<div className="s" key={t}><div className="c">0{i + 1}</div><h3>{t}</h3><p>{p}</p></div>))}</div>
    </Reveal></section>
  );
}

export function Why() {
  const f = [["award", "Quality assurance", "Every repair is tested for real cooling performance."], ["clock", "On-time service", "We respect your schedule and show up when promised."], ["cog", "Genuine parts", "Quality components matched to your make and model."], ["shield", "Repair warranty", "Work that’s backed, so you drive with confidence."]];
  return (
    <section className="why" id="why"><Reveal className="wrap">
      <span className="pill">Why Cool My Car Dubai</span><h2>Built on trust.</h2><p className="sub">Four promises behind every car AC job.</p>
      <div className="f4">{f.map(([i, t, p]) => (<div className="f" key={t}><div className="ic"><Icon n={i} /></div><h3>{t}</h3><p>{p}</p></div>))}</div>
    </Reveal></section>
  );
}

export function USPs() {
  return (
    <section className="about-usps-section"><Reveal className="wrap">
      <span className="pill">Cool My Car Dubai at a glance</span><h2>Car care, made simple.</h2>
      <div className="about-usps">
        <div className="about-usp"><strong>{SV.length}</strong><span>Car AC services</span></div>
        <div className="about-usp"><strong>{BR.length}+</strong><span>Car brands listed</span></div>
        <div className="about-usp"><strong>{A.length}</strong><span>Dubai communities covered</span></div>
        <div className="about-usp"><strong>24/7</strong><span>Booking availability</span></div>
      </div>
    </Reveal></section>
  );
}

export function Areas({ title = <>All over Dubai.<br />All day.</> }) {
  return (
    <section className="areas" id="areas"><Reveal className="wrap">
      <span className="pill">Coverage</span><h2>{title}</h2>
      <div className="coverage-list">
        {A.map((area) => <span className="coverage-item" key={area}><Icon n="pin" />{area}</span>)}
      </div>
    </Reveal>
      <svg className="sky" viewBox="0 0 1200 130" preserveAspectRatio="none" aria-hidden="true"><path fill="#1F6BFF" fillOpacity=".14" d="M0 130V90h50V60h40V95h40V40h30V80h50V55h35V100h45V70h40V30h25V70h45V90h50V50h40V85h50V20h6V5h4V20h6V65h44V95h40V60h50V85h50V45h40V90h45V65h35V100h50V75h45V50h40V95h50V70h40V90h45V60h40V100h40V80h40V130Z" /></svg>
    </section>
  );
}

export function Faq({ id = "faq", title = "Good questions.", items }) {
  const list = items || [
    ["What are common signs my car AC needs attention?", "Warm air, weak airflow, unusual noises from the car AC or cooling that cuts out can indicate a fault. An inspection helps identify the cause."],
    ["Does a car AC gas top-up fix warm air?", "Only when low refrigerant is the cause. If refrigerant is escaping, the car AC leak should be checked before recharging."],
    ["Do you inspect the car AC before recommending repairs?", "Yes. The findings and estimate are explained before any car AC repair work begins."],
    ["Can I request car AC service in my area?", "Share your location and car AC symptoms when booking so the team can confirm the available service option."],
    ["How do I book car AC repair?", "Chat with our team on WhatsApp and share your car details and AC symptoms to request a booking."],
  ];
  return (
    <section id={id} className="faq-section">
      <Reveal className="wrap faq-layout">
        <div className="faq-intro">
          <span className="pill">FAQ</span>
          <h2>{title}</h2>
          <p>Helpful details about our services, booking and what to expect from your car AC visit.</p>
          <div className="faq-actions">
            <a className="btn p faq-cta" href={WA()} target="_blank" rel="noopener noreferrer">Book Car AC Repair <Icon n="arrow" /></a>
            <a className="btn phone-cta faq-phone-cta" href="tel:+971553594858"><Icon n="phone" />055 359 4858</a>
          </div>
        </div>
        <div className="faq-list">
          {list.map(([q, a], index) => (
            <details className="faq-item" key={q}>
              <summary><span className="faq-number">0{index + 1}</span><span className="faq-question">{q}</span><span className="faq-toggle" aria-hidden="true" /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
