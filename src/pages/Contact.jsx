import { useTitle } from "@/lib/useTitle";
import { Banner } from "@/components/PageParts";
import BookingForm from "@/components/BookingForm";
import Reveal from "@/components/Reveal";
import { Areas, Faq, Steps, Testimonials, USPs } from "@/components/Sections";
import { CONTACT_FAQS } from "@/lib/pageFaqs";
import { PAGE_HERO_IMAGES } from "@/lib/data";

export default function Contact() {
  useTitle("Book Car AC Repair in Dubai", "Request 24/7 mobile car AC service in Dubai, with an average technician arrival time of 10–15 minutes. Share your car details, symptoms and location.");
  return (
    <main className="contact-page">
      <Banner title="Book car AC repair in Dubai" sub="Tell us about your car’s AC symptoms and we’ll help with the next step." image={PAGE_HERO_IMAGES.contact} />
      <BookingForm />
      <USPs />
      <Steps />
      <Testimonials />
      <Faq title={CONTACT_FAQS.title} items={CONTACT_FAQS.items} />
      <Areas title="Mobile service across Dubai." />
      <section className="contact-map-section">
        <Reveal className="wrap">
          <span className="pill">Al Quoz 4, Dubai</span>
          <h2>Our location.</h2>
          <p className="sub">We provide mobile car AC service across Dubai from <a href="https://www.google.com/maps/search/?api=1&query=Al+Quoz+4%2C+Dubai" target="_blank" rel="noopener noreferrer">Al Quoz 4</a>.</p>
          <div className="contact-map">
            <iframe src="https://www.google.com/maps?q=Al+Quoz+4%2C+Dubai&output=embed" title="Google Maps showing Al Quoz 4, Dubai" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
