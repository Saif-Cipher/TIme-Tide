# TIME AND TIDE — MASTER WEBSITE SPECIFICATION v1.0

**Project type:** Cinematic affordable-premium watch marketplace / online store  
**Market:** Bangladesh  
**Brand:** Time and Tide  
**Working thematic phrase:** We Sail.  
**Document status:** Baseline specification for AI-assisted implementation  
**Prepared:** 23 September 2026

---

## 0. Product Definition

Time and Tide is a Bangladesh-focused online watch retailer that curates watches from different brands and sells them through one premium digital storefront. The website is not intended to behave like a generic marketplace. Its core experience is cinematic, editorial, elegant, and futuristic while remaining lightweight enough for normal mobile and desktop browsing.

The visual inspiration is the interaction philosophy observed on the Zirka interceptor site: a product-centered hero, dark environment, strong typographic hierarchy, numbered information, progressive scroll choreography, and specifications presented as part of an experience rather than a plain documentation table. Zirka's production team describes its approach as combining a dark 3D product environment, cinematic camera movement, visual metaphors, and custom animation while balancing performance. The Time and Tide implementation intentionally translates those principles to watch retail without copying Zirka's branding, military interface, imagery, or exact compositions.

---

# 1. Locked Project Decisions

## 1.1 Brand

- Final working brand name: **Time and Tide**
- Temporary logo: supplied reference or temporary typographic mark; replace later without changing the site architecture.
- Future logo replacement must require changing only the brand asset/component, not page layout or business logic.

## 1.2 Business model

- Curated imported watches from multiple brands.
- Time and Tide is the retailer/curator, not initially the manufacturer.
- Product catalog must be database-driven.
- Product records must support different brands and different specification sets.

## 1.3 Positioning

- Affordable premium
- Fashion watch retail
- Premium presentation without luxury-brand pricing or excessive visual bulk

## 1.4 Market

- Bangladesh only at launch
- Currency: BDT (৳)
- Shipping: Bangladesh only
- Cash on Delivery: supported
- Warranty: 6 months — Time and Tide policy baseline
- Return window: 15 days — Time and Tide policy baseline
- Inventory quantities: required

## 1.5 Audience

Primary audience:
- Younger buyers seeking stylish watches
- Adult/fatherly buyers seeking refined everyday watches
- Gift buyers
- Customers who care about presentation, style and trust more than technical horology depth

No narrow age cutoff is imposed.

## 1.6 Experience level

**Selected model: Cinematic Commerce**

The cinematic experience is concentrated in:
- Homepage
- Collection/shop presentation
- Product pages

The entire website does not need to become a full immersive digital film.

---

# 2. Design North Star

The website should feel like:

> A fashion editorial for timepieces that happens to be a functioning e-commerce store.

The site should not feel like:
- A generic Shopify template
- A crowded marketplace
- A gaming interface
- A heavy sci-fi dashboard
- A museum-like traditional luxury site

Primary design adjectives:

**Dark / cinematic / elegant / editorial / futuristic / restrained / premium / precise / spacious**

The key constraint is restraint. The website must feel expensive through composition, typography, spacing, lighting and motion rather than through visual clutter.

---

# 3. Zirka UX/UI Principles to Translate

## 3.1 Product-first hero

Zirka avoids presenting the product as an ordinary static catalog image. Its case study describes a dark environment, a prominent 3D object, cinematic lighting and a reveal sequence. Time and Tide should retain the principle but use 2D watch imagery instead of a 3D watch model.

**Time and Tide translation:**
- Hero watch image starts partially obscured or small.
- Scroll gradually increases scale and visual dominance.
- Background layers move at different rates.
- Typography enters progressively.
- Watch image may use perspective/rotation/scale transforms to create depth.
- No manual 3D object rotation.
- No WebGL watch model required.

## 3.2 Specifications as visual information

Zirka uses numbered features and visual metaphors instead of a basic feature list. Time and Tide should use concise specification modules and large visual relationships.

Example:

```text
01 / MOVEMENT
QUARTZ

02 / CASE
42 MM

03 / CRYSTAL
MINERAL

04 / WATER
30 M
```

## 3.3 Progressive disclosure

Do not show every technical detail at once.

Initial view:
- Product name
- Brand
- Price
- 2–4 key attributes
- Main CTA

Secondary view:
- Complete specifications
- Product description
- Delivery/warranty/returns
- More imagery

## 3.4 Controlled motion

Animation should communicate hierarchy and depth.

Every major animation must have a purpose:
- reveal
- focus
- transition
- depth
- confirmation

No decorative animation loop should distract from purchase intent.

---

# 4. Color System

These are **provisional brand tokens** and can be replaced globally later.

