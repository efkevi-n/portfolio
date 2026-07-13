import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://efkevin.vercel.app",
      lastModified: new Date(),
    },
  ];
}
