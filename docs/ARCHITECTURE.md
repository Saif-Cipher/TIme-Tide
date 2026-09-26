# Architecture

**Stack**:
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4
- GSAP

**Component Structure**:
```
app/
├── globals.css
├── layout.tsx
└── page.tsx
components/
├── hero/
│   ├── HeroCinematic.tsx
│   ├── HeroScrollController.tsx
│   ├── HeroSequenceCanvas.tsx
│   ├── HeroCopy.tsx
│   └── HeroEnvironment.tsx
├── navigation/
│   ├── Header.tsx
│   └── Footer.tsx
├── products/
│   └── ProductCard.tsx
└── sections/
    ├── FeaturedWatches.tsx
    ├── BrandStatement.tsx
    ├── SignatureWatch.tsx
    ├── WatchCategories.tsx
    ├── Craftsmanship.tsx
    ├── TrustPolicy.tsx
    ├── JournalPreview.tsx
    ├── Newsletter.tsx
    └── FinalCTA.tsx
```