| Token | Value | Use |
|---|---|---|
| Obsidian | #0B0B0A | Primary page background |
| Carbon | #141413 | Secondary dark surfaces |
| Warm White | #F3F0E8 | Primary text |
| Stone | #8E8A82 | Secondary text |
| Soft Metal | #B8B1A5 | Borders, muted decorative details |
| Champagne Gold | #C5A46D | Accent / CTA emphasis |
| Pure White | #FFFFFF | High-contrast moments only |

### Color rules

- 70–80% of the experience should visually read as dark neutral space.
- Warm white is preferred over sterile pure white for primary typography.
- Champagne Gold is a restrained accent, not a large fill color.
- Accent color should appear in micro details: active states, fine lines, small labels, CTA emphasis, tiny highlights.
- Product photography retains its actual colors.
- Product-specific visual color must never overwrite the core site brand palette.

---

# 5. Typography System

## 5.1 Display font

**Bodoni Moda** — provisional

Use for:
- Hero headlines
- Editorial statements
- Major section statements
- High-impact product storytelling

Characteristics:
- Thin/high-contrast strokes
- Fashion/editorial feel
- Use sparingly

## 5.2 Interface font

**Space Grotesk** — provisional

Use for:
- Navigation
- Product names
- Buttons
- Metadata
- Section labels
- Numbers

## 5.3 Body font

**Inter** — provisional

Use for:
- Descriptions
- Policies
- Checkout
- Forms
- Long-form text

### Typography rules

- Never use all three fonts in one small component.
- Headlines may be expressive; UI must remain extremely readable.
- Metadata uses uppercase and tracking rather than heavy font weight.
- Avoid oversized text that forces multiple unnecessary lines on mobile.

---

# 6. Spacing and Layout System

Base spacing unit: **4 px**.

Preferred spacing scale:

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 120 / 160`

Desktop:
- Maximum content width: approximately 1440 px
- Wide sections may use the full viewport
- Main editorial grid should usually use 12 columns

Tablet:
- 8-column adaptation

Mobile:
- 4-column logical grid
- Side padding target: 20–24 px

Use negative space aggressively around hero products and editorial statements.

---

# 7. Visual Language

## 7.1 Image treatment

Product images should be presented against controlled backgrounds whenever possible.

Preferred visual hierarchy:
1. clean product cutout
2. cinematic environmental image
3. close-up detail
4. lifestyle/wrist image

## 7.2 Background treatment

The website creates depth without requiring a 3D watch model using:
- multiple image layers
- large blurred shapes
- gradients
- shadow fields
- subtle grain
- masks
- perspective transforms
- parallax
- scale interpolation
- opacity sequencing
- background image drift

## 7.3 Lighting metaphor

Use light as a navigational device.

Examples:
- a soft radial highlight behind the featured watch
- a vertical light band entering during scroll
- subtle highlight moving behind a product card
- vignette tightening around the product when details become important

Avoid flashy neon effects.

---

# 8. Navigation

## Desktop

Suggested structure:

```text
TIME AND TIDE

COLLECTIONS   NEW ARRIVALS   ABOUT   JOURNAL

SEARCH    ACCOUNT    CART
```

The navigation starts minimal and may become more opaque as the user scrolls.

## Mobile

```text
TIME AND TIDE                         MENU
```

Menu opens as a full-height overlay.

## Navigation behavior

- Sticky header
- Transparent over hero initially
- Darkened/solid surface after scroll
- Active page indicator
- Cart count visible when items exist

---

# 9. Sitemap

```text
/
├── Home
├── Shop
│   ├── All Watches
│   └── Collections
├── Collections
│   └── [collection-slug]
├── Watch Product
│   └── /watch/[product-slug]
├── Search
├── About
├── Journal
│   ├── Article
│   └── Categories
├── Contact
├── Cart
├── Checkout
│   ├── Contact
│   ├── Shipping
│   ├── Payment
│   └── Confirmation
├── Account
│   ├── Profile
│   ├── Orders
│   └── Order Details
├── Order Tracking
├── FAQ
├── Shipping
├── Returns
├── Warranty
├── Privacy Policy
└── Terms & Conditions
```

Admin is separate:

```text
/admin
├── Dashboard
├── Products
├── Collections
├── Orders
├── Customers
├── Content
├── Coupons
├── Admin Users
└── Settings
```

---

# 10. Homepage Specification

## Section 01 — Cinematic Hero

Goal: immediate brand recognition and visual differentiation.

### Initial state

```text
TIME AND TIDE

TIME MOVES.
YOU SAIL.

[ EXPLORE COLLECTION ]

                 [ WATCH IMAGE ]
