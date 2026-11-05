'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { DemoProduct, PackSize } from '@/lib/demoProducts';
import { site } from '@/lib/site';
import { Photo } from './ui';

function buildWhatsAppLink(
  product: DemoProduct,
  pack: PackSize,
  whatsappNumber: string,
  brandName: string
): string {
  const message = [
    `Hi ${brandName}! I'd like to order:`,
    `• ${product.name}`,
    `• Pack: ${pack.label}`,
    `• Price: ₹${pack.price}`,
  ].join('\n');

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function contentsForPack(pack: PackSize): string {
  const match = pack.label.match(/(\d+)/);
  if (!match || pack.label === 'Single') return '1 scrunchie';
  return `${match[1]} scrunchies`;
}

export default function ProductDetail({ product: p }: { product: DemoProduct }) {
  const gallery = [p.MainImage, ...p.OtherImages];
  const basePrice = p.packSize[0].price;

  const [image, setImage] = useState(0);
  const [pack, setPack] = useState<PackSize>(p.packSize[0]);
  const [sticky, setSticky] = useState(false);

  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setSticky(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  const orderUrl = buildWhatsAppLink(p, pack, site.whatsappNumber, site.name);
  const showPackSelector = p.packSize.length > 1;

  return (
    <>
      <div className="pdp">
        <div>
          <div className="gallery-main">
            <Photo
              src={gallery[image]}
              alt={`${p.name}, view ${image + 1}`}
              priority
            />
            {p.bestseller && <span className="badge">A little favourite</span>}
          </div>

          <div className="thumbnails" aria-label="Product gallery">
            {gallery.map((src, i) => (
              <button
                key={`${src}-${i}`}
                aria-label={`View ${i + 1} of ${p.name}`}
                aria-pressed={image === i}
                className={image === i ? 'selected' : ''}
                onClick={() => setImage(i)}
                onKeyDown={(event) => {
                  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
                  event.preventDefault();
                  const step = event.key === 'ArrowRight' ? 1 : -1;
                  const next = (i + step + gallery.length) % gallery.length;
                  setImage(next);
                  (
                    event.currentTarget.parentElement?.children[next] as HTMLElement
                  )?.focus();
                }}
              >
                <Photo src={src} alt={`${p.name} detail ${i + 1}`} />
              </button>
            ))}
          </div>

          <p className="image-disclaimer">
            Illustrative demo images. Final fabric colour may vary.
          </p>
        </div>

        <div className="buy-panel">
          <span className="eyebrow">HANDMADE {p.fabric.toUpperCase()} SCRUNCHIE</span>
          <h1>{p.name}</h1>

          <div className="pdp-price">
            ₹{pack.price}
            <small>Inclusive of taxes</small>
          </div>

          <p>{p.description.split('.')[0]}.</p>

          {showPackSelector && (
            <fieldset>
              <legend>A little or a lovely lot?</legend>
              <div className="pack-options">
                {p.packSize.map((option) => {
                  const isBase = option.price === basePrice;
                  const isSelected = pack.label === option.label;
                  return (
                    <button
                      key={option.label}
                      aria-pressed={isSelected}
                      className={isSelected ? 'selected' : ''}
                      onClick={() => setPack(option)}
                    >
                      {option.label}
                      <small>
                        {isBase ? 'Base price' : `+ ₹${option.price - basePrice}`}
                      </small>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          )}

          <p className="stock">
            <Check size={15} /> In stock · ready for a lovely day
          </p>

          <div ref={ctaRef}>
            <a className="button buy-button" href={orderUrl}>
              <MessageCircle size={19} /> Order on WhatsApp <ArrowRight size={17} />
            </a>
          </div>

          <div className="trust-stack">
            <span>Cash on Delivery available</span>
            <Link href="/returns/">7-day exchange</Link>
            <Link href="/shipping/">Ships in 24–48h</Link>
          </div>

          <p className="small-copy">
            Questions? <a href={orderUrl}>Message us on WhatsApp</a> — we reply within a
            few hours.
          </p>

          <details open>
            <summary>The lovely details</summary>
            <p>{p.description}</p>
            <ul>
              {p.details.map((detail) => (
                <li key={detail}>
                  {detail.startsWith('Pack contents:') && !detail.includes('(')
                    ? `Pack contents: ${contentsForPack(pack)}`
                    : detail}
                </li>
              ))}
            </ul>
          </details>

          <details>
            <summary>A little care goes a long way</summary>
            <p>
              Hand wash in cool water with mild detergent. Gently squeeze, reshape, and
              dry flat in the shade. Avoid bleach and tumble drying.
            </p>
          </details>
        </div>
      </div>

      {sticky && (
        <div className="mobile-buy">
          <span>
            ₹{pack.price}
            <small>{pack.label}</small>
          </span>
          <a href={orderUrl} className="button">
            Order on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}