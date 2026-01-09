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

- Hugo Extended (v0.152.0 or later)
- Node.js (v22 or later)
- npm or yarn

## 環境設定

1. [Obsidian](https://obsidian.md/)
2. [Git](https://git-scm.com/install/windows)
3. [NodeJS](https://nodejs.org/zh-tw/download)，安裝時勾選安裝 Chocolatey
4. Hugo

### Windows

### NodeJS

```
node -v
```
看到輸出 vxx.x.x 就代表安裝成功

**Hugo 安裝**

打開 cmd / powershell，輸入：

```powershell
choco install hugo -y

# 驗證安裝
hugo version

# 跑出 hugo v0.154.3 ..... 就代表安裝成功
```

**Git 設定 SSH 金鑰**

```bash
# 生成 SSH 金鑰
ssh-keygen
# 都留空直接按 Enter

# 完成後打開看公鑰檔
cat .ssh/id_ed25519.pub
```
將輸出的整串文字複製起來。

到 [GitHub Settings / SSH and GPG Keys](https://github.com/settings/ssh)

### 下載專案檔

開啟 Git Bash，我們將專案檔放置在家目錄下的 Documents 裡

```bash
cd Documents
git clone git@github.com:ken047518/ken047518.github.io
# 第一次要輸入 yes
```
初始化設定

```bash
cd ken047518.github.io
npm install
npm run build:css
```
## Installation

1. Install dependencies:

```bash
npm install
```

2. Build TailwindCSS:

```bash
npm run build:css
```

## 設定 Obsidian

開啟 Obsidian，選擇 Open Folder as Vault，選擇專案資料夾

打開設定 -> Community Plugins -> Turn on Community Plugins.

Browse -> 

1. 搜尋 Git -> Install -> Enable
2. 搜尋 Hugo Preview -> Install & Enable

設定預設圖片位置：

1. Settings -> Files and links -> Default location for new attachments -> Same folder as current file
2. New link format: Relative path to file
3. Uncheck "Use `[[Wikilink]]`"

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

## 網站內容編輯

資料夾解說

* `content`: 所有的文章內容
	* `posts`: 一般文章
	* `guides`: 指南
	* `gallaries`: 相簿
	* `about`: 關於頁面
	* `services`: 服務頁面
	* `links`: Linktree 頁面
* `static`: 靜態檔案

檔案取名規則：

* 檔案名稱會對應到網址名稱
	* 文章標題在內容的 `title` 寫
* `[分類]/[資料夾名稱]/index.md`: 英文網版頁面，網址為 `/[分類]/[資料夾名稱]`
	* 例如 content/posts/greek/index.md -> `/posts/greek/`
* 同資料夾下的 `index.tw.md` 為中文版網頁
	* 例如 content/posts/greek/index.tw.md -> `/tw/posts/greek/`
* `[分類]/_index.md`: 列表頁面，平常新增文章不用動
	* 底線是列表頁面在使用的
* 檔案和資料夾都用小寫英文和 `-`

*在 Obsidian 內不需要加 `.md` 結尾*

---
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
