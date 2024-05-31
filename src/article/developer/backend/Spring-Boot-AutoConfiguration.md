---
title: Spring boot的自动装配原理
date: 2024-05-31
categories: 后端
tags:
- SpringBoot
---

## 自动装配

下面是Springboot启动类

```java
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}

```

直接启动main方法就能开启一个web项目，为何Springboot项目能够开箱即用，核心就是自动装配

### 什么是自动装配

实际上在Spring  Boot 出来之前，Spring框架已经有了自动装配的功能，而 Spring Boot只是在其基础上，通过SPI的方式进行优化，

详细可到官网了解 Spring Boot的接口规范，了解具体它在启动时如何进行扫描，加载。所以外部引用jar包如果按其规范标准就可以将自己的功能装配到Spring Boot中。

具体可以看另一篇文章  如何自定义Spring Starter

### Spring Boot 是如何实现自动装配

先了解下注解 SpringBootApplication，作为启动类的注解它如何工作呢

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(excludeFilters = { @Filter(type = FilterType.CUSTOM, classes = TypeExcludeFilter.class),
  @Filter(type = FilterType.CUSTOM, classes = AutoConfigurationExcludeFilter.class) })
```

> SpringBootonfiguration： 里面可以看到注解 Configuration 允许搜索配置类，注册Bean对象。
EnableAutoConfiguration：启动自动配置机制
ComponentScan：组件扫描，可以指定跳过扫描，排除哪些自动配置

既然要研究自动装配，这里就重点看下@EnableAutoConfiguration，

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@AutoConfigurationPackage
@Import(AutoConfigurationImportSelector.class)
```

可以看到这里导入了 AutoConfigurationImportSelector 这个类，

```java
public class AutoConfigurationImportSelector implements DeferredImportSelector, BeanClassLoaderAware,
  ResourceLoaderAware, BeanFactoryAware, EnvironmentAware, Ordered
```

里面除了实现一些 *Aware接口，还实现了 DeferredImportSelector 接口 DeferredImportSelector 又实现了 ImportSelector

通过实现 selectImports 方法 获取到所有符合条件的类，这些类会被加载到IOC容器中。

具体的话

判断是否开启了自动装配 是则进行下一步
获取EnableAutoConfiguration注解的exclude和excludeName，决定哪些需要排除
获取需要自动装配的类 从 META-INF/spring.factories ，注意SpringBoot版本，升级后的位置有调整，这样所有Starter下的自动装配类都获取到了
随后根据@ConditionalOn*进行条件判断，只有满足条件该类才会生效
