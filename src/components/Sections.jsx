import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SV, A, BR, SERVICE_IMAGES, brandLogoUrl } from "@/lib/data";

export function Marquee() {
  const logoBrands = ["Aston Martin", "Bentley", "BMW", "Jaguar", "Land Rover", "Mercedes", "Ferrari", "Lamborghini", "Hyundai", "Honda", "Nissan", "Ford"];
  const brands = logoBrands.map((name) => {
    return { name, image: brandLogoUrl(name) };
  }).filter((brand) => BR.some(([name]) => name === brand.name));
  const duplicated = [...brands, ...brands];
  return (
    <div className="mq" aria-label="Car brands we service">
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
  const serviceOrder = ["ac-repair", "diagnosis", "gas-top-up", "gas-leak-repair", "deep-cleaning", "battery"];
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
      <div><h2>Off car AC repairs &amp; service.</h2><p>Book online, we collect your car and inspect the entire AC system at a certified garage. Half the price, full diagnosis.</p>
        <Link to="/contact#book" className="btn">Claim 50% off <Icon n="arrow" /></Link></div>
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
      <span className="pill">Why Chill My Car</span><h2>Built on trust.</h2><p className="sub">Four promises behind every job we do.</p>
      <div className="f4">{f.map(([i, t, p]) => (<div className="f" key={t}><div className="ic"><Icon n={i} /></div><h3>{t}</h3><p>{p}</p></div>))}</div>
    </Reveal></section>
  );
}

export function USPs() {
  return (
    <section className="about-usps-section"><Reveal className="wrap">
      <span className="pill">Chill My Car at a glance</span><h2>Car care, made simple.</h2>
      <div className="about-usps">
        <div className="about-usp"><strong>{SV.length}</strong><span>Specialist services</span></div>
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

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const quotes = [
    {
      quote: "Booking felt straightforward, and I appreciated getting clear updates while my car's AC was being checked.",
      name: "Sample customer 01",
      detail: "A simple, informed service experience.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      quote: "The team explained the issue and talked me through the options before any repair work began.",
      name: "Sample customer 02",
      detail: "Clear answers, without the guesswork.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      quote: "Having the car collected for inspection made it much easier to fit AC service into my day.",
      name: "Sample customer 03",
      detail: "Convenience that works around you.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
    },
  ];

  useEffect(() => {
    if (paused || hovered || focused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % quotes.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, quotes.length]);

  const changeSlide = (index) => {
    setActive((index + quotes.length) % quotes.length);
    setPaused(true);
  };
  const current = quotes[active];

  return (
    <section className="testimonials">
      <Reveal className="wrap testimonial-wrap">
        <div
          className={`testimonial-showcase${paused || hovered || focused ? " is-paused" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="testimonial-image">
            <img src={SERVICE_IMAGES["gas-leak-repair"]} alt="Mechanic inspecting an open car engine" loading="lazy" />
          </div>
          <div
            className="testimonial-content"
            onFocusCapture={() => setFocused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
            }}
          >
            <span className="testimonial-kicker">Client testimonials</span>
            <h2>Good service.<br /><span>Good to go.</span></h2>
            <p className="testimonial-intro">A smoother experience, from your first booking to getting back on the road.</p>
            <div className="testimonial-review" aria-live="off">
              <span className="testimonial-quote-mark" aria-hidden="true">“</span>
              <div className="testimonial-customer">
                <img key={current.image} src={current.image} alt="" loading="lazy" />
                <div><strong>{current.name}</strong><span>Sample review · illustrative copy</span></div>
              </div>
              <blockquote key={active} className="testimonial-quote-text">{current.quote}</blockquote>
              <p className="testimonial-review-detail">{current.detail}</p>
              <div className="testimonial-controls">
                <div className="testimonial-progress" aria-label={`Review ${active + 1} of ${quotes.length}`}>
                  {quotes.map((quote, index) => (
                    <button
                      key={quote.name}
                      type="button"
                      className={`testimonial-progress-item${active === index ? " active" : ""}`}
                      onClick={() => changeSlide(index)}
                      aria-label={`Show sample review ${index + 1}`}
                      aria-current={active === index ? "true" : undefined}
                    ><span /></button>
                  ))}
                </div>
                <div className="testimonial-buttons">
                  <button type="button" onClick={() => changeSlide(active - 1)} aria-label="Previous testimonial">‹</button>
                  <button type="button" onClick={() => changeSlide(active + 1)} aria-label="Next testimonial">›</button>
                  <button
                    type="button"
                    className="testimonial-toggle"
                    onClick={() => setPaused((value) => !value)}
                    aria-label={paused ? "Play testimonials" : "Pause testimonials"}
                    title={paused ? "Play testimonials" : "Pause testimonials"}
                  >{paused ? "▶" : "Ⅱ"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="testimonial-disclaimer">Sample testimonials for design preview only. Replace with approved customer reviews before publishing.</p>
      </Reveal>
    </section>
  );
}

export function Faq({ id = "faq", title = "Good questions.", items }) {
  const list = items || [
    ["How does the 50% car AC offer work?", "The current offer is for bookings made through the website. Chill My Car arranges collection and inspection at a certified garage; confirm eligibility and terms when you book."],
    ["Can you collect my car or visit my location?", "The team can arrange vehicle collection for garage inspection. Ask when booking whether on-site service is available for your area and selected service."],
    ["What car AC services do you offer?", "Services include AC repair, gas top-up, leak repair, system diagnosis, deep cleaning and battery services."],
    ["Do I get a quote before repairs begin?", "The website advertises diagnostics and a cost estimate before work starts. Confirm the estimate and any applicable charges when booking."],
    ["Which car brands can you service?", "Chill My Car lists support for luxury, supercar, everyday and American makes. Contact the team if your brand is not listed."],
    ["How do I book?", "Choose a service and send your details using the form. It opens WhatsApp with your request ready to send."],
  ];
  return (
    <section id={id} className="faq-section">
      <Reveal className="wrap faq-layout">
        <div className="faq-intro">
          <span className="pill">FAQ</span>
          <h2>{title}</h2>
          <p>Helpful details about our services, booking and what to expect from your car AC visit.</p>
          <div className="faq-actions">
            <Link className="btn p faq-cta" to="/contact#book">Book a Service <Icon n="arrow" /></Link>
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
