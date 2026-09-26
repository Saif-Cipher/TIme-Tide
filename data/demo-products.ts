export type Product = {
  id: string;
  brand: string;
  name: string;
  slug: string;
  sku: string;
  price: number;
  compareAtPrice?: number;
  currency: 'BDT';
  collection: string;
  category: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  images: string[];
  specs: Record<string, string>;
  stockQuantity: number;
  status: 'active' | 'sold_out' | 'draft';
  featured: boolean;
  tag?: string;
};

export const demoProducts: Product[] = [
  {
    id: "01",
    brand: "ORIENT",
    name: "Mako Diver Chronograph 20Bar",
    slug: "orient-mako-diver-chronograph",
    sku: "OR-CH20-GR",
    price: 18500,
    compareAtPrice: 21000,
    currency: "BDT",
    collection: "Chronograph",
    category: "Diver Chrono",
    shortDescription: "Japanese quartz chronograph caliber with 200m water resistance, deep teal sunburst dial, and unidirectional rotating elapsed-time bezel.",
    description: "The visual anchor of our inaugural curation. Engineered with a surgical 316L stainless steel architecture and high-torque quartz chronograph movement. The deep teal-green dial plays with ambient light through radial brushing, framed by a high-contrast ceramic-feel unidirectional bezel.",
    heroImage: "/images/products/orient-diver-chrono.png",
    images: [
      "/images/products/orient-diver-chrono.png",
      "/images/craftsmanship/dial-detail.jpg",
      "/images/craftsmanship/gears-mechanism.jpg"
    ],
    specs: {
      "Movement": "Japanese Quartz Chronograph",
      "Case Diameter": "43.5 mm",
      "Case Material": "316L Surgical Stainless Steel",
      "Crystal": "Anti-Reflective Mineral Crystal",
      "Water Resistance": "200 M / 20 BAR",
      "Strap": "Solid Stainless Steel 3-Link"
    },
    stockQuantity: 6,
    status: "active",
    featured: true,
    tag: "SIGNATURE PIECE"
  },
  {
    id: "02",
    brand: "REGENT",
    name: "Emerald Sunburst Chronograph",
    slug: "regent-emerald-sunburst-chronograph",
    sku: "RG-EM-01",
    price: 8200,
    compareAtPrice: 9500,
    currency: "BDT",
    collection: "Chronograph",
    category: "Sport Luxury",
    shortDescription: "Rich forest emerald dial with tri-compax subdial registers, precision quartz timing, and solid stainless steel bracelet.",
    description: "An exceptional expression of attainable horology. Tri-compax subdial registers provide split-second interval measurement, while faceted rhodium-plated indices catch dynamic studio reflections.",
    heroImage: "/images/products/regent-emerald-chrono-1.png",
    images: [
      "/images/products/regent-emerald-chrono-1.png",
      "/images/products/regent-emerald-chrono-2.png"
    ],
    specs: {
      "Movement": "Quartz Multi-Function",
      "Case Diameter": "42 mm",
      "Case Material": "Brushed & Polished Stainless Steel",
      "Crystal": "Hardened Mineral Glass",
      "Water Resistance": "50 M",
      "Strap": "Integrated Steel Bracelet"
    },
    stockQuantity: 9,
    status: "active",
    featured: true,
    tag: "CURATOR'S CHOICE"
  },
  {
    id: "03",
    brand: "TITAN",
    name: "1874SL02 Sapphire Grand Class",
    slug: "titan-1874sl02-sapphire-grand-class",
    sku: "1874SL02",
    price: 23050,
    currency: "BDT",
    collection: "Classic",
    category: "Executive Dress",
    shortDescription: "Pinstripe guilloché navy dial protected by scratch-resistant sapphire crystal, dual retrograde calendar subdials, and genuine calf leather.",
    description: "Designed for discerning connoisseurs. Features an architectural textured dial with vertical pinstripe guilloché, dual retrograde calendar registers, and unyielding sapphire crystal clarity.",
    heroImage: "/images/products/titan-1874sl02.png",
    images: ["/images/products/titan-1874sl02.png"],
    specs: {
      "Movement": "Multi-Function Day/Date Caliber",
      "Case Diameter": "42 mm",
      "Case Material": "316L Stainless Steel",
      "Crystal": "Scratch-Resistant Sapphire",
      "Water Resistance": "50 M",
      "Strap": "Full-Grain Navy Calfskin"
    },
    stockQuantity: 3,
    status: "active",
    featured: true,
    tag: "SAPPHIRE SERIES"
  },
  {
    id: "04",
    brand: "REGENT",
    name: "RG5011FL Stealth Rose",
    slug: "regent-rg5011fl-stealth-rose",
    sku: "RG5011FL-BK-BK-MT",
    price: 7050,
    currency: "BDT",
    collection: "Statement",
    category: "Monochrome",
    shortDescription: "Matte DLC black finish with refined rose gold hour batons, aperture date, and integrated link architecture.",
    description: "Stealth aesthetics meets warm metallic warmth. Deep obsidian dial tone complemented by brushed rose gold hour markers and a matching ion-plated stainless steel oyster band.",
    heroImage: "/images/products/regent-rg5011fl.png",
    images: ["/images/products/regent-rg5011fl.png"],
    specs: {
      "Movement": "Quartz 3-Hand with Date",
      "Case Diameter": "41 mm",
      "Case Material": "Black Ion-Plated Steel",
      "Crystal": "Mineral Glass",
      "Water Resistance": "30 M",
      "Strap": "Black Ion-Plated Steel"
    },
    stockQuantity: 4,
    status: "active",
    featured: true,
    tag: "BESTSELLER"
  },
  {
    id: "05",
    brand: "TITAN",
    name: "1698QM02 Bronze Sunburst",
    slug: "titan-1698qm02-bronze-sunburst",
    sku: "1698QM02",
    price: 13300,
    currency: "BDT",
    collection: "Statement",
    category: "Warm Metallic",
    shortDescription: "Warm bronze IP coated stainless steel casing with chocolate sunray dial, Arabic 12 marker, and 3-eye multi-function display.",
    description: "An unusual and arresting bronze-tone finish that casts warm metallic reflections. Triple auxiliary displays indicate day, date, and 24-hour cycle.",
    heroImage: "/images/products/titan-1698qm02.png",
    images: ["/images/products/titan-1698qm02.png"],
    specs: {
      "Movement": "Quartz Multi-Eye",
      "Case Diameter": "44 mm",
      "Case Material": "Bronze-Tone Ion Plated Steel",
      "Crystal": "Hardened Mineral Crystal",
      "Water Resistance": "50 M",
      "Strap": "Solid Bronze-Tone Steel"
    },
    stockQuantity: 7,
    status: "active",
    featured: false
  },
  {
    id: "06",
    brand: "RICHMOND",
    name: "RM6011FL Two-Tone Chocolate",
    slug: "richmond-rm6011fl-two-tone-chocolate",
    sku: "RM6011FL-2R-BR-MT",
    price: 6850,
    currency: "BDT",
    collection: "Everyday",
    category: "Two-Tone Classic",
    shortDescription: "Two-tone surgical stainless steel bracelet with rose gold bezel accent and sunburst mocha dial.",
    description: "Refined elegance for both desk and evening dining. The contrasting rose gold bezel elevates the warm mocha sunburst face.",
    heroImage: "/images/products/richmond-rm6011fl.png",
    images: ["/images/products/richmond-rm6011fl.png"],
    specs: {
      "Movement": "Quartz Caliber with Date",
      "Case Diameter": "40 mm",
      "Case Material": "Two-Tone Stainless Steel",
      "Crystal": "Mineral Glass",
      "Water Resistance": "30 M",
      "Strap": "Dual-Tone Engineer Bracelet"
    },
    stockQuantity: 11,
    status: "active",
    featured: false
  },
  {
    id: "07",
    brand: "RICHMOND",
    name: "RM7001SC Emerald Jubilee",
    slug: "richmond-rm7001sc-emerald-jubilee",
    sku: "RM7001SC-ST-GN-MT",
    price: 6450,
    currency: "BDT",
    collection: "Classic",
    category: "Heritage Dress",
    shortDescription: "Vibrant emerald sunburst dial paired with a classic 5-link jubilee style steel bracelet and magnified date window.",
    description: "Flawless vintage dress proportion. The five-link jubilee bracelet drapes comfortably over the wrist, highlighting the forest green sunburst dial.",
    heroImage: "/images/products/richmond-rm7001sc.png",
    images: ["/images/products/richmond-rm7001sc.png"],
    specs: {
      "Movement": "Japanese Quartz 3-Hand",
      "Case Diameter": "39 mm",
      "Case Material": "316L Stainless Steel",
      "Crystal": "Hardened Mineral Glass",
      "Water Resistance": "30 M",
      "Strap": "Jubilee 5-Link Steel"
    },
    stockQuantity: 8,
    status: "active",
    featured: false
  },
  {
    id: "08",
    brand: "CAIRNHILL",
    name: "CH2013SN Pure Silver Heritage",
    slug: "cairnhill-ch2013sn-pure-silver-heritage",
    sku: "CH2013SN-ST-WH-LT",
    price: 11700,
    currency: "BDT",
    collection: "Classic",
    category: "Dress",
    shortDescription: "Classic dress watch featuring fine silver sunray dial, applied Roman numeral markers, and embossed alligator-grain black leather strap.",
    description: "Pure sartorial discretion. Ultra-clean silver dial with dauphine hands and deep black alligator-patterned leather.",
    heroImage: "/images/products/cairnhill-ch2013sn.png",
    images: ["/images/products/cairnhill-ch2013sn.png"],
    specs: {
      "Movement": "Slimline Quartz Caliber",
      "Case Diameter": "38.5 mm",
      "Case Material": "Mirror-Polished Steel",
      "Crystal": "Sapphire-Coated Glass",
      "Water Resistance": "30 M",
      "Strap": "Alligator-Grain Genuine Leather"
    },
    stockQuantity: 5,
    status: "active",
    featured: false,
    tag: "NEW"
  },
  {
    id: "09",
    brand: "REGENT",
    name: "RG6029ZL Tachymeter Chrono",
    slug: "regent-rg6029zl-tachymeter-chrono",
    sku: "RG6029ZL-ST-BK-MT",
    price: 5550,
    currency: "BDT",
    collection: "Chronograph",
    category: "Racing",
    shortDescription: "Motorsport-inspired black tachymeter bezel with triple sub-registers, stainless steel casing, and quick-set date.",
    description: "Speed-timing geometry meets street durability. High-contrast white markers on an obsidian dial for instant split-second legibility.",
    heroImage: "/images/products/regent-rg6029zl.png",
    images: ["/images/products/regent-rg6029zl.png"],
    specs: {
      "Movement": "High-Precision Quartz Chrono",
      "Case Diameter": "43 mm",
      "Case Material": "Brushed Steel",
      "Crystal": "Mineral Glass",
      "Water Resistance": "50 M",
      "Strap": "Oyster-Style Stainless Steel"
    },
    stockQuantity: 14,
    status: "active",
    featured: false
  },
  {
    id: "10",
    brand: "REGENT",
    name: "Emerald Deep Flight Chronograph",
    slug: "regent-emerald-deep-flight",
    sku: "RG-EM-02",
    price: 8400,
    currency: "BDT",
    collection: "Chronograph",
    category: "Aviation",
    shortDescription: "Pilot-style 24-hour chapter ring, deep bottle green dial, dual textured subdials, and knurled crown.",
    description: "Aviation utility reimagined for metropolitan wear. Features wide sword hands, knurled chronograph pushers, and high-visibility luminescent indicators.",
    heroImage: "/images/products/regent-emerald-chrono-2.png",
    images: ["/images/products/regent-emerald-chrono-2.png"],
    specs: {
      "Movement": "Quartz Chronograph Dual-Time",
      "Case Diameter": "43 mm",
      "Case Material": "Surgical Stainless Steel",
      "Crystal": "Anti-Reflective Mineral Glass",
      "Water Resistance": "50 M",
      "Strap": "Solid Steel Bracelet"
    },
    stockQuantity: 4,
    status: "active",
    featured: false
  }
];

export const signatureProduct = demoProducts[0]; // Orient Diver Chronograph 20Bar
export const featuredProducts = demoProducts.filter(p => p.featured);
export const curatedProducts = demoProducts;
