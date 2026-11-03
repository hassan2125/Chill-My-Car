import { useState } from "react";
import Icon from "./Icon";
import { SERVICE_IMAGES, SV } from "@/lib/data";

const TABS = ["All", "Repair", "Cleaning", "Diagnosis", "On-site", "Battery"];
const CATEGORIES = {
  "ac-repair": ["Repair"],
  "gas-top-up": ["Repair", "On-site"],
  "gas-leak-repair": ["Repair"],
  diagnosis: ["Diagnosis", "On-site"],
  "deep-cleaning": ["Cleaning"],
  battery: ["Battery", "On-site"],
};

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const items = SV.map((service) => ({ ...service, categories: CATEGORIES[service.s] || [] }))
    .filter((service) => filter === "All" || service.categories.includes(filter));

  return (
    <>
      <div className="gallery-toolbar">
        <div className="tabs" aria-label="Filter gallery by service">
          {TABS.map((category) => (
            <button key={category} type="button" className={filter === category ? "on" : ""} aria-pressed={filter === category} onClick={() => setFilter(category)}>
              {category}
            </button>
          ))}
        </div>
        <p className="gallery-count">{items.length} {items.length === 1 ? "service" : "services"}</p>
      </div>
      <div className="gallery-grid">
        {items.map((service, index) => (
          <button
            className="gallery-card"
            key={service.s}
            type="button"
            onClick={() => setSelected(service)}
            aria-label={`View ${service.t} details`}
          >
            <img src={SERVICE_IMAGES[service.s]} alt="" loading="lazy" />
            <span className="gallery-card-shade" />
            <span className="gallery-card-category">{service.categories[0]}</span>
            <span className="gallery-card-copy">
              <strong>{service.t}</strong>
              <span>{service.tag}</span>
            </span>
            <span className="gallery-card-open"><Icon n="arrow" /></span>
          </button>
        ))}
      </div>
      {selected && (
        <div className="gallery-lightbox" role="presentation" onClick={() => setSelected(null)}>
          <div className="gallery-lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="gallery-lightbox-title" onClick={(event) => event.stopPropagation()}>
            <button className="gallery-lightbox-close" type="button" aria-label="Close image details" onClick={() => setSelected(null)}>×</button>
            <img src={SERVICE_IMAGES[selected.s]} alt={`${selected.t} service`} />
            <div className="gallery-lightbox-copy">
              <span className="pill">{selected.categories.join(" · ")}</span>
              <h2 id="gallery-lightbox-title">{selected.t}</h2>
              <p>{selected.intro}</p>
            </div>
          </div>
        </div>
      )}
      <p className="sub gallery-note">Browse our car AC services, from diagnosis and repair to cleaning and battery care.</p>
    </>
  );
}
