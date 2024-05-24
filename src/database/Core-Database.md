---
title: 数据库基础
article: false
order: 1
description: 代码尽头皆为空,学无止境乃微风。编程途中诡辩多,唯有小道可成功。
---

## 基本概念

1. **表（Table）：**
   - 表是关系数据库中的基本组织单位，用于存储特定类型的数据。表由行（记录）和列（字段）组成，是数据的逻辑结构。

2. **字段（Column）：**
   - 表中的字段是数据的具体分类和存储单位，可以理解为数据的属性或特征。每个字段存储特定类型的数据，例如姓名、年龄、地址等。

3. **主键（Primary Key）：**
   - 主键是一种唯一标识表中每一行数据的字段。主键的值必须唯一，并且不能是空值。主键的存在可以方便数据的检索和关联。

4. **外键（Foreign Key）：**
   - 外键是一个表的字段，它指向另一个表中的主键，用来建立表与表之间的关联。外键能确保了数据的完整性和一致性，使不同表之间的关联更加稳固。

## SQL的基本语法

SQL（结构化查询语言）是用于管理关系数据库系统中的数据的标准语言，以下是SQL的基本语法：

1. **查询数据：**
   - 使用SELECT语句来从数据库中检索数据，语法示例：`SELECT column1, column2 FROM table_name WHERE condition;`

2. **插入数据：**
   - 使用INSERT INTO语句将新数据插入到数据库表中，语法示例：`INSERT INTO table_name (column1, column2) VALUES (value1, value2);`

3. **更新数据：**
   - 使用UPDATE语句来更新表中的现有记录，语法示例：`UPDATE table_name SET column1 = value1 WHERE condition;`

4. **删除数据：**
   - 使用DELETE FROM语句来从数据库表中删除记录，语法示例：`DELETE FROM table_name WHERE condition;`

5. **创建新表：**
   - 使用CREATE TABLE语句创建新的数据库表，语法示例：`CREATE TABLE table_name (column1 datatype, column2 datatype, column3 datatype);`

6. **修改表结构：**
   - 使用ALTER TABLE语句来修改现有表的结构，语法示例：`ALTER TABLE table_name ADD column_name datatype;`

7. **删除表：**
   - 使用DROP TABLE语句删除现有的数据库表，语法示例：`DROP TABLE table_name;`

> 这些是SQL中最基本的语法，可以完成对数据库进行基本的查询、插入、更新和删除操作，以及对数据库表的创建、修改和删除操作。深入理解并掌握SQL的基本语法能够帮助你更好地操作和管理数据库。

## 数据库管理系统

数据库管理系统（DBMS）是一种软件系统，用于管理数据库的创建、访问、管理、检索和更新等任务。它提供了一个结构化的数据存储机制，并提供了一系列的操作和功能，以便用户和应用程序可以方便地使用和维护数据库。数据库管理系统的一些主要特点包括：

1. **数据定义和数据操作语言：**
   - 数据库管理系统提供了用于定义数据结构（例如表、字段等）和操作数据的语言，如SQL（结构化查询语言）。

2. **数据安全性和完整性：**
   - DBMS能够对数据进行权限控制，保护数据不被未经授权的用户访问、修改或删除。它还能确保数据的完整性，通过强制实施数据的约束条件（如主键、外键等）。

3. **并发控制：**
   - DBMS允许多个用户或应用程序同时访问和操作数据库，而不会产生数据冲突或损坏。

4. **数据恢复和备份：**
   - 数据库管理系统提供了备份和恢复机制，以便在数据丢失或损坏时能够进行恢复。

5. **性能优化和查询优化：**
   - DBMS能够根据需要对数据进行索引、优化和缓存，以提高查询速度和系统性能。

> 一些常见的数据库管理系统包括MySQL、Oracle、Microsoft SQL Server、PostgreSQL和MongoDB等。DBMS在实际应用中起着极为重要的作用，我们几乎可以在每个领域都发现它的身影。

## 基本操作

学习数据库的基本管理操作是非常重要的，因为它们是建立和维护数据库的基础知识。以下是一些常见的数据库管理操作，包括创建数据库、创建表、用户管理等：

1. **创建数据库：**
   - 使用CREATE DATABASE语句创建新的数据库。例如，在MySQL中创建名为`mydatabase`的数据库：`CREATE DATABASE mydatabase;`

2. **选择数据库：**
   - 使用USE语句选择要操作的数据库。例如，在MySQL中选择`mydatabase`数据库：`USE mydatabase;`

