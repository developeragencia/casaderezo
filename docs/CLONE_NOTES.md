# Casa da Mãe - Clone Website Documentation

## Source Website
**URL:** https://www.casadamae.com.br/
**Type:** E-commerce de Artigos Religiosos (Atacado e Varejo)
**Location:** Aparecida/SP - Roseira/SP

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header, Footer, fonts
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Design system tokens (amber/navy theme)
├── components/
│   ├── ui/                 # shadcn/ui components (base-nova style)
│   ├── sites/casadamae/    # Site-specific components
│   │   ├── Header.tsx      # Top bar, logo, search, mega-menu, cart/account
│   │   ├── HeroCarousel.tsx # 6 promotional slides with auto-play
│   │   ├── CategoryGrid.tsx # 6 category cards
│   │   ├── SaintSection.tsx # 3 featured saints (Guadalupe, Imaculada, Santa Luzia)
│   │   ├── LaunchSection.tsx # 12 new arrivals
│   │   ├── MaterialHighlights.tsx # 4 material types
│   │   ├── SacramentsSection.tsx # 4 sacraments with products
│   │   ├── DevotionalScenarios.tsx # 2 curated kits
│   │   ├── LiturgicalObjects.tsx # 12 liturgical products
│   │   ├── VideoSection.tsx # 6 video thumbnails
│   │   ├── ChristmasCountdown.tsx # Countdown timer + 14 products
│   │   ├── BestsellersSection.tsx # 12 bestsellers
│   │   ├── ProductCard.tsx   # Reusable product card component
│   │   └── Footer.tsx        # Links, company info, payment methods
│   └── lib/utils.ts         # cn() utility
└── public/
    └── images/             # Placeholder for images
```

## Design System (from globals.css)

### Colors
- **Primary (Amber):** `#CC8800` — Brand color for CTAs, focus, accents
- **Secondary (Navy):** `#1E3350` — Top bar, footer, deep accents
- **Background:** `#FAF7F1` (light) / `#09090B` (dark) — Warm cream
- **Surface:** `#FFFFFF` / `#18181B`
- **Text:** Zinc scale (no pure black)

### Typography
- **Sans (UI):** Figtree (from original site)
- **Display (Headlines):** Marcellus (distinctive serif per taste-design)
- **Mono:** JetBrains Mono

### Spacing
- 4px base scale: `--space-1` through `--space-24`
- Container: max-width 1400px, padding 24px

### Animations
- Spring physics: stiffness 100, damping 20
- Stagger delays for cascade reveals
- Reduced motion support

## Sections Implemented

### 1. Header
- Top bar with 4 value propositions (frete grátis, desconto Pix, atacado, fabricação própria)
- Contact info (phone, WhatsApp, email)
- Logo with "M" mark
- Search input
- Account dropdown (login, cadastro, pedidos, favoritos)
- Cart with badge
- Mega-menu dropdown with 16 categories
- Mobile sheet navigation

### 2. Hero Carousel
- 6 slides: Black Friday, Círio 2027, Natal, Vela Pascal, N. Sra. Aparecida, Velas
- Auto-play (5s), pause on hover
- Touch swipe support
- Keyboard navigation
- Indicators
- Gradient overlay for text readability

### 3. Category Grid
- 6 categories with images and product counts
- Hover effects with scale
- "Ver Todas" link

### 4. Featured Saints (3 sections)
- Nossa Senhora de Guadalupe (6 products)
- Nossa Senhora da Imaculada Conceição (7 products)
- Santa Luzia (8 products)
- Each with "Ver todos" link

### 5. Lançamentos
- 12 new products with launch badges
- Círio Pascal 2027 highlight

### 6. Material Highlights
- 4 materials: Mármore, Resina Nacional, Resina Importada, Terços
- Product counts

### 7. Sacramentos
- 4 sacraments: Batismo, Primeira Eucaristia, Crisma, Matrimônio
- 4 products each with prices
- Direct links to product pages

### 8. Cenários de Devoção
- 2 curated kits: Cantinho de Oração (São Miguel), Devoção Completa (Aparecida)
- Itemized pricing with totals

### 9. Objetos Litúrgicos
- 12 products for parish use
- Range from R$ 9.46 to R$ 3.290

### 10. O Produto em Vídeo
- 6 video thumbnails with play overlays
- Duration badges
- Link to product pages

### 11. Natal Countdown
- Real-time countdown timer (days/hours/minutes/seconds)
- 14 Christmas products
- Black Friday badges on promotional items

### 12. Mais Procurados
- 12 bestsellers
- 6 LED luminárias (R$ 19.72)
- 6 large resin archangels (R$ 2.190 - R$ 4.890)
- Black Friday discounts on large items

### 13. Footer
- 4 link columns: Institucional, Políticas, Ajuda
- Company info (CNPJ, address)
- Payment methods (cards, Pix, boleto)
- Social links (Facebook, Instagram, YouTube)
- Copyright

## Component Patterns

### ProductCard
- Variant: default, compact, featured
- Badges: Lançamento, Mais Vendido, Black Friday %, custom
- Price display: current, original (strikethrough), Pix price, installments
- Quick actions on hover: Add to cart, Favorite
- Schema.org microdata (Product, Offer)

### Accessibility
- Semantic HTML5 elements
- ARIA labels and roles
- Focus-visible outlines
- Skip link
- Reduced motion support
- Alt text for images
- Keyboard navigation

### Responsive
- Mobile-first breakpoints
- Grid: 1 col (mobile) → 2-3 (tablet) → 4-6 (desktop)
- Touch targets ≥ 44px
- No horizontal overflow

## Next Steps

1. **Images:** Add actual product/category images to `public/images/`
2. **API Routes:** Create product/category API endpoints
3. **Pages:** Build category, product, saint, kit detail pages
4. **Cart/Checkout:** Implement shopping cart and checkout flow
5. **Auth:** Add login/register with NextAuth
6. **Search:** Implement search with Algolia or similar
7. **Admin:** Build admin panel for product management
8. **SEO:** Add sitemap, robots.txt, structured data
9. **Analytics:** Add GA4, Facebook Pixel
10. **Tests:** Unit tests for components, E2E for critical flows

## Commands

```bash
# Development
npm run dev

# Build (after npm install completes)
npm run build

# Production
npm run start

# Lint
npm run lint
```

## Notes

- The original site uses a blue/red color scheme; this clone uses the project's amber/navy design system per taste-design/impeccable guidelines
- Fonts changed from original (likely system fonts) to Figtree/Marcellus per design system rules
- All prices in BRL with Brazilian formatting
- "Atacado a partir de R$ 500" enforced as minimum order for wholesale
- Fabricação própria highlighted as key differentiator (20+ years)