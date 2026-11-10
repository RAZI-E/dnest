import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "D’nest Homemade Chocolates",
    short_name: "D’nest",
    description: "Homemade artisan chocolates in three flavours: Peanut, Gulkand, and Mix Fruit.",
    start_url: "/",
    display: "standalone",
    background_color: "#121f38",
    theme_color: "#d4af5a",
    icons: [
      {
        src: "/images/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
