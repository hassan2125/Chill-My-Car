import { useTitle } from "@/lib/useTitle";
import { Banner } from "@/components/PageParts";
import BookingForm from "@/components/BookingForm";
import { Faq, Steps, USPs } from "@/components/Sections";
import { CONTACT_FAQS } from "@/lib/pageFaqs";
import { PAGE_HERO_IMAGES } from "@/lib/data";

export default function Contact() {
  useTitle("Book Car AC Repair in Dubai", "Request car AC repair in Dubai. Share your vehicle, AC symptoms and location with Cool My Car Dubai to discuss service options and an estimate.");
  return (
    <main className="contact-page">
      <Banner crumbs={[["Contact"]]} title="Book car AC repair in Dubai" sub="Tell us about your car’s AC symptoms and we’ll help with the next step." image={PAGE_HERO_IMAGES.contact} />
      <BookingForm />
      <USPs />
      <Steps />
      <Faq title={CONTACT_FAQS.title} items={CONTACT_FAQS.items} />
      <section className="contact-map-section"><div className="wrap">
        <span className="pill">Find us</span><h2>Based in Al Quoz, Dubai.</h2>
        <p className="sub">We serve drivers across Dubai. Get directions to Al Quoz or check our <a href="https://www.google.com/maps/search/?api=1&query=Al+Quoz%2C+Dubai" target="_blank" rel="noreferrer">location on Google Maps</a>.</p>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps?q=Al%20Quoz%2C%20Dubai&output=embed"
            title="Map of Al Quoz, Dubai"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div></section>
    </main>
  );
}
