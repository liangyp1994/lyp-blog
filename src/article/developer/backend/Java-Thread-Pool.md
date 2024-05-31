---
title: Java线程池
date: 2024-05-04
categories: 后端
tags: 
- 并发编程
---
正如 “连接池” “用户池” 等概念一样，“池” 通常代表的就是一个容器，负责放置相关的事物。那么线程池当然就是放置了大量线程的一个空间容器。线程池的创建主要目的是为了减少 创建和销毁线程的这个资源损耗，通过线程池实现线程的复用，当然也方便对线程的管理和监控。以上介绍了什么是线程池，目的是什么，都有哪些优点。接下来看看在Java中如何使用线程池

## ThreadPoolExecutor

想要理解Java线程池的原理，我们必须将下面这个构造函数琢磨清楚

```java
public ThreadPoolExecutor(int corePoolSize,
                              int maximumPoolSize,
                              long keepAliveTime,
                              TimeUnit unit,
                              BlockingQueue<Runnable> workQueue,
                              ThreadFactory threadFactory,
                              RejectedExecutionHandler handler)

```

> corePoolSize:核心线程数
maximumPoolSize:最大线程数
keepAliveTime:线程空闲时存活时间
unit:单位
workQueue:工作队列
threadFactory:线程创建工厂
handler:拒绝策略

- corePoolSize 核心线程数
核心线程会一直存活，核心成员一直在，及时没有任何业务需求；
当线程数小于核心线程数，即使有空闲线程，线程池也会创建新的线程进行处理
参数allowCoreThreadTimeout=true（默认false），核心线程会超时关闭

通常根据系统是 CPU密集或IO密集 按下面这个公式来确定 corePoolSize

```shell
CPU密集型：corePoolSize = CPU核数 + 1

IO密集型：corePoolSize = CPU核数 * 2
```

> 我的服务器是 2核 内存使用较多 属于 IO密集型，故 corePoolSize=3

- maximumPoolSize 最大线程数

设置最大上限，当线程数=最大线程数，将会执行拒绝策略，默认的话该值为Integer.MAX_VALUE
实际项目中应根据使用场景灵活调整

- keepAliveTime 空闲时长
- workQueue 任务队列
- threadFactory 创建线程的工厂
- handler 拒绝处理器

## 任务执行流程

用户提交任务 -> 线程池 -> 执行、阻塞 -> 完成

1. 判断当前运行的任务数量是否超过 `corePoolSize`,如果不超过 `corePoolSize` 就创建一个`worker`直接执行该任务。—— 线程池最开始是没有worker在运行的
2. 如果正在运行的worker数量超过或者等于corePoolSize,那么就将该任务加入到workQueue队列中去。
3. 如果workQueue队列满了,也就是offer方法返回false的话，就检查当前运行的worker数量是否小于maximumPoolSize,如果小于就创建一个worker直接执行该任务。
4. 如果当前运行的worker数量大于等于maximumPoolSize，那么就执行RejectedExecutionHandler来拒绝这个任务的提交。

## 线程池的状态

- RUNNING运行状态：可以接收新任务以及处理队列中的任务

- SHUTDOWN: 不接收新任务但会继续处理队列中已有的任务

- STOP：不接收新任务且挂起不再处理队列中的任务，还会中断正在处理的任务

- TIDYING: 所有任务已经终止，有效线程数为0，会转为tidying状态，并调用 terminate 钩子

- TERMINATE：terminate运行完成。

## 线程池的拒绝策略

- abort：中止，放弃：将会抛出异常 由外部根据异常自行做决定

- discard：丢弃：直接丢弃任务，不做任何其他动作

- discardOldest：同上，但是它丢弃的是阻塞队列中的任务

- callRuns: 让调用线程去执行任务
