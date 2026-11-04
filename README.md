# Rose & Thread

A Next.js 15 App Router / TypeScript / Tailwind storefront. No database, checkout, auth or cart. All routes are statically exported for hosting.

## Run

```sh
npm install
npm run dev
npm run build
```

`npm run build` runs `next build` with TypeScript checking and creates `out/`.

## Make it yours

Edit `lib/site.ts`: brand name, city, maker, email, Instagram URL, domain and WhatsApp number. The WhatsApp number must contain digits only, including the country code (for example country code 91 followed by your business number). It deliberately starts empty: ordering buttons route to a clear setup notice until it is configured, rather than sending orders to an invented number. Replace illustrative branding and story text on the home and about pages with your actual story. Review shipping, returns and legal placeholders before accepting customer orders. No messages are sent automatically.

All eight demo products and the `Product` interface live in `lib/products.ts`. Set stock, featured status, fabrics, colours, pack size, prices, descriptions, details and four image paths there. Single products allow matching-colour packs priced at 2.55x for three and 4x for five (rounded to rupees); adjust `priceFor` to your real pricing. Curated sets have fixed contents and pack sizes. Order messages use the displayed price and current selections. Demo set savings derive from ₹537 versus ₹449.

Replace local illustrations in `public/demo/` with actual product photography and update each `images` path, e.g. `/demo/satin-dusty-rose-1.jpg` (never include `/public` in a URL). The `Photo` component uses `next/image`, fixed-size parents and responsive sizes, with a graceful inline SVG fallback on failure. Every gallery has four views. Current SVGs are deliberately illustrative demo assets, not photography of real inventory.

Rebrand by changing CSS variables in `app/globals.css`; these are mapped in `tailwind.config.ts`. `--accent` is the requested rosewood and `--accent-hover` is used for button backgrounds to improve white text contrast. Fraunces and Inter use `next/font/google` and are served locally after build; initial font compilation needs access to Google Fonts. The CSS respects reduced motion.

The hosted preview is private. Update `site.domain` if moving to your own domain. Source metadata contains the hosted domain. No external analytics or image hosts are used. Instagram currently points to the general service because a brand profile has not been supplied.

## Routes and behavior

Home, URL-synced catalog filters, eight product pages, about, contact FAQ, shipping, returns, privacy, terms, refund policy and a friendly 404. Filters preserve browser back/forward behavior. Product galleries support left/right arrow keys. Mobile order bars appear after scrolling past the main order button. Out-of-stock orders are disabled with a separate notification enquiry. The generic mobile chat pill hides near the footer and on product detail pages.
