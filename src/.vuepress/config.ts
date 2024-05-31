import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "小道空间-Vuepress开源轻博客系统",
  description:
    "梁小道的个人空间, 小道空间是由梁小道搭建的一个干净纯粹的开源博客项目。博客基于Vuepress工具，使用了 vuepress-theme-hope 主题以简单大方的布局将内容呈现给用户。站点内容主要包含了个人的技术博客和日常的生活感悟，后续如果能吸引到更多的同志，梁小道会就一些自己擅长的领域进行相关课程的制作，内容原创不易，欢迎支持与点评。",
  head: [
    [
      "script",
      {},
      `
      window._hmt = window._hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b4d76e4f2d6edd42677c0e0c3dc3111e";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
  ],
  bundler: viteBundler(),

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
