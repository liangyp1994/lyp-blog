---
title: 服务器-系统基础运维命令
date: 2024-05-09
categories:
- 服务器
---

作为服务器的操作系统，较多的还是使用 Ubuntu 和 CentOs 这两种，本文主要就是针对 Ubuntu 进行介绍，系统如何安装就不多介绍了，这里主要专注与服务器环境的搭建过程

## 常用的系统命令

### 查看系统内核

```shell
cat /proc/version
```

### 查看内存使用情况

```shell
ps aux --sort -rss
```

### 查看硬盘挂载情况

```shell
fdisk -l
```

### 查看硬盘使用情况

```shell
df -l
```

### 更新Ubuntu下载源

```shell
apt update
apt upgrade
```

更新 升级

### 创建用户

创建一个用户

```shell
adduser liangyp
```
