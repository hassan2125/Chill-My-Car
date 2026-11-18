import { useTitle } from "@/lib/useTitle";
import { Banner, Cta } from "@/components/PageParts";
import Reveal from "@/components/Reveal";
import PageConversion from "@/components/PageConversion";
import { ServiceCards } from "@/components/Sections";
import { PAGE_HERO_IMAGES, SV } from "@/lib/data";
export default function Services() {
  useTitle("Car AC Services in Dubai", "Compare car AC repair, diagnosis, refrigerant top-up, leak repair and AC cleaning in Dubai. Find the right next step for weak cooling or unusual AC symptoms.");
  return (<main>
    <Banner crumbs={[["Services"]]} title="Car AC services in Dubai" sub="From system diagnosis and refrigerant top-up to leak repair and AC cleaning, find the right service for your car." image={PAGE_HERO_IMAGES.services} />
    <section><Reveal className="wrap">
      <span className="pill">Our services</span>
      <h2>Find the right service for your car.</h2>
      <p className="sub">Explore car AC repair, diagnostics, refrigerant service, leak repair and AC cleaning across Dubai.</p>
      <ServiceCards services={SV} />
    </Reveal></section>
    <PageConversion pageKey="services" />
    <Cta />
  </main>);
}
