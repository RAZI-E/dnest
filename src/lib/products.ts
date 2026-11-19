import { site } from "./site";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  taste: string;
  ingredients: string;
  weight: string;
  highlights: string[];
  image: string;
  price: number;
  mrp: number;
  /** Per-product accent color */
  accent: string;
  accentBg: string;
  /** Background tint behind the product photo */
  tint: string;
  /** Optional: a product-specific WhatsApp link. Falls back to the catalog. */
  whatsappUrl?: string;
};

export const products: Product[] = [
  {
    slug: "peanut-chocolate",
    name: "Peanut chocolate jar",
    tagline: "Slow-roasted crunchy peanuts encased in velvety cocoa",
    description: "Slow-roasted golden peanuts encased in silky homemade chocolate. Crunchy, rich, and deeply satisfying.",
    taste: "A warm, roasted nut crunch wrapped in slow-melted homemade cocoa.",
    ingredients: "Slow-roasted peanuts, whole cocoa solids, pure cocoa butter, unrefined sugar.",
    weight: "500g jar",
    highlights: ["Roasted peanuts", "Pure cocoa", "100% vegetarian"],
    image: "/images/peanut.png",
    price: 349,
    mrp: 349,
    accent: "#B9772E",
    accentBg: "#FBF5EE",
    tint: "#B9772E",
  },
  {
    slug: "gulkand-chocolate",
    name: "Gulkand chocolate jar",
    tagline: "Traditional sweet rose petal preserve layered with rich dark chocolate",
    description: "A royal harmony of sun-cooked damask rose petal preserve infused into decadent homemade chocolate.",
    taste: "Delicate floral rose sweetness melting into luscious, bittersweet cocoa.",
    ingredients: "Sun-cooked Shahi gulkand, organic rose petals, rich cocoa butter, dark chocolate.",
    weight: "500g jar",
    highlights: ["Shahi gulkand", "Aromatic rose", "100% vegetarian"],
    image: "/images/gulkand.png",
    price: 349,
    mrp: 349,
    accent: "#B4506A",
    accentBg: "#FAF0F3",
    tint: "#B4506A",
  },
  {
    slug: "mix-fruit-chocolate",
    name: "Mix fruit chocolate jar",
    tagline: "Sun-dried fruits and berries suspended in smooth chocolate",
    description: "Hand-picked dried cranberries, raisins, and berries harmoniously balanced with luscious homemade cocoa.",
    taste: "Tart berry bursts and chew balanced by a velvety, rounded chocolate finish.",
    ingredients: "Sun-dried cranberries, black raisins, dried berries, artisan cocoa solids.",
    weight: "500g jar",
    highlights: ["Real fruit bits", "Rich cocoa", "100% vegetarian"],
    image: "/images/mix-fruit.png",
    price: 349,
    mrp: 349,
    accent: "#7A2E4D",
    accentBg: "#F8EEF2",
    tint: "#7A2E4D",
  },
];

export const productUrl = (p: Product) => p.whatsappUrl ?? site.catalogUrl;
export const discountPercent = (p: Product) =>
  Math.round((1 - p.price / p.mrp) * 100);
export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;
