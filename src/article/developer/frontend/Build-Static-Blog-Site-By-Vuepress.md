---
title: 教程-搭建一个静态博客网站
date: 2024-05-01
categories: 前端
---

::: tip
本教程旨在教你如何快速搭建一个静态博客站点，要想丰富站点内容还请移步到 [vuepress 官方文档](https://v2.vuepress.vuejs.org/zh/)
:::

## 简单介绍

样式采用了 tailwindCSS 方案，博客等页面扩展能力则是通过插件 `@vuepress-reco/vuepress-plugin-page` 来实现的。

### 安装

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

### 样式

reco 主题的 css 方案是 tailwindcss 3.0 + postcss-nested + postcss-each ，可以直接在 css 中直接书写嵌套格式和循环格式（类 scss），无论自定义样式，还是自定义组件均可直接使用。

如果在写 tailwindcss 时，用到 reco 主题自定义的基础样式、变量和组件，需要在 css 文件最上面引入 @vuepress-reco/tailwindcss-config/lib/client/tailwindcss-base.css ：

```css
@import url('@vuepress-reco/tailwindcss-config/lib/client/tailwindcss-base.css');
```

### 图标

<vuepress-theme-reco@2.x> 是通过 Xicons 来配置图标的，Xicons 只集成了 carbon 1 种图标，几乎可以满足绝大部分场景。

如果想要在 markdown 中输出一个星星图标 ，你就可以在 markdown 中这样比编辑代码：

```html
<xicons icon="Star" />
```

### 文件夹规范

reco 主题实现了博客的功能，但是 vuepress 没有办法区分博客或是文档，导致文档也会出现在博客区域，所以主题对博客和文档的存放位置进行了约束，博客文章请放在 /blogs 文件夹中（强制），文档系列请放在 /series 文件夹中（强制），普通文档请放在 /docs 中（不强制）。

## 首页Frontmatter

目前内置的首页模块有 Banner、BannerBrand、Blog、MdContent、Comment, Footer，其配置如下：

### modules

- 描述：指定首页模块
- 默认值：['BannerBrand', 'Blog', 'Footer']
- 可选值：Banner、BannerBrand、Features、Blog、MdContent、Comment、Footer
- 配置项：
  - Banner：巨幅展示图，可以展示 logo、标题、简述、背景图，上下布局
  - BannerBrand：品牌格式的巨幅展示图，可以展示 logo、标题、简述、背景图、按钮，左右布局
  - Features: 首页特性列表
  - Blog：博客模块，两栏布局，作则展示博客列表，右侧展示用户信息及博客相关内容
  - MdContent：首页的 markdown 正文展示模块
  - Comment: 评论模块
  - Footer：首页底部模块

### banner

- 描述：用于配置 Banner 模块
- frontmatter 配置：
  - heroText：标题
  - tagline：简述
  - heroImage: 首页 logo
  - heroImageStyle: 首页 logo 样式
  - bgImage: 背景图片
  - bgImageStyle: 背景图片样式

### bannerBrand

- 描述：用于配置 BannerBrand 模块
- frontmatter 配置：
  - title：标题
  - description: 描述
  - tagline：标语
  - buttons: 按钮
    - text: 按钮文案
    - link: 按钮地址
    - type: 按钮风格，默认带背景色，如果不需要可以设置为 'plain'
  - socialLinks：社交地址
  - icon: 图标，设置方式见 这里
  - link: 按钮地址

### blog

- 描述：用于配置 Blog 模块
- frontmatter 配置：
  - socialLinks：社交地址
  - icon: 图标，设置方式见 这里
  - link: 按钮地址
- themeConfig 配置：
  - author：作者昵称
  - authorAvatar：作者头像

### features

- 描述：配置首页特性列表
- frontmatter 配置：
  - title：标题
  - details：详情

### footer

- 描述：用于配置 Footer 模块
- frontmatter 配置：
  - record: 域名备案文案
  - recordLink：域名备案地址
  - cyberSecurityRecord: 公安备案文案
  - cyberSecurityLink：公安备案地址
  - startYear：本网站开始时间

### MdContent

- 描述：首页的 markdown 正文展示模块

### Comment

- 描述： 评论功能，如果站点想把评论功能放在首页，可以配置这个选项

### 案例

```yaml
---
home: true
modules: # 指定首页展示模块
  - BannerBrand
  - Blog
  - MdContent
  - Features
  - Footer
banner: # banner 模块的配置
  heroText: 午后南杂
  tagline: Enjoy when you can, and endure when you must.
  heroImage: /logo.png
  heroImageStyle:
    maxWidth: 200px
    margin: 0 auto 2rem
  bgImage: /banner.jpg
  bgImageStyle:
    height: 450px
bannerBrand: # bannerBrand 模块的配置
  title: vuepress-reco
  description: 一款简洁的 vuepress 博客 & 文档 主题。
  tagline: vuepress-theme-reco 2.0 继续坚持简洁的风格，所有功能开箱即用，首页模块化组装，使用 tailwindcss 书写样式，将 Vite 作为默认编译器。你只需要负责内容创作，其他请交给我。
  buttons:
    - { text: Guide, link: '/docs/guide/introduce' }
    - { text: Default Style, link: '/docs/theme/introduce', type: 'plain' }
  socialLinks: # 社交地址
    - { icon: 'LogoGithub', link: 'https://github.com/recoluan' }
blog: # blog 模块的配置
  socialLinks: # 社交地址
    - { icon: 'LogoGithub', link: 'https://github.com/recoluan' }
features:
- title: 过去
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题。
- title: 当下
  details: 帮助更多的朋友节省时间去用心书写内容，而不是仅仅配置一个博客去孤芳自赏。
- title: 未来
  details: 吸引更多的朋友参与到开发中来，继续强大功能。
footer: # 底部模块的配置
  record: 域名备案文案
  recordLink: 域名备案地址
  cyberSecurityRecord: 公安备案文案
  cyberSecurityLink: 公安备案地址
  startYear: 2018
---
```

## 普通Frontmatter

### date

- 类型： string
- 详情： 页面的创建日期。 应按照 yyyy-MM-dd 的格式来指定日期，或者遵循 YAML Timestamp Type 。
- 参考： Node API > Page 属性 > date

### title

- 类型： string
- 详情： 页面的标题。 如果你不在 Frontmatter 中设置 title ，那么页面中第一个一级标题（即 # title）的内容会被当作标题使用。
- 参考： Node API > Page 属性 > title

### password

- 类型：string ｜ string[]
- 详情：页面加密密码。
- 参考：参考 -> 主题配置 -> 加密

### sticky

- 类型：number
- 详情：文章置顶，按照 1, 2, 3, ... 来降序排序。

### pageClass

- 类型： string
- 详情：为当前页面添加额外的类名。
- 示例：

```yaml
  ---
  pageClass: custom-page-class
  ---
```

然后你可以在 .vuepress/styles/index.css 文件中为这个页面添加自定义样式：

```css
.theme-container {
  .custom-page-class {
    /*页面样式*/
  }
}
```

- 参考：默认主题 > 样式 > Style 文件

## 主题配置

### 首页路径

某些场景下，文档的首页并不一定是文档根目录的 README.md 文件，这时我们可以在 Frontmatter 中设置 home: true 来置顶首页，并通过 themeConfig.home 来指定首页路径。

```yaml
# another-home-path.md
---
title: 指定首页
home: true
---
```

```ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    home: '/another-home-path'
  })
})
```

### 源文件文件夹

如果我们文档项目存放在工程的子目录，比如 /docs 文件夹下，我们需要设置 themeConfig.docsDir 为 ./docs。

```ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    docsDir: '/docs'
  })
})
```

### 系列

系列其实就是左侧边栏

普通

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    series: {
      '/vuepress-theme-reco/': [ 'introduce', 'usage' ]
    }
  }
}
```

分组

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    series: {
      '/vuepress-theme-reco/': [
        {
          text: '基础',
          children: [ 'introduce', 'usage' ]
          collapsible: true // 默认展开，true 为折叠
        },
        {
          text: '高级',
          children: [ 'home', 'series', 'comments' ]
        }
      ]
    }
  }
}
```

