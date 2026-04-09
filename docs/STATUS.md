# Estado del Proyecto — lienzolabs-web

> Última actualización: 2026-04-10

## Estado Actual

**Fase**: Pre-implementación — SDD workflow listo para arrancar
**Repo**: [LoloPeluzo/lienzolabs-web](https://github.com/LoloPeluzo/lienzolabs-web)
**Rama**: `main` (4 commits)
**Build**: ✅ Passing

## Stack

```
Astro 6.1.5 (static output) + Tailwind CSS v4.2.2 (@tailwindcss/vite)
@astrojs/cloudflare 13.1.8 (instalado, para Fase 2 SSR)
TypeScript 5.9.3 (strict)
Cloudflare Pages (deploy target)
```

## Documentación

| Archivo | Descripción |
|---|---|
| `docs/PRD.md` | Product Requirements Document completo |
| `docs/STATUS.md` | Este archivo — estado y próximos pasos |
| `.atl/skill-registry.md` | Skills activas para el proyecto |

## Estructura del Proyecto

```
lienzolabs-web/
├── docs/
│   ├── PRD.md                    # Requisitos del producto
│   ├── STATUS.md                 # Estado actual (ESTE ARCHIVO)
│   └── identity/                 # Identidad corporativa
│       └── README.md             # Guía de qué poner aquí
├── src/
│   ├── pages/index.astro         # Home (placeholder)
│   ├── layouts/                  # (vacío, por crear)
│   ├── components/               # (vacío, por crear)
│   ├── content/
│   │   ├── portfolio/            # (vacío, por crear)
│   │   └── blog/                 # (vacío, fase futura)
│   └── styles/global.css         # Design tokens placeholder
├── public/                       # Assets estáticos
├── astro.config.mjs              # Config Astro + Tailwind v4
├── tsconfig.json                 # TypeScript strict + path aliases
└── .atl/skill-registry.md        # Skills del proyecto
```

## Historial de Commits

```
b788eab chore: add .wrangler/ to gitignore
9199d2d chore: add skill registry for SDD workflow
f997897 feat: initialize Astro 6 project with Tailwind v4
430a802 docs: add PRD for lienzolabs.com corporate website
```

## Infraestructura Configurada

| Servicio | Estado | Detalle |
|---|---|---|
| GitHub repo | ✅ | LoloPeluzo/lienzolabs-web |
| Cloudflare account | ✅ | "Lienzolabs", ID `e88a68d0a2e5ac5de4174f371ace84b4` |
| Cloudflare MCP (local) | ✅ | API token en `~/.bashrc` |
| Cloudflare Docs (remote) | ✅ | Activo |
| Engram (memoria) | ✅ | Contexto SDD + testing capabilities |
| Context7 (docs) | ✅ | Activo |
| Chrome DevTools MCP | ✅ | Para auditorías de performance |
| Stitch MCP | ✅ | Para diseño UI |
| Plane MCP | ✅ | Para project management |
| SDD workflow | ✅ | sdd-init completado |

## ⚡ Próximo Paso (por donde arrancar)

### Opción A: SDD Workflow (recomendado)

Arrancar el SDD orchestrator con el PRD como input para planificar la implementación del MVP:

1. Cambiar al agente `sdd-orchestrator`
2. Ejecutar exploración basada en `docs/PRD.md` — Fase 1 features
3. El orchestrator generará: propuestas → specs → diseño → tasks → implementación

### Opción B: Diseño primero con Stitch

Si preferís definir la identidad visual antes de codear:

1. Colocar assets en `docs/identity/` (logo, colores, tipografía)
2. Usar `stitch-ui` skill para generar diseños con Google Stitch
3. Exportar diseño y luego arrancar SDD

### Lo que FALTA por hacer (MVP — Fase 1)

1. 🎨 Definir identidad visual (colores, tipografía, logo)
2. 🏗️ Layout base (Header, Footer, Nav responsive)
3. 🏠 Home page (hero + servicios resumen + CTA)
4. 📄 Páginas de servicio (3 URLs para SEO)
5. 👥 Página Nosotros
6. 💼 Portfolio estático (Content Collections)
7. 📬 Formulario de contacto
8. 🔍 SEO (sitemap, robots.txt, meta, OG, structured data)
9. ♿ Accesibilidad WCAG 2.1 AA
10. ⚡ Performance (LCP < 2.5s, CLS < 0.1)
11. ✨ Micro-interacciones (GSAP o CSS)

## Notas Importantes

- **Tailwind v4**: Config CSS-first con `@theme` blocks. NO existe `tailwind.config.ts`. Los design tokens van en `src/styles/global.css`.
- **@astrojs/tailwind NO funciona con Astro 6**: Usar `@tailwindcss/vite` directamente.
- **Static output**: El MVP es SSG. El adapter Cloudflare solo se necesita para SSR (Fase 2).
- **Solo español**: Sin multilenguaje.
- **Dominio objetivo**: `lienzolabs.com` (por configurar en Cloudflare DNS).
- **Dominio actual**: `lienzostudio.es` (activo en Cloudflare).
