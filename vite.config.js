import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";
import { SV } from "./src/lib/data.js";

const dir = path.dirname(fileURLToPath(import.meta.url));
const siteUrl = "https://coolmycardubai.com";
const socialImage = `${siteUrl}/images/site/hero-cabin.webp`;
const pageMetadata = [
  {
    path: "",
    title: "Cool My Car Dubai | Car AC Repair in Dubai",
    description: "Car AC repair in Dubai, including diagnostics, gas refill, leak repair and AC cleaning. Get a clear estimate from Cool My Car Dubai.",
  },
  {
    path: "services",
    title: "Car AC Services in Dubai | Cool My Car Dubai",
    description: "Compare car AC repair, diagnosis, gas refill, leak repair and AC cleaning in Dubai. Find the right next step for weak cooling or unusual AC symptoms.",
  },
  {
    path: "about",
    title: "About Cool My Car Dubai | Cool My Car Dubai",
    description: "Cool My Car Dubai provides mobile car AC repair and cooling-system care across Dubai.",
  },
  {
    path: "gallery",
    title: "Car AC Service Gallery | Cool My Car Dubai",
    description: "View examples of car AC repair, refrigerant service, leak diagnosis and AC-system cleaning by Cool My Car Dubai in Dubai.",
  },
  {
    path: "brands",
    title: "Car AC Service by Brand | Cool My Car Dubai",
    description: "Find out whether Cool My Car Dubai can service your car AC. Search our supported makes and send your model details for confirmation.",
  },
  {
    path: "contact",
    title: "Book Car AC Repair in Dubai | Cool My Car Dubai",
    description: "Request mobile car AC repair in Dubai. Share your vehicle, AC symptoms and location with Cool My Car Dubai to discuss service options and an estimate.",
  },
  ...SV.map((service) => ({
    path: `services/${service.s}`,
    title: `${service.seoTitle} | Cool My Car Dubai`,
    description: service.seoDescription,
  })),
];

function escapeAttribute(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function replaceMeta(html, attribute, name, content) {
  const tag = `<meta ${attribute}="${name}" content="${escapeAttribute(content)}" />`;
  const pattern = new RegExp(`<meta\\s+${attribute}="${name}"\\s+content="[^"]*"\\s*\\/?>`);
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function replaceCanonical(html, href) {
  const tag = `<link rel="canonical" href="${escapeAttribute(href)}" />`;
  const pattern = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/;
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function staticRouteMetadata() {
  return {
    name: "static-route-metadata",
    apply: "build",
    closeBundle() {
      const templatePath = path.resolve(dir, "dist/index.html");
      const template = readFileSync(templatePath, "utf8");

      for (const page of pageMetadata) {
        if (!page.path) continue;
        const canonical = `${siteUrl}/${page.path}/`;
        let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`);
        html = replaceMeta(html, "name", "description", page.description);
        html = replaceMeta(html, "property", "og:title", page.title);
        html = replaceMeta(html, "property", "og:description", page.description);
        html = replaceMeta(html, "property", "og:url", canonical);
        html = replaceMeta(html, "property", "og:image", socialImage);
        html = replaceMeta(html, "name", "twitter:title", page.title);
        html = replaceMeta(html, "name", "twitter:description", page.description);
        html = replaceMeta(html, "name", "twitter:image", socialImage);
        html = replaceCanonical(html, canonical);

        const outputPath = path.resolve(dir, "dist", page.path, "index.html");
        mkdirSync(path.dirname(outputPath), { recursive: true });
        writeFileSync(outputPath, html);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), staticRouteMetadata()],
  resolve: { alias: { "@": path.resolve(dir, "src") } },
});
