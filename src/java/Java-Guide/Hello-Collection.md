---
title: Java中的集合框架
article: false
order: 4
description: 在 Java 中，集合框架是一组用于存储和操作对象的类和接口。
---

在 Java 中，集合框架是一组用于存储和操作对象的类和接口。这些集合类提供了一组有用的方法来处理对象的集合，例如列表、集合、映射等。

## 主要接口和类

Java集合框架包括了一系列接口和类，其中一些主要的接口和类包括：

- Collection接口：代表一组对象，包括List（列表）、Set（集合）和Queue（队列）等子接口。
- List接口：有序集合，允许重复元素。常见的实现类包括ArrayList、LinkedList和Vector。
- Set接口：不允许重复元素的集合。常见的实现类包括HashSet、LinkedHashSet和TreeSet。
- Map接口：表示键值对映射关系。常见的实现类包括HashMap、LinkedHashMap和TreeMap。

### ArrayList源码分析

Java集合框架中的一个动态数组实现，实现了List接口，可以根据需要动态增长容量。ArrayList内部使用一个**数组**来存储元素，初始容量为**10**。当数组容量不足时，通过**扩容**机制进行自动扩容，通常是扩容为当前容量的**1.5**倍。同时，在删除元素时，会通过**移动**元素实现，避免数组中出现空洞。

```java
// 元素存储
transient Object[] elementData; 
// 默认容量
private static final int DEFAULT_CAPACITY = 10;
```

#### add

向ArrayList末尾添加一个元素,如果需要扩容则 grow()

```java
public boolean add(E e) {
    modCount++;
    add(e, elementData, size);
    return true;
}

private void add(E e, Object[] elementData, int s) {
    if (s == elementData.length)
        elementData = grow();
    elementData[s] = e;
    size = s + 1;
}
```

#### remove

移除指定位置的元素，同时调用fastRemove()方法删除该元素。

```java
public E remove(int index) {
    Objects.checkIndex(index, size);
    final Object[] es = elementData;

    @SuppressWarnings("unchecked") E oldValue = (E) es[index];
    fastRemove(es, index);

    return oldValue;
}
// 快速删除
private void fastRemove(Object[] es, int i) {
    modCount++;
    final int newSize;
    if ((newSize = size - 1) > i)
        System.arraycopy(es, i + 1, es, i, newSize - i);
    es[size = newSize] = null;
}
```

#### get

获取指定位置的元素

```java
public E get(int index) {
    Objects.checkIndex(index, size);
    return elementData(index);
}
```

#### set

将指定位置的元素替换为新元素

```java
public E set(int index, E element) {
    Objects.checkIndex(index, size);
    E oldValue = elementData(index);
    elementData[index] = element;
    return oldValue;
}
```

#### 扩容

当数组容量不足时，会调用grow()方法进行扩容。在扩容时，会创建一个新的数组，并将原数组中的元素复制到新数组中。扩容大小为当前容量的1.5倍，确保每次扩容都是线性复杂度的。

```java

// 扩容 1.5
private Object[] grow(int minCapacity) {
    int oldCapacity = elementData.length;
    if (oldCapacity > 0 || elementData != DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {
        int newCapacity = ArraysSupport.newLength(oldCapacity,
                minCapacity - oldCapacity, /* 最小 */
                oldCapacity >> 1           /* preferred growth */);
        return elementData = Arrays.copyOf(elementData, newCapacity);
    } else {
        return elementData = new Object[Math.max(DEFAULT_CAPACITY, minCapacity)];
    }
}

```

#### 迭代器

ArrayList实现了Iterator接口，通过调用iterator()方法可以获取迭代器用于遍历ArrayList中的元素。

```java
// 获取迭代器
Iterator<String> iterator = list.iterator();

// 使用迭代器遍历集合元素
while(iterator.hasNext()) {
    String element = iterator.next();
    System.out.println(element);
}
```

> 相比直接通过list.remove进行元素删除，使用迭代器可以防止出现 数组越界异常，迭代器是间接操作list元素的。

### LinkedList源码分析

