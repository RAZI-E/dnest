// Single place to edit the brand's links and contact details.
export const site = {
  name: "D’nest",
  description:
    "Homemade chocolates in three flavours: peanut, gulkand and mix fruit. Order on WhatsApp.",
  // Every "Buy" button sends people here.
  // To open one product directly, use its own WhatsApp product link instead
  // (WhatsApp Business > Catalog > product > Share) and set it as `whatsappUrl` in products.ts.
  catalogUrl: "https://wa.me/c/144856982753472",
  // Shown in the footer when set. Food businesses in India should display this.
  fssaiLicense: process.env.NEXT_PUBLIC_FSSAI_LICENSE ?? "",
};
