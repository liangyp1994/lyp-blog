---
title: 认证服务器的搭建
date: 2024-05-31
categories: 后端
tags:
- Auth
---
## 前言

Spring Authorization Server到底是什么？可以用来做什么？里面包含了哪些东西呢？

## 概念及用途

官方介绍如下：

提供 Oauth2.1 和 OpenID Connect 1.0 规范以及其他相关规范的实现。它建立在Spring Security之上，为构建 OpenID Connect 1.0 身份提供者和 OAuth2 授权服务器产品提供安全、轻量级和可定制的基础。

简单点理解就是 基于 Spring Framework 的开源项目，用于构建身份验证和授权服务器。它提供了一套灵活、可扩展的机制，用于管理用户身份验证和授权过程。

主要功能
身份认证（Authentication）：Spring Authorization Server 提供了认证功能，用于验证用户的身份。它支持多种常见的认证方式，如基于密码的认证、基于令牌的认证等。

令牌管理（Token Management）：Spring Authorization Server 可以生成和管理不同类型的访问令牌，如 JWT（JSON Web Token）和 Opaque Token。它提供了令牌端点，用于生成、校验和刷新令牌。

授权管理（Authorization）：Spring Authorization Server 提供了授权功能，用于确定用户是否有权限访问受保护的资源。它支持基于角色的访问控制和基于权限的访问控制，开发人员可以根据需要进行配置。

客户端管理（Client Management）：Spring Authorization Server 允许注册和管理多个客户端应用程序。每个客户端应用程序都有自己的客户端标识和密钥，用于进行安全的身份验证和授权请求。

扩展性和定制化：Spring Authorization Server 基于 Spring Framework，具有良好的可扩展性和定制化能力。开发人员可以根据需求添加自定义的认证策略、授权逻辑和令牌生成规则。

知道了 Spring Authorization Server 是什么东东，那么后面就开始看看怎么用 先上手尝一下再说！ 我是梁小道，一起加油💪吧 ，欢迎大家沟通交流~~~~

## 模块

spring-authorization-server 认证服务器 代号 A

spring-authorization-client 客户端 代号 C

spring-authorization-resource 资源服务器 代号 R

示例代码： <https://gitee.com/nuy/spring-template>

## 流程

先介绍下代码的整体逻辑关系：

第一步，用户小王 尝试访问客户端主页 /index，过滤器会发现小王的身份没有认证，会重定向到认证中心进行认证，一旦小王认证通过，认证中心会为其颁发令牌。

第二步，用户小王拿到了令牌，令牌可以让他去调用他允许访问的资源。

具体里面发生的事情当然没有这么简单，这个后续看情况是否深入讲一下，目前就先了解流程性的东西以及将实际代码能跑通。

## 代码

其实代码就是从官网拿过来的，只是自己新写的maven项目而已。后续会整合实际项目，欢迎留言！
