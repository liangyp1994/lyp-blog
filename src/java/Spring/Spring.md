---
title: 认识Spring
article: false
order: 1
---

## 什么是Spring

[Spring](https://spring.io/projects/spring-framework)框架为基于 Java 的现代企业应用程序提供了全面的编程和配置模型

### 特性

核心技术：依赖注入、事件、资源、i18n、验证、数据绑定、类型转换、SpEL、AOP。
测试：模拟对象，TestContext框架，Spring MVC测试， WebTestClient 。
数据访问：事务、DAO 支持、JDBC、ORM、编组 XML。
Spring MVC 和 Spring WebFlux Web 框架。
集成：远程处理、JMS、JCA、JMX、电子邮件、任务、调度、缓存和可观测性。
语言 ： Kotlin， Groovy， 动态语言.

## IoC（控制反转）和DI（依赖注入）的概念和原理

控制反转：IOC是一种新的思想，通过引入IOC的概念，从而将以往的创建对象的权力从开发者交给了Spring框架。传统的编程模型中，由开发者自己创建对象并维护对象之间的关联关系，而通过IOC容器，开发者要做的就是告知容器需要管理的Bean对象在哪，而Bean对象的整个生命周期由IOC负责。

依赖注入：用的最多的注解 `@Autowired` ，通过该注解告知Spring当前类依赖于另一个注入的类。这样的话，我们可以把一些公用的功能定义到某个类中，然后在多个地方使用同一个类的对象，且因为单例避免创建和销毁的过程。

## AOP（面向切面编程）概念及其在Spring中的应用

面向切面编程（AOP）是一种编程范式，这里就叫它 `aop范式`。规范中给出了一些概念 如 `切点` `切面` `通知`。而面向切面编程可以帮助我们以点（点）扩面（切面）的方式对程序中散落的代码进行连接，然后再统一引入一个公共的行为（通知）。

在AOP中有三个重要概念：

Aspect（切面）：切面是横切关注点的模块化单元，它包含了一组横切逻辑，如日志、事务管理等。切面可以在多个模块中重用，不需要修改核心业务逻辑代码。

Join Point（连接点）：连接点是在应用程序执行过程中特定的点，即程序执行的某一步。在Java中，连接点通常是方法的调用或异常抛出等。

Advice（通知）：通知是切面在特定连接点上执行的行为，它决定了切面在何时、何地生效。通知包括前置通知（Before）、后置通知（After）、环绕通知（Around）、异常通知（AfterThrowing）和最终通知（AfterReturning）等。

在Spring框架中，AOP被广泛应用于企业级应用程序开发中。Spring AOP提供了一个轻量级的AOP框架，允许开发人员通过配置或注解的方式来定义切面，并将切面织入到应用程序中。Spring AOP基于代理模式实现，在运行时动态生成代理对象来增强目标对象的功能，同时保持目标对象的原始状态。

Spring AOP的应用场景包括但不限于：

- 日志切面：记录方法的调用信息、参数和返回值等。
- 事务管理切面：管理方法的事务提交和回滚。
- 安全切面：进行用户身份验证和权限检查等。

> 通过AOP，开发人员可以轻松实现横切关注点的模块化、复用和分离，提高了程序的可维护性和可扩展性，是Spring框架中不可或缺的重要功能之一。

## Bean的生命周期管理和作用域

学习Spring绕不开的一个话题就是 Bean对象的生命周期。前面提到的IOC容器，其内部就是装载了很多的Bean。而正因为有了IOC，才会有所谓的生命周期，IOC全权控制Bean的生命周期。大多数情况下我们都是用的默认的 单例模式，对于原型模式 Spring在创建好之后交给了使用者后就不在跟踪。

### 生命周期

在Spring框架中，Bean的生命周期主要包括以下阶段：

1. 实例化：容器根据配置文件或者注解，实例化Bean对象。可以使用构造函数来实例化Bean。
2. 属性设置：容器会将配置文件中或者通过注解设置的属性值或引用注入到Bean中。
3. 初始化前回调：在Bean实例化且属性设置完成后，容器会调用Bean的初始化方法（例如init-method）进行一些初始化操作。
4. 初始化后回调：在Bean的初始化方法执行完毕后，容器会调用BeanPostProcessor接口的postProcessBeforeInitialization()方法进行增强处理，然后再调用Bean的初始化完成方法（例如afterPropertiesSet()或者@PostConstruct）。
5. 被应用程序使用
6. 销毁前回调：在容器关闭或者销毁Bean时，会调用Bean的销毁方法（例如destroy方法）。
7. 销毁：容器销毁Bean实例。

在Spring中，Bean的生命周期由`BeanFactory`接口和`ApplicationContext`接口来管理。通过实现特定的接口或者使用特定的注解，可以对Bean的生命周期进行定制化操作。

### 作用域

在Spring框架中，Bean的作用域包括以下几个：

1. singleton：单例模式，容器中只存在一个Bean实例。
2. prototype：原型模式，每次获取Bean都会创建一个新的实例。
3. request：每个HTTP请求都创建一个新的Bean实例。
4. session：每个HTTP会话都创建一个新的Bean实例。
5. global session：在基于portlet的Web应用中，每个全局的portlet会话都创建一个新的Bean实例。

默认情况下，Bean的作用域是singleton。可以通过在Bean的定义中使用@Scope注解或配置文件中进行配置来指定作用域。

## 事件监听器

为了模块代码的解耦，发布者和监听者的定义虽然让代码逻辑复杂了，但事件驱动的模式可以更好的管理程序中的模块。以下是监听的流程：

1. 创建自定义事件类（继承自ApplicationEvent），定义该事件类需要传递的数据。
2. 创建自定义事件监听器类，实现ApplicationListener接口，并指定监听的事件类型。
3. 在Spring配置文件中配置事件监听器，将监听器注册到Spring容器。
4. 在需要发布事件的地方，通过ApplicationContext（Spring上下文）对象发布事件。
5. 当事件发生时，所有注册的监听器都会接收到该事件，并执行相应的处理逻辑。

## 资源加载和国际化

资源加载是一项非常重要的功能，用于加载配置文件、模板文件、静态资源等各种资源。Spring框架提供了多种方式来加载资源，包括类路径资源、文件系统资源、URL资源、ServletContext资源等。

以下是Spring框架中常用的资源加载方式和相关类：

- ClassPathResource：用于加载类路径下的资源，可以通过给定的路径从类路径中获取资源。

```java
Resource resource = new ClassPathResource("config.properties");
```

- FileSystemResource：用于加载文件系统中的资源，可以通过给定的文件路径获取资源。

```java
Resource resource = new FileSystemResource("D:/config.properties");
```

- UrlResource：用于加载URL资源，可以通过给定的URL地址获取资源。

```java
Resource resource = new UrlResource("https://www.example.com/image.jpg");
```

- ServletContextResource：用于加载ServletContext中的资源，可以通过给定的相对路径获取资源。

```java
ServletContext servletContext = request.getSession().getServletContext();
Resource resource = new ServletContextResource(servletContext, "/WEB-INF/config.xml");
```

- ResourceLoader：Spring提供了ResourceLoader接口，用于加载资源文件，并可以通过ApplicationContext实现类获得。例如：

```java
ResourceLoader resourceLoader = new DefaultResourceLoader();
Resource resource = resourceLoader.getResource("classpath:config.properties");
```

> 所有资源都实现了Resource接口，该接口定义了获取资源的一些方法，如获取资源的输入流、读取资源内容等。

通过以上不同的资源加载方式，开发人员可以根据不同的需求和场景来选择合适的方式加载资源。

## 国际化

支持应用程序的多语言文本处理。通过国际化功能，开发人员可以实现应用程序的多语言支持，使得应用程序可以根据用户的语言环境动态地加载和显示相应的文本信息。

Spring 框架中实现国际化的主要方式是通过 MessageSource 和 LocaleResolver 接口。其中：

- MessageSource 接口定义了获取消息的方法，可以根据不同的 locale 加载相应的资源文件，从而展示正确的语言文本给用户。
- LocaleResolver 接口定义了解析用户 locale 的方法，可以根据用户的语言环境选择合适的 locale。

在 Spring 中配置和使用国际化功能的步骤如下：

- 定义国际化资源文件：在项目中创建 properties 文件，每个语言对应一个 properties 文件，命名规则为 "basename_languageCode_countryCode.properties"，如 `messages_en_US.properties`,`messages_fr_FR.properties` ，定义不同语言的 key-value 对应的文本信息。

- 配置 MessageSource bean：在 Spring 配置文件中配置 MessageSource bean，指定国际化资源文件的基本名称和加载方式。

```xml
<bean id="messageSource" class="org.springframework.context.support.ResourceBundleMessageSource">
    <property name="basename" value="messages"/>
</bean>
```

- 配置 LocaleResolver bean：在 Spring 配置文件中配置 LocaleResolver bean，用于解析用户的 locale。

```xml
<bean id="localeResolver" class="org.springframework.web.servlet.i18n.AcceptHeaderLocaleResolver"/>
```

- 接入国际化功能：在需要国际化的地方，通过 MessageSource 获取对应 locale 的文本信息。

```java
@Autowired
private MessageSource messageSource;

public String getMessage(String key) {
    Locale locale = LocaleContextHolder.getLocale();
    return messageSource.getMessage(key, null, locale);
}
```

- 根据用户的语言环境动态切换 locale：在 Web 应用中，通过 LocaleResolver 获取用户的 locale 信息，并根据用户的选择动态切换语言。

```java
@RequestMapping("/changeLanguage")
public String changeLanguage(@RequestParam("lang") String lang, HttpServletRequest request){
    LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(request);
    localeResolver.setLocale(request, response, new Locale(lang));
    return "redirect:/";
}
```

通过以上步骤，开发人员可以实现在 Spring 框架中简单方便地实现国际化功能，支持多语言文本处理，提升用户体验和应用的可用性。

## 事务管理

控制数据库操作的一致性和可靠性。通过事务管理机制，开发人员可以在需要的地方实现事务的开启、提交、回滚等操作，确保数据库操作的原子性、一致性、隔离性和持久性。

### 数据库特性

在数据库和事务处理中，ACID 是指原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）和持久性（Durability）这四个特性的缩写。这些特性是数据库管理系统（DBMS）保证事务正确执行的关键原则。

1. 原子性（Atomicity）：原子性是指事务是一个不可分割的工作单位，要么全部执行，要么全部不执行。如果事务中的任何一个操作失败，整个事务将会被回滚，恢复到事务开始之前的状态。这确保了数据的完整性和一致性。

2. 一致性（Consistency）：一致性指的是事务执行前后数据库的状态是一致的。即使发生了故障或异常情况，数据库也必须保持一致性，不会破坏数据的完整性。数据库会在执行事务后进入一个新的合法状态。

3. 隔离性（Isolation）：隔离性是指在多并发事务执行的情况下，各个事务之间应该是相互隔离的，一个事务的执行不应该受到其他并发事务的影响。通过隔离性可以避免并发事务导致的数据不一致问题。

4. 持久性（Durability）：持久性是指一旦事务提交，对数据的修改是永久性的并且不会丢失。即使系统发生了崩溃或故障，数据库中的数据仍然是安全的，恢复后数据仍然能够回到事务提交时的状态。

这四个特性一起组合，确保数据库中的事务在执行时达到稳定、可靠和一致的状态。数据库管理系统通过实现这些特性来保证数据的正确性和可靠性，从而保障系统的稳定运行。在实际应用中，一般需要在设计和开发时充分考虑这些特性，以保证系统数据的一致性和可靠性。

### 声明式事务管理

- 声明式事务管理是通过在配置文件中声明事务策略来管理事务的机制，通常使用@Transactional注解来标识需要开启事务管理的方法或类。
- 在Spring配置文件中配置事务管理器和事务通知器。

```xml
<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="dataSource"/>
</bean>
<tx:advice id="txAdvice" transaction-manager="transactionManager">
    <tx:attributes>
        <tx:method name="*" propagation="REQUIRED"/>
    </tx:attributes>
</tx:advice>
<aop:config>
    <aop:pointcut id="serviceMethods" expression="execution(* com.example.service.*.*(..))"/>
    <aop:advisor pointcut-ref="serviceMethods" advice-ref="txAdvice"/>
</aop:config>
```

### 编程式事务管理

- 编程式事务管理是通过在代码中手动控制事务的开启、提交和回滚来实现事务管理的机制，通常使用TransactionTemplate类来进行编程式事务管理。
- 在代码中通过 TransactionTemplate 执行事务操作。

```java
@Autowired
private TransactionTemplate transactionTemplate;

transactionTemplate.execute(status -> {
    // 执行事务操作
    return null;
});
```

### 事务传播行为

- 在配置事务管理器时，可以设置不同的事务传播行为，指定事务方法如何适用于嵌套调用。
- 常见的传播行为包括REQUIRED（默认值）、SUPPORTS、REQUIRES_NEW、NOT_SUPPORTED、NESTED等。

```java
@Transactional(propagation = Propagation.REQUIRED)
public void doSomeTransactionalOperation() {
    //执行事务操作
}
```

> 通过以上步骤和相关概念，开发人员可以在Spring框架中实现灵活、高效的事务管理，确保数据库操作的一致性和可靠性。选择声明式事务管理还是编程式事务管理取决于具体的业务需求和项目情况，开发人员可以根据实际情况选择合适的方式来管理事务。

## Springboot

Spring Boot 可以轻松创建独立的、生产级的基于 Spring 的应用程序，可以“直接运行”。

### 特性

- 创建独立的 Spring 应用程序
- 直接嵌入Tomcat，Jetty或Undertow（无需部署WAR文件）
- 提供固执己见的“入门”依赖项以简化构建配置
- 尽可能自动配置 Spring 和第三方库
- 提供生产就绪功能，例如指标、运行状况检查和外部化配置
- 绝对无需代码生成，也不需要 XML 配置
