import { useEffect } from "react";
const BASE = "Cool My Car Dubai";
const DEFAULT_DESCRIPTION = "Car AC repair in Dubai, including diagnostics, refrigerant regas, leak repair and AC cleaning. Get a clear estimate from Cool My Car Dubai.";

function updateMeta(attribute, name, content) {
  let meta = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

export function useTitle(title, description = DEFAULT_DESCRIPTION) {
  const pageTitle = title ? `${title} | ${BASE}` : `${BASE} | Car AC Repair in Dubai`;
  useEffect(() => {
    document.title = pageTitle;
    updateMeta("name", "description", description);
    updateMeta("property", "og:title", pageTitle);
    updateMeta("property", "og:description", description);
    updateMeta("name", "twitter:title", pageTitle);
    updateMeta("name", "twitter:description", description);
  }, [pageTitle, description]);
}
