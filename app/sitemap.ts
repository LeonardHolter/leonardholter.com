import type { MetadataRoute } from "next";

const base = "https://leonardholter.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/mental-models`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/books/100m-leads`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/books/100m-offers`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/books/grinding-it-out`, changeFrequency: "yearly", priority: 0.3 },
    {
      url: `${base}/books/how-to-make-a-few-billion-dollars`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
