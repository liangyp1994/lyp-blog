import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as t,a as i}from"./app-DheXtV5N.js";const n={},r=i(`<figure><img src="https://lianyp.fun/picture/open-admin-pro/picture/article/image/9801efe1-862e-4581-81f9-32173f1835e7.png" alt="数据库系统" tabindex="0" loading="lazy"><figcaption>数据库系统</figcaption></figure><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>将 数据库（Database）看作一个容器，我们可以通过它存储 数据（Data），为了更好的维护或使用这些数据，进而有了 数据库管理系统 （DBMS）。而数据库管理系统，它是位于操作系统和用户之间的一个软件系统，因为数据库管理系统有多种实现 如 Mysql。 另外为了方便操作数据库管理系统 又有了一些UI产品 例如 Dberver。专门负责数据库的一个职业叫数据库管理员（DBA），他是专门负责管理我们的数据库系统，这里说的数据库系统是由 数据库 数据库管理系统 DBA 构成的整体</p><blockquote><p>数据库管理系统包含了 数据定义，数据操纵，数据库运行管理，数据库的建立和维护，数据通信，数据组织，存储和管理。</p></blockquote><h2 id="概念定义" tabindex="-1"><a class="header-anchor" href="#概念定义"><span>概念定义</span></a></h2><p>元组：一张表，表中的每行就是一个元组，每列就是一个属性，在二维表里，元组也成为行。</p><p>码：能唯一标识实体的属性，对应表中的列</p><p>候选码：若关系中的某一属性或属性组的值能唯一标识一个元组，而其任何、子集都不能再标识，则称为候选码。如学生的学号能唯一标识，姓名+班级组合后能标识。那么他们就都是候选码</p><p>主码：也叫主键。从候选码中选择出来的，一个实体集里只有一个主码，但可以有多个候选码</p><p>外码：也叫外键，如一个关系的一个属性是另一个关系中的主码则这个属性为外键</p><p>主属性：候选码中出现过的属性被称为主属性。</p><p>非主属性：不包含在任何一个候选码中的属性被称为非主属性。</p><h2 id="er图" tabindex="-1"><a class="header-anchor" href="#er图"><span>ER图</span></a></h2><p>实体联系图。提供了实体类型、属性和联系的方法。</p><p>实体-矩形</p><p>属性-椭圆形</p><p>联系-菱形</p><h2 id="数据库范式" tabindex="-1"><a class="header-anchor" href="#数据库范式"><span>数据库范式</span></a></h2><p>第一范式：属性不可再分</p><p>第二范式：在满足第一范式的基础上，消除非主属性对码的部分函数依赖（讲人话就是有一个主键，其他列都依赖于主键）</p><p>第三范式：满足第二范式的基础上，消除了非主属性对码的传递以来（讲人话的话就是数据冗余，有些属性应该放到其他表里去）</p><p><strong>概念解释：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>函数依赖：在一个表中，属性X的值确定的情况下，必定能确定属性Y的值，就说Y函数依赖于X， 写作 X → Y ；学生学号（唯一）→学生的姓名

部分函数依赖：在一个表中，如果 X → Y 的同时存在X的一个真子集X0 使得 X0 → Y ，则称 Y部分依赖于X（试想X0作为子集都可以使得Y依赖于X0，那作为更大的X当然就是 Y部分依赖于X了） ；学号（唯一）和身份证号（唯一）都能推出学生的姓名

完全函数依赖： ；学号加上班级才能推出学生的姓名，这时姓名完全依赖于学号和班级

码：能唯一标识实体的属性

实体：对现实对象的抽象，实体会有自己的属性

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库存储过程" tabindex="-1"><a class="header-anchor" href="#数据库存储过程"><span>数据库存储过程</span></a></h2><p>将存储过程看成一些sql的集合，通过编写存储过程方便下一次使用，一旦调试完成通过后能稳定运行。另外它是预编译过的，比单纯的sql语句执行更快。</p>`,25),p=[r];function l(s,c){return t(),a("div",null,p)}const m=e(n,[["render",l],["__file","Database-Guide.html.vue"]]),h=JSON.parse('{"path":"/article/developer/database/Database-Guide.html","title":"数据库理论知识","lang":"zh-CN","frontmatter":{"title":"数据库理论知识","date":"2024-05-05T00:00:00.000Z","categories":["数据库"],"description":"数据库系统数据库系统 前言 将 数据库（Database）看作一个容器，我们可以通过它存储 数据（Data），为了更好的维护或使用这些数据，进而有了 数据库管理系统 （DBMS）。而数据库管理系统，它是位于操作系统和用户之间的一个软件系统，因为数据库管理系统有多种实现 如 Mysql。 另外为了方便操作数据库管理系统 又有了一些UI产品 例如 Dber...","head":[["meta",{"property":"og:url","content":"https://lianyp.fun/article/developer/database/Database-Guide.html"}],["meta",{"property":"og:site_name","content":"小道空间-Vuepress开源轻博客系统"}],["meta",{"property":"og:title","content":"数据库理论知识"}],["meta",{"property":"og:description","content":"数据库系统数据库系统 前言 将 数据库（Database）看作一个容器，我们可以通过它存储 数据（Data），为了更好的维护或使用这些数据，进而有了 数据库管理系统 （DBMS）。而数据库管理系统，它是位于操作系统和用户之间的一个软件系统，因为数据库管理系统有多种实现 如 Mysql。 另外为了方便操作数据库管理系统 又有了一些UI产品 例如 Dber..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://lianyp.fun/picture/open-admin-pro/picture/article/image/9801efe1-862e-4581-81f9-32173f1835e7.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-20T09:04:18.000Z"}],["meta",{"property":"article:author","content":"梁小道"}],["meta",{"property":"article:published_time","content":"2024-05-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-20T09:04:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据库理论知识\\",\\"image\\":[\\"https://lianyp.fun/picture/open-admin-pro/picture/article/image/9801efe1-862e-4581-81f9-32173f1835e7.png\\"],\\"datePublished\\":\\"2024-05-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-20T09:04:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"梁小道\\",\\"url\\":\\"https://lianyp.fun\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"概念定义","slug":"概念定义","link":"#概念定义","children":[]},{"level":2,"title":"ER图","slug":"er图","link":"#er图","children":[]},{"level":2,"title":"数据库范式","slug":"数据库范式","link":"#数据库范式","children":[]},{"level":2,"title":"数据库存储过程","slug":"数据库存储过程","link":"#数据库存储过程","children":[]}],"git":{"createdTime":1716002958000,"updatedTime":1716195858000,"contributors":[{"name":"liangyp","email":"2267841523@qq.com","commits":1}]},"readingTime":{"minutes":3.16,"words":949},"filePathRelative":"article/developer/database/Database-Guide.md","localizedDate":"2024年5月5日","excerpt":"<figure><img src=\\"https://lianyp.fun/picture/open-admin-pro/picture/article/image/9801efe1-862e-4581-81f9-32173f1835e7.png\\" alt=\\"数据库系统\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>数据库系统</figcaption></figure>\\n<h2>前言</h2>\\n<p>将 数据库（Database）看作一个容器，我们可以通过它存储 数据（Data），为了更好的维护或使用这些数据，进而有了 数据库管理系统 （DBMS）。而数据库管理系统，它是位于操作系统和用户之间的一个软件系统，因为数据库管理系统有多种实现 如 Mysql。 另外为了方便操作数据库管理系统 又有了一些UI产品 例如 Dberver。专门负责数据库的一个职业叫数据库管理员（DBA），他是专门负责管理我们的数据库系统，这里说的数据库系统是由 数据库 数据库管理系统 DBA 构成的整体</p>","autoDesc":true}');export{m as comp,h as data};