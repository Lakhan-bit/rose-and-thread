import type { StaticImageData } from 'next/image';

export type ImageSrc = string | StaticImageData;

import firstOne from '@/public/firstProduct/firstProduct_page-0001.jpg'
import firstTwo from '@/public/firstProduct/firstProduct_page-0002.jpg'
import firstThree from '@/public/firstProduct/firstProduct_page-0003.jpg'
import firstFour from '@/public/firstProduct/firstProduct_page-0004.jpg'
import firstFive from '@/public/firstProduct/firstProduct_page-0005.jpg'
import firstSix from '@/public/firstProduct/firstProduct_page-0006.jpg'
import firstSeven from '@/public/firstProduct/firstProduct_page-0007.jpg'

import secondFirst from '@/public/secondProduct/seocndProduct_page-0001.jpg'
import secondTwo from '@/public/secondProduct/seocndProduct_page-0002.jpg'
import secondThree from '@/public/secondProduct/seocndProduct_page-0003.jpg'
import secondFour from '@/public/secondProduct/seocndProduct_page-0004.jpg'
import secondFive from '@/public/secondProduct/seocndProduct_page-0005.jpg'
import secondSix from '@/public/secondProduct/seocndProduct_page-0006.jpg'
import secondSeven from '@/public/secondProduct/seocndProduct_page-0007.jpg'

import ThirdOne from '@/public/thirdProduct/thirdProduct_page-0001.jpg'
import ThirdTwo from '@/public/thirdProduct/thirdProduct_page-0002.jpg'
import ThirdThree from '@/public/thirdProduct/thirdProduct_page-0003.jpg'
import ThirdFour from '@/public/thirdProduct/thirdProduct_page-0004.jpg'
import ThirdFive from '@/public/thirdProduct/thirdProduct_page-0005.jpg'
import ThirdSix from '@/public/thirdProduct/thirdProduct_page-0006.jpg'

import FourthOne from '@/public/fourthProduct/fourthProduct_page-0001.jpg'
import FourthTwo from '@/public/fourthProduct/fourthProduct_page-0002.jpg'
import FourthThree from '@/public/fourthProduct/fourthProduct_page-0003.jpg'
import FourthFour from '@/public/fourthProduct/fourthProduct_page-0004.jpg'
import FourthFive from '@/public/fourthProduct/fourthProduct_page-0005.jpg'

import FifthOne from '@/public/fifthProduct/FifthProduct_page-0001.jpg'
import FifthTwo from '@/public/fifthProduct/FifthProduct_page-0001.jpg'
import FifthThree from '@/public/fifthProduct/FifthProduct_page-0001.jpg'
import FifthFour from '@/public/fifthProduct/FifthProduct_page-0001.jpg'
import FifthFive from '@/public/fifthProduct/FifthProduct_page-0001.jpg'

import sixthOne from '@/public/sixthProduct/sixthFirst.png'
import sixthSecond from '@/public/sixthProduct/sixthSecond.png'
import sixthThird from '@/public/sixthProduct/sixthThird.png'
import sixthFourth from '@/public/sixthProduct/sixthFourth.png'

export interface PackSize {
  label: string;
  price: number;
}

export interface DemoProduct {
  name: string;
  slug: string;
  fabric: string;
  price: number;
  packSize: { label: string; price: number }[];
  description: string;
  details: string[];
  MainImage: ImageSrc;
  OtherImages: ImageSrc[];
  featured: boolean;
  bestseller: boolean;
}

