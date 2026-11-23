import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { SV, A, AVERAGE_ARRIVAL_MINUTES, PHONE_DISPLAY, PHONE_TEL, SERVICE_AVAILABILITY, WA } from "@/lib/data";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    service: SV[0].t,
    area: A[0],
    message: "",
  });
  const set = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));
  const send = (event) => {
    event.preventDefault();
    const message = [
      "Hi Cool My Car Dubai! I’d like to request a booking:",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Car: ${form.car}`,
      `Service: ${form.service}`,
      "Service type: Mobile service at my location",
      `Area: ${form.area}`,
      ...(form.message.trim() ? [`Message: ${form.message.trim()}`] : []),
    ].join("\n");
    window.open(WA(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="book" style={{ paddingTop: 60 }}>
      <Reveal className="wrap">
        <div className="bk">
          <div className="bl">
            <div>
              <span className="pill">Book car AC service</span>
              <h2>Get a car AC estimate.</h2>
              <p>Our mobile car AC service is available {SERVICE_AVAILABILITY} across Dubai, with an average technician arrival time of {AVERAGE_ARRIVAL_MINUTES} minutes. Share your car details, AC symptoms and location to request a visit.</p>
            </div>
            <div className="ct">
              <a className="contact-row" href={`tel:${PHONE_TEL}`}>
                <span className="contact-icon"><Icon n="phone" /></span>
                <span className="contact-copy"><strong>{PHONE_DISPLAY}</strong><small>Call our team</small></span>
              </a>
              <a className="contact-row" href={WA()} target="_blank" rel="noreferrer">
                <span className="contact-icon"><Icon n="whatsapp" className="whatsapp-cta-icon" /></span>
                <span className="contact-copy"><strong>WhatsApp us</strong><small>Chat with our team</small></span>
              </a>
              <a className="contact-row" href="mailto:info@coolmycardubai.com">
                <span className="contact-icon"><Icon n="mail" /></span>
                <span className="contact-copy"><strong>info@coolmycardubai.com</strong><small>Email us anytime</small></span>
              </a>
              <Link className="contact-row" to="/#areas">
                <span className="contact-icon"><Icon n="pin" /></span>
                <span className="contact-copy"><strong>Mobile service across Dubai</strong><small>View our service areas</small></span>
              </Link>
              <div className="contact-row contact-row-static">
                <span className="contact-icon"><Icon n="check" /></span>
                <span className="contact-copy"><strong>Payments accepted</strong><small>Cash, bank transfer, Visa and Mastercard</small></span>
              </div>
            </div>
          </div>
          <form className="fr booking-form" onSubmit={send}>
            <div className="form-grid">
              <label>
                Name
                <input autoComplete="name" name="name" value={form.name} onChange={set("name")} placeholder="Your full name" required />
              </label>
              <label>
                Email
                <input autoComplete="email" name="email" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" required />
              </label>
              <label>
                Phone number
                <input autoComplete="tel" name="phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="+971 5X XXX XXXX" required />
              </label>
              <label>
                Car make &amp; model
                <input autoComplete="off" name="car" value={form.car} onChange={set("car")} placeholder="e.g. Range Rover Sport 2021" required />
              </label>
              <label>
                Service
                <select name="service" value={form.service} onChange={set("service")} required>
                  {SV.map((service) => <option key={service.s} value={service.t}>{service.t}</option>)}
                </select>
              </label>
              <label className="form-area">
                Your area
                <select name="area" value={form.area} onChange={set("area")}>
                  {A.map((area) => <option key={area}>{area}</option>)}
                </select>
              </label>
              <label className="form-message">
                Message (optional)
                <textarea
                  name="message"
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Describe your AC issue or any booking details"
                  rows={4}
                />
              </label>
            </div>
            <p className="form-note">Your request opens in WhatsApp. It won’t be sent until you press Send there.</p>
            <button type="submit" className="btn p booking-submit">Send request</button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
