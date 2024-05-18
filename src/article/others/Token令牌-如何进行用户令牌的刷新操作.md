---
title: Token令牌-如何进行用户令牌的刷新操作
date: 2024/05/01
categories:
- 其他
---

## 什么是Token

中文名为令牌，通常是client-server架构下client要访问server资源而要求携带的一个令牌，该令牌一方面是为了安全，另外则是可以让服务端知道当前访问的主体（通俗一点讲就是用户）。

## 修改登陆响应字段

字段：登陆完成后系统将颁发token作为接口访问的令牌，而如果要进行续签功能，则在原有基础上添加刷新令牌字段，该字段将进行刷新令牌的操作。

```java
package com.liangyp.king.system.pojo.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author : liangyp
 * @since 2024-2-21 16:22
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TokenResult {

    /**
     * 令牌
     */
    private String accessToken;

    /**
     * 令牌时长(分钟)
     */
    private Integer expireMinutes;

    /**
     * 刷新令牌
     */
    private String refreshToken;
}
```

在原有字段基础上我们添加一个字段

```java
/**
 * 刷新令牌
 */
private String refreshToken;
```

## 前后端交互

用户输入账号密码进行登陆操作 -> 调用后端登陆接口 -> 后端返回响应字段如上所示 令牌，过期时间，刷新令牌 -> 前端将字段保存到本地 -> 前端后续每次请求接口将会携带 accessToken -> 开启定时执行器：每隔一段时间（过期时间的一半）调用一次刷新令牌接口

> 注意点：前端每次调用刷新令牌接口都需要保证当前用户处于登陆状态下，后端在令牌刷新过程中上一个令牌要保持可用状态

### 前端代码

前端登陆以及刷新令牌逻辑

```js
passwordLogin(loginData) {
  return new Promise((resolve, reject) => {
    loginApi(loginData)
      .then((response) => {
        const { refreshToken, accessToken, expireMinutes } = response.data
        localStorage.setItem('admin-token', accessToken)
        localStorage.setItem('refresh-token', refreshToken)
        localStorage.setItem('expire', expireMinutes)
        setInterval(() => {
          // 请求刷新令牌的接口
          refreshTokenApi().then((response) => {
            const { refreshToken, accessToken, expireMinutes } =
              response.data
            localStorage.setItem('admin-token', accessToken)
            localStorage.setItem('refresh-token', refreshToken)
            localStorage.setItem('expire', expireMinutes)
          })
        }, expireMinutes / 2)
        resolve()
      })
      .catch((error) => {
        reject(error)
      })
  })
},
```

上面代码涉及到两个接口 分别是密码登陆和刷新令牌

### 后端代码

创建令牌逻辑如下，主要是保证了刷新令牌要比授权令牌时效更长，这里设置为授权令牌的两倍

```java
public static final Integer ACCESS_EXPIRES_MILLISECONDS = 1800000;
public static final Integer REFRESH_EXPIRES_MILLISECONDS = 3600000;

public static String createToken(SysUser sysUser) {
    // 当前时间
    DateTime now = DateTime.now();
    // 推后30分钟
    DateTime newTime = now.offsetNew(DateField.MILLISECOND, ACCESS_EXPIRES_MILLISECONDS);

    Map<String, Object> payloads = new HashMap<>();
    payloads.put(USERNAME, sysUser.getUsername());
    payloads.put(USERID, sysUser.getId());
    //签发时间
    payloads.put(JWTPayload.ISSUED_AT, now);
    //过期时间
    payloads.put(JWTPayload.EXPIRES_AT, newTime);
    //生效时间
    payloads.put(JWTPayload.NOT_BEFORE, now);
    return JWTUtil.createToken(payloads, CommonConstant.CRYPOTJS_KEY.getBytes(StandardCharsets.UTF_8));
}

public static String createRefreshToken(SysUser sysUser) {
    // 当前时间
    DateTime now = DateTime.now();
    // 推后30分钟
    DateTime newTime = now.offsetNew(DateField.MINUTE, REFRESH_EXPIRES_MILLISECONDS);

    Map<String, Object> payloads = new HashMap<>();
    payloads.put(USERNAME, sysUser.getUsername());
    payloads.put(USERID, sysUser.getId());
    //签发时间
    payloads.put(JWTPayload.ISSUED_AT, now);
    //过期时间
    payloads.put(JWTPayload.EXPIRES_AT, newTime);
    //生效时间
    payloads.put(JWTPayload.NOT_BEFORE, now);
    return JWTUtil.createToken(payloads, CommonConstant.CRYPOTJS_KEY.getBytes(StandardCharsets.UTF_8));
}
```

刷新令牌接口的话，是需要当前用户已认证登录方可生成令牌并响应。

## 总结

上面介绍完了前后端大体的交互代码，可以分析一下可能发生或已经的问题以及如何处理的解决方案

1. 用户无法获取

在使用过程中，因为用户信息是保存在redis中并且是有失效时长的，所以在根据账号查询用户的逻辑里面应该补充当无法获取即立刻通过数据库查询重新赋值。
