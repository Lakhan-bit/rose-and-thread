'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react';
import { chatLink, site } from '@/lib/site';
import { DemoProduct } from '@/lib/demoProducts';

interface PhotoProps {
  src: string | StaticImageData;
  alt: string;
  priority?: boolean;
}

export function Photo({ src, alt, priority = false }: PhotoProps) {
  const [failed, setFailed] = useState(false);

  const fallbackSvg = `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="600" height="600" fill="#f4eee5"/><text x="300" y="300" text-anchor="middle" fill="#6b554c" font-size="22">${alt.replace(
      /[<>&"]/g,
      ''
    )}</text></svg>`
  )}`;

  return (
    <Image
      src={failed ? fallbackSvg : src}
      alt={alt}
      fill
      sizes="(max-width: 700px) 90vw, (max-width: 1000px) 45vw, 35vw"
      priority={priority}
      onError={() => setFailed(true)}
    />
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [announcement, setAnnouncement] = useState(true);
  const path = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      {announcement && (
        <div className="announcement">
          COD available · Free shipping over ₹499
          <button
            type="button"
            aria-label="Dismiss announcement"
            onClick={() => setAnnouncement(false)}
          >
            <X size={14} />
          </button>
        </div>
      )}

      <header>
        <Link className="wordmark" href="/">
          rose <i>&</i> thread
          <span>HANDMADE WITH A LITTLE LOVE</span>
        </Link>

        <nav aria-label="Main navigation">
          <Link
            className={path.startsWith('/products') ? 'active' : ''}
            href="/products/"
          >
            The collection
          </Link>
          <Link href="/about/">Our story</Link>
          <Link href="/contact/">Say hello</Link>
        </nav>

        <a
          className="header-chat"
          href={chatLink()}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={20} />
          <span>Let’s chat</span>
        </a>

        <button
          type="button"
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        {open && (
          <nav className="mobile-nav">
            <Link href="/products/">The collection</Link>
            <Link href="/about/">Our story</Link>
            <Link href="/contact/">Say hello</Link>
          </nav>
        )}
      </header>
    </>
  );
}

export function FloatingChat() {
  const path = usePathname();
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const el = document.querySelector('footer');
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) =>
      setFooterVisible(entry.isIntersecting)
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isProductDetail = /^\/products\/[^/]+/.test(path);

  if (isProductDetail || footerVisible) {
    return null;
  }

  return (
    <a className="floating-chat" href={chatLink()}>
      <MessageCircle size={19} /> Order on WhatsApp
    </a>
  );
}

const FOOTER_SECTIONS = [
  {
    title: 'Shop',
    links: [
      { label: 'All scrunchies', href: '/products/' },
      { label: 'Scrunchie sets', href: '/products/?pack=Set+of+3' },
    ],
  },
  {
    title: 'Information',
    links: [
      { label: 'Our story', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Shipping', href: '/shipping/' },
      { label: 'Returns & exchanges', href: '/returns/' },
    ],
  },
  {
    title: 'The small print',
    links: [
      { label: 'Privacy', href: '/privacy/' },
      { label: 'Terms', href: '/terms/' },
      { label: 'Refund policy', href: '/refund-policy/' },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Link className="wordmark" href="/">
            rose <i>&</i> thread
          </Link>
          <p>
            Little things, made with care.
            <br />
            Handmade in {site.city}, India.
          </p>
          <small className="demo-note">
            Demo storefront · illustrative products & policies
          </small>
        </div>

        {FOOTER_SECTIONS.map((section) => (
          <div key={section.title}>
            <h3>{section.title}</h3>
            {section.links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Made slowly. Worn happily. ♡</span>
        <span>{site.whatsappNumber || 'WhatsApp coming soon'}</span>
      </div>
    </footer>
  );
}

export function Card({ product: p }: { product: DemoProduct }) {
  const minPrice = Math.min(...p.packSize.map((ps) => ps.price));
  const priceLabel = p.packSize.length > 1 ? `from ₹${minPrice}` : `₹${minPrice}`;
  const fabricLabel = p.fabric.charAt(0).toUpperCase() + p.fabric.slice(1);

  return (
    <article className="product-card">
      <Link href={`/products/${p.slug}/`}>
        <div className="product-image">
          <Photo
            src={p.MainImage}
            alt={`${p.name} ${p.fabric} scrunchie`}
          />
          {p.bestseller && <span className="badge">Bestseller</span>}
          <span className="card-arrow">
            <ArrowUpRight size={18} />
          </span>
        </div>

        <div className="product-meta">
          <small>{fabricLabel}</small>
          <h3>{p.name}</h3>
          <span className="price">{priceLabel}</span>
        </div>
      </Link>
    </article>
  );
}