import { useTitle } from "@/lib/useTitle";
import { Banner, Cta } from "@/components/PageParts";
import Reveal from "@/components/Reveal";
import PageConversion from "@/components/PageConversion";
import { ServiceCards } from "@/components/Sections";
import { PAGE_HERO_IMAGES, SV } from "@/lib/data";
export default function Services() {
  useTitle("Car AC Services in Dubai");
  return (<main>
    <Banner crumbs={[["Services"]]} title="Our services" sub="Six specialist services to keep your car cool, clean and reliable in Dubai." image={PAGE_HERO_IMAGES.services} />
    <section><Reveal className="wrap"><ServiceCards services={SV} /></Reveal></section>
    <PageConversion pageKey="services" />
    <Cta />
  </main>);
}
