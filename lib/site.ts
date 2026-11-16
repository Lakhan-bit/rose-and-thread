export interface SiteConfig {
  name: string;
  city: string;
  maker: string;
  whatsappNumber: string;
  instagramUrl: string;
  email: string;
  domain: string;
  freeShippingThreshold: number;
  returnWindowDays: number;
}

export const site: SiteConfig = {
  name: 'Rose & Thread',
  city: 'Gondia',
  maker: 'the maker',
  whatsappNumber: '7666008399',
  instagramUrl: 'https://www.instagram.com/',
  email: '',
  domain: 'https://rose-and-thread.vercel.app',
  freeShippingThreshold: 99,
  returnWindowDays: 3,
};

export const chatLink = (): string => {
  if (!site.whatsappNumber) {
    return '/contact/#setup';
  }

  const message = `Hi ${site.name}! Can you help me choose a scrunchie?`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
};