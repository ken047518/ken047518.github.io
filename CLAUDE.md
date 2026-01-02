# MadeYourDay.Life

## 技術棧

- Hugo
- TailwindCSS
- FontAwesome

## 網站架構

預設語言: en-US
第二語言: zh-TW，網站路徑為 /tw

所有頁面採用 Leaf Bundle，將不同語言置於同一資料夾下的 index.md 與 index.tw.md

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
圖片以 4:3 顯示，第一篇文章以兩倍寬度，圖片在左，標題在左的卡片
其他篇以二欄顯示，圖片在上，標題在下的卡片

layout: posts/single.html
/posts/:id : 遊記、文章，單篇顯示

properties:
- title
- date
- image
- featured
- location
- tags
- categories 

### /guides/ 旅遊攻略

layout: guides/list.html
/guides : 旅遊攻略，持續更新，列表顯示

layout: guides/single.html
/guides/:id : 旅遊攻略，單篇顯示

properties:
- title
- date
- image
- featured
- location

### /galleries/ 相簿

layout: galleries/list.html
/galleries : 多個相簿，純圖片，格裝顯示

layout: galleries/single.html
/galleries/:id : 相簿，將圖片列表以格狀顯示或是單張輪播

properties:
- title
- date
- image
- location
- images

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
