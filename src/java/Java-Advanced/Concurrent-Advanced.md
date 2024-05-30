---
title: Java中的并发编程
article: false
order: 2
description: Java中的并发编程是指通过多线程来实现并发执行的编程方式。在Java中，可以通过`java.util.concurrent`包提供的类来实现并发编程，以便处理多个任务同时执行的情况。
---

## 写在前面

并发编程是Java程序员在面试中绕不开的一个问题，并发和并行就不再解释了，并发编程我个人理解就是老板想要在不增加成本的前提下让效率提高。本来手底下就一个员工，他也没有三头六臂，那要怎么让他一天干更多的活，无非就是同时干多件事情。举个研发过程的例子，本来正常流程是 开发 - 测试 - 部署，可是呢因为开发周期比较长，领导就要求我们开发一部分就提测，这样下来测试提前介入，减少了整个研发周期。

## 多线程基础

- 了解线程的概念

线程：操作系统能够进行运算的最小单元。它被包含在**进程**之中，是进程中的实际运作单元。一条线程指的是进程中一个单一顺序的控制流，是一个程序执行流中的最小单元。它是否运作由操作系统决定，而多个线程会同时访问和操作它们所属进程的资源，这就导致了开发中经常提到的一个词语 “高并发”，并发之所以高就在于线程的竞争大。

进程：程序,简单理解我们启动一个Java的War包，就是一个进程，操作系统会为每个进程分配相应的资源 如内存大小

![任务管理器](https://lianyp.fun/picture/mark-text-doc/picture/2024/05/27/screen-2024-05-27_15-36-57.891.png)

- 线程的生命周期

线程的生命周期描述了线程从创建到结束的整个过程。

**新建状态（New）：** 线程对象已经被创建，但还没有调用它的 `start()` 方法来启动线程。
**就绪状态（Runnable）：** 线程已经调用了 `start()` 方法，但是还在等待系统分配资源给它，使得线程可以运行。在就绪状态下的线程并不一定立即执行，具体是否执行取决于系统的调度器。
**运行状态（Running）：** 线程已经被系统调度器选中，处于活动状态，执行线程的 `run()` 方法。
**阻塞状态（Blocked）：** 线程因为某些原因暂时停止执行，等待特定的条件出现或资源释放。比如等待 I/O 操作、获取锁等。当条件满足时，线程会从阻塞状态转换到就绪状态。
**等待/无限期等待状态（Waiting/Timed Waiting）：** 线程执行了某些方法，设置了等待条件，使线程处于等待状态。在等待一定条件后或等待超时后，线程将会重新进入就绪状态。
**被唤醒状态（Blocked/Waiting to Runnable）：** 线程处于阻塞或等待状态，等待某个条件满足，一旦条件满足，线程将被唤醒，并重新进入就绪状态。
**死亡状态（Dead）：** 线程执行完了 `run()` 方法的代码或者遇到异常而终止，线程生命周期结束。

### 线程的创建和相关操作

- 创建线程

继承 Thread 类

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("MyThread is running");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}
```

实现 Runnable 接口

```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("MyRunnable is running");
    }
}

public class Main {
    public static void main(String[] args) {
        MyRunnable myRunnable = new MyRunnable();
        Thread thread = new Thread(myRunnable);
        thread.start();
    }
}
```

实现 Callable 接口

```java
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

class MyCallable implements Callable<String> {
    @Override
    public String call() throws Exception {
        return "Hello, I am a Callable thread";
    }
}

public class Main {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newSingleThreadExecutor();
        Callable<String> callable = new MyCallable();
        Future<String> future = executor.submit(callable);

        try {
            String result = future.get();
            System.out.println(result);
        } catch (Exception e) {
            e.printStackTrace();
        }

        executor.shutdown();
    }
}
```

在Java中，除了创建线程，还有一些常用的线程操作，如下所述：

- 线程睡眠（Thread.sleep）：通过让线程暂停一段时间来控制线程的执行速度。

```java
try {
    Thread.sleep(1000); // 线程暂停1秒
} catch (InterruptedException e) {
    e.printStackTrace();
}
```

- 线程加入（Thread.join）：等待线程的结束，主线程等待被调用线程结束后才会继续执行。

```java
Thread thread = new Thread(() -> {
    System.out.println("Child thread is running");
});
thread.start();
try {
    thread.join(); // 主线程等待该线程执行完成
} catch (InterruptedException e) {
    e.printStackTrace();
}
```

- 线程中断（Thread.interrupt）：用于中断线程的执行，设置线程的中断标志，在线程中可以通过检查这个标志来执行适当的操作，通常会抛出中断异常。

```java
Thread thread = new Thread(() -> {
    while (!Thread.currentThread().isInterrupted()) {
        // do something
    }
});
thread.start();
thread.interrupt(); // 中断线程的执行
```

- 线程优先级（Thread.setPriority）：用于设置线程的执行优先级，范围从1到10，默认为5，较高优先级的线程有更大的几率得到CPU时间片。

```java
Thread thread1 = new Thread();
Thread thread2 = new Thread();
thread1.setPriority(Thread.MAX_PRIORITY); // 设置线程1为最高优先级
thread2.setPriority(Thread.MIN_PRIORITY); // 设置线程2为最低优先级
```

- wait()方法
  wait()方法用于使当前线程进入等待状态，同时释放对象的锁。当一个线程调用对象的wait()方法时，它就会暂时挂起，直到其它线程调用相同对象的notify()或notifyAll()方法来唤醒它（或者等待一定的时间）。

```java
synchronized (obj) {
    try {
        obj.wait(); // 线程进入等待状态
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
}
```

- notify()方法
  notify()方法用于唤醒一个正在等待对象锁的线程。调用notify()方法会通知等待该对象锁的线程，使之继续执行。如果有多个线程在等待，只有一个会被唤醒。

```java
synchronized (obj) {
    obj.notify(); // 唤醒一个等待的线程
}
```

- notifyAll()方法
  notifyAll()方法用于唤醒所有等待该对象锁的线程。调用notifyAll()方法会通知所有等待该对象锁的线程，使它们都继续执行。

```java
synchronized (obj) {
    obj.notifyAll(); // 唤醒所有等待的线程
}
```

### 线程同步

- 线程同步（synchronized关键字、Lock接口）：通过同步机制来确保多个线程之间的数据操作的安全性。

```java
class MyThread implements Runnable {

    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    @Override
    public void run() {
        for (int i = 0; i < 1000; i++) {
            increment();
        }
    }
}
```

### 应用场景

比如 在进行IO操作的时候，等待过程中进行CPU切换，从而同时做多件事情。

### 死锁

-

## 进阶

### 并发编程的常见问题

### 并发编程的高级概念

### Java并发库

## 实践