LinkedList 是 Java 中的一个双向链表实现的集合类，它实现了 List、Queue 和 Deque 接口。

类定义

```java
public class LinkedList<E>
    extends AbstractSequentialList<E>
    implements List<E>, Deque<E>, Cloneable, java.io.Serializable
```

属性

```java
transient int size = 0;

/**
 * Pointer to first node.
 */
transient Node<E> first;

/**
 * Pointer to last node.
 */
transient Node<E> last;
```

#### 链表节点

```java
private static class Node<E> {
    E item;
    Node<E> next;
    Node<E> prev;

    Node(Node<E> prev, E element, Node<E> next) {
        this.item = element;
        this.next = next;
        this.prev = prev;
    }
}
```

#### 添加元素

```java
public boolean add(E e) {
    linkLast(e);
    return true;
}

/**
 * 添加到尾部.
 */
void linkLast(E e) {
    final Node<E> l = last;
    final Node<E> newNode = new Node<>(l, e, null);
    last = newNode;
    if (l == null)
        first = newNode;
    else
        l.next = newNode;
    size++;
    modCount++;
}
```

#### 获取指定元素

```java
public E get(int index) {
    checkElementIndex(index);
    return node(index).item;
}

Node<E> node(int index) {
    // assert isElementIndex(index);

    if (index < (size >> 1)) {
        Node<E> x = first;
        for (int i = 0; i < index; i++)
            x = x.next;
        return x;
    } else {
        Node<E> x = last;
        for (int i = size - 1; i > index; i--)
            x = x.prev;
        return x;
    }
}

private void checkElementIndex(int index) {
    if (!isElementIndex(index))
        throw new IndexOutOfBoundsException(outOfBoundsMsg(index));
}

private boolean isElementIndex(int index) {
    return index >= 0 && index < size;
}
```

> 为了加快查找元素的速度，会先判断index是在size的前半段还是后半段，以此决定是从头部还是尾部开始遍历。

#### 删除元素

```java
public E remove(int index) {
    checkElementIndex(index);
    return unlink(node(index));
}

E unlink(Node<E> x) {
    // assert x != null;
    final E element = x.item;
    final Node<E> next = x.next;
    final Node<E> prev = x.prev;

    if (prev == null) {
        first = next;
    } else {
        prev.next = next;
        x.prev = null;
    }

    if (next == null) {
        last = prev;
    } else {
        next.prev = prev;
        x.next = null;
    }

    x.item = null;
    size--;
    modCount++;
    return element;
}
```

> 链表里面删除一个元素要比数组删除一个元素更方便，因为结构的差异，但在查询上明显数组会更有优势。

### HashMap源码分析

HashMap 是 Java 中常用的基于**哈希表**实现的 Map 接口的实现类之一。

#### 初始化

```java
static final int DEFAULT_INITIAL_CAPACITY = 1 << 4;
// 链表长度阈值
static final int TREEIFY_THRESHOLD = 8;
```

#### 节点

```java
static class Node<K,V> implements Map.Entry<K,V> {
    final int hash;
    final K key;
    V value;
    Node<K,V> next;

    Node(int hash, K key, V value, Node<K,V> next) {
        this.hash = hash;
        this.key = key;
        this.value = value;
        this.next = next;
    }

    public final K getKey()        { return key; }
    public final V getValue()      { return value; }
    public final String toString() { return key + "=" + value; }

    public final int hashCode() {
        return Objects.hashCode(key) ^ Objects.hashCode(value);
    }

    public final V setValue(V newValue) {
        V oldValue = value;
        value = newValue;
        return oldValue;
    }

    public final boolean equals(Object o) {
        if (o == this)
            return true;

        return o instanceof Map.Entry<?, ?> e
                && Objects.equals(key, e.getKey())
                && Objects.equals(value, e.getValue());
    }
}
```

除了Node还有TreeNode ，红黑树节点

- rotateLeft 和 rotateRight：红黑树的左旋和右旋操作，用于保持红黑树的平衡。
- balanceInsertion 和 balanceDeletion：红黑树的插入和删除操作时，需要保持红黑树的性质，这两个方法用于在插入和删除元素后调整红黑树的平衡。
- checkInvariants：检查红黑树的性质是否满足，包括父子节点关系、颜色是否符合规则等。