> 如果左侧出现文章的名称显示成了文档的路径，可以把 children 变为完整模式。

### 导航栏

#### 类型

```js
interface NavbarItemBasic {
  text: string
  link?: string
  icon?: string
}

interface NavbarItem extends NavbarItemBasic {
  children?: NavbarItemBasic[]
}

type Navbar = NavbarItem[]
```

#### 参考

```js
export const navbar = [
  { text: '指南', link: '/docs/guide/introduce', icon: 'Compass' },
  {
    text: '参考',
    icon: 'Document',
    children: [
      {
        text: '配置',
        children: [
          { text: '主题配置', link: '/docs/theme/frontmatter' },
          { text: 'Markdown 扩展', link: '/docs/theme/custom-container' },
          { text: '高级', link: '/docs/theme/custom-catalog-title' },
        ],
      },
      {
        text: '插件',
        children: [
          { text: 'page', link: '/docs/plugins/page' },
          { text: 'comments', link: '/docs/plugins/comments' },
          { text: 'vue-previews', link: '/docs/plugins/vue-previews' },
          { text: 'bulletin-popover', link: '/docs/plugins/bulletin-popover' },
        ],
      },
    ],
  },
  {
    text: '版本',
    icon: 'SubVolume',
    children: [
      { text: '2.x(alpha)', link: 'https://vuepress-theme-reco.recoluan.com/' },
      {
        text: '1.x',
        link: 'https://vuepress-theme-reco.recoluan.com/views/1.x/',
      },
    ],
  },
  { text: '留言板', link: '/docs/message-board', icon: 'Chat' },
]
```

