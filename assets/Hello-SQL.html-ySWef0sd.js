import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as e}from"./app-BeGmz95A.js";const l={},t=e(`<p>高级 SQL 涉及一些复杂的查询和数据处理技术，这些技术超出了基础 SQL 查询语句所能实现的功能。</p><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h2><ol><li><p>子查询：子查询是嵌套在其他查询内部的查询语句。它可以帮助我们从一个查询结果中提取数据并将其用作另一个查询的条件或结果。子查询可以嵌套多层，用于复杂的数据筛选和处理。</p></li><li><p>连接（Join）：连接是将两个或多个表中的行通过特定的关联条件联合到一起的操作。除了基本的内连接（INNER JOIN），还有外连接（LEFT JOIN、RIGHT JOIN、FULL JOIN）等不同类型的连接。连接是在多个表之间进行数据匹配和关联的重要工具。</p></li><li><p>聚合函数：聚合函数用于对数据进行汇总和统计，如 SUM、AVG、MAX、MIN 和 COUNT。在高级 SQL 中，我们还可以使用 GROUP BY 子句来根据一个或多个列对数据进行分组，以便对每个组内的数据进行聚合操作。</p></li><li><p>窗口函数（Window Function）：窗口函数是一种高级的数据处理技术，它可以在不破坏原始查询结果的情况下对结果集进行计算和分析。常见的窗口函数包括 RANK、DENSE_RANK、ROW_NUMBER、LEAD 和 LAG，它们可以用于排序、分组和比较数据。</p></li><li><p>存储过程和触发器：存储过程是一组预编译的 SQL 语句，可以被存储在数据库中并像单个实体一样调用执行。触发器是与表相关联的一种特殊类型的存储过程，它可以在插入、更新或删除表中的数据时自动触发特定的操作。</p></li></ol><h2 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询"><span>子查询</span></a></h2><p>子查询通常用于以下几种情况：</p><ol><li><strong>WHERE 子句中的子查询</strong>：子查询可以用于 WHERE 子句来筛选数据。</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> table1 <span class="token keyword">WHERE</span> column1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> column2 <span class="token keyword">FROM</span> table2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>FROM 子句中的子查询</strong>：子查询可以作为 FROM 子句中的一部分，用来提供一个虚拟的数据源。</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> column2 <span class="token keyword">FROM</span> table1<span class="token punctuation">)</span> <span class="token keyword">AS</span> subquery<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>SELECT 语句中的子查询</strong>：子查询可以作为 SELECT 语句的一部分，用来生成一个列的值。</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> table2<span class="token punctuation">)</span> <span class="token keyword">AS</span> total_rows <span class="token keyword">FROM</span> table1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>HAVING 子句中的子查询</strong>：子查询可以用于 HAVING 子句来过滤分组后的数据。</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> table1 <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> column1 <span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>column2<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>使用子查询可以使 SQL 查询更灵活、更精确地筛选数据，并进行更复杂的操作。但需要注意的是，子查询的性能可能不如简单的联合查询，因为每次执行查询时都要执行子查询语句。因此，在设计查询时，需要权衡使用子查询的灵活性和性能之间的平衡。</p></blockquote><h2 id="连接查询" tabindex="-1"><a class="header-anchor" href="#连接查询"><span>连接查询</span></a></h2><p>在连接查询中，常见的连接方式包括 INNER JOIN（内连接）、LEFT JOIN（左外连接）、RIGHT JOIN（右外连接）和 FULL JOIN（完全外连接）等。</p><ul><li><p><strong>INNER JOIN（内连接）</strong>：INNER JOIN 会返回只有在连接条件成立的行。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> column2
<span class="token keyword">FROM</span> table1
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> table2
<span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column3 <span class="token operator">=</span> table2<span class="token punctuation">.</span>column4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>LEFT JOIN（左外连接）</strong>：LEFT JOIN 会返回左表中的所有行，以及右表中符合连接条件的行。如果右表中没有匹配的行，则会返回 NULL。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> table1<span class="token punctuation">.</span>column1<span class="token punctuation">,</span> table2<span class="token punctuation">.</span>column2
<span class="token keyword">FROM</span> table1
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> table2
<span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column3 <span class="token operator">=</span> table2<span class="token punctuation">.</span>column4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>RIGHT JOIN（右外连接）</strong>：RIGHT JOIN 会返回右表中的所有行，以及左表中符合连接条件的行。如果左表中没有匹配的行，则会返回 NULL。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> table1<span class="token punctuation">.</span>column1<span class="token punctuation">,</span> table2<span class="token punctuation">.</span>column2
<span class="token keyword">FROM</span> table1
<span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span> table2
<span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column3 <span class="token operator">=</span> table2<span class="token punctuation">.</span>column4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>FULL JOIN（全外连接）</strong>：FULL JOIN 会返回左表和右表中的所有行，无论是否有匹配的行。如果没有匹配的行，则会返回 NULL。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> table1<span class="token punctuation">.</span>column1<span class="token punctuation">,</span> table2<span class="token punctuation">.</span>column2
<span class="token keyword">FROM</span> table1
<span class="token keyword">FULL</span> <span class="token keyword">JOIN</span> table2
<span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column3 <span class="token operator">=</span> table2<span class="token punctuation">.</span>column4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="联合查询" tabindex="-1"><a class="header-anchor" href="#联合查询"><span>联合查询</span></a></h2><ul><li><p><strong>UNION</strong>: 使用 UNION 操作符可以合并两个或多个 SELECT 语句的结果集，并去除重复的行。例如：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> column1 <span class="token keyword">FROM</span> table1
<span class="token keyword">UNION</span>
<span class="token keyword">SELECT</span> column2 <span class="token keyword">FROM</span> table2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>UNION ALL</strong>: 使用 UNION ALL 操作符也可以合并两个或多个 SELECT 语句的结果集，但不去除重复的行。这意味着结果集中可能会包含重复的行。例如：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> column1 <span class="token keyword">FROM</span> table1
<span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
<span class="token keyword">SELECT</span> column2 <span class="token keyword">FROM</span> table2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>INTERSECT</strong>: 使用 INTERSECT 操作符可以找出两个 SELECT 语句的结果集的交集。例如：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> column1 <span class="token keyword">FROM</span> table1
<span class="token keyword">INTERSECT</span>
<span class="token keyword">SELECT</span> column2 <span class="token keyword">FROM</span> table2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>MINUS（或 EXCEPT）</strong>: 使用 MINUS（或 EXCEPT）操作符可以找出第一个 SELECT 语句的结果集中去除掉与第二个 SELECT 语句结果集相同部分后的剩余部分。例如：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> column1 <span class="token keyword">FROM</span> table1
MINUS
<span class="token keyword">SELECT</span> column2 <span class="token keyword">FROM</span> table2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>联合查询使得在一个查询中同时获取和比较多个结果集变得更加方便，同时可以处理不同表或者同一表不同条件下的数据。但需要注意的是，使用 UNION 进行查询可能会影响性能，尤其是当操作大量数据时，因为 UNION 操作符需要对结果集进行排序和去重操作。</p><h2 id="聚合查询和分组" tabindex="-1"><a class="header-anchor" href="#聚合查询和分组"><span>聚合查询和分组</span></a></h2><p>常见的聚合函数包括：</p><ul><li>SUM：对指定列的值进行求和。</li><li>AVG：对指定列的值进行平均值计算。</li><li>COUNT：对指定列的行数进行计数。</li><li>MAX：获取指定列的最大值。</li><li>MIN：获取指定列的最小值。</li></ul><p>以下是一些使用聚合函数的示例：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> total_salary
<span class="token keyword">FROM</span> employees<span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_age
<span class="token keyword">FROM</span> students<span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num_customers
<span class="token keyword">FROM</span> customers<span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>stock_price<span class="token punctuation">)</span> <span class="token keyword">AS</span> highest_price
<span class="token keyword">FROM</span> stocks<span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>order_date<span class="token punctuation">)</span> <span class="token keyword">AS</span> earliest_date
<span class="token keyword">FROM</span> orders<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，在进行聚合查询时，还可以结合 GROUP BY 子句来对查询结果进行分组。这样可以按照指定的列对数据进行分组，并在每个分组上应用聚合函数。</p><p>示例：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> department<span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务"><span>事务</span></a></h2><h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h2><h2 id="视图" tabindex="-1"><a class="header-anchor" href="#视图"><span>视图</span></a></h2><h2 id="存储过程" tabindex="-1"><a class="header-anchor" href="#存储过程"><span>存储过程</span></a></h2>`,32),p=[t];function o(i,c){return a(),s("div",null,p)}const u=n(l,[["render",o],["__file","Hello-SQL.html.vue"]]),k=JSON.parse('{"path":"/database/Hello-SQL.html","title":"数据库SQL","lang":"zh-CN","frontmatter":{"title":"数据库SQL","article":false,"order":3,"description":"高级 SQL 涉及一些复杂的查询和数据处理技术，这些技术超出了基础 SQL 查询语句所能实现的功能。","head":[["meta",{"property":"og:url","content":"https://lianyp.fun/lyp-blog/database/Hello-SQL.html"}],["meta",{"property":"og:site_name","content":"小道空间-Vuepress开源轻博客系统"}],["meta",{"property":"og:title","content":"数据库SQL"}],["meta",{"property":"og:description","content":"高级 SQL 涉及一些复杂的查询和数据处理技术，这些技术超出了基础 SQL 查询语句所能实现的功能。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-24T07:23:17.000Z"}],["meta",{"property":"article:author","content":"梁小道"}],["meta",{"property":"article:modified_time","content":"2024-05-24T07:23:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"数据库SQL\\",\\"description\\":\\"高级 SQL 涉及一些复杂的查询和数据处理技术，这些技术超出了基础 SQL 查询语句所能实现的功能。\\"}"]]},"headers":[{"level":2,"title":"特性","slug":"特性","link":"#特性","children":[]},{"level":2,"title":"子查询","slug":"子查询","link":"#子查询","children":[]},{"level":2,"title":"连接查询","slug":"连接查询","link":"#连接查询","children":[]},{"level":2,"title":"联合查询","slug":"联合查询","link":"#联合查询","children":[]},{"level":2,"title":"聚合查询和分组","slug":"聚合查询和分组","link":"#聚合查询和分组","children":[]},{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[]},{"level":2,"title":"索引","slug":"索引","link":"#索引","children":[]},{"level":2,"title":"视图","slug":"视图","link":"#视图","children":[]},{"level":2,"title":"存储过程","slug":"存储过程","link":"#存储过程","children":[]}],"git":{"createdTime":1716535397000,"updatedTime":1716535397000,"contributors":[{"name":"liangyp","email":"2267841523@qq.com","commits":1}]},"readingTime":{"minutes":5.18,"words":1554},"filePathRelative":"database/Hello-SQL.md","localizedDate":"2024年5月24日","excerpt":"<p>高级 SQL 涉及一些复杂的查询和数据处理技术，这些技术超出了基础 SQL 查询语句所能实现的功能。</p>\\n<h2>特性</h2>\\n<ol>\\n<li>\\n<p>子查询：子查询是嵌套在其他查询内部的查询语句。它可以帮助我们从一个查询结果中提取数据并将其用作另一个查询的条件或结果。子查询可以嵌套多层，用于复杂的数据筛选和处理。</p>\\n</li>\\n<li>\\n<p>连接（Join）：连接是将两个或多个表中的行通过特定的关联条件联合到一起的操作。除了基本的内连接（INNER JOIN），还有外连接（LEFT JOIN、RIGHT JOIN、FULL JOIN）等不同类型的连接。连接是在多个表之间进行数据匹配和关联的重要工具。</p>\\n</li>\\n<li>\\n<p>聚合函数：聚合函数用于对数据进行汇总和统计，如 SUM、AVG、MAX、MIN 和 COUNT。在高级 SQL 中，我们还可以使用 GROUP BY 子句来根据一个或多个列对数据进行分组，以便对每个组内的数据进行聚合操作。</p>\\n</li>\\n<li>\\n<p>窗口函数（Window Function）：窗口函数是一种高级的数据处理技术，它可以在不破坏原始查询结果的情况下对结果集进行计算和分析。常见的窗口函数包括 RANK、DENSE_RANK、ROW_NUMBER、LEAD 和 LAG，它们可以用于排序、分组和比较数据。</p>\\n</li>\\n<li>\\n<p>存储过程和触发器：存储过程是一组预编译的 SQL 语句，可以被存储在数据库中并像单个实体一样调用执行。触发器是与表相关联的一种特殊类型的存储过程，它可以在插入、更新或删除表中的数据时自动触发特定的操作。</p>\\n</li>\\n</ol>"}');export{u as comp,k as data};