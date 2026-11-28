import { useState } from "react";
import { SERVICE_IMAGES, SV } from "@/lib/data";

const TABS = ["All", "Repair", "Cleaning", "Diagnosis", "On-site"];
const CATEGORIES = {
  "ac-repair": ["Repair"],
  "car-ac-gas-refill": ["Repair", "On-site"],
  "gas-leak-repair": ["Repair"],
  diagnosis: ["Diagnosis", "On-site"],
  "deep-cleaning": ["Cleaning"],
};
const DEEP_CLEANING_EXTRA_IMAGE = "https://i.pinimg.com/1200x/26/29/f9/2629f9327a51f9b9f03000b4f7f80e00.jpg";

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const deepCleaning = SV.find((service) => service.s === "deep-cleaning");
  const extraItems = [
    ...(deepCleaning
      ? [{ ...deepCleaning, s: "deep-cleaning-extra", galleryImage: DEEP_CLEANING_EXTRA_IMAGE, categories: ["Cleaning"] }]
      : []),
  ];
  const items = [
    ...SV.map((service) => ({ ...service, galleryImage: SERVICE_IMAGES[service.s], categories: CATEGORIES[service.s] || [] })),
    ...extraItems,
  ]
    .filter((service) => filter === "All" || service.categories.includes(filter));

  return (
    <>
      <div className="gallery-toolbar">
        <div className="tabs" aria-label="Filter car AC gallery by service">
          {TABS.map((category) => (
            <button key={category} type="button" className={filter === category ? "on" : ""} aria-pressed={filter === category} onClick={() => setFilter(category)}>
              {category}
            </button>
          ))}
        </div>
        <p className="gallery-count">{items.length} {items.length === 1 ? "image" : "images"}</p>
      </div>
      <div className="gallery-grid">
        {items.map((service) => (
          <button
            className="gallery-card"
            key={service.s}
            type="button"
            onClick={() => setSelected(service)}
            aria-label={`View ${service.t} details`}
          >
            <img src={service.galleryImage} alt="" loading="lazy" />
          </button>
        ))}
      </div>
      {selected && (
        <div className="gallery-lightbox" role="presentation" onClick={() => setSelected(null)}>
          <div className="gallery-lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="gallery-lightbox-title" onClick={(event) => event.stopPropagation()}>
            <button className="gallery-lightbox-close" type="button" aria-label="Close image details" onClick={() => setSelected(null)}>×</button>
            <img src={selected.galleryImage} alt={`${selected.t} service`} />
            <div className="gallery-lightbox-copy">
              <span className="pill">{selected.categories.join(" · ")}</span>
              <h2 id="gallery-lightbox-title">{selected.t}</h2>
              <p>{selected.intro}</p>
            </div>
          </div>
        </div>
      )}
      <p className="sub gallery-note">Browse car AC work, from system diagnosis and leak repair to refrigerant service and cleaning.</p>
    </>
  );
}
