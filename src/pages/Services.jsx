import { useTitle } from "@/lib/useTitle";
import { Banner, Cards, Cta } from "@/components/PageParts";
import Reveal from "@/components/Reveal";
import PageConversion from "@/components/PageConversion";
import { SV } from "@/lib/data";
export default function Services() {
  useTitle("Car AC Services in Dubai");
  return (<main>
    <Banner crumbs={[["Services"]]} title="Our services" sub="Six specialist services to keep your car cool, clean and reliable in Dubai." />
    <section><Reveal className="wrap"><Cards items={SV.map((x) => ({ h: `/services/${x.s}`, i: x.i, t: x.t, p: x.tag }))} /></Reveal></section>
    <PageConversion pageKey="services" />
    <Cta />
  </main>);
}
