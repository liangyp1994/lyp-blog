---
title: Spring基础
date: 2024-05-31
categories: 后端
tags:
- Spring
---

记得我刚刚学习Spring的时候，直接上来就是怎么安装使用，根本没有了解它是什么，为什么会有这个框架。

## 什么是Spring框架？

Spring是一款开源的Java开发框架，为了提高开发人员的开发效率（确实，跟病毒一样有传染性）。

它的核心就是IOC和AOP，另外还可以方便的完成数据库访问，第三方组件的集成。它的目标就是降低门槛，提高开发效率。

## 各个模块之间的依赖关系

Spring 各个模块的依赖关系

Core, Beans, Aop, Context, Tx, Jdbc, Support, Web, WebSocket, WebMvc, Orm, WebFlex, Aspects

### Core Container

Spring框架的核心模块，主要提供IOC功能的支持，其他模块的基础。

spring-core: Spring框架的核心 工具类 相关基础对象
spring-beans: 提供了Bean创建，配置和管理等等功能的支持
spring-context: 如国际化，资源加载等等功能的支持
spring-expression: SpEL的支持，spring的表达式语言，也算是一个基础支撑

### Aop

spring-aspects: 为AspectJ的集成提供了支持
spring-aop: 面向切面的支持
spring-instrument: 提供了为JVM添加agent的功能支持

### Data Access/Integration

spring-jdbc: 对数据库访问的支持，不同数据库操作的API都相互独立
spring-tx: 提供对事务的支持
spring-orm: 对ORM框架的支持 如Hibernate ， Mybatis
spring-oxm: 对象到XML的映射
spring-jms: 消息服务

### Spring Web

spring-web: 对web功能的基础支持
spring-webmvc: mvc架构的实现支持
spring-websocket
spring-webflex

### Message

Spring 4.x开始新添加的模块，主要负责Spring框架基础的报文传送应用

### Spring Test

测试，单元测试， Mock对象

## Spring中用到的设计模式

工厂设计模式
代理设计模式
单例模式
模版模式
包装器模式
观察者模式
适配器模式

## Spring中的事务管理

### Spring 管理事务的方式

编程式：代码中硬编码，通过 TransactionTemplate或者TransactionManager手动管理，事务范围不要过大，可能出现事务未提交导致超时，因此事务要比锁的粒度更小- 没用过

声明式：通过xml配置文件或注解@Transactional

### Spring 事务的传播行为

在实际项目中 业务逻辑错综复杂，方法之间相互调用，可能出现事务的冲突，这是就需要依赖于传播行为。

当事务方法调用另一个事务方法，指定该事务如何传播。传播行为可以设置为：

TransactionDefinition.PROPAGATION_REQUIRED

使用最多的，也是@Transactional注解默认的。如存在事务就加入该事务，如没有事务则创建一个新的事务。

举例说明：方法1 调用 方法2 ，其中方法1对表A的一条数据的字段进行了更新，当方法2中要使用到表A的那条数据，你说它是应该拿到更新后的还是更新前的数值呢？正常我们都是希望拿到最新的也就是更新后的数值，那么方法2是不是应该加入到方法1的事务中呢？

TransactionDefinition.PROPAGATION_REQUIRES_NEW

顾名思义，它将创建一个新的事务，如果已经有了事务，则把该事务挂起，该传播行为会保证自己方法内是一个独立的事务，与外部隔离。

TransactionDefinition.PROPAGATION_NESTED

如果存在事务，则创建一个嵌套事务来运行，如果没有则新建一个事务。

TransactionDefinition.PROPAGATION_MANDATORY

如果当前存在事务，则加入该事务，如果没有则抛出异常，用的少，不应随便异常

非事务

TransactionDefinition.PROPAGATION_SUPPORTS: 存在事务则加入，否则以非事务的方式运行（有事务能力的，可支持）
TransactionDefinition.PROPAGATION_NOT_SUPPORTED:以非事务方式运行，如果存在事务，则将当前事务挂起（无事务能力，不支持）
TransactionDefinition.PROPAGATION_NEVER: 以非事务方式运行，如果当前存在事务会抛出异常（拒绝事务，滚）

### Spring 事务的隔离级别

相比事务的传播行为，隔离级别更加的底层。决定了数据的读取和写入

TransactionDefinition.ISOLATION_DEFAULT: 使用数据库默认的隔离级别，对于Mysql默认采用可重复读隔离级别，而Oracle则是读已提交隔离级别
读未提交，最低的隔离级别，它允许读取尚未提交的数据
读已提交，允许读取并发事务已经提交的数据，避免了脏读
可重复度，对一个字段的多次读取结果是一致的，避免了脏读和不可重复读
串行化，最高的隔离级别，事务逐个执行，这样就不存在干扰，当然也就防止了脏读，不可重复读，幻读，但通常不用，因为性能太差。
