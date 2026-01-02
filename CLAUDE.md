# MadeYourDay.Life

主要目標：建立旅遊品牌形象，導流到服務項目，累積電子報訂閱者
可維運性：Obsidian markdown 編輯 + GitHub Actions 自動部署
圖片儲存：所有圖片先自行壓縮為 webp，直接放入 page bundle

## 技術棧

- Hugo
- TailwindCSS
- FontAwesome

### i18n

- 預設語言: en-US
- 第二語言: zh-TW，路徑為 /tw/
- 所有頁面採用 Leaf Bundle，將不同語言置於同一資料夾下的 index.md 與 index.tw.md
- 使用 hugo languages 設定，defaultContentLanguageInSubdir=false
- 缺翻譯時就不在列表中顯示，不需要 fallback
- 每頁需輸出 rel="alternate" hreflang="en-us" / zh-tw 的互指。
- canonical 以各語系自身 URL 為主，避免 SEO 重複內容。
- 內容欄位各語系獨立（title/description/location）

## Content model

- date format (date/modified): YYYY-MM-DD
- featured: boolean
- image: relative path in current dir
- images: list of strings (relative path in current dir)

Common properties:
- title
- date
- modified
- image
- tags
- categories
- 

## 網站架構

### Navbar

靠左：
- Logo

靠右
- About / 關於
- Services / 服務項目
- Guides / 旅遊攻略
- Posts / 文章
- Galleries / 相簿

### / 首頁

layout: index.html

/ : 

- 主視覺圖 + Logo
- bio + photo
- 精選文章: 手動挑選三篇，卡片形式橫向排列
  - mobile: 卡片橫向輪播（一次顯示一張）
- 攻略列表: 手動挑選三篇，列表縱向排列
  - mobile: 列表縱向排列
- 服務項目: 圖片+文字區塊 + 按鈕導到 /services


### /posts/ 文章列表

layout: posts/list.html
/posts/: 遊記、文章，時序排列，圖卡方式顯示文章
- 圖片以 4:3 顯示，第一篇文章以兩倍寬度，圖片在左，標題在左的卡片
- 其他篇以二欄顯示，圖片在上，標題在下的卡片
- 顯示 title, date, image, location

layout: posts/single.html
/posts/:id : 遊記、文章，單篇顯示

properties:
- title
- date
- modified
- image
- featured
- location
- tags
- categories 

```yaml
title: 以色列出逃記
date: 2026-01-02
modified: 2026-01-03
description: 以色列出逃記
image: /images/Israel.jpg
featured: true
location: Israel
tags:
- travel
- adventure
categories:
- travel
```


### /guides/ 旅遊攻略

layout: guides/list.html
/guides : 旅遊攻略，持續更新，列表顯示

- 長條形卡片，左邊正方形圖片，右邊標題加 description

layout: guides/single.html
/guides/:id : 旅遊攻略，單篇顯示

properties:
- title
- date
- modified
- description
- image
- featured
- location

### /galleries/ 相簿

layout: galleries/list.html
/galleries : 多個相簿，純圖片，格裝顯示，hover 圖片顯示標題 date

layout: galleries/single.html
/galleries/:id : 相簿，將圖片列表以格狀顯示或是單張輪播

properties:
- title
- date
- modified
- image
- location
- images: list of images

### /about: 關於頁面

layout: default/single.html

/about : 關於頁面，single

### /now

layout: default/single.html

/now : 近況，single

### /services : 服務項目

layout: default/single.html

/services : 服務項目，single

### /links: 連結頁面

layout: links/single.html

/links : 鏈結頁面，single

在 frontmatter 設定連結列表：

```
---
links:
  - title: YouTube
    url: https://www.youtube.com/channel/UCw8Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6
    icon: fa-brands fa-youtube
  - title: Instagram
    url: https://www.instagram.com/madeyourday.life/
    icon: fa-brands fa-instagram
---
```
