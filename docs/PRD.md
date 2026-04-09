# PRD — lienzolabs.com

## 1. Visión General

**Proyecto:** Web corporativa para Lienzolabs, agencia especializada en automatizaciones, desarrollo de software e integración de IA.

**Objetivo:** Crear una presencia web profesional que comunique los servicios de la agencia, genere leads mediante formulario de contacto, posicione SEO por servicio, y sirva como base para contenido futuro (blog automatizado, portfolio dinámico).

**Dominio actual:** lienzostudio.es (activo en Cloudflare)
**Dominio objetivo:** lienzolabs.com (por configururar)

---

## 2. Stack Técnico

| Componente | Tecnología | Motivo |
|---|---|---|
| Framework | Astro | Performance, islands architecture, SEO-first |
| Estilos | Tailwind CSS v4 | CSS-first config (`@theme` blocks), OKLCH colors, sin `tailwind.config.ts` |
| Hosting | Cloudflare Pages | Edge global, gratuito para sitios estáticos, preview deploys |
| Diseño UI | Google Stitch | Generación de diseños productivos |
| Control de versiones | GitHub | CI/CD nativo con Cloudflare Pages |
| Idioma | Solo español | Público objetivo hispanohablante |
| Typo | TypeScript strict | Tipado estricto para robustez |

---

## 3. Arquitectura de Contenido

### 3.1 Páginas principales

| Ruta | Archivo | Descripción |
|---|---|---|
| `/` | `src/pages/index.astro` | Landing page con hero, servicios resumen, CTA |
| `/servicios/` | `src/pages/servicios/index.astro` | Overview de los 3 servicios |
| `/servicios/automatizaciones` | `src/pages/servicios/automatizaciones.astro` | Detalle del servicio de automatizaciones |
| `/servicios/desarrollo-software` | `src/pages/servicios/desarrollo-software.astro` | Detalle del servicio de desarrollo |
| `/servicios/integracion-ia` | `src/pages/servicios/integracion-ia.astro` | Detalle del servicio de IA |
| `/nosotros` | `src/pages/nosotros.astro` | Sobre la agencia, equipo, valores |
| `/portfolio` | `src/pages/portfolio/index.astro` | Casos de éxito / proyectos realizados |
| `/blog` | `src/pages/blog/index.astro` | Listado de entradas (fase futura) |
| `/contacto` | `src/pages/contacto.astro` | Formulario de contacto |

### 3.2 URLs por servicio (SEO)

Cada servicio tiene su propia URL para optimizar SEO por keyword:
- `/servicios/automatizaciones` → keyword: "automatizaciones empresariales"
- `/servicios/desarrollo-software` → keyword: "desarrollo de software a medida"
- `/servicios/integracion-ia` → keyword: "integración de inteligencia artificial"

### 3.3 Layouts y componentes

```
src/
├── layouts/
│   ├── BaseLayout.astro        # Layout principal (head, meta, nav, footer)
│   └── ServiceLayout.astro     # Layout reutilizable para páginas de servicio
├── components/
│   ├── Header.astro            # Navegación principal
│   ├── Footer.astro            # Pie de página
│   ├── Hero.astro              # Sección hero para home
│   ├── ServiceCard.astro       # Tarjeta de servicio (reutilizable)
│   ├── PortfolioCard.astro     # Tarjeta de proyecto
│   ├── ContactForm.astro       # Formulario de contacto
│   ├── CTASection.astro        # Call to action genérico
│   └── SEO.astro               # Componente de meta tags SEO
├── content/
│   ├── portfolio/              # Portfolio en Markdown (MVP estático)
│   └── blog/                   # Blog en MDX (fase futura)
└── pages/                      # Rutas file-based
```

---

## 4. Funcionalidades por Fase

### FASE 1 — MVP Estático (ACTUAL)

| # | Feature | Prioridad | Notas |
|---|---|---|---|
| 1 | Layout base (Header, Footer, Nav) | P0 | Navegación responsive |
| 2 | Home page (hero + servicios + CTA) | P0 | Landing principal |
| 3 | Páginas de servicio (3 URLs) | P0 | SEO independiente por servicio |
| 4 | Página Nosotros | P1 | Sobre la agencia |
| 5 | Portfolio estático (Content Collections) | P1 | Markdown con frontmatter |
| 6 | Formulario de contacto | P1 | Endpoint externo (Resend/Getform) |
| 7 | SEO global (sitemap, robots.txt, meta, OG) | P0 |sitemap, robots.txt, structured data |
| 8 | Accesibilidad WCAG 2.1 AA | P0 | Navegación por teclado, contraste, ARIA |
| 9 | Performance Core Web Vitals | P0 | LCP < 2.5s, CLS < 0.1, INP < 200ms |
| 10 | Diseño responsive mobile-first | P0 | Tailwind breakpoints |
| 11 | Micro-interacciones y animaciones | P2 | GSAP o CSS animations |

### FASE 2 — Blog + Contenido (FUTURO)

| # | Feature | Prioridad | Notas |
|---|---|---|---|
| 1 | Blog con Astro Content Collections (MDX) | P1 | Listado + detalle de posts |
| 2 | Automatización de contenido con n8n | P2 | Generar entradas con IA periódicamente |
| 3 | CMS Keystatic | P2 | Edición visual de contenido |
| 4 | Portfolio dinámico | P2 | Gestión via CMS |

### FASE 3 — Analytics y Optimización (FUTURO)

| # | Feature | Prioridad | Notas |
|---|---|---|---|
| 1 | Analytics (Rabbit o alternativo open-source) | P2 | Sin Google Analytics |
| 2 | A/B testing | P3 | Optimización de conversiones |
| 3 | Monitoring de rendimiento | P3 | Core Web Vitals continuo |

