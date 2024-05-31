---
title: Redis由浅入深 
date: 2024-05-31
categories: 后端
tags:
- Redis
---
本文将从基础逐步深入学习Redis的概念，从理论再到实践一点点的理解Redis为什么会如此流行。

了解什么是Redis
自己搭建一个Redis
Redis的数据结构
Redis Stream
Redis发布与订阅
Redis 管道
Redis事务
持久化
过期策略
淘汰策略
限流
布隆过滤器
缓存问题
分布式
Lua脚本
Redis 客户端

## 了解什么是Redis

redis是基于内存，开源的一款中间件 非关系型数据库 存储的是key-value键值对。

基于内存存储，数据访问速度快，性能好

目前支持APF和RDB两种持久化机制

支持集群模式，容量可以线性扩展

支持丰富的数据结构

## Redis数据结构

使用较多的有五种数据结构，分别是 字符串，哈希，列表，集合，有序集合

### 字符串

最简单也是最常用的的一种类型，

常用命令如下：

get key_name
set key_name key_value
incr key
decr key
mget key1 key2 key3
应用场景：计数器 比如要记录接口次数 用来限流。通过累加命令即可实现。虽然这里说的是字符串，但并不是说我们只能存字符串进去 set 命令里的 key_value 也可以是数值型。

```bash
set key value 缓存某个数据，数据整存整取
setnx key value 分布式锁
incr key 计数器(比如文章阅读 点赞数) 流量限流(尤其是匿名接口) 分布式系统自增id(这个看情况吧 应该不至于用到)
```

**redis的数据结构SDS**

```c
struct sdshdr{
     //记录buf数组中已使用字节的数量
     //等于 SDS 保存字符串的长度
     int len;
     //记录 buf 数组中未使用字节的数量
     int free;
     //字节数组，用于保存字符串
     char buf[];
}
```

作者为何如此优秀，要自行定义数据结构呢？

二进制安全 SDS会将所有接收到的数据转为字符串，包括一些特殊字符，而C语言会吞掉像\0 这样的特殊字符
内存预分配机制 提前分配字符串需要容量的两倍，当key长度变化时直接在预先分配的内存中修改
兼容C的函数库 是扩展而不是重新创造

### 哈希

也是很常见的一种结构，redis本身其实就是key-value存储，key-value结构方便我们能快速的通过key定位value值。

```bash
hget key hash_key
hset key hash_key hash_value
hgetall key
```

应用场景：存储结构化的数据 如用户信息
 购物车场景

```bash
hset key field value 添加商品到购物车
hincrby key field increment 增加购物车指定商品的数量
hlen key 获取购物车商品总数
hdel key field field 删除购物车中指定商品
hgetall key 获取购物车中所有商品
```

> 可以就key的某个field进行修改 设置过期只能针对key 无法指定field

### 列表

需要与Java里面的list区分开， 这里的列表有点像队列，push是放进去，pop是取出来

lpush
rpush
lpop
rpop
lrange
应用场景：看介绍就知道这种数据结构非常适合做消息队列的，push是产生消息 pop就是消费消息。

### 集合

对比list而言，set有个特性就是 自动排重。因为不存在相同元素 所以set还提供了一个方法“判断某元素是否存在set内”。

应用场景：常用于存储不能重复的集合，既然不可重复就可以非常方便的进行求差集，并集，交集 这些操作。

### 有序集合

与set类似，但是区别是他是自动有序的。还提供了一个score 参数，用户可以通过该值实现元素排序。

应用场景：通常是一些热点数据，排行榜之内的，访问多而且要求有序，否则用数据库排序就够了。

## Redis持久化

快照方式，将某时刻所有数据都写入硬盘的RDB文件；

追加文件方式，即将所有写命令都以追加的方式写入硬盘的AOF文件中。

线上通常会两种一起使用

RDB
在流量低峰时将所有内存数据存到rdb文件

AOF
开启 appendonly 将写命令追加道aof文件

## 主从复制

通过主从复制，我们可以实现读写分离，往往实际项目中读操作是远远大于写操作的，我们通过配置master和slave节点，写操作有master负责，而大量的读取操作分发到slave节点。

## 事务

在multi指令后，指定多个操作，然后通过exec指令一次性执行，中途如果出现异常，全部撤回。值得注意的是exec后如果出现异常 就没法回滚了，所以不太可靠，通常还是用数据库来实现事务。
