import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,a as l}from"./app-DheXtV5N.js";const i={},n=l(`<h2 id="什么是seo" tabindex="-1"><a class="header-anchor" href="#什么是seo"><span>什么是SEO</span></a></h2><p>记得之前听到两个同事在讨论SEO的时候，我问了一句 &quot;SEO是什么呀？&quot; 当时他们都表示很惊讶，作为一名后端开发人员我居然不知道SEO这个东西是啥！~~~~</p><p>SEO（搜索引擎优化 英文全名Search Engine Optimization，简称SEO）它是一项深度优化网站的战略，包括但不限于 关键词优化，技术调整，内容改进。核心是提高网站在搜索引擎中的排名，从而吸引更多有针对性的访问者。</p><h2 id="如何优化" tabindex="-1"><a class="header-anchor" href="#如何优化"><span>如何优化</span></a></h2><p>我们通过了解搜索引擎的自然排名的算法逻辑，从而进行一些操作以提高网站的权重。优化的思路主要分为内部和外部，内部指的是我们要提高自己内容的质量，而外部则是提高文章内容在对外的曝光度，这里的曝光可以通过多种手段实现。</p><blockquote><p>需要提醒各位的是：要做好SEO不是一朝一夕，而是一个长线工作，所以不要想着看完这篇文章，然后就可以一次性解决网站的排名问题。</p></blockquote><h3 id="tkd" tabindex="-1"><a class="header-anchor" href="#tkd"><span>TKD</span></a></h3><p>相信看到这篇文章你必然已经对html有了解了。那么一个网页的head中的title, keywords, description就是优化的一个重点。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;title&gt;文章 | 小道空间-Vuepress开源轻博客系统&lt;/title&gt;
&lt;meta name=&quot;keywords&quot; content=&quot;掘金,稀土,Vue.js,前端面试题,Kotlin,ReactNative,Python&quot;&gt;
&lt;meta name=&quot;description&quot; content=&quot;梁小道的个人空间,小道空间是由梁小道搭建的一个干净纯粹的开源轻博客，基于Vuepress，以最简单的布局呈现给用户，内容完全原创，欢迎点评。&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="meta标签" tabindex="-1"><a class="header-anchor" href="#meta标签"><span>Meta标签</span></a></h4><p>格式如上所示，有name+content构成</p><p>其中name可以是 <code>keywords|description|author|Robots</code></p><blockquote><p>其中Roboots支持 all,none,index,follow,noindex,nofollow</p></blockquote><h4 id="网站关键词" tabindex="-1"><a class="header-anchor" href="#网站关键词"><span>网站关键词</span></a></h4><p>由于某些原因（具体原因自行百度），主流的搜索引擎都降低了 <code>keywords</code>的权重。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>百度：直接放弃了&lt;keywords&gt;标签的参考价值

谷歌：不影响排名，而只在内容相关性以及反向链接有所影响

必应：也就必应对&lt;keywords&gt;标签还有一定的排名影响
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽说如此，但我的站点我做主，我就是要为页面赋予一些关键词。其实在之前还有专门教人怎么写关键词，可能正因如此，所以造成关键词的滥用。</p><blockquote><p>注意点：</p><ul><li><p>keywords的数量最好控制在5个以内，尽量避免关键词堆叠，并不是越多越好</p></li><li><p>合理选择长尾关键词，长尾关键词是为了精准搜索</p></li><li><p>避免使用过于专业的词汇，因为搜索引擎面向的是大众</p></li></ul></blockquote><h4 id="网站描述" tabindex="-1"><a class="header-anchor" href="#网站描述"><span>网站描述</span></a></h4><blockquote><p>注意点</p><ul><li><p>长度最好控制在 120~200个字符</p></li><li><p>描述要让用户知道可以从网站得到什么</p></li><li><p>合理使用一些话术 如 了解更多，立即获取，免费试用等</p></li><li><p>通过描述包含页面的核心关键字</p></li><li><p>最好是每个页面都有自己的描述</p></li></ul></blockquote><h4 id="og协议" tabindex="-1"><a class="header-anchor" href="#og协议"><span>OG协议</span></a></h4><p>OG是属于Meta标签中的一种，格式如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;meta property=&quot;og:title&quot; content=&quot;文章&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>OG协议是为了让分享到社交网络的内容可以被有效的抓取，</p><p>关键词的密度：每个页面建议1~4个，</p><ul><li><p>核心关键词</p><ul><li><p>首页标题：相当于网站的名片，避免冗长 \`\`</p></li><li><p>首页关键词：告诉搜索引擎网站与什么相关 \`\`</p></li><li><p>首页描述：搜索引擎会将这个描述展示在搜索结果中\`\`</p></li><li><p>作者：站长的名字</p></li></ul></li><li><p>次级关键词</p><ul><li>导航栏首页：</li></ul></li><li><p>长尾关键词：更具体 更明确 热度更低</p></li></ul><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>小道空间,梁小道,轻博客,开源博客,博客系统,Vuepress开源
小道空间-Vuepress开源轻博客系统
小道空间是由梁小道搭建的一个干净纯粹的开源轻博客，基于Vuepress，以最简单的布局呈现给用户，内容完全原创，欢迎点评。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网站的质量" tabindex="-1"><a class="header-anchor" href="#网站的质量"><span>网站的质量</span></a></h3><ul><li><p>页面的链接层级：不要太深的层级，因为爬虫通常深度不会高于两层</p></li><li><p>网站的响应速度：其实就是对于用户体验的提升</p></li><li><p>注意为了保证内容被爬取，应尽量减少通过js去加载，具体你可以了解下爬虫的工作原理</p></li><li><p>同理，iFrame也尽可能别用</p></li><li><p>移动端支持</p></li><li><p>保证网站内容的质量：坚持原创，不要为了产生更多的内容而忘记自己真正要的东西。</p></li><li><p>核心图片添加alt标签，防止链接失效影响体验</p></li></ul><h3 id="站点收录提交" tabindex="-1"><a class="header-anchor" href="#站点收录提交"><span>站点收录提交</span></a></h3><p><a href="https://ziyuan.baidu.com/dashboard/index?site=https://www.lianyp.fun/" target="_blank" rel="noopener noreferrer">百度站长工具</a></p><p><a href="https://www.bing.com/webmasters/home?siteUrl=https://lianyp.fun/" target="_blank" rel="noopener noreferrer">必应网站管理员工具</a></p><h3 id="网站地图" tabindex="-1"><a class="header-anchor" href="#网站地图"><span>网站地图</span></a></h3><p>网站地图其实就是一份页面链接的清单，让爬虫更快的知道你的站点中涵盖的所有链接。</p><p><a href="https://lianyp.fun/sitemap.xml" target="_blank" rel="noopener noreferrer">https://lianyp.fun/sitemap.xml</a></p><h3 id="爬虫访问" tabindex="-1"><a class="header-anchor" href="#爬虫访问"><span>爬虫访问</span></a></h3><p>robots文件：告知爬虫那部分数据可以爬取。</p><p><a href="https://lianyp.fun/robots.txt" target="_blank" rel="noopener noreferrer">https://lianyp.fun/robots.txt</a></p><h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接"><span>链接</span></a></h3><p>内链：自己网站的一个页面指向另一个页面，使得网页之间形成了网状的结构</p><p>外链：在外部站点添加本站的链接，从而带来流量</p><blockquote><p>添加适当的外部链接，提高网站的权威性，但注意不可过量，应该保持一个持续增加的趋势。</p></blockquote><p>在添加外链的时候注意  a 标签中对 <code>nofollow</code> 和 <code>external</code> 属性</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>rel=nofollow 该属性会告知搜索引擎忽略这个链接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>用来屏蔽一些垃圾链接，比如用户留下的一些外链，可能与本站的价值取向无关</p></li><li><p>外链不稳定，僵尸网页等</p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>rel=external 该属性代表的是一个外链
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;link rel=&quot;canonical&quot; href=&quot;href=&quot;https://juejin.cn&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多个URL链接指向同样的内容，造成搜索引擎重复收录的问题</p><h3 id="持续改进" tabindex="-1"><a class="header-anchor" href="#持续改进"><span>持续改进</span></a></h3><p>监测关键指标如流量、排名、转化率，进行定期的数据分析和战略调整，以持续改进SEO绩效。Google Search Console是Google提供的免费监测工具，Google Analytics是一种全面的网站分析工具。</p>`,51),r=[n];function o(p,s){return a(),t("div",null,r)}const u=e(i,[["render",o],["__file","Up-Your-Site-Seo.html.vue"]]),h=JSON.parse('{"path":"/article/developer/frontend/Up-Your-Site-Seo.html","title":"提高站点的SEO","lang":"zh-CN","frontmatter":{"icon":"address-card","title":"提高站点的SEO","date":"2024-05-20T00:00:00.000Z","categories":"前端","head":[["meta",{"name":"keywords","content":"小道空间,梁小道,轻博客,开源博客,博客系统,vuepress-theme-hope 主题"}],["meta",{"property":"og:url","content":"https://lianyp.fun/article/developer/frontend/Up-Your-Site-Seo.html"}],["meta",{"property":"og:site_name","content":"小道空间-Vuepress开源轻博客系统"}],["meta",{"property":"og:title","content":"提高站点的SEO"}],["meta",{"property":"og:description","content":"什么是SEO 记得之前听到两个同事在讨论SEO的时候，我问了一句 \\"SEO是什么呀？\\" 当时他们都表示很惊讶，作为一名后端开发人员我居然不知道SEO这个东西是啥！~~~~ SEO（搜索引擎优化 英文全名Search Engine Optimization，简称SEO）它是一项深度优化网站的战略，包括但不限于 关键词优化，技术调整，内容改进。核心是提高网..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-20T09:04:18.000Z"}],["meta",{"property":"article:author","content":"梁小道"}],["meta",{"property":"article:published_time","content":"2024-05-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-20T09:04:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"提高站点的SEO\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-20T09:04:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"梁小道\\",\\"url\\":\\"https://lianyp.fun\\"}]}"]],"description":"什么是SEO 记得之前听到两个同事在讨论SEO的时候，我问了一句 \\"SEO是什么呀？\\" 当时他们都表示很惊讶，作为一名后端开发人员我居然不知道SEO这个东西是啥！~~~~ SEO（搜索引擎优化 英文全名Search Engine Optimization，简称SEO）它是一项深度优化网站的战略，包括但不限于 关键词优化，技术调整，内容改进。核心是提高网..."},"headers":[{"level":2,"title":"什么是SEO","slug":"什么是seo","link":"#什么是seo","children":[]},{"level":2,"title":"如何优化","slug":"如何优化","link":"#如何优化","children":[{"level":3,"title":"TKD","slug":"tkd","link":"#tkd","children":[]},{"level":3,"title":"网站的质量","slug":"网站的质量","link":"#网站的质量","children":[]},{"level":3,"title":"站点收录提交","slug":"站点收录提交","link":"#站点收录提交","children":[]},{"level":3,"title":"网站地图","slug":"网站地图","link":"#网站地图","children":[]},{"level":3,"title":"爬虫访问","slug":"爬虫访问","link":"#爬虫访问","children":[]},{"level":3,"title":"链接","slug":"链接","link":"#链接","children":[]},{"level":3,"title":"持续改进","slug":"持续改进","link":"#持续改进","children":[]}]}],"git":{"createdTime":1716195858000,"updatedTime":1716195858000,"contributors":[{"name":"liangyp","email":"2267841523@qq.com","commits":1}]},"readingTime":{"minutes":5.39,"words":1616},"filePathRelative":"article/developer/frontend/Up-Your-Site-Seo.md","localizedDate":"2024年5月20日","excerpt":"<h2>什么是SEO</h2>\\n<p>记得之前听到两个同事在讨论SEO的时候，我问了一句 \\"SEO是什么呀？\\" 当时他们都表示很惊讶，作为一名后端开发人员我居然不知道SEO这个东西是啥！~~~~</p>\\n<p>SEO（搜索引擎优化 英文全名Search Engine Optimization，简称SEO）它是一项深度优化网站的战略，包括但不限于 关键词优化，技术调整，内容改进。核心是提高网站在搜索引擎中的排名，从而吸引更多有针对性的访问者。</p>\\n<h2>如何优化</h2>\\n<p>我们通过了解搜索引擎的自然排名的算法逻辑，从而进行一些操作以提高网站的权重。优化的思路主要分为内部和外部，内部指的是我们要提高自己内容的质量，而外部则是提高文章内容在对外的曝光度，这里的曝光可以通过多种手段实现。</p>","autoDesc":true}');export{u as comp,h as data};
