import { useEffect } from "react";
const BASE = "Cool My Car Dubai";
const SITE_URL = "https://coolmycardubai.com";
const SOCIAL_IMAGE = `${SITE_URL}/images/site/hero-cabin.webp`;
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

function updateCanonical(pathname) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  const path = pathname === "/" ? "/" : `${pathname.replace(/\/+$/, "")}/`;
  link.setAttribute("href", `${SITE_URL}${path}`);
}

export function useTitle(title, description = DEFAULT_DESCRIPTION) {
  const pageTitle = title ? `${title} | ${BASE}` : `${BASE} | Car AC Repair in Dubai`;
  useEffect(() => {
    const path = window.location.pathname === "/" ? "/" : `${window.location.pathname.replace(/\/+$/, "")}/`;
    document.title = pageTitle;
    updateMeta("name", "description", description);
    updateMeta("property", "og:title", pageTitle);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", `${SITE_URL}${path}`);
    updateMeta("property", "og:image", SOCIAL_IMAGE);
    updateMeta("name", "twitter:title", pageTitle);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", SOCIAL_IMAGE);
    updateCanonical(window.location.pathname);
  }, [pageTitle, description]);
}
