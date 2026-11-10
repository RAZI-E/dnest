import { site } from "./site";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  weight: string;
  highlights: string[];
  image: string;
  price: number;
  mrp: number;
  /** Background tint behind the product photo, taken from its packaging. */
  tint: string;
  /** Optional: a product-specific WhatsApp link. Falls back to the catalog. */
  whatsappUrl?: string;
};

export const products: Product[] = [
  {
    slug: "peanut-chocolate",
    name: "D’nest Peanut Chocolate Jar",
    tagline: "Crunchy Handcrafted Delights",
    description: "Roasted golden peanuts encased in silky homemade chocolate. Crunchy, rich, and irresistible.",
    weight: "200g Jar",
    highlights: ["Roasted Peanuts", "Pure Cocoa", "100% Veg"],
    image: "/images/peanut.png",
    price: 270,
    mrp: 300,
    tint: "#E9D2A6",
  },
  {
    slug: "gulkand-chocolate",
    name: "D’nest Gulkand Chocolate",
    tagline: "Shahi Rose Petal Preserve & Chocolate",
    description:
      "A royal blend of sweet, aromatic rose-petal gulkand infused into decadent homemade chocolate.",
    weight: "200g Jar",
    highlights: ["Shahi Gulkand", "Aromatic Rose", "100% Veg"],
    image: "/images/gulkand.png",
    price: 270,
    mrp: 300,
    tint: "#D8B3BC",
  },
  {
    slug: "mix-fruit-chocolate",
    name: "D’nest Mix Fruit Chocolate",
    tagline: "A Perfect Blend of Fruits & Chocolate",
    description: "Hand-picked dried fruits and berries harmoniously balanced with luscious homemade cocoa.",
    weight: "200g Jar",
    highlights: ["Real Fruit Bits", "Rich Cocoa", "100% Veg"],
    image: "/images/mix-fruit.png",
    price: 270,
    mrp: 300,
    tint: "#F2C9CF",
  },
];

export const productUrl = (p: Product) => p.whatsappUrl ?? site.catalogUrl;
export const discountPercent = (p: Product) =>
  Math.round((1 - p.price / p.mrp) * 100);
export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;