export const demoProducts: DemoProduct[] = [
  {
    "name": "Satin Scrunchie — Dusty Rose",
    "slug": "satin-scrunchie-dusty-rose",
    "fabric": "satin",
    "price": 149,
    "packSize": [
      { "label": "Single", "price": 149 },
      { "label": "Set of 3", "price": 399 },
      { "label": "Set of 5", "price": 599 }
    ],
    "description": "A soft satin scrunchie in a warm dusty rose that works with almost every hair colour. The smooth finish glides over hair without snagging, so you can wear it all day without a headache. Holds a messy bun, a low ponytail, or a half-up style without slipping.",
    "details": [
      "Fabric: Premium satin",
      "Diameter: 4.5 inches when flat",
      "Hold: Medium — best for fine to medium hair",
      "Care: Hand wash cold, air dry",
      "Pack contents: 1 scrunchie"
    ],
    "MainImage": firstOne,
    "OtherImages": [
      firstTwo,
      firstFour,
      firstSix,
      firstSeven
    ],
    "featured": true,
    "bestseller": true
  },
  {
    "name": "Velvet Scrunchie — Forest",
    "slug": "velvet-scrunchie-forest",
    "fabric": "velvet",
    "price": 179,
    "packSize": [
      { "label": "Single", "price": 179 },
      { "label": "Set of 3", "price": 479 }
    ],
    "description": "Deep forest green velvet with a plush, matte finish that grips hair gently — no pins or clips needed. The thicker band holds heavy hair in place while staying soft on the scalp. A quiet, grown-up colour that pairs with almost everything.",
    "details": [
      "Fabric: Plush stretch velvet",
      "Diameter: 4.5 inches when flat",
      "Hold: Strong — best for thick or long hair",
      "Care: Hand wash cold, air dry away from direct sun",
      "Pack contents: 1 scrunchie"
    ],
    "MainImage": secondFirst,
    "OtherImages": [
      secondTwo,
      secondThree,
      secondFour,
      secondFive
    ],
    "featured": true,
    "bestseller": false
  },
  {
    "name": "Cotton Scrunchie — Ivory",
    "slug": "cotton-scrunchie-ivory",
    "fabric": "cotton",
    "price": 129,
    "packSize": [
      { "label": "Single", "price": 129 },
      { "label": "Set of 3", "price": 349 },
      { "label": "Set of 5", "price": 529 }
    ],
    "description": "An everyday cotton scrunchie in a clean ivory that disappears into any outfit. The breathable cotton weave is gentle enough for daily wear and holds a ponytail without leaving a crease. Made for people who reach for the same scrunchie every morning.",
    "details": [
      "Fabric: 100% breathable cotton",
      "Diameter: 4.5 inches when flat",
      "Hold: Medium — best for fine to medium hair",
      "Care: Machine wash cold in a mesh bag, air dry",
      "Pack contents: 1 scrunchie"
    ],
    "MainImage": ThirdOne,
    "OtherImages": [
      ThirdOne, ThirdTwo, ThirdThree, ThirdFour, ThirdFive, ThirdSix
    ],
    "featured": false,
    "bestseller": true
  },
  {
    "name": "Everyday Set — Warm Neutrals",
    "slug": "everyday-set-warm-neutrals",
    "fabric": "satin",
    "price": 399,
    "packSize": [
      { "label": "Set of 3", "price": 399 }
    ],
    "description": "Three scrunchies in the shades you'll actually reach for — a warm beige, a soft clay, and a deep caramel. Sold as a set so there's always one clean one in your bag, your desk, and your hair. The set saves you ₹48 compared to buying each separately.",
    "details": [
      "Fabric: Premium satin",
      "Diameter: 4.5 inches when flat (each)",
      "Hold: Medium — best for fine to medium hair",
      "Care: Hand wash cold, air dry",
      "Pack contents: 3 scrunchies (beige, clay, caramel)"
    ],
    "MainImage": FourthOne,
    "OtherImages": [
      FourthTwo,
      FourthThree,
      FourthFour,
      FourthFive
    ],
    "featured": true,
    "bestseller": true
  },
  {
    "name": "Satin Scrunchie — Midnight",
    "slug": "satin-scrunchie-midnight",
    "fabric": "satin",
    "price": 149,
    "packSize": [
      { "label": "Single", "price": 149 },
      { "label": "Set of 3", "price": 399 },
      { "label": "Set of 5", "price": 599 }
    ],
    "description": "A deep midnight blue satin that reads almost black in daylight and catches the light in the evening. Same smooth, snag-free satin as our bestsellers, in a shade that works for both office days and nights out. Holds a sleek low bun without the tightness of a standard elastic.",
    "details": [
      "Fabric: Premium satin",
      "Diameter: 4.5 inches when flat",
      "Hold: Medium — best for fine to medium hair",
      "Care: Hand wash cold, air dry",
      "Pack contents: 1 scrunchie"
    ],
    "MainImage": FifthOne,
    "OtherImages": [
      FifthOne,FifthTwo, FifthThree, FifthFour, FifthFive
    ],
    "featured": false,
    "bestseller": false
  },
  {
    "name": "Velvet Scrunchie — Terracotta",
    "slug": "velvet-scrunchie-terracotta",
    "fabric": "velvet",
    "price": 179,
    "packSize": [
      { "label": "Single", "price": 179 },
      { "label": "Set of 3", "price": 479 }
    ],
    "description": "A warm terracotta velvet scrunchie — the one our customers keep asking us to restock. The plush velvet holds thick hair without slipping and stays comfortable through a full day. The colour is warm, earthy, and looks especially good against dark hair.",
    "details": [
      "Fabric: Plush stretch velvet",
      "Diameter: 4.5 inches when flat",
      "Hold: Strong — best for thick or long hair",
      "Care: Hand wash cold, air dry away from direct sun",
      "Pack contents: 1 scrunchie"
    ],
    "MainImage": sixthOne,
    "OtherImages": [
      sixthOne, sixthThird, sixthFourth
    ],
    "featured": true,
    "bestseller": false
  }
]

