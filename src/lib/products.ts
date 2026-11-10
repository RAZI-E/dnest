import { site } from "./site";

export type Product = {
  slug: string;
  name: string;
  description: string;
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
    description: "Peanuts in homemade chocolate, packed in a jar.",
    image: "/images/peanut.png",
    price: 270,
    mrp: 300,
    tint: "#E9D2A6",
  },
  {
    slug: "gulkand-chocolate",
    name: "D’nest Gulkand Chocolate",
    description:
      "Homemade chocolate with gulkand, the sweet rose-petal preserve.",
    image: "/images/gulkand.png",
    price: 270,
    mrp: 300,
    tint: "#D8B3BC",
  },
  {
    slug: "mix-fruit-chocolate",
    name: "D’nest Mix Fruit Chocolate",
    description: "A blend of fruit and homemade chocolate.",
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
