# Identidad Corporativa — Lienzolabs

> Colocá aquí los assets de marca para que el equipo (y los agentes) los usen como referencia.

## Estructura

```
identity/
├── README.md          ← Este archivo (guía)
├── logo/              ← Logo en todos los formatos
│   ├── logo-light.svg    Logo para fondos oscuros
│   ├── logo-dark.svg     Logo para fondos claros
│   ├── logo-icon.svg     Ícono/favicon solo
│   └── logo-original.*   Archivo original editable
├── colors/            ← Paleta de colores
│   └── palette.png       Imagen de referencia de la paleta
├── typography/        ← Tipografías
│   └── fonts/            Archivos .woff2 de las fuentes usadas
└── icons/             ← Iconos custom (si los hay)
```

## Cómo completar esto

### Logo
1. Colocá el archivo original (SVG, AI, o PNG de alta resolución) en `logo/`
2. Exportá versiones: SVG (claro/oscuro), favicon (32x32, 180x180)
3. Una vez definido, el favicon va en `public/favicon.ico` y `public/apple-touch-icon.png`

### Colores
1. Definí la paleta principal: primario, secundario, acento, superficies
2. Anotá los valores hex/OKLCH en el PRD (`docs/PRD.md` sección 6)
3. Los design tokens se configuran en `src/styles/global.css` dentro de `@theme {}`

### Tipografía
1. Colocá las fuentes en `typography/fonts/` (formato .woff2)
2. O usá Google Fonts — bastará con el nombre en los design tokens
3. Definí: font-heading y font-sans en `src/styles/global.css`

### Iconos
1. Si tenés iconos propios, van en `icons/`
2. Para iconos genéricos, considerá usar [Iconify](https://iconify.design/) o [Heroicons](https://heroicons.com/)

## Nota para agentes

Cuando se definan los colores y tipografía, actualizar simultáneamente:
1. **Este README** — describir los valores elegidos
2. **`docs/PRD.md` sección 6** — marcar como completado
3. **`src/styles/global.css`** — actualizar los `@theme` tokens