3. **创建表：**
   - 使用CREATE TABLE语句创建新的表。例如，在MySQL中创建名为`users`的用户表：`CREATE TABLE users (id INT, name VARCHAR(50), email VARCHAR(50));`

4. **查看表结构：**
   - 使用DESCRIBE语句查看表的结构。例如，在MySQL中查看`users`表结构：`DESCRIBE users;`

5. **插入数据：**
   - 使用INSERT INTO语句将数据插入到表中。例如，在MySQL中向`users`表插入一条数据：`INSERT INTO users (id, name, email) VALUES (1, 'John Doe', 'johndoe@example.com');`

6. **更新数据：**
   - 使用UPDATE语句更新表中的数据。例如，在MySQL中更新`users`表中id为1的用户的邮箱地址：`UPDATE users SET email='newemail@example.com' WHERE id=1;`

7. **删除数据：**
   - 使用DELETE FROM语句从表中删除数据。例如，在MySQL中删除`users`表中id为1的用户数据：`DELETE FROM users WHERE id=1;`

8. **用户管理：**
   - 创建用户、授予用户权限、修改用户密码等，这些可以通过数据库管理系统的特定语句或工具进行操作，具体操作方法因不同的数据库管理系统而异，而且同一个数据库管理系统的不同版本也会有差异。

### 示例

当涉及MySQL数据库管理系统时，以下是一些具体的操作案例，涵盖了创建数据库、创建表、插入数据以及用户管理等：

1. **创建数据库：**
   - 使用CREATE DATABASE语句创建一个名为`mydatabase`的新数据库：

   ```sql
   CREATE DATABASE mydatabase;
   ```

2. **选择数据库：**
   - 使用USE语句选择要操作的数据库。例如，选择`mydatabase`数据库：

   ```sql
   USE mydatabase;
   ```

3. **创建表：**
   - 使用CREATE TABLE语句创建名为`users`的用户表，包括id、name和email字段：

   ```sql
   CREATE TABLE users (
       id INT PRIMARY KEY,
       name VARCHAR(50),
       email VARCHAR(50)
   );
   ```

4. **插入数据：**
   - 使用INSERT INTO语句将数据插入到表中。例如，向`users`表插入一条数据：

   ```sql
   INSERT INTO users (id, name, email) VALUES (1, 'John Doe', 'johndoe@example.com');
   ```

5. **更新数据：**
   - 使用UPDATE语句更新表中的数据。例如，更新`users`表中id为1的用户的邮箱地址：

   ```sql
   UPDATE users SET email='newemail@example.com' WHERE id=1;
   ```

6. **删除数据：**
   - 使用DELETE FROM语句从表中删除数据。例如，删除`users`表中id为1的用户数据：

   ```sql
   DELETE FROM users WHERE id=1;
   ```

7. **用户管理：**
   - 创建用户、授予用户权限等操作可以使用MySQL的特定语句或工具进行。例如，创建新用户并授予对`mydatabase`数据库的全部权限：

   ```sql
   CREATE USER '用户名'@'%或者IP' IDENTIFIED BY '密码';
   GRANT ALL PRIVILEGES ON 数据库名.* TO '用户名'@'IP/localhost/%';
   FLUSH PRIVILEGES;
   ```

上面的用户管理案例是基于MySQL 5.7版本的语法。MySQL 8.0版本在用户管理方面进行了一些改变，引入了更加灵活和安全的权限管理系统。

在MySQL 8.0中，创建用户和授予权限的语法略有变化。以下是在MySQL 8.0中创建用户和授予权限的示例：

**创建用户和授予权限：**

```sql
# 创建用户
CREATE USER '用户名'@'%或者IP' IDENTIFIED BY '密码';
# 授权某个用户所有数据库所有权限
GRANT ALL PRIVILEGES ON *.* TO "用户名"@"IP/localhost/%"
# 授予某个用户所有数据库读权限
GRANT SELECT ON *.* TO '用户名'@'%或者IP' ;
# 授予某个用户某个数据库写权限
GRANT INSERT ON `数据库名`.* TO '用户名'@'%或者IP';
FLUSH PRIVILEGES;
```

需要注意的是，从MySQL 8.0开始，推荐使用ALTER USER语句来设置用户属性和权限，而不是直接使用GRANT和REVOKE语句。

::: tip
数据库是一门很深的课程，本节只是简单的介绍了一下它的核心知识点，后续还需要不断的深入学习。学习数据库就跟我们开车一样的，要不断地实践。
:::
