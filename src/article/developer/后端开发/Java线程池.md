---
title: Java线程池
date: 2024/05/04
categories:
- 后端
---

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

1. corePoolSize 核心线程数
核心线程会一直存活，核心成员一直在，及时没有任何业务需求；
当线程数小于核心线程数，即使有空闲线程，线程池也会创建新的线程进行处理
参数allowCoreThreadTimeout=true（默认false），核心线程会超时关闭

通常根据系统是 CPU密集或IO密集 按下面这个公式来确定 corePoolSize

```shell
CPU密集型：corePoolSize = CPU核数 + 1

IO密集型：corePoolSize = CPU核数 * 2
```

> 我的服务器是 2核 内存使用较多 属于 IO密集型，故 corePoolSize=3

2. maximumPoolSize 最大线程数

设置最大上限，当线程数=最大线程数，将会执行拒绝策略，默认的话该值为Integer.MAX_VALUE
实际项目中应根据使用场景灵活调整

3. keepAliveTime 空闲时长
4. workQueue 任务队列
5. threadFactory 创建线程的工厂
6. handler 拒绝处理器

## 任务执行流程

用户提交任务 -> 线程池 -> 执行、阻塞 -> 完成

1. 判断当前运行的任务数量是否超过 `corePoolSize`,如果不超过 `corePoolSize` 就创建一个`worker`直接执行该任务。—— 线程池最开始是没有worker在运行的
2. 如果正在运行的worker数量超过或者等于corePoolSize,那么就将该任务加入到workQueue队列中去。
3. 如果workQueue队列满了,也就是offer方法返回false的话，就检查当前运行的worker数量是否小于maximumPoolSize,如果小于就创建一个worker直接执行该任务。
4. 如果当前运行的worker数量大于等于maximumPoolSize，那么就执行RejectedExecutionHandler来拒绝这个任务的提交。