```

Potential temporary headline can be revised later; copy is not locked.

### Scroll choreography

0–15%:
- Watch small/partially hidden
- Background dark
- Minimal headline

15–35%:
- Watch scales up
- Background gradient shifts
- Small metadata enters

35–60%:
- Watch moves toward visual center
- Hero copy compresses/fades
- Decorative light band crosses the scene

60–100%:
- Product is fully revealed
- CTA and product metadata are most legible
- Section transitions into featured collection

The animation must be scrubbed by scroll progress rather than autoplaying a long sequence.

## Section 02 — Featured Watches

Editorial asymmetric grid.

Example:

```text
┌─────────────────────────┐ ┌───────────┐
│                         │ │           │
│       LARGE WATCH       │ │   WATCH   │
│                         │ │           │
└─────────────────────────┘ └───────────┘

┌───────────┐ ┌─────────────────────────┐
│   WATCH   │ │                         │
│           │ │       LARGE WATCH       │
└───────────┘ └─────────────────────────┘
```

No filter bar on the homepage.

## Section 03 — Brand statement

Large editorial statement with significant whitespace.

Example:

```text
NOT JUST A WATCH.
A MOMENT YOU KEEP.
```

## Section 04 — Signature watch

One watch receives an immersive feature:
- oversized image
- slowly moving background
- product metadata
- price
- CTA

## Section 05 — Watch categories

Use visual categories rather than filter controls.

Potential categories:
- Everyday
- Classic
- Chronograph
- Statement
- Digital
- Women's / Unisex where applicable

Categories must be data-driven and configurable.

## Section 06 — Craft / materials

Editorial photography + concise text.

Focus on:
- steel
- leather
- mesh
- dial texture
- crystal
- finishing

Do not claim manufacturing details that are not verified for a particular watch.

## Section 07 — Why Time and Tide

Trust-oriented blocks:

```text
CURATED BRANDS
15-DAY RETURNS
6-MONTH WARRANTY
CASH ON DELIVERY
BANGLADESH DELIVERY
```

Exact claims must reflect current operational policy.

## Section 08 — Journal preview

Three editorial cards.

## Section 09 — Newsletter

Simple email capture.

## Section 10 — Footer

```text
TIME AND TIDE
Collections
About
Journal
Contact
Shipping
Returns
Warranty
Privacy
Terms
Social links
```

---

# 11. Shop / Collection UX

The shop page remains cinematic but more practical than the homepage.

## Header

```text
COLLECTION / ALL WATCHES

TIMEPIECES FOR EVERYDAY MOMENTS.
```

## Product grid

Default: editorial asymmetric grid.

Alternative layouts can be supported in code but only one is active initially.

## Product card

Required information:

```text
[IMAGE]

BRAND
MODEL NAME
SHORT SPEC LINE
৳ 5,800
VIEW WATCH →
```

Hover:
- price/details become more prominent
- image may scale slightly
- secondary image can appear later
- no spinning product model
- no excessive card animation

## Stock state

```text
IN STOCK
LOW STOCK
SOLD OUT
```

Never show contradictory stock data between card and product page.

---

# 12. Product Page Specification

Selected baseline structure:

```text
01 HERO
02 PRODUCT GALLERY
03 PRICE + PURCHASE
04 2D PRODUCT SHOWCASE
05 TECHNICAL SPECIFICATIONS
06 PRODUCT STORY
07 MATERIALS / DETAILS
08 WHAT'S INCLUDED
09 DELIVERY / WARRANTY / RETURNS
10 RELATED WATCHES
```

## 12.1 Product hero

Desktop:

Left:
- large watch image

Right:
- brand
- product name
- short description
- price
- stock state
- quantity selector
- Add to Cart

Mobile:
- image first
- information beneath
- Add to Cart remains visually dominant

## 12.2 Product image interaction

No true 3D model.

Primary behavior:
- image slightly enlarges on hover
- cursor may trigger a restrained magnification effect
- secondary images can be selected from thumbnails/dots

Do not use aggressive zoom that prevents normal page interaction.

## 12.3 Specification module

Example:

```text
THE DETAILS

01 / MOVEMENT          QUARTZ
02 / CASE              42 MM
03 / CASE MATERIAL     STAINLESS STEEL
04 / CRYSTAL           MINERAL GLASS
05 / WATER RESISTANCE  30 M
06 / STRAP             STAINLESS STEEL
```

Each specification is rendered only when the database contains a verified value.

Unknown fields should be omitted, not guessed.

## 12.4 Purchase

Primary CTA:

`ADD TO CART`

After click:
- subtle confirmation
- cart count updates
- cart drawer may open

User then sees:

```text
YOUR CART

[PRODUCT]
PRICE
QUANTITY
REMOVE

SUBTOTAL

