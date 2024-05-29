import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as s,a as t}from"./app-hwiByNrW.js";const e={},o=t(`<h2 id="数组越界" tabindex="-1"><a class="header-anchor" href="#数组越界"><span>数组越界</span></a></h2><ul><li>为什么不能在循环中删除集合中的元素？ 从异常 ConcurrentModificationException 开始分析</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">checkForComodification</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>modCount <span class="token operator">!=</span> expectedModCount<span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentModificationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>modCount初始为0，expectedModCount初始等于modCount, 根据一直结果我们知道通过迭代器能避免抛出异常，说明迭代器不会修改modCount,而正常集合的删除操作会修改 ArrayList 代码如下:</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">fastRemove</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> es<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    modCount<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token keyword">int</span> newSize<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>newSize <span class="token operator">=</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> i<span class="token punctuation">)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>es<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> es<span class="token punctuation">,</span> i<span class="token punctuation">,</span> newSize <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    es<span class="token punctuation">[</span>size <span class="token operator">=</span> newSize<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>lastRet <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">checkForComodification</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>lastRet<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cursor <span class="token operator">=</span> lastRet<span class="token punctuation">;</span>
        lastRet <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        expectedModCount <span class="token operator">=</span> modCount<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IndexOutOfBoundsException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentModificationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">checkForComodification</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>modCount <span class="token operator">!=</span> expectedModCount<span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentModificationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以看到迭代器的remove()方法保证了expectedModCount和modCount是相等的。快速失败机制是当多个线程同时对集合中的内容进行修改可能会抛出越界异常，而安全失败机制则是会拷贝一份集合的内容，而后对该内容操作，但这也导致期间修改的数据无法同步，这也是多线程下必须要牺牲的。</p></blockquote><h2 id="对比几种常用的集合" tabindex="-1"><a class="header-anchor" href="#对比几种常用的集合"><span>对比几种常用的集合</span></a></h2><p>ArrayList：底层是数组，在该基础上添加了扩容机制， LinkedList：底层是双向链表，因为链表的结构需要保存前后指针所以同样的内容空间要更大</p>`,8),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","Collection-Advanced.html.vue"]]),k=JSON.parse('{"path":"/java/Java-Advanced/Collection-Advanced.html","title":"Java中的集合框架常见问题原理解析","lang":"zh-CN","frontmatter":{"title":"Java中的集合框架常见问题原理解析","article":false,"order":1,"description":"数组越界 为什么不能在循环中删除集合中的元素？ 从异常 ConcurrentModificationException 开始分析 modCount初始为0，expectedModCount初始等于modCount, 根据一直结果我们知道通过迭代器能避免抛出异常，说明迭代器不会修改modCount,而正常集合的删除操作会修改 ArrayList 代码如下...","head":[["meta",{"property":"og:url","content":"https://lianyp.fun/lyp-blog/java/Java-Advanced/Collection-Advanced.html"}],["meta",{"property":"og:site_name","content":"小道空间-Vuepress开源轻博客系统"}],["meta",{"property":"og:title","content":"Java中的集合框架常见问题原理解析"}],["meta",{"property":"og:description","content":"数组越界 为什么不能在循环中删除集合中的元素？ 从异常 ConcurrentModificationException 开始分析 modCount初始为0，expectedModCount初始等于modCount, 根据一直结果我们知道通过迭代器能避免抛出异常，说明迭代器不会修改modCount,而正常集合的删除操作会修改 ArrayList 代码如下..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-29T08:03:02.000Z"}],["meta",{"property":"article:author","content":"梁小道"}],["meta",{"property":"article:modified_time","content":"2024-05-29T08:03:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Java中的集合框架常见问题原理解析\\",\\"description\\":\\"数组越界 为什么不能在循环中删除集合中的元素？ 从异常 ConcurrentModificationException 开始分析 modCount初始为0，expectedModCount初始等于modCount, 根据一直结果我们知道通过迭代器能避免抛出异常，说明迭代器不会修改modCount,而正常集合的删除操作会修改 ArrayList 代码如下...\\"}"]]},"headers":[{"level":2,"title":"数组越界","slug":"数组越界","link":"#数组越界","children":[]},{"level":2,"title":"对比几种常用的集合","slug":"对比几种常用的集合","link":"#对比几种常用的集合","children":[]}],"git":{"createdTime":1716969782000,"updatedTime":1716969782000,"contributors":[{"name":"liangyp","email":"2267841523@qq.com","commits":1}]},"readingTime":{"minutes":1.19,"words":356},"filePathRelative":"java/Java-Advanced/Collection-Advanced.md","localizedDate":"2024年5月29日","excerpt":"<h2>数组越界</h2>\\n<ul>\\n<li>为什么不能在循环中删除集合中的元素？\\n从异常 ConcurrentModificationException 开始分析</li>\\n</ul>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">final</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">checkForComodification</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>modCount <span class=\\"token operator\\">!=</span> expectedModCount<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">throw</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ConcurrentModificationException</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre></div>","autoDesc":true}');export{r as comp,k as data};
