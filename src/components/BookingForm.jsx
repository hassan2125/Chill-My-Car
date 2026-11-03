import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { SV, A, WA } from "@/lib/data";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    service: SV[0].t,
    mode: "Collect my car",
    area: A[0],
  });
  const set = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));
  const send = (event) => {
    event.preventDefault();
    const message = [
      "Hi Chill My Car! I’d like to request a booking:",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Car: ${form.car}`,
      `Service: ${form.service}`,
      `Booking type: ${form.mode}`,
      `Area: ${form.area}`,
    ].join("\n");
    window.open(WA(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="book" style={{ paddingTop: 60 }}>
      <Reveal className="wrap">
        <div className="bk">
          <div className="bl">
            <div>
              <span className="pill">Book a service</span>
              <h2>Get your free quote.</h2>
              <p>Share your details and we’ll continue on WhatsApp with your request ready to send.</p>
            </div>
            <div className="ct">
              <a className="contact-row" href="tel:+971553594858">
                <span className="contact-icon"><Icon n="phone" /></span>
                <span className="contact-copy"><strong>055 359 4858</strong><small>Call our team</small></span>
              </a>
              <a className="contact-row" href={WA()} target="_blank" rel="noreferrer">
                <span className="contact-icon"><Icon n="whatsapp" /></span>
                <span className="contact-copy"><strong>WhatsApp us</strong><small>Chat with our team</small></span>
              </a>
              <a className="contact-row" href="mailto:info@chillmycar.ae">
                <span className="contact-icon"><Icon n="mail" /></span>
                <span className="contact-copy"><strong>info@chillmycar.ae</strong><small>Email us anytime</small></span>
              </a>
              <Link className="contact-row" to="/#areas">
                <span className="contact-icon"><Icon n="pin" /></span>
                <span className="contact-copy"><strong>Business Bay, Dubai</strong><small>View our service areas</small></span>
              </Link>
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
              <label>
                How should we help?
                <select name="mode" value={form.mode} onChange={set("mode")}>
                  <option>Collect my car</option>
                  <option>Visit my location</option>
                </select>
              </label>
              <label className="form-area">
                Your area
                <select name="area" value={form.area} onChange={set("area")}>
                  {A.map((area) => <option key={area}>{area}</option>)}
                </select>
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