[ GO TO CART ]
[ CHECKOUT ]
```

Wishlist and product comparison are excluded.

## 12.5 Related watches

Use 3–4 related products based on:
- collection
- brand
- price range
- product type

No personalized recommendation engine is required at launch.

---

# 13. Cart UX

Cart is a side drawer on desktop and a full-screen sheet/page on mobile.

Required fields:
- product image
- brand
- product name
- quantity
- price
- remove
- subtotal
- checkout CTA

Optional later:
- shipping estimate
- coupon code

No wishlist section.

---

# 14. Checkout Architecture

Payment method is intentionally not frozen yet.

Checkout flow:

```text
01 CONTACT
02 ADDRESS
03 SHIPPING
04 PAYMENT
05 ORDER REVIEW
06 CONFIRMATION
```

Business rule baseline:
- Bangladesh only
- BDT
- COD available
- online payment gateway to be inserted later

Payment provider must be implemented behind an abstraction so the visual checkout does not need to be redesigned when a provider is selected.

---

# 15. Search

Search targets:
- product name
- brand
- collection
- article title

Search UI:

```text
SEARCH TIME AND TIDE

[ type query ]

PRODUCTS

RESULTS
```

No need for advanced filters while catalog size is small.

---

# 16. About Page

Structure:

```text
ABOUT TIME AND TIDE

