---
title: 认识了解 Nginx
date: 2024-05-31
categories: 后端
tags:
- Nginx
---

## 了解概念

最开始接触Nginx是用它来做 反向代理 的，除此之外其实它还提供了 IMAP、POP3、SMTP服务（电子邮件代理服务器）。Nginx之所以被广泛使用正是因为它占用内存少而又对高并发支持好。

## 反向代理

反向代理的 使用场景 通常是我们希望对客户端隐藏服务端的内部细节。http请求从最左边的客户端经过中间反向代理最后到达最右侧的真实服务：对于客户端而言是隐藏了服务端的内部细节，它接触到的只是代理服务器，将它看成一堵墙 做到了一定的隔离性

## 负载均衡

负载均衡说白了就是我一台服务器承受不住负载，然后通过一个策略实现将负载分摊多多台服务器也就是所谓的均衡，从而实现扩展。

轮询法：按时间逐一分配到各个服务器，适合于各个服务器配置相当 且服务响应时长短，也适用于图片服务器和静态页面文件服务器
权重法：当后端服务器性能存在差异，需要配置不同的权重，实现性能更好的分配。
哈希法：指的是通过哈希算法计算IP，通过hash结果进行分配，尽可能保证一个用户端的请求能路由到同一台后端服务器。

## 动静分离

通过一定的配置实现对静态页面和动态服务的区分，访问静态页面和后端接口将会使用不同的处理方式；静态页面会直接将文件系统中某个文件夹当做根目录直接返回静态文件，动态服务则是通过nginx代理进行转发到配置中的指定服务。

## Nginx项目部署

要部署一个项目首先明确项目的结构，其次静态页面放置路径以及动态服务暴露的IP端口，是否需要配置SSL，是否需要负载均衡。上面已经将Nginx安装到了服务器上，下面就以具体项目去介绍实际部署的过程以及可能会遇到的一些问题。

将前端项目打包得到的静态文件放到指定位置 并配置到server下
查看部署好的后端项目的IP端口 并配置到server下
上传证书到指定位置 并配置到http下（可选）

### 配置

nginx.conf

```conf
location / {
  root   html/static;
  index  index.html index.htm;
  try_files $uri $uri/ /index.html;
}
location /blog {
  alias   html/front;
  index  index.html index.htm;
  try_files $uri $uri/ /index.html;
}
location /admin {
  alias   html/admin;
  index  index.html index.htm;
  try_files $uri $uri/ /index.html;
}
```

- server中只能有一个location 里面配置 root 其余请使用 alias
- try_files $uri $uri/ /index.html; 这行配置是针对vue这种项目而配置的
- 上面的blog和admin代表的是两个前端项目，在构建这两个项目的时候注意配置路径前缀`base`
