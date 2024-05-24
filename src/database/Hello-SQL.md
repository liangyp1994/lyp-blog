---
title: 数据库SQL
article: false
order: 3
description: 高级 SQL 涉及一些复杂的查询和数据处理技术，这些技术超出了基础 SQL 查询语句所能实现的功能。
---

高级 SQL 涉及一些复杂的查询和数据处理技术，这些技术超出了基础 SQL 查询语句所能实现的功能。

## 特性

1. 子查询：子查询是嵌套在其他查询内部的查询语句。它可以帮助我们从一个查询结果中提取数据并将其用作另一个查询的条件或结果。子查询可以嵌套多层，用于复杂的数据筛选和处理。

2. 连接（Join）：连接是将两个或多个表中的行通过特定的关联条件联合到一起的操作。除了基本的内连接（INNER JOIN），还有外连接（LEFT JOIN、RIGHT JOIN、FULL JOIN）等不同类型的连接。连接是在多个表之间进行数据匹配和关联的重要工具。

3. 聚合函数：聚合函数用于对数据进行汇总和统计，如 SUM、AVG、MAX、MIN 和 COUNT。在高级 SQL 中，我们还可以使用 GROUP BY 子句来根据一个或多个列对数据进行分组，以便对每个组内的数据进行聚合操作。

4. 窗口函数（Window Function）：窗口函数是一种高级的数据处理技术，它可以在不破坏原始查询结果的情况下对结果集进行计算和分析。常见的窗口函数包括 RANK、DENSE_RANK、ROW_NUMBER、LEAD 和 LAG，它们可以用于排序、分组和比较数据。

5. 存储过程和触发器：存储过程是一组预编译的 SQL 语句，可以被存储在数据库中并像单个实体一样调用执行。触发器是与表相关联的一种特殊类型的存储过程，它可以在插入、更新或删除表中的数据时自动触发特定的操作。

## 子查询

子查询通常用于以下几种情况：

1. **WHERE 子句中的子查询**：子查询可以用于 WHERE 子句来筛选数据。

```sql
SELECT * FROM table1 WHERE column1 = (SELECT column2 FROM table2);
```

- **FROM 子句中的子查询**：子查询可以作为 FROM 子句中的一部分，用来提供一个虚拟的数据源。

```sql
SELECT * FROM (SELECT column1, column2 FROM table1) AS subquery;
```

- **SELECT 语句中的子查询**：子查询可以作为 SELECT 语句的一部分，用来生成一个列的值。

```sql
SELECT column1, (SELECT COUNT(*) FROM table2) AS total_rows FROM table1;
```

- **HAVING 子句中的子查询**：子查询可以用于 HAVING 子句来过滤分组后的数据。

```sql
SELECT column1, COUNT(*) FROM table1 GROUP BY column1 HAVING COUNT(*) > (SELECT AVG(column2) FROM table2);
```

> 使用子查询可以使 SQL 查询更灵活、更精确地筛选数据，并进行更复杂的操作。但需要注意的是，子查询的性能可能不如简单的联合查询，因为每次执行查询时都要执行子查询语句。因此，在设计查询时，需要权衡使用子查询的灵活性和性能之间的平衡。

## 连接查询

在连接查询中，常见的连接方式包括 INNER JOIN（内连接）、LEFT JOIN（左外连接）、RIGHT JOIN（右外连接）和 FULL JOIN（完全外连接）等。

- **INNER JOIN（内连接）**：INNER JOIN 会返回只有在连接条件成立的行。

  ```sql
  SELECT column1, column2
  FROM table1
  INNER JOIN table2
  ON table1.column3 = table2.column4;
  ```

- **LEFT JOIN（左外连接）**：LEFT JOIN 会返回左表中的所有行，以及右表中符合连接条件的行。如果右表中没有匹配的行，则会返回 NULL。

  ```sql
  SELECT table1.column1, table2.column2
  FROM table1
  LEFT JOIN table2
  ON table1.column3 = table2.column4;
  ```

- **RIGHT JOIN（右外连接）**：RIGHT JOIN 会返回右表中的所有行，以及左表中符合连接条件的行。如果左表中没有匹配的行，则会返回 NULL。

  ```sql
  SELECT table1.column1, table2.column2
  FROM table1
  RIGHT JOIN table2
  ON table1.column3 = table2.column4;
  ```

- **FULL JOIN（全外连接）**：FULL JOIN 会返回左表和右表中的所有行，无论是否有匹配的行。如果没有匹配的行，则会返回 NULL。

  ```sql
  SELECT table1.column1, table2.column2
  FROM table1
  FULL JOIN table2
  ON table1.column3 = table2.column4;
  ```

## 联合查询

- **UNION**: 使用 UNION 操作符可以合并两个或多个 SELECT 语句的结果集，并去除重复的行。例如：

  ```sql
  SELECT column1 FROM table1
  UNION
  SELECT column2 FROM table2;
  ```

- **UNION ALL**: 使用 UNION ALL 操作符也可以合并两个或多个 SELECT 语句的结果集，但不去除重复的行。这意味着结果集中可能会包含重复的行。例如：

  ```sql
  SELECT column1 FROM table1
  UNION ALL
  SELECT column2 FROM table2;
  ```

- **INTERSECT**: 使用 INTERSECT 操作符可以找出两个 SELECT 语句的结果集的交集。例如：

  ```sql
  SELECT column1 FROM table1
  INTERSECT
  SELECT column2 FROM table2;
  ```

- **MINUS（或 EXCEPT）**: 使用 MINUS（或 EXCEPT）操作符可以找出第一个 SELECT 语句的结果集中去除掉与第二个 SELECT 语句结果集相同部分后的剩余部分。例如：

  ```sql
  SELECT column1 FROM table1
  MINUS
  SELECT column2 FROM table2;
  ```

联合查询使得在一个查询中同时获取和比较多个结果集变得更加方便，同时可以处理不同表或者同一表不同条件下的数据。但需要注意的是，使用 UNION 进行查询可能会影响性能，尤其是当操作大量数据时，因为 UNION 操作符需要对结果集进行排序和去重操作。

## 聚合查询和分组

常见的聚合函数包括：

- SUM：对指定列的值进行求和。
- AVG：对指定列的值进行平均值计算。
- COUNT：对指定列的行数进行计数。
- MAX：获取指定列的最大值。
- MIN：获取指定列的最小值。

以下是一些使用聚合函数的示例：

```sql
SELECT SUM(salary) AS total_salary
FROM employees;

SELECT AVG(age) AS avg_age
FROM students;

SELECT COUNT(*) AS num_customers
FROM customers;

SELECT MAX(stock_price) AS highest_price
FROM stocks;

SELECT MIN(order_date) AS earliest_date
FROM orders;
```

此外，在进行聚合查询时，还可以结合 GROUP BY 子句来对查询结果进行分组。这样可以按照指定的列对数据进行分组，并在每个分组上应用聚合函数。

示例：

```sql
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;
```

## 事务

## 索引

## 视图

## 存储过程
