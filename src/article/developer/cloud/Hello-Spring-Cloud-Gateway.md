---
title: 微服务网关
date: 2024-05-31
categories: 微服务
tags:
- Gateway
---

## 介绍

作为微服务的统一入口，可能还会涉及 认证，监控，负载均衡，限流等功能

## 依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
```

## 配置

```yaml
spring:
  cloud:
   gateway:
     routes:
         # 路由的id，没有固定规则但是要求唯一
       - id: core-service
         # 匹配后提供服务的路由地址  
         uri: http://localhost:8008
         # 断言，路径匹配的进行路由
         predicates:
           - Path=/core/**

       - id: iot-service
         uri: http://localhost:8009
         predicates:
           - Path=/iot/**
```

定义基本路由配置后，验证