checkInvariants

```java
/**
 * 递归检查红黑树的不变性。
 * 
 * @param t 要检查不变性的 TreeNode<K,V>
 * @return 如果维护了不变性则返回 true，否则返回 false
 */
static <K,V> boolean checkInvariants(TreeNode<K,V> t) {
    // 获取 t 的父节点、左子节点、右子节点、前驱节点和后继节点的引用
    TreeNode<K,V> tp = t.parent, tl = t.left, tr = t.right,
        tb = t.prev, tn = (TreeNode<K,V>)t.next;
    
    // 检查 t 的前驱节点的 next 指针是否指向 t
    if (tb != null && tb.next != t)
        return false;
    
    // 检查 t 的后继节点的 prev 指针是否指向 t
    if (tn != null && tn.prev != t)
        return false;
    
    // 检查 t 的父节点是否正确，并且 t 不是其父节点的左子节点或右子节点
    if (tp != null && t != tp.left && t != tp.right)
        return false;
    
    // 检查 t 的左子节点的父节点是否为 t，且哈希值小于 t 的哈希值
    if (tl != null && (tl.parent != t || tl.hash > t.hash))
        return false;
    
    // 检查 t 的右子节点的父节点是否为 t，且哈希值大于 t 的哈希值
    if (tr != null && (tr.parent != t || tr.hash < t.hash))
        return false;
    
    // 如果 t 是红色节点且左右子节点均为红色，则违反红黑树的性质
    if (t.red && tl != null && tl.red && tr != null && tr.red)
        return false;
    
    // 递归检查 t 的左子节点和右子节点的不变性
    if (tl != null && !checkInvariants(tl))
        return false;
    if (tr != null && !checkInvariants(tr))
        return false;
    
    return true; // 维护了所有的不变性
}
```

rotateLeft

```java
static <K,V> TreeNode<K,V> rotateLeft(TreeNode<K,V> root,
                                      TreeNode<K,V> p) {
    TreeNode<K,V> r, pp, rl;
    if (p != null && (r = p.right) != null) {
        // 如果p的右子节点r的左子节点rl存在
        if ((rl = p.right = r.left) != null)
            // 将rl的父节点指向p
            rl.parent = p;
        // 如果r的父节点为空
        if ((pp = r.parent = p.parent) == null)
            // 将r设为根节点并涂黑（红黑树的性质）
            (root = r).red = false;
        else if (pp.left == p)
            pp.left = r;
        else
            pp.right = r;
        r.left = p;
        p.parent = r;
    }
    return root;
}
```

rotateRight

```java
static <K,V> TreeNode<K,V> rotateRight(TreeNode<K,V> root,
                                               TreeNode<K,V> p) {
    TreeNode<K,V> l, pp, lr;
    if (p != null && (l = p.left) != null) {
        if ((lr = p.left = l.right) != null) // 如果p的左子节点l的右子节点存在
            lr.parent = p; // 将lr的父节点指向p
        if ((pp = l.parent = p.parent) == null) // 如果l的父节点为空
            (root = l).red = false; // 将l设为根节点并涂黑
        else if (pp.right == p)
            pp.right = l;
        else
            pp.left = l;
        l.right = p;
        p.parent = l;
    }
    return root;
}
```

balanceInsertion 插入节点

