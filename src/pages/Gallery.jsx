import { useTitle } from "@/lib/useTitle";
import { Banner, Cta } from "@/components/PageParts";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";
import PageConversion from "@/components/PageConversion";
import { PAGE_HERO_IMAGES } from "@/lib/data";
export default function Gallery() {
  useTitle("Car AC Service Gallery", "View examples of car AC repair, refrigerant service, leak diagnosis and AC-system cleaning by Cool My Car Dubai in Dubai.");
  return (<main className="gallery-page">
    <Banner crumbs={[["Gallery"]]} title="Car AC service gallery" sub="Examples of car AC diagnosis, repair, refrigerant service and AC-system cleaning in Dubai." image={PAGE_HERO_IMAGES.gallery} />
    <section><Reveal className="wrap"><GalleryGrid /></Reveal></section>
    <PageConversion pageKey="gallery" />
    <Cta />
  </main>);
}
