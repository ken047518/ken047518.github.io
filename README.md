# MadeYourDay.Life

A bilingual (English/繁體中文) travel blog built with Hugo, TailwindCSS, and FontAwesome.

## Features

- **Bilingual Support**: English (default) and Traditional Chinese (zh-TW)
- **Content Types**: Posts, Guides, Galleries, About, Services, Now, Links
- **Responsive Design**: Mobile-first with TailwindCSS
- **Dark Mode**: Automatic theme switching with localStorage persistence
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, sitemap, robots.txt
- **Image Processing**: Automatic responsive images with Hugo render hooks
- **Page Bundles**: All content organized as leaf bundles with localized versions

## Prerequisites

- Hugo Extended (v0.120.0 or later)
- Node.js (v18 or later)
- npm or yarn

## Installation

1. Install dependencies:

```bash
npm install
```

2. Build TailwindCSS:

```bash
npm run build:css
```

## Development

Start the Hugo development server:

```bash
npm run dev
```

Or run TailwindCSS in watch mode in a separate terminal:

```bash
npm run watch:css
```

Then start Hugo:

```bash
hugo server -D
```

## Building for Production

```bash
npm run build
```

This will:
1. Build and minify TailwindCSS
2. Build Hugo site with minification

## Content Structure

### Homepage (`content/_index.md`)

```yaml
---
title: MadeYourDay.Life
hero_image: hero.webp
bio_image: bio.webp
tagline: Your tagline here
---

Your bio content here.
```

### Posts (`content/posts/post-name/`)

Create a folder for each post with `index.md` (English) and `index.tw.md` (Chinese):

```yaml
---
title: Post Title
date: 2026-01-02
modified: 2026-01-03
description: Post description (max 160 chars)
summary: Optional summary for list pages
image: cover.webp
featured: true
location: Location Name
tags:
  - travel
  - adventure
categories:
  - travel
---

Your post content here.
```

### Guides (`content/guides/guide-name/`)

```yaml
---
title: Guide Title
date: 2026-01-01
modified: 2026-01-03
description: Guide description
image: cover.webp
featured: true
location: Location Name
---

Your guide content here.
```

### Galleries (`content/galleries/gallery-name/`)

```yaml
---
title: Gallery Title
date: 2026-01-01
description: Gallery description
image: cover.webp
location: Location Name
images:
  - photo1.webp
  - photo2.webp
  - photo3.webp
---

Optional description content.
```

### Links (`content/links/_index.md`)

```yaml
---
title: Links
links:
  - title: YouTube
    url: https://youtube.com/@yourhandle
    icon: fa-brands fa-youtube
    description: Channel description
  - title: Instagram
    url: https://instagram.com/yourhandle
    icon: fa-brands fa-instagram
    description: Profile description
---
```

## Images

- All images should be in WebP format
- Place images in the same folder as the content file (page bundle)
- Images are automatically processed by Hugo for responsive display
- Recommended sizes:
  - Hero images: 1920px wide minimum
  - Post/Guide covers: 1440px wide minimum
  - Gallery images: 1920px wide minimum

## Theme Customization

Edit `tailwind.config.js` to customize colors and fonts:

```js
colors: {
  primary: {
    DEFAULT: '#2563eb',
    dark: '#1d4ed8',
  },
  // ...
},
```

## Deployment

### GitHub Actions

The site is designed for deployment via GitHub Actions. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build CSS
        run: npm run build:css
      - uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true
      - name: Build
        run: hugo --minify
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./public
  
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v2
        id: deployment
```

## Obsidian Integration

This site is designed to work with Obsidian:

1. Open the `content` folder as an Obsidian vault
2. Edit markdown files in Obsidian
3. Place images in the same folder as the content
4. Commit and push changes to trigger deployment

## Project Structure

```
.
├── archetypes/          # Content templates
├── assets/              # Source assets (CSS)
├── content/             # All content (Obsidian vault)
│   ├── posts/
│   ├── guides/
│   ├── galleries/
│   ├── about/
│   ├── services/
│   ├── now/
│   └── links/
├── layouts/             # Hugo templates
│   ├── _default/
│   ├── posts/
│   ├── guides/
│   ├── galleries/
│   ├── links/
│   ├── partials/
│   └── shortcodes/
├── static/              # Static files (JS, compiled CSS, images)
├── hugo.toml            # Hugo configuration
├── tailwind.config.js   # TailwindCSS configuration
└── package.json         # Node dependencies
```
