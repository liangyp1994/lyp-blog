---
title: Mybatis基础
date: 2024-05-31
categories: 后端
tags:
- Mybatis
---

## #{}和 ${}的区别

变量占位符${}，他可以用于文本替换，一般会用在 按某字段排序，将字段名传递进去实现 原样文本替换。

```sql
select * from user order by ${columName}
```

> #{} 是参数占位符，Mybatis将sql中的#{} 替换成 ? 号，随后在执行是通过使用参数设置方法将参数值依次赋给 ? 号。如果是 对象则使用反射获取对象的属性值后在进行赋值

## Mapper接口的工作原理是什么？

通常在项目中我们会一个Mapper接口对应一个xml文件，其中xml文件的namespace的值为 mapper接口的全限命名，接口中的各个不同的方法则对应xml文件里 MappedStatement的id值，接口方法中参数传递到sql中

在Mybatis中 ，select， update， delete，insert 这些标签都会被解析为MappedStatement对象，当调用mapper接口中的方法，会以 接口全限命名+方法名作为Key，定位xml文件中的 MappedStatement。

注意 Mybatis中 Mapper接口的方法可以重载，但是xml中的ID不允许重复，即我们可以定义两个同名的方法，但调用xml中同一个 MappedStatement，虽然看着没这个必要，但要知道并不会报错。

Mapper接口的工作原理，是通过JDK动态代理来为接口生成代理proxy对象，代理对象转而去执行MappedStatement所代表的sql，然后将结果返回。

### Mybatis是如何进行分页的？

使用到了 RowBounds对象

private final int offset;
private final int limit;

针对ResultSet结果集执行的内存分页，非物理分页，

可以在sql中直接通过书写带有物理分页的参数来分页，也可以使用分页插件来完成物理分页

分页插件的原理是是使用Mybatis提供的插件接口实现拦截方法中对待执行的sql进行重写，根据dialect方言，添加对应的物理分页语句和参数

### Mybatis插件

针对 ParameterHandler、ResultSetHandler、Statementhandler、Executor这四种接口我们可以自己编写插件，Mybatis是通过JDK动态代理，为需要拦截的接口生成代理对象以实现接口方法的拦截，随后在执行上面提到的接口对象的方法是，就会进入拦截，然后我们就可以在拦截的方法里面进行复写，

具体做法：通过实现Mybatis的Interceptor接口并且复写 intercept() 方法，然后在给插件编写注解， 指定要拦截哪一个接口的哪些方法即可，注意还要在配置文件中配置编写的插件，注册进去。

Mybatis在执行批量插入，能返回主键列表吗？

能

### Mybatis动态sql

通过标签的形式进行动态sql拼接，逻辑判断，执行原理为：使用OGNL从sql参数对象中计算表达式的值，从而实现动态拼接，实现动态sql的功能。

### Mybatis的返回结果

第一种是通过ResultMap，在其中定义了列与对象属性之间的映射关系。第二种是是哟个sql列的别名功能，将名字书写为对象属性的名字。对应了属性名自然后续就能通过反射创建java对象，同时也就给对新的属性进行赋值，当然找不到属性的话是无法完成赋值，但不会报错，所以如果你的返回结果中某个字段始终为空，可以看看是否映射成功。

### Mybatis的延迟加载

仅支持 association关联对象和 collection关联集合对象的延迟加载。在Mybatis配置中可以配置是否启用延迟加载

原理是 ，使用CGLIB创建目标对象的代理对象，当调用目标方法是，进入拦截器，然后invoke在执行时会发现该结果对象的 对象属性(association) 或 集合属性(collection) 为null值，这时就会单独发送事先保存好的查询该"对象/集合"的sql，将其查询出来，然后调用set方法，进行赋值，

举个例子：查询对象user，其中有个属性为 roles列表，当我去获取某一个角色名称时候发现 roles为null，此时才会去查询roles的值，所以说是延迟加载

### Mybatis中如何执行批处理

使用BatchExecutor完成

### Mybatis有哪些执行器，区别是什么?

有三种基本的执行器，分别是

SimpleExecutor：每执行一次update或select，就开启了一个Statement对象，用完就关。

ReuseExecutor：执行update或select，以sql为key查找Statement对象，存在就使用，不存在就创建，用完后 不会关闭，而是放在Map里面，供下次使用。

BatchExecutor：执行update，将所有sql都添加到批处理中，等待统一执行，它缓存了多个Statement对象，每个Statement对象都是添加到批处理完毕后，等待逐一执行批处理，与JDBC的批处理相同。

注意，这些特点，都严格限制在SqlSession生命周期内。

### 是否可以映射枚举

可以，通过自定义 TypeHandler,实现相关方法，它完成了从javaType到jdbcType的相互转换

### mybatis xml文件的标签顺序

虽然解析过程是按顺序的，但是如果出现A标签里面引用了B便签，并不一定要将B标签写在A标签前面，因为Mybatis会现将A标签标为为解析状态，继续解析剩余的标签，等到后续在重新解析为解析的标签。

### xml映射文件和内部数据结构的映射关系

`<parameterMap>` 解析为 ParameterMap对象，其内的子元素会被解析为 ParameterMapping对象。

`<resultMap>` 解析为 ResultMap 对象，其内的子元素被解析为ResultMapping对象

每一个 `<select> <insert> <update> <delete>`  标签会被解析为 `MappedStatement` 对象，

标签内的sql被解析为 BoundSql 对象