THE IDEA
WHY WE CURATE
OUR STANDARD
HOW WE CHOOSE WATCHES
```

Tone:
- precise
- short
- editorial
- trustworthy

Do not invent heritage, manufacturing claims, or brand history.

---

# 17. Journal

Purpose:
- SEO
- brand personality
- product education
- trust

Initial categories:
- Watch Style
- Watch Care
- Buying Guide
- Time and Tide Stories

Article page:
- title
- category
- publish date
- cover image
- article body
- related products

---

# 18. Admin System

Admin must be first-class architecture.

## 18.1 Admin users

Support multiple admins.

Minimum roles:

**Owner**
- full access

**Manager**
- products
- orders
- inventory
- content

**Editor**
- content
- products
- images

Roles can be reduced/expanded later.

## 18.2 Product creation flow

Owner/admin clicks:

`PRODUCTS → ADD PRODUCT`

Form:

```text
Brand
Model name
Slug
Price
Compare-at price (optional)
Short description
Long description
Collection
Category
Stock quantity
SKU
Main image
Additional images
Brand-specific specifications
Warranty note
Status
Featured toggle
```

The admin must be able to upload a watch image and information once and have it automatically appear across:
- homepage sections when featured
- collection page
- search results
- product page
- related products where relevant

No code change should be required for ordinary product creation.

## 18.3 Dynamic product fields

Because watches from different brands have different specs, the schema should support:
- standard fields
- flexible specification key/value pairs

Example:

```json
{
  "movement": "Quartz",
  "caseDiameter": "42 mm",
  "crystal": "Mineral Glass",
  "waterResistance": "30 m",
  "specialFunction": "Dual Time"
}
```

Only known values are displayed.

---

# 19. Database Model

Core tables:

```text
users
admin_users / roles
products
product_images
brands
collections
categories
inventory
orders
order_items
customers
addresses
newsletter_subscribers
articles
article_categories
site_settings
homepage_sections
```

Potential relational structure:

```text
Brand 1 ──── * Product
Collection 1 ──── * Product
Product 1 ──── * ProductImage
Product 1 ──── 1 Inventory
Order 1 ──── * OrderItem
Product 1 ──── * OrderItem
```

Supabase is the baseline database platform.

---

# 20. Product Data Contract

Recommended product object:

```ts
type Product = {
  id: string
  brandId: string
  collectionId?: string
  categoryId?: string
  name: string
  slug: string
  sku: string
  price: number
  compareAtPrice?: number
  currency: 'BDT'
  shortDescription?: string
  description?: string
  heroImage: string
  images: string[]
  specs: Record<string, string>
  stockQuantity: number
  status: 'draft' | 'active' | 'sold_out' | 'archived'
  featured: boolean
  createdAt: string
  updatedAt: string
}
```

No product price or specification should be hard-coded inside UI components.

---

# 21. Technical Architecture

Baseline stack:

```text
Next.js
React
TypeScript
Tailwind CSS + custom CSS where needed
GSAP
Supabase
Vercel
```

## 21.1 3D-feeling implementation

Important: **No interactive 3D watch model is required.**

The cinematic depth system should use:

```text
2D watch assets
+
CSS perspective
+
GSAP scroll interpolation
+
parallax layers
+
scale / translate / rotate
+
blur and light overlays
+
clipping masks
+
responsive fallbacks
```

This provides the requested visual depth without the payload and device overhead of real-time watch models.

## 21.2 Animation engine

Use GSAP for:
- scroll-linked hero
- section reveals
- product image motion
- background movement
- text sequencing
- route transitions where appropriate

Do not add multiple animation libraries for equivalent jobs.

---

# 22. Performance Rules

The website must prioritize:

1. Fast first paint
2. Fast mobile interaction
3. Image optimization
4. Limited animation payload
5. Progressive enhancement

Rules:
- use next/image or equivalent optimized image pipeline
- prefer WebP/AVIF where supported
- lazy-load below-the-fold imagery
- avoid autoplay video unless it materially improves the hero
- use motion reduction support
- do not load heavy 3D libraries when no actual 3D model is used

The project should feel sophisticated, not slow.

---

# 23. Accessibility

Required:
- semantic HTML
- keyboard navigation
- visible focus states
- alt text for product images
- sufficient text contrast
- reduced-motion mode
- accessible cart and menu controls
- form labels
- error messaging

For reduced motion:
- disable scroll-scrubbed choreography
- retain clear static product presentation

---

# 24. Responsive Rules

## Desktop

- full cinematic hero
- asymmetric grids
- larger image compositions
- scroll-driven movement

## Tablet

- simplified hero choreography
- reduced simultaneous movement
- 2-column products where practical

## Mobile

- simplified animation
- large product images
- one-column product presentation
- sticky Add to Cart where useful on product pages
- no complex multi-layer movement that makes scrolling difficult

The mobile site must remain premium even when animation is reduced.

---

# 25. Trust, Policies and Commerce Rules

Required site-level messages:

```text
6-MONTH WARRANTY
15-DAY RETURN WINDOW
CASH ON DELIVERY
BANGLADESH DELIVERY
```

Actual operational language must be written separately before launch.

Important:
- Product-specific warranty claims must not override the store policy accidentally.
- Imported product authenticity/originality claims must be made only when Time and Tide has verified them.
- Seller/marketplace claims must not be copied into production product descriptions without verification.

---

# 26. Temporary Demo Catalog

The first development demo should contain **10 watches** using publicly visible Bangladesh-market listing data as temporary reference data.

The demo catalog is not actual Time and Tide inventory and should be clearly treated as placeholder/demo content until real stock and licensed product assets are supplied.

## Demo catalog records

| # | Brand | Model | Reference Bangladesh price | Key verified information |
|---|---|---|---:|---|
| 01 | Casio | AE-1200WHB-3BVDF | ৳5,800 listing | Digital; resin case/bezel; cloth/nylon band; 100 m water resistance; 45 × 42.1 × 12.5 mm; 39 g |
| 02 | Casio | MTP-VD01L-1BVUDF | ৳5,800 listing | Analog; black strap; listing price/reference only; full production specs should be verified before launch |
| 03 | Fastrack | 38051SL06 | ৳5,800 listing | Quartz; analog; white dial; brown leather strap; mineral glass; metal case; 44 mm width; 11.7 mm thickness |
| 04 | Fastrack | 3089SL16 | ৳5,800 listing | Black dial; black leather strap; listing data/reference only; full production specs should be verified before launch |
| 05 | SKMEI | 1654 | ৳5,800 listing | Quartz; 42 mm; 9 mm thick; stainless steel band; alloy case; glass; 30 m water resistance; 96 g |
| 06 | NAVIFORCE | NF9179 | ৳5,900 listing | Quartz multi-function; 45.5 mm; 13.5 mm thick; zinc alloy case; mineral glass; stainless steel strap; 3 ATM |
| 07 | OLEVS | 6631 | ৳5,900 listing | 32.5 mm; automatic mechanical; coated glass; ceramic/stainless bracelet variants; 30 m/30 BAR data appears in OLEVS sources and should be normalized carefully before launch |
| 08 | LIGE | 8922 | ৳5,000 listing | Analog + digital; quartz; approx. 42–45 mm depending source; silicone/soft plastic band; 5 ATM; dual-time/stopwatch/alarm/backlight |
| 09 | NAVIFORCE | NF9188 | ৳4,500 listing | Analog + LCD digital; quartz; 46 mm; 17 mm thick; stainless steel strap; mineral glass; 3 ATM |
| 10 | NAVIFORCE | NF9171 | ৳4,500 listing | Dual analog/quartz + digital; 45 mm class; alloy case; stainless steel band; Hardlex/mineral-style hardened glass; 3 ATM |

### Demo catalog handling rule

Do not represent these as Time and Tide's current physical stock.

Use:

```text
sourceType: "demo-reference"
sourceVerifiedAt: "2026-09-23"
productionAssetStatus: "replace-before-launch"
```

Demo prices are marketplace/listing references and can change. Some reference listings were out of stock at crawl time. Inventory and price must eventually come from Time and Tide's admin database.

---

# 27. Product Image Strategy

For the prototype:
- use public listing imagery only as temporary reference assets where legally appropriate for internal/demo use
- store source attribution internally
- do not permanently ship unlicensed marketplace images as commercial brand assets

For production:
- replace with Time and Tide-owned/licensed images
- standardize crop, background and visual treatment
- generate consistent image variants for:
  - listing card
  - product hero
  - gallery
  - mobile
  - social sharing

Preferred product image set:

```text
01 front
02 side
03 macro
04 caseback
05 wrist/lifestyle
06 packaging
```

Not every product needs all six; the CMS should allow any number of images.

---

# 28. SEO Strategy

Every product needs:
- unique title
- meta description
- clean slug
- structured product data
- brand
- price
- availability
- image

Collection pages need:
- collection title
- descriptive intro
- clean headings

Journal articles provide long-term organic-search content.

Technical requirements:
- XML sitemap
- robots.txt
- canonical URLs
- Open Graph data
- Product structured data
- breadcrumb structured data

---

# 29. Analytics

At minimum track:

```text
page_view
product_view
add_to_cart
remove_from_cart
begin_checkout
purchase
search
newsletter_signup
```

Additional useful events:
- hero CTA click
- collection click
- product image interaction
- scroll-depth milestones

Do not collect unnecessary personal data.

---

# 30. Security

Required:
- server-side validation for checkout/order inputs
- Supabase Row Level Security
- role-based admin authorization
- secure file upload validation
- protected admin routes
- no secrets in client-side code
- rate limiting where needed
- safe image upload rules

Admin operations must be auditable later if needed.

---

# 31. Content Management Philosophy

Normal business edits must not require code edits.

Owner should be able to change:
- product
- price
- stock
- photos
- collection
- featured state
- product description
- specs
- homepage featured products
- journal content
- basic site settings

Developer/AI agent intervention should be reserved for:
- new capabilities
- layout changes
- new integrations
- design-system changes
- schema changes

---

# 32. Component Architecture

Proposed major components:

```text
<AppShell>
<Header>
<MobileMenu>
<HeroCinematic>
<ScrollScene>
<ProductCard>
<ProductGrid>
<EditorialSection>
<FeatureProduct>
<SpecificationList>
<ProductGallery>
<CartDrawer>
<CheckoutForm>
<Footer>
```

Product-specific UI should consume the Product data contract.

Avoid:
- one giant homepage component
- hard-coded product arrays inside page components
- duplicate product display logic
- direct database access from unrelated components

---

# 33. Suggested Folder Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── shop/
│   ├── collections/
│   ├── watch/[slug]/
│   ├── search/
│   ├── about/
│   ├── journal/
│   ├── cart/
│   ├── checkout/
│   ├── account/
│   └── admin/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── product/
│   ├── commerce/
│   ├── editorial/
│   └── motion/
├── lib/
│   ├── supabase/
│   ├── commerce/
│   ├── seo/
│   └── analytics/
├── data/
├── types/
├── styles/
└── config/
```

