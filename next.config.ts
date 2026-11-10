import type { NextConfig } from "next";

const CATALOG_URL = "https://wa.me/c/919529176512";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/catalog",
        destination: CATALOG_URL,
        permanent: false,
      },
      {
        source: "/buy",
        destination: CATALOG_URL,
        permanent: false,
      },
      {
        source: "/order",
        destination: CATALOG_URL,
        permanent: false,
      },
      {
        source: "/whatsapp",
        destination: CATALOG_URL,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
