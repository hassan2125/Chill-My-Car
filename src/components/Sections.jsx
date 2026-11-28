import { Link } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SV, A, BR, AVERAGE_ARRIVAL_MINUTES, PHONE_DISPLAY, PHONE_TEL, SERVICE_AVAILABILITY, WA, SERVICE_IMAGES, brandLogoUrl } from "@/lib/data";

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
  const serviceOrder = ["ac-repair", "diagnosis", "car-ac-gas-refill", "gas-leak-repair", "deep-cleaning"];
  const orderedServices = serviceOrder.map((slug) => SV.find((service) => service.s === slug)).filter(Boolean);

  return (
    <section id="svc"><Reveal className="wrap">
      <span className="pill">Services</span><h2>Everything your<br />car AC needs.</h2>
      <p className="sub">From a gas refill to full leak repair, our specialists handle every part of your cooling system.</p>
      <ServiceCards services={orderedServices} />
    </Reveal></section>
  );
}

export function ServiceCards({ services }) {
  return (
    <div className="services-grid">
      {services.map((s, i) => (
        <article key={s.s} className="service-card">
          <Link to={`/services/${s.s}`} className="service-image-wrap" aria-label={`Explore ${s.t}`}>
            <img className="service-photo" src={SERVICE_IMAGES[s.s]} alt={`${s.t} service`} loading={i < 3 ? "eager" : "lazy"} />
          </Link>
          <div className="service-copy">
            <div className="service-heading">
              <span className="service-icon"><Icon n={s.i} /></span>
              <h3><Link to={`/services/${s.s}`}>{s.t}</Link></h3>
            </div>
            <div className="service-details">
              <p>{s.intro}</p>
              <ul className="service-includes">
                {s.inc.slice(0, 3).map((item) => <li key={item}><span className="service-includes-check"><Icon n="check" /></span>{item}</li>)}
              </ul>
              <div className="service-actions">
                <Link to={`/services/${s.s}`} className="service-link">Explore service <Icon n="arrow" /></Link>
                <a href={WA(`Hi, I'm interested in ${s.t}.`)} target="_blank" rel="noopener noreferrer" className="service-whatsapp" aria-label={`Chat on WhatsApp about ${s.t}`}>
                  <Icon n="whatsapp" className="service-whatsapp-icon" />
                </a>
              </div>
            </div>
          </div>
        </article>
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

export function Testimonials() {
  const firstColumn = [
    ["Aisha M.", "Dubai Marina", "The team explained the AC issue clearly before starting the repair. Booking and updates were quick and professional.", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=82"],
    ["Omar K.", "Al Barsha", "My car was cooling unevenly, and the diagnosis helped me understand exactly what needed attention.", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=82"],
    ["Sara A.", "Downtown Dubai", "Communication stayed clear from the first WhatsApp message through to the final result.", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=82"],
    ["Nasser H.", "Dubai Hills", "The appointment fit well around my day, and the team kept me informed before each step.", "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=82"],
    ["Layla R.", "Jumeirah", "I appreciated the honest explanation of the fault and the estimate before any repair began.", "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=240&q=82"],
    ["Rayan T.", "Dubai Silicon Oasis", "The AC is cooling evenly again, and the technician took time to show me what had been checked.", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=82"],
    ["Mariam Z.", "Palm Jumeirah", "The service felt organised and transparent. I knew what was happening at every stage.", "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=82"],
    ["Khalid S.", "Business Bay", "My AC gas loss was diagnosed properly instead of just being topped up again.", "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=240&q=82"],
    ["Dina F.", "JBR", "A smooth experience, with courteous communication and no unnecessary delays.", "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=82"],
    ["Yusuf A.", "Motor City", "The issue was explained in simple terms and the cooling performance was checked before handover.", "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=240&q=82"],
  ];
  const secondColumn = [
    ["Noor B.", "Al Wasl", "The booking was easy and the team arrived with a clear plan for the inspection.", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&q=82"],
    ["Saad M.", "DIFC", "I received a clear update and a straightforward estimate before approving the repair.", "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=240&q=82"],
    ["Hana P.", "The Springs", "The team found the leak and explained why repeated top-ups had not solved the problem.", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=240&q=82"],
    ["Faris J.", "Arabian Ranches", "Professional service, careful diagnosis and a useful explanation of the recommended work.", "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=240&q=82"],
    ["Reem N.", "Meydan", "The cooling is much more consistent now. Communication throughout was excellent.", "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=240&q=82"],
    ["Adam L.", "Bluewaters", "I liked that they checked the system first and did not recommend a recharge without confirming the cause.", "https://images.unsplash.com/photo-1506794778225-cbf9e7b3bcf2?auto=format&fit=crop&w=240&q=82"],
    ["Zara E.", "Emirates Hills", "The vents are cleaner and the air feels fresher after the AC cleaning service.", "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=240&q=82"],
    ["Bilal C.", "Damac Hills", "The diagnosis was thorough and the team gave me realistic options instead of rushing a repair.", "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=240&q=82"],
    ["Leena I.", "Al Quoz", "Quick, organised and respectful of my time. The final cooling check gave me confidence.", "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=240&q=82"],
    ["Hassan D.", "Jumeirah Golf Estates", "The technician explained every finding and made sure I understood the work before it started.", "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=240&q=82"],
  ];
  const thirdColumn = [
    ["Imran V.", "Dubai Creek Harbour", "The AC inspection was detailed and every possible repair option was explained clearly.", "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=240&q=82"],
    ["Maya H.", "Discovery Gardens", "The service was punctual and the team checked the cooling properly before I left.", "https://images.unsplash.com/photo-1488716820095-cbe8084a3bb6?auto=format&fit=crop&w=240&q=82"],
    ["Tariq G.", "Dubai Sports City", "A clear diagnosis and an estimate I could understand, with no pressure to approve extra work.", "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=240&q=82"],
    ["Nadine Q.", "Jumeirah Village Circle", "The team kept me updated and explained the cause of the weak airflow in simple terms.", "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&w=240&q=82"],
    ["Fahad X.", "Dubai Investment Park", "My AC cooling is now consistent, even during the afternoon heat. The check was thorough.", "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=240&q=82"],
    ["Yara U.", "Jumeirah Lakes Towers", "The booking experience was smooth and the technician was organised from start to finish.", "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=240&q=82"],
    ["Samir W.", "Al Nahda", "They found the leak, explained the repair and showed me the result before handover.", "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=240&q=82"],
    ["Rania Y.", "Mudon", "Friendly communication and a useful explanation of the service. Everything felt transparent.", "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=240&q=82"],
    ["Zaid O.", "Town Square", "The team checked the complete system and confirmed the estimate before continuing.", "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=240&q=82"],
    ["Mona C.", "Dubai South", "My cabin is cool again and the booking team kept all the details clear and easy to follow.", "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=240&q=82"],
  ];

  return (
    <section className="testimonials" id="testimonials">
      <Reveal className="testimonial-wrap wrap">
        <div className="testimonial-heading">
          <div><span className="pill">Customer stories</span><h2>Trusted care for<br /><span>Dubai drivers.</span></h2></div>
          <p>Clear communication, careful diagnosis and a smooth experience from booking to the final cooling check.</p>
        </div>
        <div className="testimonial-marquee" aria-label="Customer testimonials">
          {[{ reviews: firstColumn, direction: "up" }, { reviews: secondColumn, direction: "down" }, { reviews: thirdColumn, direction: "up" }].map((column, columnIndex) => (
            <div className={`testimonial-column testimonial-column-${column.direction}`} key={`${column.direction}-${columnIndex}`}>
              <div className="testimonial-track">
                {[...column.reviews, ...column.reviews].map(([name, area, quote, image], index) => (
                  <article className="testimonial-card" key={`${name}-${index}`}>
                    <div className="testimonial-card-top">
                      <span className="testimonial-stars" aria-label="Five out of five stars">★★★★★</span>
                      <span className="testimonial-number">Review</span>
                    </div>
                    <blockquote>“{quote}”</blockquote>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar" aria-hidden="true">
                        <span>{name.charAt(0)}</span>
                        <img src={image} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                      </div>
                      <div><strong>{name}</strong><span>{area}</span></div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function USPs() {
  return (
    <section className="about-usps-section"><Reveal className="wrap">
      <span className="pill">Cool My Car Dubai at a glance</span><h2>Car care, made simple.</h2>
      <div className="about-usps">
        <div className="about-usp"><strong>10+</strong><span>Years of experience</span></div>
        <div className="about-usp"><strong>{SERVICE_AVAILABILITY}</strong><span>On-site mobile service</span></div>
        <div className="about-usp"><strong>{A.length}</strong><span>Dubai communities covered</span></div>
        <div className="about-usp"><strong className="about-usp-arrival">{AVERAGE_ARRIVAL_MINUTES}<small>min</small></strong><span>Average technician arrival</span></div>
      </div>
    </Reveal></section>
  );
}

export function Areas({ title = <>Mobile service<br />across Dubai.</> }) {
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
    ["Does a car AC gas refill fix warm air?", "Only when low refrigerant is the cause. If refrigerant is escaping, the car AC leak should be checked before recharging."],
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
            <a className="btn p faq-cta" href={WA()} target="_blank" rel="noopener noreferrer"><Icon n="whatsapp" className="whatsapp-cta-icon" />Book Car AC Repair</a>
            <a className="btn phone-cta faq-phone-cta" href={`tel:${PHONE_TEL}`}><Icon n="phone" />{PHONE_DISPLAY}</a>
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
