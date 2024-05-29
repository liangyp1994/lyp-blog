---
title: Java基础语法
article: false
order: 1
description: 代码尽头皆为空,学无止境乃微风。编程途中诡辩多,唯有小道可成功。
---

## 变量和数据类型

> [Java](https://www.java.com/zh-CN/) 是一种静态类型语言，需要在使用变量之前声明其数据类型(强类型的编程语言)。
常见的数据类型包括整型（int, long）、浮点型（float, double）、字符型（char）、布尔型（boolean）等。
变量必须先**声明**后使用，可以在声明时**初始化**，也可以单独初始化。

下面详细讲解一下 Java 中的变量和数据类型：

### 变量

- **变量**：在程序中用来存储数据的内存空间的名称，就是一种标识符，用来标识存储的值。
- **声明变量**：在 Java 中声明变量需指定变量的数据类型和变量名，如 `int age;`。
- **初始化变量**：变量声明后需要赋初值才能使用，如 `int age = 25;`。
- **赋值操作**：使用 `=` 运算符给变量赋值，如 `age = 30;`。
- **变量名规则**：变量名必须是合法的标识符，由字母、数字、下划线和美元符组成，不能以数字开头。

### 数据类型

Java 中的数据类型分为两大类：基本数据类型（Primitive Data Types）和引用数据类型（Reference Data Types）。

#### 基本数据类型

Java 的基本数据类型分为以下几种：

1. **整型**：用于存储整数类型的数据。包括 byte、short、int、long。
   - `byte`：1 字节，-128 到 127。
   - `short`：2 字节，-32768 到 32767。
   - `int`：4 字节，-2^31 到 2^31-1。
   - `long`：8 字节，-2^63 到 2^63-1。

2. **浮点型**：用于存储浮点数，包括 float 和 double。
   - `float`：4 字节，有效位数约 6-7 位。
   - `double`：8 字节，有效位数约 15 位。

3. **字符型**：用于存储单个字符，char 类型占用 2 字节，通常用单引号表示，如 `'A'`。
4. **布尔型**：用于表示逻辑值，只有两个取值：true 和 false，主要用于逻辑判断。

#### 引用数据类型

Java 中的引用数据类型包括类、接口、数组等，在声明变量时实际上存储的是对象的引用，而不是对象本身。

#### 数据类型转换

Java 中的数据类型转换分为自动类型转换和强制类型转换。自动类型转换是指将一个小范围的数据类型转换为大范围的数据类型，如将 int 转换为 double；强制类型转换则是将一个大范围的数据类型转换为小范围的数据类型，需要显示地进行转换操作。

## 运算符

> Java 支持常见的算术运算符（+、-、*、/）以及逻辑运算符（&&、||、！）等。
注意运算符的优先级和结合性，可以通过括号来改变运算次序。

以下是一些常见的 Java 运算符及其详细描述：

### 算术运算符

- **+**：相加
- **-**：相减
- **\***：相乘
- **/**：相除
- **%**：求余（取模）

### 关系运算符

- **==**：检查两个操作数是否相等
- **!=**：检查两个操作数是否不相等
- **>**：检查左操作数是否大于右操作数
- **<**：检查左操作数是否小于右操作数
- **>=**：检查左操作数是否大于或等于右操作数
- **<=**：检查左操作数是否小于或等于右操作数

### 逻辑运算符

- **&&**：逻辑与
- **||**：逻辑或
- **!**：逻辑非

### 位运算符

- **&**：按位与
- **|**：按位或
- **^**：按位异或（相同则为0，不同则为1）
- **~**：按位取反（一元操作符，翻转操作数的位）

### 赋值运算符

- **=**：赋值运算符
- **+=, -=, \*=, /=, %=**：复合赋值运算符，例如 `a += 5` 相当于 `a = a + 5`

### 其他运算符

- **?:**：条件运算符，也称为三元运算符
- **instanceof**：用于在运行时确定对象是否是特定类的一个实例或子类的实例

### 优先级和结合性

运算符拥有优先级和结合性，它们决定了表达式中运算的顺序。拥有较高优先级的运算符首先执行。当优先级相同时，结合性用于确定左关联性还是右关联性。例如，`*` 拥有高于 `+` 的优先级，所以 `2 * 3 + 4` 将先执行乘法，再执行加法。

示例代码如下：

```java
public class OperatorExample {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        
        // 算术运算符示例
        System.out.println("Arithmetic Operators:");
        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("b / a = " + (b / a));
        System.out.println("b % a = " + (b % a));

        // 赋值运算符示例
        System.out.println("\nAssignment Operators:");
        a += b;
        System.out.println("a += b: " + a);
        a -= b;
        System.out.println("a -= b: " + a);
        a *= b;
        System.out.println("a *= b: " + a);
        a /= b;
        System.out.println("a /= b: " + a);
        a %= b;
        System.out.println("a %= b: " + a);

        // 比较运算符示例
        System.out.println("\nComparison Operators:");
        System.out.println("a == b: " + (a == b));
        System.out.println("a != b: " + (a != b));
        System.out.println("a > b: " + (a > b));
        System.out.println("a < b: " + (a < b));
        System.out.println("b >= a: " + (b >= a));
        System.out.println("b <= a: " + (b <= a));

        // 逻辑运算符示例
        boolean x = true;
        boolean y = false;
        System.out.println("\nLogical Operators:");
        System.out.println("x && y: " + (x && y));
        System.out.println("x || y: " + (x || y));
        System.out.println("!x: " + (!x));
    }
}
```

## 控制流

> Java 支持条件语句（if-else、switch）、循环语句（for、while、do-while）、以及跳转语句（break、continue、return）等。
熟练运用这些控制流语句可以实现不同的逻辑控制。

控制流主要包括顺序结构、选择结构和循环结构。

### 顺序结构

顺序结构是程序中最基本的控制流结构，指的是代码按照书写的顺序依次执行。在Java中，代码默认按照这样的顺序执行。例如：

```java
int a = 10;
int b = 20;
int sum = a + b;
System.out.println("The sum of a and b is: " + sum);
```

### 选择结构

选择结构用于在程序中根据不同条件执行不同的代码块。在Java中，常见的选择结构包括if-else语句和switch语句。

- if-else语句：

```java
int x = 10;
if (x > 5) {
    System.out.println("x is greater than 5");
} else {
    System.out.println("x is less than or equal to 5");
}
```

- switch语句：

```java
int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    // ... 更多case
    default:
        System.out.println("Invalid day");
}
```

### 循环结构

循环结构用于重复执行代码块，直到某个条件不再满足为止。在Java中，主要有for循环、while循环和do-while循环。

- for循环：

```java
for (int i = 0; i < 5; i++) {
    System.out.println("This is iteration " + i);
}
```

- while循环：

```java
int i = 0;
while (i < 5) {
    System.out.println("This is iteration " + i);
    i++;
}
```

- do-while循环：

```java
int i = 0;
do {
    System.out.println("This is iteration " + i);
    i++;
} while (i < 5);
```

### 跳转结构

跳转结构用于改变程序的正常执行顺序。Java中的跳转结构包括break、continue和return。

- break语句：在循环或switch语句中终止执行，并跳出当前代码块。
- continue语句：在循环中跳过当前迭代，继续下一次迭代。
- return语句：从方法中返回值并终止方法的执行。

## 数组

> Java 中的数组是一种**引用类型**，需要使用 new 关键字来创建。
数组的**长度是固定的**，可以通过索引来访问数组元素。

在Java中，数组是一种用来存储**相同类型元素**的数据结构。数组允许程序员在一个变量中存储多个相同类型的元素，通过索引可以访问和操作数组中的元素。下面是关于Java数组的详细讲解：

### 声明数组

在Java中，数组的声明方式为指定元素类型和数组名，例如：

```java
int[] numbers; // 声明int类型的数组
String[] names; // 声明String类型的数组
```

### 创建数组

在声明数组后，需要为数组分配内存空间。可以使用new关键字来创建数组，指定数组的大小，例如：

```java
numbers = new int[5]; // 创建一个包含5个元素的整型数组
names = new String[3]; // 创建一个包含3个元素的字符串数组
```

也可以在声明的同时完成数组的创建：

```java
int[] numbers = new int[5]; // 声明并创建包含5个元素的整型数组
String[] names = new String[3]; // 声明并创建包含3个元素的字符串数组
```

### 初始化数组

数组的元素可以在创建后进行初始化，可以通过索引来访问和修改数组中的元素。例如：

```java
numbers[0] = 10; // 设置数组numbers的第一个元素为10
names[1] = "John"; // 设置数组names的第二个元素为"John"
```

### 数组的长度

可以使用数组的length属性获取数组的长度，例如：

```java
int size = numbers.length; // 获取数组numbers的长度
```

### 遍历数组

可以使用for循环或者增强for循环遍历数组中的元素，例如：

```java
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]); // 遍历输出数组numbers中的元素
}

for (String name : names) {
    System.out.println(name); // 遍历输出数组names中的元素
}
```

### 多维数组

除了一维数组，Java还支持多维数组，例如二维数组：

```java
int[][] matrix = new int[3][3]; // 创建一个3行3列的二维数组
```

### 数组的缺点

在 Java 中，数组的大小是固定的，一旦初始化长度后不能改变。同时，数组也没有提供一些高级的操作方法，例如添加或删除元素。为了解决这些问题，Java 中提供了集合（Collection）框架来代替数组，例如 ArrayList、LinkedList 等。

## 类和对象

> Java 是一种面向对象的编程语言，基本的程序结构是类和对象。
类是对象的模板，对象是类的实例。
类包括属性（成员变量）和方法（成员函数）两部分。

在Java中，类和对象是面向对象编程的核心概念。下面是关于Java类和对象的详细讲解：

### 类的定义

在Java中，可以使用关键字 "class" 来定义类。类包括数据成员和方法成员，用来描述对象的属性和行为。例如：

```java
public class Car {
    // 数据成员
    String brand;
    int year;

    // 方法成员
    void start() {
        System.out.println("The car is starting");
    }
}
```

### 对象的创建

类是对象的模板，在程序中需要创建对象来使用类所描述的属性和行为。可以使用关键字 "new" 来创建对象，例如：

```java
Car myCar = new Car(); // 创建Car类的对象myCar
```

### 对象的访问

创建对象后，可以使用点号(.)来访问对象的属性和方法，例如：

```java
myCar.brand = "Toyota"; // 设置myCar对象的品牌为Toyota
myCar.start(); // 调用myCar对象的start方法
```

### 类的构造方法

构造方法用于在创建对象时初始化对象的属性。构造方法与类同名，没有返回类型，并且在使用关键字 "new" 创建对象时自动调用。例如：

```java
public class Car {
    String brand;
    int year;

    // 构造方法
    public Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
}

// 创建对象时调用构造方法
Car myCar = new Car("Toyota", 2021);
```

## 方法

> Java 中的方法是一段完成特定任务的代码块。
可以定义方法来执行特定的功能，并可以通过调用方法来复用代码。

在 Java 编程语言中，方法通常用于在程序中组织和重用代码，使程序更加模块化并提高代码的可维护性。以下是 Java 中方法的一些详细讲解：

### 方法的定义

   在 Java 中，方法的定义通常包括以下部分：

- 访问修饰符：表示谁可以调用该方法，如 public、protected、private 或默认(package-private)。
- 返回类型：方法执行完毕后返回的数据类型，如果不返回任何值则使用关键字 void。
- 方法名：方法的名称，用于调用该方法。
- 参数列表：传递给方法的输入值，可以是零个或多个参数。
- 方法体：包含了方法的实际代码。

   例如：

   ```java
   public int add(int num1, int num2) {
       int sum = num1 + num2;
       return sum;
   }
   ```

### 方法的调用

   可以通过在其他代码中使用方法名以及传递相应的参数来调用方法。例如：

   ```java
   int result = add(5, 3); // 调用 add 方法，并将返回值赋给 result
   ```

### 方法的重载

   在 Java 中，方法允许具有相同的名称，但是参数列表不同的多个版本。这被称为方法重载。重载的方法应该有不同的参数类型、参数个数或参数顺序，但不能仅仅通过返回类型的不同来区分。

### 方法的重写

   当子类继承自父类并在子类中重新定义父类中已有的方法时，称之为方法的重写。重写的方法具有相同的名称、参数列表和返回类型。在运行时，实际上会根据对象的具体类型来调用相应的方法，这被称为运行时多态。

### 方法的访问修饰符

   Java 支持多种访问修饰符，用于控制方法的访问权限。常见的访问修饰符包括 public（公共）、protected（受保护的）、private（私有的）和默认的（包内可见）。

## 包和导入

> 在 Java 中，包（package）是一种用于组织和管理类和接口的文件结构。它允许开发者将相关的类和接口放在一起，并提供了一种命名空间来避免类名和接口名的冲突。Java 的包机制还允许在项目中创建层次化的类库，便于管理和维护。

### 包的定义

包的定义通常放在源文件的最顶部，使用 `package` 关键字加上包名，如下所示：

```java
package com.example.myapp;
```

在这个例子中，`com.example.myapp` 就是包名。

### 包的组织结构

包的组织结构与文件系统的目录结构相对应。例如，包名为 `com.example.myapp` 的类文件应该位于名为 `com/example/myapp` 的目录中。

### 导入

在实际的开发中，我们通常会使用其他包中的类和接口。此时，可以使用 `import` 关键字来导入特定的包、类或接口，从而在源代码中使用它们。

### 显示导入

使用 import 可以显式导入单个类或者整个包中的所有类，如下所示：

```java
import java.util.ArrayList; // 导入 java.util 包中的 ArrayList 类
import java.util.*; // 导入 java.util 包中的所有类
```

### 静态导入

Java 还支持静态导入，通过它可以导入包中的静态成员，使用起来更加方便。例如：

```java
import static java.lang.Math.*; // 导入 java.lang.Math 包中的所有静态成员
```

### 使用包和导入的优势

- 包可以帮助我们组织和管理大量的类和接口。
- 包提供了一种命名空间，防止类和接口之间的名称冲突。
- 导入让我们可以在代码中轻松地使用其他包中的类和接口而不必使用完整的类名。

## 异常处理

> Java 中的异常处理是通过 try-catch-finally 块来实现的。
可以捕获并处理程序运行时可能出现的异常，保证程序的稳定性。
在Java中，异常处理是一种机制，用于处理程序执行过程中可能出现的错误、异常情况或意外情况。异常处理的目的是保障程序的稳定运行，以及提供更好的错误信息和用户体验。下面是Java中异常处理的基本知识：

### 异常的分类

   Java中的异常分为两种：Checked Exception（受检异常）和 Unchecked Exception（非受检异常）。

- Checked Exception 需要在代码中显式地处理或抛出，例如 IOException、SQLException等。
- Unchecked Exception 则是RuntimeException的子类，通常是由编程错误导致的异常，不需要强制处理，例如 NullPointerException、ArrayIndexOutOfBoundsException等。

> 前者在编码过程中IDE就会通过红色波浪线提示，能当即处理，而后者才是程序员经常头疼的，因为没有提示，可能编译或运行过程各种才能发现。

### 异常处理的关键字

   Java中的异常处理主要使用以下关键字和结构：

- try：用于包裹可能会抛出异常的代码块。
- catch：用于捕获并处理try块中抛出的异常。
- finally：用于定义无论是否发生异常都需要执行的代码块。
- throw：用于手动抛出异常。
- throws：用于在方法签名中声明可能抛出的Checked Exception。

### try-catch-finally 结构

   在Java中，使用try-catch-finally结构来处理异常。示例代码如下：

   ```java
   try {
       // 可能会抛出异常的代码
   } catch (ExceptionType1 e1) {
       // 处理ExceptionType1类型的异常
   } catch (ExceptionType2 e2) {
       // 处理ExceptionType2类型的异常
   } finally {
       // 无论是否发生异常都会执行的代码
   }
   ```

### 异常的处理与抛出

   在方法中可以使用throws关键字声明可能会抛出的Checked Exception，也可以使用throw关键字手动抛出异常。示例代码如下：

   ```java
   public void doSomething() throws IOException {
       if (someCondition) {
           throw new IOException("An IO error occurred");
       }
   }
   ```

> 一个`s`,意义相差甚远

### 自定义异常

   Java也支持自定义异常，通过继承Exception或其子类来创建自定义异常类。

> 通常我们项目中会集成 RuntimeException 从而达到业务异常的记录

### 常用的异常类

   Java提供了许多内置的异常类，例如NullPointerException、ArrayIndexOutOfBoundsException、IOException等，这些异常类用于表示各种可能发生的异常情况。
