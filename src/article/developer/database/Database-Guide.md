---
title: 数据库理论知识
date: 2024-05-05
categories:
- 数据库
---
![数据库系统](https://lianyp.fun/picture/open-admin-pro/picture/article/image/9801efe1-862e-4581-81f9-32173f1835e7.png)

## 前言

将 数据库（Database）看作一个容器，我们可以通过它存储 数据（Data），为了更好的维护或使用这些数据，进而有了 数据库管理系统 （DBMS）。而数据库管理系统，它是位于操作系统和用户之间的一个软件系统，因为数据库管理系统有多种实现 如 Mysql。 另外为了方便操作数据库管理系统 又有了一些UI产品 例如 Dberver。专门负责数据库的一个职业叫数据库管理员（DBA），他是专门负责管理我们的数据库系统，这里说的数据库系统是由 数据库 数据库管理系统 DBA 构成的整体

> 数据库管理系统包含了 数据定义，数据操纵，数据库运行管理，数据库的建立和维护，数据通信，数据组织，存储和管理。

## 概念定义

元组：一张表，表中的每行就是一个元组，每列就是一个属性，在二维表里，元组也成为行。

码：能唯一标识实体的属性，对应表中的列

候选码：若关系中的某一属性或属性组的值能唯一标识一个元组，而其任何、子集都不能再标识，则称为候选码。如学生的学号能唯一标识，姓名+班级组合后能标识。那么他们就都是候选码

主码：也叫主键。从候选码中选择出来的，一个实体集里只有一个主码，但可以有多个候选码

外码：也叫外键，如一个关系的一个属性是另一个关系中的主码则这个属性为外键

主属性：候选码中出现过的属性被称为主属性。

非主属性：不包含在任何一个候选码中的属性被称为非主属性。

## ER图

实体联系图。提供了实体类型、属性和联系的方法。

实体-矩形

属性-椭圆形

联系-菱形

## 数据库范式

第一范式：属性不可再分

第二范式：在满足第一范式的基础上，消除非主属性对码的部分函数依赖（讲人话就是有一个主键，其他列都依赖于主键）

第三范式：满足第二范式的基础上，消除了非主属性对码的传递以来（讲人话的话就是数据冗余，有些属性应该放到其他表里去）

**概念解释：**

```shell
函数依赖：在一个表中，属性X的值确定的情况下，必定能确定属性Y的值，就说Y函数依赖于X， 写作 X → Y ；学生学号（唯一）→学生的姓名

部分函数依赖：在一个表中，如果 X → Y 的同时存在X的一个真子集X0 使得 X0 → Y ，则称 Y部分依赖于X（试想X0作为子集都可以使得Y依赖于X0，那作为更大的X当然就是 Y部分依赖于X了） ；学号（唯一）和身份证号（唯一）都能推出学生的姓名

完全函数依赖： ；学号加上班级才能推出学生的姓名，这时姓名完全依赖于学号和班级

码：能唯一标识实体的属性

实体：对现实对象的抽象，实体会有自己的属性

```

## 数据库存储过程

将存储过程看成一些sql的集合，通过编写存储过程方便下一次使用，一旦调试完成通过后能稳定运行。另外它是预编译过的，比单纯的sql语句执行更快。