```java
static <K,V> TreeNode<K,V> balanceInsertion(TreeNode<K,V> root,
                                            TreeNode<K,V> x) {
    x.red = true; // 插入节点标记为红色
    for (TreeNode<K,V> xp, xpp, xppl, xppr;;) {
        if ((xp = x.parent) == null) { // 如果父节点为空
            x.red = false; // 根节点涂黑
            return x;
        } else if (!xp.red || (xpp = xp.parent) == null) // 如果父节点是黑色或者祖父节点为空，返回根节点
            return root;
        if (xp == (xppl = xpp.left)) { // 如果父节点是祖父节点的左子节点
            if ((xppr = xpp.right) != null && xppr.red) { // 如果叔父节点存在且为红色
                xppr.red = false; // 将叔父节点涂黑
                xp.red = false; // 将父节点涂黑
                xpp.red = true; // 将祖父节点涂红
                x = xpp; // 将节点 x 移动到祖父节点位置
            } else {
                if (x == xp.right) { // 如果节点 x 是父节点的右子节点
                    root = rotateLeft(root, x = xp); // 执行左旋操作
                    xpp = (xp = x.parent) == null ? null : xp.parent; // 更新节点指针
                }
                if (xp != null) {
                    xp.red = false; // 父节点涂黑
                    if (xpp != null) {
                        xpp.red = true; // 祖父节点涂红
                        root = rotateRight(root, xpp); // 执行右旋操作
                    }
                }
            }
        } else { // 如果父节点是祖父节点的右子节点
            if (xppl != null && xppl.red) { // 如果叔父节点存在且为红色
                xppl.red = false; // 将叔父节点涂黑
                xp.red = false; // 将父节点涂黑
                xpp.red = true; // 将祖父节点涂红
                x = xpp; // 将节点 x 移动到祖父节点位置
            } else {
                if (x == xp.left) { // 如果节点 x 是父节点的左子节点
                    root = rotateRight(root, x = xp); // 执行右旋操作
                    xpp = (xp = x.parent) == null ? null : xp.parent; // 更新节点指针
                }
                if (xp != null) {
                    xp.red = false; // 父节点涂黑
                    if (xpp != null) {
                        xpp.red = true; // 祖父节点涂红
                        root = rotateLeft(root, xpp); // 执行左旋操作
                    }
                }
            }
        }
    }
}
```

balanceDeletion 删除节点

```java
static <K,V> TreeNode<K,V> balanceDeletion(TreeNode<K,V> root,
                                           TreeNode<K,V> x) {
    for (TreeNode<K,V> xp, xpl, xpr;;) {
        if (x == null || x == root) // 如果节点 x 为空或者是根节点，返回根节点
            return root;
        else if ((xp = x.parent) == null) { // 如果父节点为空
            x.red = false; // 将节点 x 涂为黑色
            return x;
        }
        else if (x.red) { // 如果节点 x 为红色
            x.red = false; // 将节点 x 涂为黑色
            return root;
        }
        else if ((xpl = xp.left) == x) { // 如果节点 x 是父节点的左子节点
            if ((xpr = xp.right) != null && xpr.red) { // 如果右子节点存在且为红色
                xpr.red = false; // 将右子节点涂为黑色
                xp.red = true; // 将父节点涂为红色
                root = rotateLeft(root, xp); // 执行左旋操作
                xpr = (xp = x.parent) == null ? null : xp.right; // 更新节点指针
            }
            if (xpr == null)
                x = xp;
            else {
                TreeNode<K,V> sl = xpr.left, sr = xpr.right;
                if ((sr == null || !sr.red) &&
                    (sl == null || !sl.red)) {
                    xpr.red = true;
                    x = xp;
                }
                else {
                    if (sr == null || !sr.red) {
                        if (sl != null)
                            sl.red = false;
                        xpr.red = true;
                        root = rotateRight(root, xpr);
                        xpr = (xp = x.parent) == null ?
                            null : xp.right;
                    }
                    if (xpr != null) {
                        xpr.red = (xp == null) ? false : xp.red;
                        if ((sr = xpr.right) != null)
                            sr.red = false;
                    }
                    if (xp != null) {
                        xp.red = false;
                        root = rotateLeft(root, xp);
                    }
                    x = root;
                }
            }
        }
        else { // 对称处理右子树
            if (xpl != null && xpl.red) { // 如果左子节点存在且为红色
                xpl.red = false; // 将左子节点涂为黑色
                xp.red = true; // 将父节点涂为红色
                root = rotateRight(root, xp); // 执行右旋操作
                xpl = (xp = x.parent) == null ? null : xp.left; // 更新节点指针
            }
            if (xpl == null)
                x = xp;
            else {
                TreeNode<K,V> sl = xpl.left, sr = xpl.right;
                if ((sl == null || !sl.red) &&
                    (sr == null || !sr.red)) {
                    xpl.red = true;
                    x = xp;
                }
                else {
                    if (sl == null || !sl.red) {
                        if (sr != null)
                            sr.red = false;
                        xpl.red = true;
                        root = rotateLeft(root, xpl);
                        xpl = (xp = x.parent) == null ?
                                    null : xp.left;
                    }
                    if (xpl != null) {
                        xpl.red = (xp == null) ? false : xp.red;
                        if ((sl = xpl.left) != null)
                            sl.red = false;
                    }
                    if (xp != null) {
                        xp.red = false;
                        root = rotateRight(root, xp);
                    }
                    x = root;
                }
            }
        }
    }
}
```

