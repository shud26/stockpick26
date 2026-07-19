import type { MetadataRoute } from "next";
import { ASSETS } from "@/lib/assets";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://stockpick26.com";
  const statics = ["", "/method", "/backtest", "/log", "/glossary", "/about", "/privacy"].map((p) => ({
    url: `${base}${p}`,
    changeFrequency: (p === "" || p === "/log" ? "daily" : "weekly") as "daily" | "weekly",
  }));
  const assets = ASSETS.map((a) => ({
    url: `${base}/asset/${a.slug}`,
    changeFrequency: "daily" as const,
  }));
  return [...statics, ...assets];
}