Exact structure may change during implementation, but the responsibility boundaries must remain.

---

# 34. AI-Agent Development Protocol

This is the project control system.

Every implementation prompt should contain:

```text
PROJECT CONTEXT
TASK
FILES/SYSTEMS ALLOWED TO CHANGE
DO NOT CHANGE
DESIGN REQUIREMENTS
DATA REQUIREMENTS
RESPONSIVE REQUIREMENTS
ANIMATION REQUIREMENTS
ACCESSIBILITY REQUIREMENTS
ACCEPTANCE CRITERIA
TEST PLAN
```

## Agent rule 01 — no design drift

Do not replace the design language with a generic template.

## Agent rule 02 — no hard-coded commerce logic

Products, prices, stock and specifications come from data.

## Agent rule 03 — preserve tokens

Do not introduce arbitrary colors/fonts/spacing unless explicitly required.

## Agent rule 04 — preserve responsive behavior

A desktop change must be checked against mobile/tablet.

## Agent rule 05 — motion must have purpose

No new animation is introduced solely because a library supports it.

## Agent rule 06 — unknown data stays unknown

Never invent a product specification.

## Agent rule 07 — admin first-class

A new product should be addable through admin without code changes.

## Agent rule 08 — no dependency sprawl

Prefer existing stack dependencies before adding new libraries.

## Agent rule 09 — test before declaring done

At minimum:
- type check
- lint
- production build
- critical route smoke test
- mobile viewport test

---

# 35. Build Phases

## Phase 0 — Project foundation

Deliver:
- Next.js project
- TypeScript
- Tailwind/custom CSS
- Supabase connection
- environment structure
- basic route shell
- design tokens

Acceptance:
- project builds cleanly
- tokens are centralized
- no product UI yet

## Phase 1 — Design system

