// Add real customer reviews here. The "Reviews" section stays hidden while this list is empty.
export type Review = { name: string; text: string; rating?: number };

export const reviews: Review[] = [
  {
    name: "Priya S.",
    rating: 5,
    text: "The peanut chocolate jar is absolutely divine! Rich, creamy, and not too sweet. My whole family loved it and we've already re-ordered.",
  },
  {
    name: "Rahul M.",
    rating: 5,
    text: "Gulkand chocolate is a unique combination I'd never tried before. The rose petal preserve blends perfectly with the dark chocolate. Beautifully crafted!",
  },
  {
    name: "Anjali K.",
    rating: 5,
    text: "Ordered the mix fruit box as a gift and the recipient couldn't stop raving about it. The packaging is gorgeous and the chocolates taste homemade — in the best way.",
  },
  {
    name: "Deepak R.",
    rating: 5,
    text: "Super easy ordering on WhatsApp and delivery was quick. The chocolates are fresh, indulgent, and genuinely made with love. Will definitely order again!",
  },
];
