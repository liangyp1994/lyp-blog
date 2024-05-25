import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://lianyp.fun",
  author: {
    name: "梁小道",
    url: "https://lianyp.fun",
  },
  iconAssets: "fontawesome-with-brands",
  logo: "/logo.png",
  repo: "liangyp1994/lyp-blog",
  docsDir: "src",
  // 纯净模式
  pure: true,
  // 导航栏
  navbar,
  // 侧边栏
  sidebar,
  displayFooter: true,
  // 博客相关
  blog: {
    description: "简单而朴实的一名程序员",
    intro: "/introduce.html",
    articlePerPage: 5,
    medias: {
      GitHub: "https://github.com/liangyp1994",
      BiliBili: "https://space.bilibili.com/393713804",
      Gitee: "https://gitee.com/nuy",
      Qzone: "https://2267841523.qzone.qq.com/",
      Zhihu: "https://www.zhihu.com/people/java-97-78-81",
    },
  },
  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },
  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,
  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    comment: {
      provider: "Giscus",
      repo: "liangyp1994/lyp-blog", //远程仓库
      repoId: "R_kgDOL8TUAw", //对应自己的仓库Id
      category: "Announcements",
      categoryId: "DIC_kwDOL8TUA84CfbIU", //对应自己的分类Id
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },
  },
});