Deliver:
- typography
- colors
- spacing
- buttons
- links
- labels
- cards
- header/footer

Acceptance:
- components are reusable
- desktop and mobile variants work

## Phase 2 — Cinematic homepage

Deliver:
- hero
- scroll choreography
- product showcase
- editorial sections
- featured products

Acceptance:
- 2D watch image feels dimensional
- scroll controls the scene
- no real 3D model is loaded

## Phase 3 — Product data + collection

Deliver:
- products table
- brands
- collections
- inventory
- product card
- collection grid
- search

Acceptance:
- changing product data updates UI

## Phase 4 — Product page

Deliver:
- hero
- gallery
- image zoom/hover
- specs
- pricing
- stock
- add to cart

Acceptance:
- product page is completely data-driven

## Phase 5 — Cart + checkout

Deliver:
- cart drawer/page
- quantity management
- checkout forms
- COD
- payment abstraction

Acceptance:
- order can be created correctly

## Phase 6 — Admin dashboard

Deliver:
- multi-admin login
- role control
- product CRUD
- image upload
- inventory
- order management
- homepage controls

Acceptance:
- owner can add a watch without developer involvement

## Phase 7 — Content + SEO

Deliver:
- About
- Journal
- policies
- metadata
- structured data
- sitemap

## Phase 8 — Hardening

Deliver:
- performance optimization
- accessibility
- security review
- mobile polish
- analytics
- production deployment

---

# 36. Definition of Done

The project is not complete until all of the following are true:

### Brand
- [ ] Time and Tide name is implemented
- [ ] temporary logo is swappable
- [ ] final visual token system exists

### Experience
- [ ] cinematic homepage works
- [ ] scroll-linked visual depth works
- [ ] no actual watch 3D model is required
- [ ] no sound effects are used

### Catalog
- [ ] products are database-driven
- [ ] 10 demo products populate the site
- [ ] stock status is dynamic
- [ ] prices are dynamic

### Commerce
- [ ] add to cart works
- [ ] cart works
- [ ] checkout architecture works
- [ ] COD works when enabled
- [ ] payment integration can be added later

### Admin
- [ ] multiple admins supported
- [ ] role-based access exists
- [ ] product upload works
- [ ] product data immediately appears on storefront
- [ ] inventory management works

### Quality
- [ ] mobile responsive
- [ ] accessible
- [ ] optimized images
- [ ] production build passes
- [ ] no critical console errors
- [ ] SEO basics implemented

---

# 37. Decisions Intentionally Left Open

These must not be guessed by an AI agent:

1. Final logo
2. Final font selection after visual testing
3. Final accent shade after brand testing
4. Payment gateway
5. Final shipping pricing
6. Exact policy wording
7. Final production watch catalog
8. Product-specific verified specifications
9. Licensed/owned product images
10. Final domain
11. Social account URLs

Until these are resolved, use placeholders and keep them centralized in configuration/CMS.

---

# 38. Reference Notes

### Zirka case-study-derived design principles

The public Qream case study states that the Zirka project used an existing logo/orange/typography system, introduced an orange image-overlay treatment, placed a 3D product model into a dark environment, used cinematic camera/light movement for specifications, and balanced 3D, animation and interaction with performance constraints.

### Time and Tide adaptation

Time and Tide retains:
- product-centered storytelling
- dark environment
- strong contrast
- numbered metadata
- scroll-driven scene changes
- editorial composition
- restrained interaction

Time and Tide replaces:
- real-time 3D watch models → 2D watch imagery with depth choreography
- military UI → fashion/editorial UI
- orange military accent → restrained champagne-gold accent
- system/target metaphors → product/material/time metaphors

This is an inspiration translation, not a visual clone.

---

# 39. Homepage Implementation Documentation (v1.0)

**Implementation Date:** 26 September 2026  
**Status:** Complete Homepage Implemented & Verified

### 39.1 System Architecture
The Time and Tide homepage is constructed as a unified cinematic narrative using Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. The visual experience is orchestrated through GSAP and ScrollTrigger, driving an HTML5 canvas sequence in lockstep with the user's scroll.

