import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/privacy`, changeFrequency: "monthly", priority: 0.2 },
    { url: `${siteUrl}/terms`, changeFrequency: "monthly", priority: 0.2 },
  ];
}
