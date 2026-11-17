import { useTitle } from "@/lib/useTitle";
import { Banner, Cta } from "@/components/PageParts";
import Reveal from "@/components/Reveal";
import PageConversion from "@/components/PageConversion";
import { ServiceCards } from "@/components/Sections";
import { PAGE_HERO_IMAGES, SV } from "@/lib/data";
export default function Services() {
  useTitle("Car AC Services in Dubai");
  return (<main>
    <Banner crumbs={[["Services"]]} title="Car AC services in Dubai" sub="From AC repair and regas to leak detection, detailed cleaning and battery support, find the right service for your car." image={PAGE_HERO_IMAGES.services} />
    <section><Reveal className="wrap">
      <span className="pill">Our services</span>
      <h2>Find the right service for your car.</h2>
      <p className="sub">Explore expert car AC repair, regas, diagnostics, deep cleaning and battery support across Dubai.</p>
      <ServiceCards services={SV} />
    </Reveal></section>
    <PageConversion pageKey="services" />
    <Cta />
  </main>);
}
