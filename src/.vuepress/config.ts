import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "小道空间",
  description: "梁小道的个人空间",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
