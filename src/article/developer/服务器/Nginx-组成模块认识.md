---
title: Nginx-组成模块认识
date: 2024/05/03
categories:
- 服务器
---

前面已经安装好了Nginx,并知道如何将vue项目代码上传到指定路径实现静态服务器，如何通过proxy实现后端接口的反向代理。本文我们将了解在Nginx中的一些高级特性，从而更加理解它的原理

## ngx_http_ssl_module

通过`--with-http_ssl_module`可以编译 ssl模块，它依赖于 `OpenSSL`

在安装nginx之后我们已经介绍了如果需要开启ssl，我们需要对配置做下面的修改

```conf
worker_processes auto;
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
```

## ngx_http_v2_module

同理添加参数 `--with-http_v2_module` 则会编译 `http2` 模块

配置修改如下

```conf
server {
    listen 443 ssl;

    http2 on;

    ssl_certificate server.crt;
    ssl_certificate_key server.key;
}
```

## ngx_http_v3_module

同理添加参数 `--with-http_v3_module` 则会编译 `http3` 模块

配置修改如下

```conf
http {
    log_format quic '$remote_addr - $remote_user [$time_local] '
                    '"$request" $status $body_bytes_sent '
                    '"$http_referer" "$http_user_agent" "$http3"';

    access_log logs/access.log quic;

    server {
        # for better compatibility it's recommended
        # to use the same port for http/3 and https
        listen 8443 quic reuseport;
        listen 8443 ssl;

        ssl_certificate     certs/example.com.crt;
        ssl_certificate_key certs/example.com.key;

        location / {
            # used to advertise the availability of HTTP/3
            add_header Alt-Svc 'h3=":8443"; ma=86400';
        }
    }
}
```
