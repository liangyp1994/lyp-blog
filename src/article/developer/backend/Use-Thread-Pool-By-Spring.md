---
title: 如何在SpringBoot中使用线程池
date: 2024-05-30 
---



## 配置



在配置中添加一个 Bean

```java
@Bean("taskExecutor")
    public ThreadPoolTaskExecutor taskExecutor(ThreadPoolProperties properties) {
        ThreadPoolTaskExecutor pool = new ThreadPoolTaskExecutor();
        pool.setThreadNamePrefix("-------------OPS线程池-----------------");
        pool.setCorePoolSize(properties.getCorePoolSize());
        pool.setMaxPoolSize(properties.getMaxPoolSize());
        pool.setKeepAliveSeconds(properties.getKeepAliveSeconds());
        pool.setQueueCapacity(properties.getQueueCapacity());
        // 拒绝策略：在当前线程执行
        pool.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        // 初始化
        pool.initialize();
        return pool;
    }
```

  

## 使用

场景1：定义一个组件，使用@Async来使用 taskExecutor 线程池

```java
@Component
public class AsynchronousTask {

    @Resource
    private OpsOrderHistoryService opsOrderHistoryService;

    @Async("taskExecutor")
    public void recordOrderHistory(OpsOrderHistory opsOrderHistory) {
        try {
            opsOrderHistoryService.insertSelective(opsOrderHistory);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

> 当调用 recordOrderHistory 方法，会使用OPS线程池执行上面的插入操作，如果拒绝策略生效则使用当前调用线程执行 


