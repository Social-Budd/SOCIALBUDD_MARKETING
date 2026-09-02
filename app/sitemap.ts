import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

// Required for `output: "export"` — prerender at build time.
export const dynamic = "force-static";

const routes = [
  "",
  "/pricing",
  "/agencies",
  "/start",
  "/contact",
  "/about",
  "/careers",
  "/blog",
  "/docs",
  "/help",
  "/privacy",
  "/terms",
  "/product/clipping",
  "/product/captions",
  "/product/scheduling",
  "/product/analytics",
  "/solutions/podcasters",
  "/solutions/businesses",
  "/solutions/creators",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
