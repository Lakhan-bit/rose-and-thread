import Link from 'next/link';
import {
  ArrowRight,
  MessageCircle,
  PackageCheck,
  Heart,
  RotateCcw,
  Banknote,
  MoveUpRight,
  Instagram,
  type LucideIcon,
} from 'lucide-react';
import { Card, Photo } from '@/components/ui';
import { demoProducts } from '@/lib/demoProducts';
import { chatLink, site } from '@/lib/site';

import ThirdFour from '@/public/thirdProduct/thirdProduct_page-0004.jpg'


interface TrustItem {
  icon: LucideIcon;
  text: string;
}

interface StepItem {
  step: string;
  title: string;
  description: string;
}

const trustItems: TrustItem[] = [
  { icon: Banknote, text: 'Cash on delivery' },
  { icon: RotateCcw, text: '7-day exchanges' },
  { icon: PackageCheck, text: 'Ships in 24–48h' },
  { icon: MessageCircle, text: 'A real person, a chat away' },
];

const orderingSteps: StepItem[] = [
  {
    step: '01',
    title: 'Find your favourite',
    description: 'Pick a fabric, a colour, a little something you love.',
  },
  {
    step: '02',
    title: 'Say hello on WhatsApp',
    description: 'We’ll confirm your selection, address and payment.',
  },
  {
    step: '03',
    title: 'A lovely delivery',
    description: 'Packed with care and dispatched in 24–48 hours.',
  },
];

export default function Home() {
  const featuredProducts = demoProducts.filter((p) => p.featured);
  const instagramShowcase = demoProducts.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="hero wrap">
        <div className="hero-copy">
          <span className="eyebrow">
            <span /> SMALL BATCHES. BIG LOVE.
          </span>
          <h1>
            Little things.
            <br />
            <em>Lovely days.</em>
          </h1>
          <p>
            Soft on your hair. A little joy for your everyday.
            <br className="desktop" /> Thoughtfully handmade scrunchies from {site.city}.
          </p>

          <Link className="button" href="/products/">
            Shop all scrunchies <ArrowRight size={18} />
          </Link>

          <a className="text-link hero-chat" href={chatLink()}>
            <MessageCircle size={16} /> Order on WhatsApp
          </a>

          <div className="hero-foot">
            <Heart size={17} />
            <span>Made by hand, never by the hundred.</span>
          </div>
        </div>

        <div className="hero-art">
          <Photo
            src={ThirdFour}
            alt="Illustrated rose, champagne and sage scrunchies arranged on warm linen"
            priority
          />
          <span className="image-note">a softer kind of everyday</span>
          <span className="round-stamp">
            MADE WITH
            <br />
            <Heart size={23} />
            <br />
            A LITTLE LOVE
          </span>
        </div>
      </section>

      {/* Trust Badges Strip */}
      <div className="trust-strip wrap">
        {trustItems.map(({ icon: Icon, text }) => (
          <div key={text}>
            <Icon size={19} />
            <span>{text}</span>
          </div>
        ))}
      </div>

      {/* Featured Products Collection */}
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">YOUR EVERYDAY FAVOURITES</span>
            <h2>Meet your new favourites.</h2>
            <p>The little finishing touch you’ll reach for, again and again.</p>
          </div>
          <Link className="text-link" href="/products/">
            Explore the collection <ArrowRight size={17} />
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <Card key={product.slug} product={product} />
          ))}
        </div>

        <Link className="all-products" href="/products/">
          View all products <ArrowRight size={17} />
        </Link>
      </section>

      {/* Bundle Promotion */}
      <section className="bundle wrap">
        <div className="bundle-art">
          <Photo
            src="/demo/everyday-set-1.svg"
            alt="Illustration of the three-piece Everyday Set"
          />
        </div>

        <div>
          <span className="eyebrow">BETTER TOGETHER</span>
          <h2>One for every mood.</h2>
          <p>
            The Everyday Set — 3 scrunchies, save over 15%.
            <br />
            Your favourite little luxuries, all tied together.
          </p>
          <Link className="button" href="/products/?pack=Set+of+3">
            Find your everyday set <ArrowRight size={17} />
          </Link>
        </div>

        <span className="bundle-price">
          a lovely little trio
          <br />
          <strong>₹449</strong>
        </span>
      </section>

      {/* Brand Story */}
      <section className="story section wrap">
        <div className="story-art">
          <Photo
            src="/demo/workspace.svg"
            alt="Illustrated sewing workspace with fabric, thread and handmade scrunchies"
          />
          <span>from our little corner of Indore</span>
        </div>

        <div>
          <span className="eyebrow">A SMALL BRAND. A WHOLE LOT OF HEART.</span>
          <h2>
            Made slowly.
            <br />
            <em>Worn happily.</em>
          </h2>
          <p>
            Hi, we’re Rose & Thread. We believe the things you use every day
            deserve a little extra thought — even your hair tie.
          </p>
          <p>
            Soft fabrics, gentle elastic, and colours that feel like you. Each
            scrunchie is a small reminder to find lovely in the everyday.
          </p>
          <Link className="text-link" href="/about/">
            Read our story <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* How to Order Steps */}
      <section className="how-section">
        <div className="wrap">
          <span className="eyebrow">NO CHECKOUT. JUST A CONVERSATION.</span>
          <h2>Your favourite, in three little steps.</h2>

          <div className="steps">
            {orderingSteps.map(({ step, title, description }) => (
              <div key={step}>
                <span>{step}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">LITTLE MOMENTS, BEHIND THE SEAMS</span>
            <h2>A thread of everyday lovely.</h2>
          </div>
          <a
            href={site.instagramUrl}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={17} /> Follow along <MoveUpRight size={17} />
          </a>
        </div>

        <div className="instagram-grid">
          {instagramShowcase.map((product) => (
            <a
              href={site.instagramUrl}
              key={product.slug}
              aria-label="Visit Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Photo
                src={product.OtherImages[0] ?? product.MainImage}
                alt={`${product.name} demo illustration`}
              />
            </a>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="final-cta wrap">
        <Heart size={25} />
        <h2>A little help choosing?</h2>
        <p>Tell us your favourite colours. We’ll find your kind of lovely.</p>
        <a href={chatLink()} className="button">
          <MessageCircle size={18} /> Order on WhatsApp
        </a>
      </section>
    </>
  );
}