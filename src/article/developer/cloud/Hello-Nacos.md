---
title: 服务发现与注册-Nacos
date: 2024-05-31
categories: 微服务
tags:
- Nacos
---
## 介绍

由一台注册中心和很多个微服务构成。当服务启动，会向注册中心注册服务，注册中心也会主动将服务列表反馈给各个微服务。当服务A想要调用服务B，A需要先知道B的调用地址，反向同理

微服务组件之一，提供上述三大功能。特性如下

Nacos特性
服务发现和服务健康监测，动态配置服务，动态 DNS 服务，服务及其元数据管理......

地图：

特性大图：要从功能特性，非功能特性，全面介绍我们要解的问题域的特性诉求

架构大图：通过清晰架构，让您快速进入 Nacos 世界

业务大图：利用当前特性可以支持的业务场景，及其最佳实践

生态大图：系统梳理 Nacos 和主流技术生态的关系

优势大图：展示 Nacos 核心竞争力

战略大图：要从战略到战术层面讲 Nacos 的宏观优势

使用Nacos
Nacos是一个CS架构，这里将要介绍关于Server端的安装使用

预备环境
nacos依赖jdk环境，作为一个Java开发，这就不介绍了，不清楚的请百度。

## 源码安装

```bash
git clone <https://github.com/alibaba/nacos.git>
cd nacos/
mvn -Prelease-nacos -Dmaven.test.skip=true clean install -U  
ls -al distribution/target/
​
// change the $version to your actual path
cd distribution/target/nacos-server-$version/nacos/bin
```

## 压缩包安装

直接在 <https://github.com/alibaba/nacos/releases> 上下载最新稳定版

```bash
unzip nacos-server-$version.zip
cd nacos/bin
```

### 修改配置文件

修改conf目录下的application.properties文件。

设置其中的nacos.core.auth.plugin.nacos.token.secret.key值，详情可查看鉴权-自定义密钥.

### 单机启动

```bash
./startup.cmd -m standalone
```

### 关闭应用

```bash
./shutdown.cmd
```

## 服务应用

### 依赖

```xml
<dependency>
   <groupId>com.alibaba.cloud</groupId>
   <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
   <version>${latest.version}</version>
</dependency>
<dependency>
   <groupId>com.alibaba.cloud</groupId>
   <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
   <version>${latest.version}</version>
</dependency>
```

### 配置自动更新

@RefreshScope

### 配置服务端

```properties
server.port=8070
spring.application.name=service-provider

spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848
```

```text
spring.cloud.nacos.config.server-addr=127.0.0.1:8848
​
spring.application.name=example
其中 spring.application.name 会作为 dataId的构成之一

${prefix}-${spring.profiles.active}.${file-extension}

```

## 开启发现

@EnableDiscoveryClient
