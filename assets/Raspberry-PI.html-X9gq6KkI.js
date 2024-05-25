import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,a as p}from"./app-BeGmz95A.js";const i={},n=p('<p>网上大多介绍都是安装官方镜像，我还是来点不一样的吧，后面肯定就能遇到一些阻碍。</p><h2 id="安装镜像" tabindex="-1"><a class="header-anchor" href="#安装镜像"><span>安装镜像</span></a></h2><p>到Ubuntu官网去下载镜像，这里选择的是 <code>ubuntu-22.04.2-desktop-amd64</code> 。 然后使用烧录工具，很多文章这时会让我们去下载各种工具，其实并不需要，我们只要去树莓派官网下载官方烧录工具即可。 <img src="https://lianyp.fun/picture/open-admin-pro/picture/article/image/b12ac09a-812a-42f0-8b45-217041b7e5bf.png" alt="" loading="lazy"></p><p>下载好烧录工具，操作也很简单，就三步动作</p><ol><li>选择PI的版本</li><li>选择要烧录的系统</li><li>选择烧录到哪个U盘</li></ol><p>无非就是下一步 下一步而已，这里记录了过程中的一些截图作为参考： 主页面 <img src="https://lianyp.fun/picture/open-admin-pro/picture/article/image/8d465d09-8218-45bf-b5fa-cee610208d85.png" alt="主页面" loading="lazy"> 选择PI-PI4.0 <img src="https://lianyp.fun/picture/open-admin-pro/picture/article/image/ffcb66ec-9457-48af-828b-903fd23c46f3.png" alt="选择PI" loading="lazy"> 选择操作系统-自己选择镜像 <img src="https://lianyp.fun/picture/open-admin-pro/picture/article/image/0e7908b2-8284-459d-91ea-f1f8911637f6.png" alt="选择操作系统" loading="lazy"> 选择SD卡 <img src="https://lianyp.fun/picture/open-admin-pro/picture/article/image/2d4fbee7-b538-4db9-8d7c-128efbccd47c.png" alt="选择SD卡" loading="lazy"> 配置用户密码，wifi连接 <img src="https://lianyp.fun/picture/open-admin-pro/picture/article/image/aaa72da1-8a63-45ad-ad28-f2038c29d4c9.png" alt="基础配置" loading="lazy"> 开始烧录到SD卡 <img src="https://lianyp.fun/picture/open-admin-pro/picture/article/image/a929acde-5743-4769-b905-ec196ad37f23.png" alt="烧录系统" loading="lazy"></p><p><strong>需要注意的地方</strong></p><ol><li>文件系统不要NTFS,我选择的是FAT32,也是官方推荐的 <img src="https://lianyp.fun/picture/open-admin-pro/picture/article/image/28786c6c-b529-4542-aab4-b1d2a498db33.png" alt="FAT32" loading="lazy"></li></ol><h2 id="启动系统" tabindex="-1"><a class="header-anchor" href="#启动系统"><span>启动系统</span></a></h2><p>将上面烧录成功的SD卡插入树莓派后开启电源等待指示灯亮起</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>',11),r=[n];function c(l,o){return a(),t("div",null,r)}const s=e(i,[["render",c],["__file","Raspberry-PI.html.vue"]]),m=JSON.parse('{"path":"/article/others/Raspberry-PI.html","title":"点亮树莓派","lang":"zh-CN","frontmatter":{"title":"点亮树莓派","date":"2024-05-10T00:00:00.000Z","categories":"其他","description":"网上大多介绍都是安装官方镜像，我还是来点不一样的吧，后面肯定就能遇到一些阻碍。 安装镜像 到Ubuntu官网去下载镜像，这里选择的是 ubuntu-22.04.2-desktop-amd64 。 然后使用烧录工具，很多文章这时会让我们去下载各种工具，其实并不需要，我们只要去树莓派官网下载官方烧录工具即可。 下载好烧录工具，操作也很简单，就三步动作 选择...","head":[["meta",{"property":"og:url","content":"https://lianyp.fun/lyp-blog/article/others/Raspberry-PI.html"}],["meta",{"property":"og:site_name","content":"小道空间-Vuepress开源轻博客系统"}],["meta",{"property":"og:title","content":"点亮树莓派"}],["meta",{"property":"og:description","content":"网上大多介绍都是安装官方镜像，我还是来点不一样的吧，后面肯定就能遇到一些阻碍。 安装镜像 到Ubuntu官网去下载镜像，这里选择的是 ubuntu-22.04.2-desktop-amd64 。 然后使用烧录工具，很多文章这时会让我们去下载各种工具，其实并不需要，我们只要去树莓派官网下载官方烧录工具即可。 下载好烧录工具，操作也很简单，就三步动作 选择..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://lianyp.fun/picture/open-admin-pro/picture/article/image/b12ac09a-812a-42f0-8b45-217041b7e5bf.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-25T01:28:19.000Z"}],["meta",{"property":"article:author","content":"梁小道"}],["meta",{"property":"article:published_time","content":"2024-05-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-25T01:28:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"点亮树莓派\\",\\"image\\":[\\"https://lianyp.fun/picture/open-admin-pro/picture/article/image/b12ac09a-812a-42f0-8b45-217041b7e5bf.png\\",\\"https://lianyp.fun/picture/open-admin-pro/picture/article/image/8d465d09-8218-45bf-b5fa-cee610208d85.png\\",\\"https://lianyp.fun/picture/open-admin-pro/picture/article/image/ffcb66ec-9457-48af-828b-903fd23c46f3.png\\",\\"https://lianyp.fun/picture/open-admin-pro/picture/article/image/0e7908b2-8284-459d-91ea-f1f8911637f6.png\\",\\"https://lianyp.fun/picture/open-admin-pro/picture/article/image/2d4fbee7-b538-4db9-8d7c-128efbccd47c.png\\",\\"https://lianyp.fun/picture/open-admin-pro/picture/article/image/aaa72da1-8a63-45ad-ad28-f2038c29d4c9.png\\",\\"https://lianyp.fun/picture/open-admin-pro/picture/article/image/a929acde-5743-4769-b905-ec196ad37f23.png\\",\\"https://lianyp.fun/picture/open-admin-pro/picture/article/image/28786c6c-b529-4542-aab4-b1d2a498db33.png\\"],\\"datePublished\\":\\"2024-05-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-25T01:28:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"梁小道\\",\\"url\\":\\"https://lianyp.fun\\"}]}"]]},"headers":[{"level":2,"title":"安装镜像","slug":"安装镜像","link":"#安装镜像","children":[]},{"level":2,"title":"启动系统","slug":"启动系统","link":"#启动系统","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"git":{"createdTime":1716002958000,"updatedTime":1716600499000,"contributors":[{"name":"liangyp","email":"2267841523@qq.com","commits":2}]},"readingTime":{"minutes":1.28,"words":383},"filePathRelative":"article/others/Raspberry-PI.md","localizedDate":"2024年5月10日","excerpt":"<p>网上大多介绍都是安装官方镜像，我还是来点不一样的吧，后面肯定就能遇到一些阻碍。</p>\\n<h2>安装镜像</h2>\\n<p>到Ubuntu官网去下载镜像，这里选择的是 <code>ubuntu-22.04.2-desktop-amd64</code> 。\\n然后使用烧录工具，很多文章这时会让我们去下载各种工具，其实并不需要，我们只要去树莓派官网下载官方烧录工具即可。\\n<img src=\\"https://lianyp.fun/picture/open-admin-pro/picture/article/image/b12ac09a-812a-42f0-8b45-217041b7e5bf.png\\" alt=\\"\\" loading=\\"lazy\\"></p>","autoDesc":true}');export{s as comp,m as data};
