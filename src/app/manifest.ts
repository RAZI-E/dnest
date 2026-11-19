import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "D’nest Homemade Chocolates",
    short_name: "D’nest",
    description: "Homemade artisan chocolates in three flavours: Peanut, Gulkand, and Mix Fruit.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F3EE",
    theme_color: "#12163A",
    icons: [
      {
        src: "/images/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

