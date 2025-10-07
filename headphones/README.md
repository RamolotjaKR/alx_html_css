# Headphones Gallery — Quick Start & Guide

This repository contains a minimal, responsive image gallery you can open locally. It demonstrates a clean card-based layout, responsive images, and a mobile-first breakpoint at 480px.

Contents
- `index.html` — the gallery markup (cards + responsive picture elements).
- `styles.css` — styling (grid layout, card styles, interactions, and responsive rules).
- `images/` — example images. Replace these with your own assets.

Live preview
1. Open `index.html` in your browser (double-click the file) or run a small static server.
	 - Windows PowerShell: `start index.html`

Responsive behaviour
- The page switches to the mobile layout when the viewport width is 480px or less. At that point the gallery becomes a single column and spacing/typography adjusts for mobile screens.

Image handling
- Files shipped here:
	- `images/01_headphones_desktop@2x.png` — used for large viewports
	- `images/01_headphones_tablet@2x.png` — used for medium viewports
	- `images/01_headphones_mobile@2x.png` — used as the default/mobile source
- To swap in your photos: replace the files in `images/` with images of the same name, or update `index.html` to point to other filenames.
- The gallery uses `<picture>` elements with `srcset`/media queries and `loading="lazy"` on images. This gives responsive loading and a performance win on slower connections.

Interaction & accessibility notes
- Link hover/active color: `#FF6565` — visible on hover and active states.
- Button hover/active: `.btn` utility uses `opacity: 0.9` for hover and active states.
- Keyboard accessibility: card links are keyboard-focusable and the design includes focus outlines for visibility. Update `alt` attributes on `<img>` elements to provide meaningful descriptions.

Customization tips
- Change the content width: the layout uses `.site { max-width:1000px }`. Adjust this value if you want a wider or narrower layout.
- Add more cards by copying the existing `<article class="card">` block in `index.html` and updating the image href/src and captions.
- To add a lightbox: a small JS library (like basicLightbox or Lightbox2) or a tiny custom script can provide enlarged views on click.

Developer notes
- Styling is intentionally simple and framework-free. It uses CSS Grid and modern browser features (aspect-ratio, object-fit). If you need broader compatibility, consider a small polyfill or fallback styles.
- Image optimization suggestion: generate WebP or optimized JPG/PNG versions for production and update `srcset` with 1x/2x variants.

Next steps (optional)
- Add a lightbox for viewing full-size images.
- Implement image placeholders and progressive loading for slow networks.
- Add captions metadata and filtering/sorting controls.

License & credits
- This demo is provided as-is for your use. Feel free to copy, modify, and adapt.

