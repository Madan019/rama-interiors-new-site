import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rama Interiors",
    short_name: "Rama Interiors",
    description: "Premium Furniture & Bespoke Interior Solutions in Rajasthan",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a1a1a",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
