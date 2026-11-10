# D’nest website

Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui-style components.

## Run

    npm install
    npm run dev      # http://localhost:3000
    npm run build    # production build

## Edit

- `src/lib/site.ts`      WhatsApp catalog link, brand name, FSSAI number (`NEXT_PUBLIC_FSSAI_LICENSE`)
- `src/lib/products.ts`  the three products, prices, images, optional per-product WhatsApp link
- `src/lib/reviews.ts`   add real reviews; the section stays hidden while empty
- `public/images/`       logo (tagline removed) and product photos

Add more shadcn components with `npx shadcn@latest add <name>` (`components.json` is set up).
