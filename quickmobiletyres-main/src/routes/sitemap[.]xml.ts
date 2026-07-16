import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SERVICES } from "@/lib/services";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/",
          "/services",
          "/about",
          "/faqs",
          "/contact",
          "/privacy-policy",
          "/terms",
          "/mobile-tyre-fitting-andover",
          "/mobile-tyre-fitting-basingstoke",
          "/mobile-tyre-fitting-winchester",
          "/mobile-tyre-fitting-reading",
        ];
        const servicePaths = SERVICES.map((s) => `/services/${s.slug}`);
        const all = [...staticPaths, ...servicePaths];
        const urls = all
          .map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