#### 获取V

```java
public V get(Object key) {
    Node<K,V> e;
    return (e = getNode(key)) == null ? null : e.value;
}

final Node<K,V> getNode(Object key) {
    Node<K,V>[] tab; Node<K,V> first, e; int n, hash; K k;
    if ((tab = table) != null && (n = tab.length) > 0 &&
        (first = tab[(n - 1) & (hash = hash(key))]) != null) {
        if (first.hash == hash && // always check first node
            ((k = first.key) == key || (key != null && key.equals(k))))
            return first;
        if ((e = first.next) != null) {
            if (first instanceof TreeNode)
                return ((TreeNode<K,V>)first).getTreeNode(hash, key);
            do {
                if (e.hash == hash &&
                    ((k = e.key) == key || (key != null && key.equals(k))))
                    return e;
            } while ((e = e.next) != null);
        }
    }
    return null;
}
```

1. 数据结构：HashMap 内部基于数组和链表（或红黑树）实现。HashMap 内部维护了一个数组 table，每个元素是一个链表或红黑树，用来存储键值对。当链表中的节点数超过一定阈值（TREEIFY_THRESHOLD）时，会将链表转换为红黑树，以提高性能。

2. 散列函数：HashMap 使用 key 的 hashCode() 方法来计算哈希码（hash code），再经过一系列处理得到数组中的索引位置。HashMap 中的 hash() 方法和 indexFor() 方法用来处理哈希码，计算数组索引位置。

3. 冲突解决：当不同的 key 映射到了相同的数组索引位置时，会产生哈希碰撞，HashMap 通过在链表或红黑树的形式解决冲突。如果链表长度较短，HashMap 会保持使用链表来存储键值对；当链表长度较长时，HashMap 会将链表转化为红黑树。

4. 容量扩展：当 HashMap 中的元素个数超过容量乘以加载因子（load factor）时，会触发容量扩展。扩容操作会重新计算哈希码，重新分配元素到新的数组中，这是一个开销较大的操作。

5. 注意事项：由于 HashMap 是非线程安全的，如果需要在多线程环境下使用，可以考虑使用 ConcurrentHashMap 或对 HashMap 进行加锁处理。

通过分析 HashMap 的源码实现原理，可以更好地理解其内部工作原理和使用方式，为我们在实际开发中合理使用 HashMap 提供帮助。HashMap 涉及的源码比较复杂，可以细分模块逐步深入研究。

## 特点和优势

Java集合框架的特点和优势包括：

- 动态大小：集合框架允许动态地添加或删除元素，无需预先指定容量大小。
- 泛型支持：集合框架支持泛型，提高了类型安全性和代码的可读性。
- 高性能：集合框架提供了高效的实现，各种数据结构能够满足不同场景下的性能需求。
- 丰富的操作方法：集合框架提供了丰富的方法，包括增删改查、排序、遍历等，方便开发人员操作集合。

## 遍历集合

遍历集合是使用Java集合框架的常见操作之一，通常可以使用迭代器、foreach循环或Lambda表达式进行集合遍历。

## Java 8 新特性

Java 8对集合框架进行了增强，引入了流（Stream）API和Lambda表达式，使集合的操作更加便利和简洁。

## 各种集合类的选择

根据不同的需求和场景，选择合适的集合类是非常重要的。了解各种集合类的特点和适用范围可以提高代码的效率和质量。