---

## 5. Requisitos No Funcionales

### 5.1 Performance
- **LCP** < 2.5s en mobile y desktop
- **CLS** < 0.1
- **INP** < 200ms
- Imágenes optimizadas (WebP/AVIF, lazy loading, dimensiones explícitas)
- CSS crítico inline, resto diferido
- Zero JavaScript innecesario en el hero (Astro islands)

### 5.2 SEO
- Meta tags únicos por página (title, description)
- Open Graph y Twitter Cards por página
- Schema.org structured data (Organization, Service, LocalBusiness)
- Sitemap XML autogenerado
- robots.txt configurado
- Canonical URLs
- Semantic HTML5 (header, main, section, article, footer)
- URLs limpias y legibles

### 5.3 Accesibilidad (WCAG 2.1 AA)
- Contraste mínimo 4.5:1 texto normal, 3:1 texto grande
- Navegación completa por teclado
- ARIA labels donde sea necesario
- Alt text en todas las imágenes
- Skip navigation link
- Focus indicators visibles
- Respeta `prefers-reduced-motion`

### 5.4 Diseño
- Mobile-first responsive
- Breakpoints: mobile (< 640px), tablet (640-1024px), desktop (> 1024px)
- Logo y tipografía ya definidos por el cliente
- Colores por definir en design system (Google Stitch)

---

## 6. Design System (por definir)

| Token | Valor | Estado |
|---|---|---|
| Logo | Definido por cliente | ✅ |
| Tipografía | Definida por cliente | ✅ |
| Colores primarios | TBD (Google Stitch) | ⏳ |
| Colores secundarios | TBD (Google Stitch) | ⏳ |
| Spacing scale | Tailwind default (4px base) | ✅ |
| Border radius | TBD (Google Stitch) | ⏳ |
| Shadows | TBD (Google Stitch) | ⏳ |

---

## 7. Integraciones y Deploy

### 7.1 CI/CD
- **Repo:** GitHub
- **Deploy:** Cloudflare Pages (conectado al repo)
- **Preview deploys:** Automático por cada PR
- **Producción:** Deploy automático desde `main`

### 7.2 Formulario de contacto (MVP)
- **Opción recomendada:** Servicio externo (Resend o Getform)
- **Endpoint:** API route en Astro si usamos SSR con Cloudflare adapter
- No se almacena datos, solo envío por email

### 7.3 Analytics (fase futura)
- Rabbit o alternativa open-source
- No Google Analytics (preferencia del cliente)

---

## 8. Contenido Estático (Portfolio MVP)

Portfolio implementado con Astro Content Collections:

```yaml
# src/content/portfolio/proyecto-ejemplo.md
---
title: "Nombre del Proyecto"
description: "Descripción breve del proyecto"
client: "Nombre del cliente"
services:
  - automatizaciones
  - integracion-ia
image: "/images/portfolio/proyecto-ejemplo.webp"
tags: ["n8n", "openai", "api"]
date: 2026-03-01
url: "https://ejemplo.com" # opcional
---
```

---

## 9. Tooling Disponible

### Skills configuradas en OpenCode

| Skill | Origen | Uso |
|---|---|---|
| `astro` | astrolicious (installed) | Framework Astro: CLI, adapters, content collections, estructura |
| `tailwind-design-system` | wshobson (installed) | Tailwind v4: `@theme` blocks, design tokens, OKLCH, responsive |
| `cloudflare` | cloudflare/skills (installed) | Plataforma Cloudflare: decision trees, Pages, Workers |
| `wrangler` | cloudflare/skills (installed) | CLI Wrangler: deploy, config, secrets |
| `web-perf` | cloudflare/skills (installed) | Auditoría performance: Core Web Vitals, Chrome DevTools MCP |
| `seo-specialist` | local | SEO: meta tags, structured data, sitemap |
| `accessibility-specialist` | local | Accesibilidad: WCAG 2.1 AA, ARIA, contraste |
| `animation-specialist` | local | Animaciones: GSAP, Lenis, CSS animations |
| `stitch-ui` | local | Diseño UI: Google Stitch, design system, export |
| SDD workflow (8 skills) | local | Exploración → Propuesta → Spec → Diseño → Tasks → Implementación → Verificación |

### MCPs activos

| MCP | Tipo | Uso |
|---|---|---|
| `cloudflare` | Local | Deploy, Pages, DNS |
| `cloudflare-docs` | Remoto | Documentación actualizada |
| `context7` | Remoto | Docs de Astro, Tailwind, etc. |
| `github` | Local | Repo, PRs, issues |
| `stitch` | Local | Google Stitch UI |
| `engram` | Local | Memoria persistente |
| `plane` | Local | Project management |
| `chrome-devtools` | Local | Performance y debugging |

---

## 10. Restricciones y Decisiones

| Decisión | Detalle |
|---|---|
| No CMS en MVP | Contenido estático con Content Collections |
| No blog en MVP | Se implementa en Fase 2 |
| No JS framework (React/Vue) | Astro puro con islands si hace falta |
| No Google Analytics | Open-source (Rabbit o similar) en futuro |
| Solo español | Sin multilenguaje |
| Formulario externo | Resend o Getform para MVP, SSR en futuro |
| Portfolio estático | Content Collections con Markdown |
| Preview deploys | Automático, siempre activo |
| Tailwind v4 CSS-first | Config en `@theme` blocks dentro de CSS, sin `tailwind.config.ts`, colores OKLCH |
