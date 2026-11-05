import { site } from './site';

export type Pack = 'Single' | 'Set of 3' | 'Set of 5';

export interface Product {
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  fabric: 'Satin' | 'Cotton' | 'Velvet';
  colours: { name: string; hex: string }[];
  packSize: Pack;
  description: string;
  details: string[];
  images: string[];
  featured: boolean;
  bestseller: boolean;
  inStock: boolean;
}

type ProductEntry = [
  slug: string,
  name: string,
  fabric: Product['fabric'],
  colour: string,
  hex: string,
  price: number,
  packSize: Pack
];

const entries: ProductEntry[] = [
  ['satin-dusty-rose', 'Dusty Rose', 'Satin', 'Rose', '#b97784', 179, 'Single'],
  ['satin-champagne', 'Champagne', 'Satin', 'Champagne', '#d5bd90', 179, 'Single'],
  ['cotton-sage', 'Soft Sage', 'Cotton', 'Sage', '#8e9b84', 149, 'Single'],
  ['velvet-midnight', 'Midnight', 'Velvet', 'Midnight', '#414249', 199, 'Single'],
  ['everyday-set', 'The Everyday Set', 'Satin', 'Mixed', '#c997a1', 449, 'Set of 3'],
  ['cotton-cloud', 'Cloud Cream', 'Cotton', 'Cream', '#e4d9c2', 149, 'Single'],
  ['velvet-berry', 'Mulberry', 'Velvet', 'Berry', '#754557', 199, 'Single'],
  ['weekday-set', 'The Weekday Set', 'Satin', 'Mixed', '#a9ac9a', 699, 'Set of 5'],
];

export const products: Product[] = entries.map(
  ([slug, name, fabric, colour, hex, price, packSize], index) => ({
    slug,
    name,
    fabric,
    colours: [{ name: colour, hex }],
    price,
    packSize,
    compareAtPrice: packSize === 'Set of 3' ? 537 : undefined,
    description: `A little softness for your everyday. Our ${fabric.toLowerCase()} scrunchie holds your hair comfortably, from slow mornings to evenings out. Wear it in your hair or keep it close on your wrist.`,
    details: [
      `${fabric} outer fabric`,
      'Approximately 11 cm across',
      'Soft, flexible elastic core',
      `Contents: ${packSize === 'Single' ? '1 scrunchie' : `${packSize.replace('Set of ', '')} scrunchies`}`,
      'Handmade in small batches',
      'Hand wash gently; dry flat',
    ],
    images: [1, 2, 3, 4].map((n) => `/demo/${slug}-${n}.svg`),
    featured: index < 4,
    bestseller: index === 0 || index === 4,
    inStock: index !== 6,
  })
);

export function priceFor(product: Product, pack: Pack): number {
  if (pack === 'Single' || pack === product.packSize) {
    return product.price;
  }

  const multiplier = pack === 'Set of 3' ? 2.55 : 4;
  return Math.round(product.price * multiplier);
}

export function buildWhatsAppLink(product: Product, colour: string, pack: Pack): string {
  if (!site.whatsappNumber) {
    return '/contact/#setup';
  }

  const calculatedPrice = priceFor(product, pack);
  const message = [
    `Hi ${site.name}! I'd like to order: ${product.fabric} Scrunchie — ${product.name}, ${colour}, ${pack} (₹${calculatedPrice}).`,
    `Link: ${site.domain}/products/${product.slug}/`,
  ].join('\n');

  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}