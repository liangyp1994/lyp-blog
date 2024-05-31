---
title: Spring-IOC
date: 2024-05-31
categories: 后端
tags:
- Spring
---

IOC全称 Inversion of Control ,中文意思是 控制反转，他是一种设计思想，而非一个具体的实现，所以并不是Spring所独有的，其他语言也有相关的应用，它的核心思想就是将创建对象的权利交给了Spring框架来进行而非程序员

要知道对象之间通常会相互依赖，那么如果没有IOC思想，程序员在New一个对象的时候需要考虑这个对象的属性，如何正确初始化该对象，利用好了IOC就无需考虑如何创建这个对象，只要配置好，具体创建过程交给Spring即可，值得一提的是早期Spring时通常会将Bean对象配置到Xml中，而后续为了简便 ，Springboot注解配置慢慢流行。

## Bean对象

上面提到了Bean对象，其实 Bean 就是被 IOC容器管理的对象。通过 XML，注解，配置类我们告诉了IOC我们需要它来管理哪些对象。

哪些注解经常用到

@Component ：不知道哪一层的话用这个
@Controller ：控制层的对象
@Service ：逻辑业务层的对象
@Mapper ： 持久层数据库操作的对象
@Bean ： 比如RedisTemplate的管理

> 用于注入Bean到一个类里面

@Autowired  ：Spring内置，默认是根据类型进行匹配，当匹配到多个时会变成根据名字去匹配
@Resource JDK内置，默认是根据名字进行匹配，刚好相反，名字匹配不到会变成根据类型去匹配

### @Bean注解

@Bean 注解用于告诉Spring容器某个方法的返回值需要被管理为一个bean

例如，我们可以定义一个配置类，并在其中定义一个方法，使用 @Bean 注解表示该方法将返回一个bean：

```java
@Configuration
public class AppConfig {
​
  @Bean
  public MyBean myBean() {
      return new MyBean();
  }
}
```

上述代码中，AppConfig 类被标注为 @Configuration，表示它是一个配置类。其中的 myBean() 方法被标注为 @Bean，表示它将返回一个bean。

通过以上配置，当Spring容器启动时，会读取配置类，并执行带有 @Bean 注解的方法，将返回的对象注册为一个bean。我们可以通过其他组件（如控制器、服务等）中的自动装配（@Autowired）来引用这个bean。

需要注意的是，@Bean 注解默认情况下使用方法名作为bean的名称，也可以通过 name 属性指定bean的自定义名称。另外，@Bean 注解还支持其他属性，用于控制bean的作用域、延迟加载等行为。

### 扫描配置类

为什么会扫描到 上面的 配置类 前提当然要有告诉Spring。

@ComponentScan(basePackages = "com.example.config")
ComponentScan这个注解通常会配置在启动类上面（注意这里指的是Springboot项目）。应用启动，将会扫描该包及其子包，发现Spring的相关注解 将会被注册到容器中，

### 具体源码

```java
ClassPathScanningCandidateComponentProvider 类：该类是用于扫描类路径下带有特定注解的候选组件的提供者。它会遍历类路径下的所有类，并使用 AnnotationMetadataReader 来读取每个类的元数据信息，判断是否带有指定的注解。如果是，则将其作为候选组件。
​
DefaultListableBeanFactory 类：该类是 Spring IoC 容器的默认实现。在容器初始化过程中，会通过 ClassPathScanningCandidateComponentProvider 扫描类路径下的所有类，并获取带有指定注解的候选组件信息。然后，使用 BeanDefinitionRegistry 将这些候选组件注册为 Spring BeanDefinition。
​
AnnotationConfigUtils.registerAnnotationConfigProcessors() 方法：该方法用于注册处理注解的处理器。在 Spring 容器启动阶段，会调用此方法来注册与注解相关的处理器，其中就包括处理组件扫描的 ClassPathBeanDefinitionScanner。
​
ClassPathBeanDefinitionScanner 类：该类继承自 ClassPathScanningCandidateComponentProvider，是用于扫描类路径下的组件并注册为 BeanDefinition 的类。它会扫描指定的包路径，找到带有特定注解的候选组件，并将其注册为 Spring BeanDefinition 对象。
```

## 关于@Autowired和@Resource 的使用

如果使用@Autowired时该类存在多个实现，建议使用@Qualifier注解显式的指定名字。

对于@Resource来说，它有两个属性分别是 name和type，可以指定，那么他会根据你的指定去决定通过名字还是类型进行匹配

对于@Autowired, 它能支持构造函数或参数上使用，这是@Resource所不能的事情

那么什么情况下需要在参数上使用呢？

## Bean的作用域

在容器中创建的Bean实例的生命周期以及其在应用程序中的可见性，反正概念比较深奥，只需要知道是你要用Spring就要理解这个是Bean的元数据之一

singleton： 默认就是单例，有且只有一个该类型的对象实例
prototype：该Bean会创建任意数量的对象实例
request：每个请求
session：每个会话
application：每个应用
websocket：每个websocket会话

## Bean的生命周期

实例化 -> 属性赋值 -> 初始化 -> 销毁

Spring容器启动时，扫描配置或注解，通过工厂创建对应Bean实例。

根据DI为Bean的属性赋值，

初始化操作 ：常见的初始化回调方法有 @PostConstruct 注解标记的方法、实现了 InitializingBean 接口的 afterPropertiesSet() 方法以及配置文件中指定的 init-method 方法。

初始化完成后，即可进入允许执行业务逻辑

当容器关闭或者从容器中移除 Bean，调用销毁方法，常见的销毁回调方法有 @PreDestroy 注解标记的方法、实现了 DisposableBean 接口的 destroy() 方法。在这些方法中，开发者可以进行一些自定义的资源释放或清理操作。
