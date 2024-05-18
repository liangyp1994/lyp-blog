import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as i,a as s}from"./app-D5QqES8c.js";const t={},l=s(`<p>前面已经安装好了Nginx,并知道如何将vue项目代码上传到指定路径实现静态服务器，如何通过proxy实现后端接口的反向代理。本文我们将了解在Nginx中的一些高级特性，从而更加理解它的原理</p><h2 id="ngx-http-ssl-module" tabindex="-1"><a class="header-anchor" href="#ngx-http-ssl-module"><span>ngx_http_ssl_module</span></a></h2><p>通过<code>--with-http_ssl_module</code>可以编译 ssl模块，它依赖于 <code>OpenSSL</code></p><p>在安装nginx之后我们已经介绍了如果需要开启ssl，我们需要对配置做下面的修改</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>worker_processes auto;
http {

  ...
  
  server {
    listen 443 ssl;
    keepalive_timeout 70;
    
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers AES128-SHA:AES256-SHA:RC4-SHA:DES-CBC3-SHA:RC4-MD5;
    ssl_certificate     /usr/local/nginx/conf/ssl/cert.pem;
    ssl_certificate_key /usr/local/nginx/conf/ssl/cert.key;
    ssl_session_cache   shared:SSL:10m;
    ssl_session_timeout 10m;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ngx-http-v2-module" tabindex="-1"><a class="header-anchor" href="#ngx-http-v2-module"><span>ngx_http_v2_module</span></a></h2><p>同理添加参数 <code>--with-http_v2_module</code> 则会编译 <code>http2</code> 模块</p><p>配置修改如下</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>server {
    listen 443 ssl;

    http2 on;

    ssl_certificate server.crt;
    ssl_certificate_key server.key;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ngx-http-v3-module" tabindex="-1"><a class="header-anchor" href="#ngx-http-v3-module"><span>ngx_http_v3_module</span></a></h2><p>同理添加参数 <code>--with-http_v3_module</code> 则会编译 <code>http3</code> 模块</p><p>配置修改如下</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>http {
    log_format quic &#39;$remote_addr - $remote_user [$time_local] &#39;
                    &#39;&quot;$request&quot; $status $body_bytes_sent &#39;
                    &#39;&quot;$http_referer&quot; &quot;$http_user_agent&quot; &quot;$http3&quot;&#39;;

    access_log logs/access.log quic;

    server {
        # for better compatibility it&#39;s recommended
        # to use the same port for http/3 and https
        listen 8443 quic reuseport;
        listen 8443 ssl;

        ssl_certificate     certs/example.com.crt;
        ssl_certificate_key certs/example.com.key;

        location / {
            # used to advertise the availability of HTTP/3
            add_header Alt-Svc &#39;h3=&quot;:8443&quot;; ma=86400&#39;;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),d=[l];function a(c,r){return i(),n("div",null,d)}const m=e(t,[["render",a],["__file","Nginx-组成模块认识.html.vue"]]),p=JSON.parse('{"path":"/article/developer/%E6%9C%8D%E5%8A%A1%E5%99%A8/Nginx-%E7%BB%84%E6%88%90%E6%A8%A1%E5%9D%97%E8%AE%A4%E8%AF%86.html","title":"Nginx-组成模块认识","lang":"zh-CN","frontmatter":{"title":"Nginx-组成模块认识","categories":["服务器"],"description":"前面已经安装好了Nginx,并知道如何将vue项目代码上传到指定路径实现静态服务器，如何通过proxy实现后端接口的反向代理。本文我们将了解在Nginx中的一些高级特性，从而更加理解它的原理 ngx_http_ssl_module 通过--with-http_ssl_module可以编译 ssl模块，它依赖于 OpenSSL 在安装nginx之后我们已...","head":[["meta",{"property":"og:url","content":"https://lianyp.fun/article/developer/%E6%9C%8D%E5%8A%A1%E5%99%A8/Nginx-%E7%BB%84%E6%88%90%E6%A8%A1%E5%9D%97%E8%AE%A4%E8%AF%86.html"}],["meta",{"property":"og:site_name","content":"小道空间"}],["meta",{"property":"og:title","content":"Nginx-组成模块认识"}],["meta",{"property":"og:description","content":"前面已经安装好了Nginx,并知道如何将vue项目代码上传到指定路径实现静态服务器，如何通过proxy实现后端接口的反向代理。本文我们将了解在Nginx中的一些高级特性，从而更加理解它的原理 ngx_http_ssl_module 通过--with-http_ssl_module可以编译 ssl模块，它依赖于 OpenSSL 在安装nginx之后我们已..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-18T03:29:18.000Z"}],["meta",{"property":"article:author","content":"liangyp"}],["meta",{"property":"article:modified_time","content":"2024-05-18T03:29:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx-组成模块认识\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-18T03:29:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liangyp\\",\\"url\\":\\"https://lianyp.fun\\"}]}"]]},"headers":[{"level":2,"title":"ngx_http_ssl_module","slug":"ngx-http-ssl-module","link":"#ngx-http-ssl-module","children":[]},{"level":2,"title":"ngx_http_v2_module","slug":"ngx-http-v2-module","link":"#ngx-http-v2-module","children":[]},{"level":2,"title":"ngx_http_v3_module","slug":"ngx-http-v3-module","link":"#ngx-http-v3-module","children":[]}],"git":{"createdTime":1716002958000,"updatedTime":1716002958000,"contributors":[{"name":"liangyp","email":"2267841523@qq.com","commits":1}]},"readingTime":{"minutes":0.98,"words":293},"filePathRelative":"article/developer/服务器/Nginx-组成模块认识.md","localizedDate":"2024年5月18日","excerpt":"<p>前面已经安装好了Nginx,并知道如何将vue项目代码上传到指定路径实现静态服务器，如何通过proxy实现后端接口的反向代理。本文我们将了解在Nginx中的一些高级特性，从而更加理解它的原理</p>\\n<h2>ngx_http_ssl_module</h2>\\n<p>通过<code>--with-http_ssl_module</code>可以编译 ssl模块，它依赖于 <code>OpenSSL</code></p>\\n<p>在安装nginx之后我们已经介绍了如果需要开启ssl，我们需要对配置做下面的修改</p>\\n<div class=\\"language-conf\\" data-ext=\\"conf\\" data-title=\\"conf\\"><pre class=\\"language-conf\\"><code>worker_processes auto;\\nhttp {\\n\\n  ...\\n  \\n  server {\\n    listen 443 ssl;\\n    keepalive_timeout 70;\\n    \\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;\\n    ssl_ciphers AES128-SHA:AES256-SHA:RC4-SHA:DES-CBC3-SHA:RC4-MD5;\\n    ssl_certificate     /usr/local/nginx/conf/ssl/cert.pem;\\n    ssl_certificate_key /usr/local/nginx/conf/ssl/cert.key;\\n    ssl_session_cache   shared:SSL:10m;\\n    ssl_session_timeout 10m;\\n  }\\n}\\n</code></pre></div>","autoDesc":true}');export{m as comp,p as data};
