import { defineClientConfig } from "vuepress/client";

export default defineClientConfig({
  // 客户端增强
  enhance: ({ app, router }) => {
    router.beforeEach((to) => {
      if (typeof window !== "undefined" && typeof window._hmt !== "undefined") {
        window._hmt.push(["_trackPageview", to.fullPath]);
      }
    });
  },

  // 全局注册
  setup() {},

  // 添加或覆盖组件
  layouts: {},

  // 全局组件
  rootComponents: [
    //...
  ],
});
