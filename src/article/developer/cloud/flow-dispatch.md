---
title: 流量治理-限流降级
date: 2024-05-31
categories: 微服务
tags:
- Sentinel
---

## 介绍

微服务的 流量治理组件 。用于隔离远程系统、服务或者是第三方库，提高本身系统的容错性和可用性。

限流：限流是指对微服务系统中某个服务的某个接口的访问量进行限制，以避免过大的流量将服务实例击垮。其一般是通过为服务设置流量阈值，当达到限制的阈值时，可以采取一些策略进行处理，比如排队、返回错误信息等来对请求进行响应以实现对服务实例的保护。在微服务系统中，限流主要是针对服务消费者而言的。
降级：降级是指当某个服务出现异常或者被限流时，对该服务的调用进行降级处理，比如返回一个默认值，返回一个兜底数据等。在微服务系统中，降级主要是针对服务提供者而言的。

## 控制台

下载控制台UI

电脑访问github不了，可以选择国内的gitee，下载源码，通过maven 编译打包得到 sentinel-dashboard.jar 然后部署。

## 使用

依赖

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
</dependency>
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-alibaba-sentinel-gateway</artifactId>
</dependency>
```

配置

```yaml
feign:
  sentinel:
    enabled: true

spring:
  cloud:
    sentinel:
      transport:
        # 控制台地址
        dashboard: 127.0.0.1:8718
```

这样sentinel服务与控制台将会进行通信
