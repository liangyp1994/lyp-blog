---
title: 如何自定义Spring Starter 
date: 2024-05-31
categories: 后端
tags:
- SpringBoot
---

## Starter可以用来做什么？

当你每次创建一个新项目是不是都需要引入譬如 web jdbc aop test 这些基础依赖，我们可以用Starter将这些依赖集成在一起。组件化思想

## Starter包含什么？

一个典型的Spring Boot starter包含自动配置和定制特定技术的基础设施的代码，我们称之为 "acme"。

- 自动配置
- 专业基础模块（一个或多个）

## 开始设计

自定义名称，需要有一个名字用来范围约束，这里以 lyp 作为名字。最好起一个比较有辨识度的名字，不怎么容易与别人冲突

配置项：以 lyp开头，避免与其他冲突

```java
@ConfigurationProperties("lyp")
public class LypProperties {

    /**
     * Whether to check the location of acme resources.
     */
    private boolean checkLocation = true;

    /**
     * Timeout for establishing a connection to the acme server.
     */
    private Duration loginTimeout = Duration.ofSeconds(3);

    public boolean isCheckLocation() {
        return this.checkLocation;
    }

    public void setCheckLocation(boolean checkLocation) {
        this.checkLocation = checkLocation;
    }

    public Duration getLoginTimeout() {
        return this.loginTimeout;
    }

    public void setLoginTimeout(Duration loginTimeout) {
        this.loginTimeout = loginTimeout;
    }

}
```

## 添加依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-autoconfigure-processor</artifactId>
    <optional>true</optional>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-autoconfigure</artifactId>
</dependency>
```

## 使用依赖

在resource下创建 META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports

放入我们的自动配置类

```java
/**

- @author : liangyp
- @since 2023/11/14 15:42
 */
@EnableConfigurationProperties(LypProperties.class)
public class LypAutoConfiguration {

}

```

内部内容自定。