### 评论

主题内置评论插件 `@vuepress-reco/vuepress-plugin-comments`，目前支持 `Valine、Waline、Giscus`；

如果你想默认不加载评论，而只在某些页面显示评论功能，可以在 commentConfig.options 中设置 hideComments: true，并在需要展示评论的页面设置 hideComments: false。

如果仅是某篇文章不想设置开启评论功能，可以在 front-matter 设置 hideComments: true。

#### Valine

```ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    commentConfig: {
      type: 'valine',
      options: {
        appId: '...', // your appId
        appKey: '...', // your appKey
        hideComments: true, // 全局隐藏评论，默认 false
      },
    },
  }),
})
```

#### Waline

```ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    commentConfig: {
      type: 'waline',
      options: {
        serverURL: 'your serverURL',
        ...
        hideComments: true, // 全局隐藏评论，默认 false
      },
    },
  }),
})
```

#### Giscus

```ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    commentConfig: {
      type: 'giscus',
      options: {
        repo: 'reco/blog-comments',
        repoId: 'R_kgDOxxxxxx',
        category: 'Announcements',
        categoryId: 'xxxxx',
        mapping: 'title',
        ...
        hideComments: true, // 全局隐藏评论，默认 false
      },
    },
  }),
})
```

### 注册组件

主题默认将 /.vuepress/components 下面的 .vue 组件进行了全局注册。

### 加密

如果网站整体或者某篇文档具有私密性，不希望被公开，只有填入密钥登录后（关闭浏览器标签后登录失效），才能进入内容页面。

- 密码位数只能是 6 个字符
- 密码可以通过数组设置多个

1. 加密的安全性较低，请酌情使用；
2. 如果设置了加密，锚点功能将失效。

如果你的密码明文是 123456，需要将其转化为密文，也就是 e10adc3949ba59abbe56e057f20f883e，使用密文去设置密码。

网站发布后，在密码输入框输入 123456 即可进入网站，他人也无法通过代码中的密文知道你的密码，但是你一定要记住自己的密码明文。

### 外观

主题默认根据系统的外观颜色来自动改变自己的外观颜色，但是允许用户设置默认外观颜色，可选值为 dark、light。

```ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    colorMode: 'dark' // dark, light
  })
})
```

### 搜索功能

主题已经内置了简单的搜索能力，如果希望使用 Algolia，可以进行配置。

```ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
  algolia: {
    appId: 'xxx',
    apiKey: 'xxx',
    indexName: 'xxx',
    inputSelector: '### REPLACE ME ####',
    algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    debug: false // Set debug to true if you want to inspect the dropdown
  },
  })
})
```

### 自动设置分类

为了节约用户的时间成本，主题可以自动为 blogs 文件夹下的博客设置分类，也就是将该文件所在文件夹的名称设置为该文件的 frontmatter 的 categories 的值。

```ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    // 自动设置分类
    autoSetBlogCategories: true,
    // 自动将分类和标签添加至头部导航条
    autoAddCategoryToNavbar: {
      location: 1, // 默认 0
      categoryText: '分类', // 默认 categories
      tagText: '标签' // 默认 tags
    },
    // 当 autoAddCategoryToNavbar 为 true 时，则全部取默认值
    autoAddCategoryToNavbar: true
  })
})
```

### 自动设置系列

为了节约用户的时间成本，主题可以自动将 series 文件夹下的文档，按照文件夹嵌套关系生成系列的配置。

```ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    // 自动设置分类
    autoSetSeries: true,
  })
})
```

### 目录标题

通过 catalogTitle 设置文章右侧目录的标题。

```ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    catalogTitle: '自定义目录标题'
  })
})
```

### 主题基础色

如果你对主题的默认的主色不喜欢，可以通过 themeConfig.primaryColor 来自定义，主题会修改 tailwindcss 的配置：

```ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    primaryColor: '#3aa675'
  })
})
```

## Markdown扩展

### 提示

```txt
::: <type> [title]
[content]
:::
```

`type` 是必需的， `title` 和 `content` 是可选的。

支持的 `type` 有：

- tip
- warning
- danger
- details

## 其他

### 自定义样式

如果需要对主题样式进行覆盖，只需要在 `.vuepress/styles/index.css` 中书写需要覆盖的样式的即可，书写规范请参考 指南/样式。

### 内置页面

- /posts.html
- /timeline.html
- /friendship-link.html

```ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    friendshipLinks: [
      {
        title: 'vuepress-recovuepress-recovuepress-recovuepress-reco',
        logo: 'https://avatars.githubusercontent.com/u/54167020?s=200&v=4',
        link: 'https://github.com/vuepress-reco'
      }
    ]
  })
})
```
