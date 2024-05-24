---
title: Java中的IO
article: false
description: Java中的IO（Input/Output）指的是用于读取和写入数据的机制。Java提供了丰富而灵活的IO API，用于与文件、网络和其他数据源进行交互。
---

Java中的IO（Input/Output）指的是用于读取和写入数据的机制。Java提供了丰富而灵活的IO API，用于与文件、网络和其他数据源进行交互。Java中的IO通常分为两种类型：字节流和字符流。

## 字节流

字节流以字节为单位进行处理，主要用于处理二进制数据（比如图片、视频等）。Java中常见的字节流类包括：

- InputStream：用于读取字节流的抽象类。
- OutputStream：用于写入字节流的抽象类。
- FileInputStream：用于从文件中读取字节流。
- FileOutputStream：用于向文件写入字节流。

在 Java 中，字节流主要用于处理二进制数据，即以字节为单位进行读取和写入。Java 中的字节流类位于 `java.io` 包中，常见的字节流类包括 InputStream、OutputStream 及它们的子类。

### InputStream 类及其子类

- **InputStream**：是所有字节输入流的抽象基类，定义了基本的读取字节的方法。
- **FileInputStream**：用于从文件中读取字节流。
- **ByteArrayInputStream**：用于从内存中的字节数组中读取数据。
- **DataInputStream**：可以按照基本数据类型来读取数据，例如按照 int、double、boolean 等类型读取数据。

### OutputStream 类及其子类

- **OutputStream**：是所有字节输出流的抽象基类，定义了基本的写入字节的方法。
- **FileOutputStream**：用于向文件中写入字节流。
- **ByteArrayOutputStream**：向内存中的字节数组写入数据。
- **DataOutputStream**：可以按照基本数据类型来写入数据。

### SequenceInputStream

**SequenceInputStream** 类可以把多个输入流串联在一起，顺序读取。

### RandomAccessFile

**RandomAccessFile** 类是一种特殊类型的文件流，既可以读取文件内容，也可以更新文件内容，它支持随机访问文件的内容。

字节流通常用于文件的读写和网络数据传输。在处理二进制数据时，字节流是非常有用的。但需要注意，字节流主要适用于处理字节数据，如果需要处理字符数据，则应使用字符流。

## 字符流

在 Java 中，字符流用于处理字符数据，是以字符为单位进行读取和写入的机制。字符流类位于 `java.io` 包中，常见的字符流类包括 Reader、Writer 及它们的子类。

- Reader：用于读取字符流的抽象类。
- Writer：用于写入字符流的抽象类。
- FileReader：用于从文件中读取字符流。
- FileWriter：用于向文件写入字符流。

### Reader 类及其子类

- **Reader**：是所有字符输入流的抽象基类，定义了基本的读取字符的方法。
- **FileReader**：用于从文件中读取字符流。
- **CharArrayReader**：用于从字符数组中读取数据。
- **BufferedReader**：带有缓冲区的字符输入流，能够提高读取效率。

### Writer 类及其子类

- **Writer**：是所有字符输出流的抽象基类，定义了基本的写入字符的方法。
- **FileWriter**：用于向文件中写入字符流。
- **CharArrayWriter**：用于向字符数组中写入数据。
- **BufferedWriter**：带有缓冲区的字符输出流，能够提高写入效率。

### InputStreamReader 和 OutputStreamWriter

**InputStreamReader** 和 **OutputStreamWriter** 类是字符流与字节流之间的桥梁，提供了将字节流转换为字符流的功能，支持指定字符集编码。

### CharArrayReader 和 CharArrayWriter

**CharArrayReader** 和 **CharArrayWriter** 类用于将数据读写到字符数组，并支持将字符数组中的数据读取和写入。

### StringWriter

**StringWriter** 类用于将字符数据写入到字符串中，常与 PrintWriter 配合使用。

> 字符流通常适用于处理文本文件、网络数据传输等场景。要根据需要选择合适的字符流类来进行字符数据的读写操作。

## 缓冲流

缓冲流（Buffered Stream）是对字节流和字符流的包装，提供了缓冲区功能，可以提高IO操作的性能。常见的缓冲流类包括：

- BufferedReader：读取字符流时提供缓冲功能。
- BufferedWriter：写入字符流时提供缓冲功能。
- BufferedInputStream：读取字节流时提供缓冲功能。
- BufferedOutputStream：写入字节流时提供缓冲功能。

### BufferedInputStream 和 BufferedOutputStream

除了基本的输入输出流类外，Java 还提供了带有缓冲区的输入输出流类，它们分别是 **BufferedInputStream** 和 **BufferedOutputStream**。缓冲区类能够提高读写的效率，减少对底层资源的访问次数，适用于大量的数据读写操作。

### BufferedReader 和 BufferedWriter

参考上面即可

## 序列化

Java提供了序列化机制（Serialization），可以将对象转换为字节流，以便在网络上传输或永久保存到文件中。实现序列化接口（Serializable）的对象可以被序列化。

## NIO

Java的NIO（Non-blocking IO）提供了一种更为高效的IO模型，支持非阻塞式IO操作。主要包括通道（Channel）、缓冲区（Buffer）和选择器（Selector）等组件。

### 缓冲区

NIO中的所有I/O操作都是基于缓冲区的。缓冲区存储了数据，并提供了对数据的读写操作。NIO中主要有以下几种缓冲区类型：

ByteBuffer：用于处理字节数据
CharBuffer：用于处理字符数据
ShortBuffer、IntBuffer、LongBuffer：用于处理不同类型数据的缓冲区
DoubleBuffer、FloatBuffer：用于处理浮点型数据

### 通道

通道负责对缓冲区进行**读写操作**。通道可以直接连接到文件、网络套接字等，是双向的，可以进行读取和写入操作。常用的通道类型包括：

FileChannel：用于文件操作
SocketChannel：用于网络Socket的读写
ServerSocketChannel：用于监听网络连接的接口
DatagramChannel：用于UDP协议的数据读写

### 选择器

Selector可以同时**监控**多个通道的事件，当一个通道有数据可读或可写时，Selector会将该事件通知给应用程序，减少了线程数目，提高了系统性能。

> 通过通道和缓冲区进行读写操作，可以实现高性能的I/O处理。应用程序将数据写入缓冲区，再从缓冲区写入到通道；同样，也可以将数据从通道读入到缓冲区。

### NIO场景

NIO主要适用于需要处理大量连接，并且要求低延迟和高性能的应用场景，比如网络编程、服务器编程等。相比传统的I/O框架，NIO提供了更多的功能和更灵活的方式来进行I/O操作。

## 文件操作

Java的IO API提供了各种操作文件的方法，包括创建文件、删除文件、重命名文件、读取文件内容、写入文件内容等。

## 网络IO

Java的网络IO模块提供了Socket和ServerSocket等类，用于实现网络通信，支持TCP和UDP协议。

Java的IO API非常强大且灵活，可以满足各种IO需求。合理选择合适的IO类和方法可以提高程序执行的效率和性能。对于需要处理大量数据或对IO性能要求较高的场景，建议使用NIO模块。
