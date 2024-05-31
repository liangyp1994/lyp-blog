---
title: 认识了解 WebFlux
date: 2024-05-31
categories: 后端
tags:
- WebFlux
---

## 什么是WebFlux

异步非阻塞的WEB框架，对比之前的SpringMvc
Mvc 构建于Servlet API,使用的是同步阻塞式 I/O 模型(一个线程处理一个请求)，而WebFlux是异步IO，减少等待时间，线程可以被更好的利用，一个线程可以处理多个任务，不再是一对一

## FlowAPI

JDK9给出了一个标准reactive stream 叫FlowAPI.

Subscription 接口定义了连接发布者和订阅者的方法,主要的作用是为发布者和订阅者建立关系.

request：订阅者调用此方法请求数据；

cancel：订阅者调用这个方法来取消订阅，解除订阅者与发布者之间的关系。

Publisher 接口定义了发布者的方法；

数据的输出

Subscriber 接口定义了订阅者的方法；

可以说是事件发生的源头，无非就是请求，接受返回数据，按流程办事。

Processor<T,R> 接口定义了处理器；

处理器同时是订阅者和发布者，接口的定义也是继承了两者

背压

就是Subscriber告诉Publisher我要多少数据你给我发过来

## Reactor

Reactor是一个响应式流，它也有对应的发布者(Publisher )，Reactor的发布者用两个类来表示：

Mono(返回0或1个元素)

Flux(返回0-n个元素)

~~后面再补充其他几个概念

## 使用 WebFlux

添加依赖

```xml
<dependency>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
```