```text
app/
├── layout.tsx                # Bodoni Moda, Inter, Space Grotesk typography & token integration
├── page.tsx                  # Unified 10-section sequential storytelling composition
components/
├── navigation/
│   ├── Header.tsx            # Sticky minimal nav with scroll blur, mobile overlay, search modal
│   └── Footer.tsx            # Full editorial brand footer, navigation, assurance & market specs
├── hero/
│   ├── HeroCinematic.tsx     # Section wrapper
│   ├── HeroScrollController.tsx # GSAP ScrollTrigger proxy & scrub controller across 450vh
│   ├── HeroSequenceCanvas.tsx   # 50-frame preloaded canvas renderer with aspect-ratio containment
│   ├── HeroEnvironment.tsx   # Dark studio atmospheric radial glow and depth overlays
│   └── HeroCopy.tsx          # 5-phase progressive narrative telemetry matching horological states
├── sections/
│   ├── FeaturedWatch.tsx     # Section 02: In-focus Orient Diver Chronograph, 6-col Zirka specs
│   ├── CuratedWatches.tsx    # Section 03: Asymmetric editorial product grid (varied scale)
│   ├── CollectionStory.tsx   # Section 04: Three design pillars with layered image compositions
│   ├── DesignMaterial.tsx    # Section 05: 4-pillar macro horology & material standards
│   ├── WatchLifestyle.tsx    # Section 06: Quiet luxury editorial context & paired dress/diver pieces
│   ├── PhilosophyStatement.tsx# Section 07: "TIME IS MORE THAN WHAT THE CLOCK SHOWS. WE SAIL."
│   ├── ServiceTrust.tsx      # Section 08: 6-Month Warranty, 15-Day Returns, COD, Bangladesh Delivery
│   └── FinalCTA.tsx          # Section 09: Atmospheric dark void horizon CTA
└── products/
    └── ProductCard.tsx       # Reusable data-contract card with BDT pricing and dynamic stock
```

### 39.2 Hero Image-Sequence System
- **Frame Source:** `E:\web site\animations\` (50 pristine 2800×2100 JPG frames, synchronized into `public/animation/ezgif-frame-001.jpg` through `050.jpg`).
- **Choreography Phases:**
  - **Phase 01 (Frames 001–010):** Watch Introduction on obsidian reflective stage.
  - **Phase 02 (Frames 011–022):** Dynamic camera angle and light sweep across sapphire crystal.
  - **Phase 03 (Frames 023–032):** Watch Transformation — bezel detaches and lifts into atmosphere.
  - **Phase 04 (Frames 033–042):** Mechanical / Detail Reveal — gear train, date wheel, and quartz caliber exposed.
  - **Phase 05 (Frames 043–050):** Final Hero State — exploded horological architecture floating in zero-G.
  - **Phase 06:** Seamless scroll continuation into Section 02 (In-Focus Featured Watch).
- **Performance & Preloading:** Frame 1 is loaded and painted synchronously on mount to eliminate flash-of-blank-canvas. Frames 2–50 load concurrently with progress reporting. DPR is clamped at `min(window.devicePixelRatio, 2)` to guarantee 60fps on 4K/retina displays.
- **Accessibility / Reduced Motion:** Detects `prefers-reduced-motion: reduce`. Automatically locks to static initial frame and disables scroll scrubbing.

### 39.3 Product Catalog & Asset Processing
All 10 demo products in `data/demo-products.ts` directly correspond to the verified screenshots provided in `products/`:
1. `orient-diver-chrono.png` (ORIENT Mako Diver Chronograph 20Bar, ৳ 18,500)
2. `regent-emerald-chrono-1.png` (REGENT Emerald Sunburst Chronograph, ৳ 8,200)
3. `titan-1874sl02.png` (TITAN 1874SL02 Sapphire Grand Class, ৳ 23,050)
4. `regent-rg5011fl.png` (REGENT RG5011FL Stealth Rose, ৳ 7,050)
5. `titan-1698qm02.png` (TITAN 1698QM02 Bronze Sunburst, ৳ 13,300)
6. `richmond-rm6011fl.png` (RICHMOND RM6011FL Two-Tone Chocolate, ৳ 6,850)
7. `richmond-rm7001sc.png` (RICHMOND RM7001SC Emerald Jubilee, ৳ 6,450)
8. `cairnhill-ch2013sn.png` (CAIRNHILL CH2013SN Pure Silver Heritage, ৳ 11,700)
9. `regent-rg6029zl.png` (REGENT RG6029ZL Tachymeter Chrono, ৳ 5,550)
10. `regent-emerald-chrono-2.png` (REGENT Emerald Deep Flight Chrono, ৳ 8,400)

**Asset Processing:**
- Screenshot images were systematically processed via an edge-connected flood-fill alpha channel extractor (`scripts/process-images.ps1`), producing clean, transparent PNG cutouts free of background artifacts, labels, and badges.
- Supporting macro horology assets (`dial-detail.jpg`, `bezel-crystal.jpg`, `gears-mechanism.jpg`) were extracted natively from the 2800×2100 animation master frames, ensuring 100% aesthetic identity with the hero timepiece.
- Editorial lifestyle photography (`lifestyle-wrist.jpg`) was generated in quiet luxury styling (tailored charcoal wool suit, stainless steel chronometer, ambient tungsten lighting) and stored locally.

