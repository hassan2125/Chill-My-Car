import { useState } from "react";
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
const DEEP_CLEANING_EXTRA_IMAGE = "https://i.pinimg.com/1200x/26/29/f9/2629f9327a51f9b9f03000b4f7f80e00.jpg";
const DIAGNOSIS_EXTRA_IMAGES = [
  {
    slug: "diagnosis-engine-inspection",
    image: "/images/stock/diagnosis-engine-inspection.jpeg",
    title: "Engine inspection",
    description: "A mechanic inspects the engine during a vehicle diagnosis.",
  },
  {
    slug: "diagnosis-in-car-scan",
    image: "/images/stock/diagnosis-in-car-scan.jpeg",
    title: "In-car diagnostic scan",
    description: "A mechanic uses a diagnostic scanner inside a car.",
  },
  {
    slug: "diagnosis-engine-scan",
    image: "/images/stock/diagnosis-engine-scan.jpeg",
    title: "Engine diagnostic scan",
    description: "A diagnostic scanner checks the vehicle engine.",
  },
  {
    slug: "diagnosis-diagnostic-tool",
    image: "/images/stock/diagnosis-diagnostic-tool.jpeg",
    title: "Vehicle diagnostic tools",
    description: "A technician checks a vehicle with a diagnostic tool.",
  },
];
const BATTERY_EXTRA_IMAGES = [
  {
    slug: "battery-test",
    image: "/images/stock/battery-test.jpeg",
    title: "Battery testing",
    description: "A technician checks a car battery and its connections.",
  },
  {
    slug: "battery-jump-start",
    image: "/images/stock/battery-jump-start.jpeg",
    title: "Battery jump-start",
    description: "Jumper cables connect to a car battery during a jump-start.",
  },
  {
    slug: "battery-cable-service",
    image: "/images/stock/battery-cable-service.jpeg",
    title: "Battery cable service",
    description: "A technician connects jump-start cables in an engine bay.",
  },
  {
    slug: "battery-inspection",
    image: "/images/stock/battery-inspection.jpeg",
    title: "Battery inspection",
    description: "A close-up inspection of a car battery and engine bay.",
  },
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const deepCleaning = SV.find((service) => service.s === "deep-cleaning");
  const diagnosis = SV.find((service) => service.s === "diagnosis");
  const battery = SV.find((service) => service.s === "battery");
  const extraItems = [
    ...(deepCleaning
      ? [{ ...deepCleaning, s: "deep-cleaning-extra", galleryImage: DEEP_CLEANING_EXTRA_IMAGE, categories: ["Cleaning"] }]
      : []),
    ...(diagnosis
      ? DIAGNOSIS_EXTRA_IMAGES.map((image) => ({
          ...diagnosis,
          s: image.slug,
          t: image.title,
          intro: image.description,
          galleryImage: image.image,
          categories: ["Diagnosis"],
        }))
      : []),
    ...(battery
      ? BATTERY_EXTRA_IMAGES.map((image) => ({
          ...battery,
          s: image.slug,
          t: image.title,
          intro: image.description,
          galleryImage: image.image,
          categories: ["Battery"],
        }))
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
        <div className="tabs" aria-label="Filter gallery by service">
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
      <p className="sub gallery-note">Browse our car AC services, from diagnosis and repair to cleaning and battery care.</p>
    </>
  );
}
