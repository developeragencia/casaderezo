# Graph Report - CASA DE REZO  (2026-11-20)

## Corpus Check
- Corpus is ~4,661 words - fits in a single context window. You may not need a graph.

## Summary
- 203 nodes · 320 edges · 11 communities
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.97)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Radix UI Components
- Project Configuration & Dependencies
- shadcn/ui Configuration
- Utility Functions & Basic UI Components
- TypeScript Configuration
- Next.js Application Core
- Documentation & Project Icons
- Dialog & Carousel Components
- Toast Notification System
- Button & Badge Components (with CVA)
- Navigation Menu Components

## God Nodes (most connected - your core abstractions)
1. `cn()` - 72 edges
2. `react` - 18 edges
3. `compilerOptions` - 16 edges
4. `tailwind` - 6 edges
5. `aliases` - 6 edges
6. `Next.js` - 6 edges
7. `scripts` - 5 edges
8. `next` - 5 edges
9. `Project Icon Set` - 5 edges
10. `eslint` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Carousel()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/carousel.tsx → src/lib/utils.ts
- `DialogHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/dialog.tsx → src/lib/utils.ts
- `DialogFooter()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/dialog.tsx → src/lib/utils.ts
- `DialogTitle` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/dialog.tsx → src/lib/utils.ts
- `DialogDescription` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/dialog.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **hyperedge:readme-structure** — file:README.md, doc:README.md#getting-started, doc:README.md#learn-more, doc:README.md#deploy-on-vercel [INFERRED 1.00]
- **hyperedge:project-icon-set** — concept:project-icons, public_file_public_file_svg, file:public/globe.svg, file:public/next.svg, file:public/vercel.svg, file:public/window.svg [INFERRED 0.90]
- **hyperedge:nextjs-vercel-ecosystem** — concept:nextjs, concept:vercel, concept:create-next-app, concept:geist-font, concept:next-font, file:public/next.svg, file:public/vercel.svg [INFERRED 0.95]

## Communities (11 total, 0 thin omitted)

### Community 0 - "Radix UI Components"
Cohesion: 0.09
Nodes (31): AccordionContent, AccordionItem, AccordionTrigger, Avatar, AvatarFallback, AvatarImage, Card, CardContent (+23 more)

### Community 1 - "Project Configuration & Dependencies"
Cohesion: 0.10
Nodes (26): eslintConfig, devDependencies, eslint@^9, eslint-config-next@16.4.6, tailwindcss@4.3.3, @tailwindcss/turbopack@4.3.3, @types/node@^20, @types/react@^19 (+18 more)

### Community 2 - "shadcn/ui Configuration"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 3 - "Utility Functions & Basic UI Components"
Cohesion: 0.12
Nodes (8): react, Input, InputProps, Label, Separator, Skeleton(), formatPrice(), formatPriceWholesale()

### Community 4 - "TypeScript Configuration"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 5 - "Next.js Application Core"
Cohesion: 0.12
Nodes (10): nextConfig, dependencies, next@16.4.6, react@19.3.0, react-dom@19.3.0, next, react-dom, geistMono (+2 more)

### Community 6 - "Documentation & Project Icons"
Cohesion: 0.19
Nodes (9): create-next-app, Geist Font, next/font, Next.js, Project Icon Set, Vercel, Deploy on Vercel, Getting Started (+1 more)

### Community 7 - "Dialog & Carousel Components"
Cohesion: 0.18
Nodes (8): Carousel(), CarouselProps, DialogContent, DialogDescription, DialogFooter(), DialogHeader(), DialogOverlay, DialogTitle

### Community 8 - "Toast Notification System"
Cohesion: 0.20
Nodes (9): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+1 more)

### Community 9 - "Button & Badge Components (with CVA)"
Cohesion: 0.24
Nodes (6): Badge(), BadgeProps, badgeVariants, Button, ButtonProps, buttonVariants

### Community 10 - "Navigation Menu Components"
Cohesion: 0.28
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

## Knowledge Gaps
- **1 isolated node(s):** `create-next-app`
  These have ≤1 connection - possible missing edges. (Counts symbols only; 76 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Utility Functions & Basic UI Components` to `Radix UI Components`, `Project Configuration & Dependencies`, `Next.js Application Core`, `Dialog & Carousel Components`, `Toast Notification System`, `Button & Badge Components (with CVA)`, `Navigation Menu Components`?**
  _High betweenness centrality (0.230) - this node is a cross-community bridge._
- **What connects `create-next-app` to the rest of the system?**
  _1 weakly-connected nodes found - possible missing edges._
- **Should `Radix UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.08658536585365853 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `Radix UI Components` to `Utility Functions & Basic UI Components`, `Dialog & Carousel Components`, `Toast Notification System`, `Button & Badge Components (with CVA)`, `Navigation Menu Components`?**
  _High betweenness centrality (0.182) - this node is a cross-community bridge._
- **Should `Project Configuration & Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Why does `next` connect `Next.js Application Core` to `Project Configuration & Dependencies`?**
  _High betweenness centrality (0.071) - this node is a cross-community bridge._
- **Should `shadcn/ui Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._