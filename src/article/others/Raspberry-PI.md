---
title: 点亮树莓派
date: 2024-05-10
categories: 其他
---

网上大多介绍都是安装官方镜像，我还是来点不一样的吧，后面肯定就能遇到一些阻碍。

## 安装镜像

到Ubuntu官网去下载镜像，这里选择的是 `ubuntu-22.04.2-desktop-amd64` 。
然后使用烧录工具，很多文章这时会让我们去下载各种工具，其实并不需要，我们只要去树莓派官网下载官方烧录工具即可。
![](https://lianyp.fun/picture/open-admin-pro/picture/article/image/b12ac09a-812a-42f0-8b45-217041b7e5bf.png)

下载好烧录工具，操作也很简单，就三步动作

1. 选择PI的版本
2. 选择要烧录的系统
3. 选择烧录到哪个U盘

无非就是下一步 下一步而已，这里记录了过程中的一些截图作为参考：
主页面
![主页面](https://lianyp.fun/picture/open-admin-pro/picture/article/image/8d465d09-8218-45bf-b5fa-cee610208d85.png)
选择PI-PI4.0
![选择PI](https://lianyp.fun/picture/open-admin-pro/picture/article/image/ffcb66ec-9457-48af-828b-903fd23c46f3.png)
选择操作系统-自己选择镜像
![选择操作系统](https://lianyp.fun/picture/open-admin-pro/picture/article/image/0e7908b2-8284-459d-91ea-f1f8911637f6.png)
选择SD卡
![选择SD卡](https://lianyp.fun/picture/open-admin-pro/picture/article/image/2d4fbee7-b538-4db9-8d7c-128efbccd47c.png)
配置用户密码，wifi连接
![基础配置](https://lianyp.fun/picture/open-admin-pro/picture/article/image/aaa72da1-8a63-45ad-ad28-f2038c29d4c9.png)
开始烧录到SD卡
![烧录系统](https://lianyp.fun/picture/open-admin-pro/picture/article/image/a929acde-5743-4769-b905-ec196ad37f23.png)

**需要注意的地方**

1. 文件系统不要NTFS,我选择的是FAT32,也是官方推荐的
   ![FAT32](https://lianyp.fun/picture/open-admin-pro/picture/article/image/28786c6c-b529-4542-aab4-b1d2a498db33.png)

## 启动系统

将上面烧录成功的SD卡插入树莓派后开启电源等待指示灯亮起

##
