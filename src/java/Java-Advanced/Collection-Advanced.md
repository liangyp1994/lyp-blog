---
title: Java中的集合框架常见问题原理解析
article: false
order: 1
---

## 数组越界

- 为什么不能在循环中删除集合中的元素？
从异常 ConcurrentModificationException 开始分析

```java
final void checkForComodification() {
      if (modCount != expectedModCount)
        throw new ConcurrentModificationException();
}

```

> modCount初始为0，expectedModCount初始等于modCount, 根据一直结果我们知道通过迭代器能避免抛出异常，说明迭代器不会修改modCount,而正常集合的删除操作会修改
ArrayList 代码如下:

```java
private void fastRemove(Object[] es, int i) {
    modCount++;
    final int newSize;
    if ((newSize = size - 1) > i)
        System.arraycopy(es, i + 1, es, i, newSize - i);
    es[size = newSize] = null;
}

public void remove() {
    if (lastRet < 0)
        throw new IllegalStateException();
    checkForComodification();

    try {
        ArrayList.this.remove(lastRet);
        cursor = lastRet;
        lastRet = -1;
        expectedModCount = modCount;
    } catch (IndexOutOfBoundsException ex) {
        throw new ConcurrentModificationException();
    }
}


final void checkForComodification() {
    if (modCount != expectedModCount)
        throw new ConcurrentModificationException();
}
```

> 可以看到迭代器的remove()方法保证了expectedModCount和modCount是相等的。快速失败机制是当多个线程同时对集合中的内容进行修改可能会抛出越界异常，而安全失败机制则是会拷贝一份集合的内容，而后对该内容操作，但这也导致期间修改的数据无法同步，这也是多线程下必须要牺牲的。

## 对比几种常用的集合

ArrayList：底层是数组，在该基础上添加了扩容机制，
LinkedList：底层是双向链表，因为链表的结构需要保存前后指针所以同样的内容空间要更大
