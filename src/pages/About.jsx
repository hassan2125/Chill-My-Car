import { useTitle } from "@/lib/useTitle";
import { Banner, Cards, Cta } from "@/components/PageParts";
import Reveal from "@/components/Reveal";
import PageConversion from "@/components/PageConversion";
import { Areas, Testimonials, USPs } from "@/components/Sections";
import { PAGE_HERO_IMAGES, SERVICE_IMAGES } from "@/lib/data";
export default function About() {
  useTitle("About Cool My Car Dubai", "Cool My Car Dubai provides 24/7 mobile car AC service across Dubai, with an average technician arrival time of 10–15 minutes.");
  return (<main className="about-page">
    <Banner title="Car AC specialists in Dubai" sub="Our team provides 24/7 mobile car AC repair and diagnostics across Dubai." image={PAGE_HERO_IMAGES.about} />
    <section className="about-story-section"><Reveal className="wrap about-story">
      <div className="about-story-copy"><span className="pill">Our story</span><h2>Built for Dubai’s heat.</h2>
        <p className="sub">Cool My Car Dubai was created to make car AC repair in Dubai straightforward and dependable. Because reliable cooling matters in the UAE heat, we focus on careful diagnosis, genuine parts and clear explanations before work begins.</p>
        <p className="sub">We provide 24/7 mobile car AC service across Dubai, with an average technician arrival time of 10–15 minutes.</p></div>
      <figure className="about-story-image"><img src={SERVICE_IMAGES["ac-repair"]} alt="Technician inspecting a car air-conditioning system" loading="lazy" /></figure>
    </Reveal></section>
    <USPs />
    <section style={{ background: "#fff" }}><Reveal className="wrap"><span className="pill">What we stand for</span><h2>Our values.</h2>
      <Cards items={[{ i: "award", t: "Quality assurance", p: "Every repair is tested for real cooling performance." }, { i: "clock", t: "On-time service", p: "We respect your schedule and show up when promised." }, { i: "cog", t: "Genuine parts", p: "Quality components matched to your make and model." }, { i: "shield", t: "Repair warranty", p: "Work that’s backed, so you drive with confidence." }, { i: "heart", t: "Honest advice", p: "We tell you what needs fixing, and what doesn’t." }, { i: "truck", t: "Convenience", p: "Service at your door, booked in minutes." }]} /></Reveal></section>
    <Testimonials />
    <Areas title="Where we work." />
    <PageConversion pageKey="about" />
    <Cta />
  </main>);
}
