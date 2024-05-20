---
title: 服务器-系统环境安装教程
date: 2024-05-08
categories:
- 服务器
---
## 环境安装

譬如 Mysql Nacos等服务的安装过程步骤，其实Ubuntu安装通常都比较简单 直接就是要给apt install命令过去 基本都OK了，最多就是还有一些自定义配置 可能需要改下配置文件。

### Mysql安装

- 卸载

```shell
apt purge mysql-*
rm -rf /etc/mysql/ /var/lib/mysql
apt autoremove
apt autoclean
```

> purge 可以将包以及软件的配置都删除掉
而 remove 则只会删除包

- 安装

```shell
apt install mysql-server
```

- 查看状态

```shell
systemctl status mysql
```

- 配置
文件 `/etc/mysql/mysql.conf.d`

```conf
# mysql服务端口
port = 13308
# 注释掉 bind-address 允许远程链接到mysql服务器
# bind-address =127.0.0.1
```

- 重启

```shell
systemctl restart mysql
```

### Nginx安装

- 安装

```shell
apt install nginx
```

- 查看状态

```shell
systemctl status nginx
```

- 配置
文件 `/etc/nginx/nginx.conf`

```conf
# 有证书 通过Https访问
listen 443 ssl;
server_name www.lianyp.fun;
ssl_certificate /etc/nginx/ssl/lianyp.fun.pem;
ssl_certificate_key /etc/nginx/ssl/lianyp.fun.key;
```

```conf
# 没有证书 通过Http访问
listen 80;
server_name 你服务器的公网IP地址;
```

### Redis安装

- 安装

```shell
apt install redis-server
```

- 查看状态

```shell
systemctl status redis
```

- 配置
文件 `/etc/redis/redis.conf`

```conf
# 注释掉，允许远程连接
# bind 127.0.0.1 ::1
# 设置密码
requirepass Liang343@
# 端口
port 16381
```

### Docker安装

Docker容器的安装相比上面的像 mysql redis 要更复杂一些，但是无非也就是步骤多了点。

- 准备依赖包

```shell
apt-get install ca-certificates curl gnupg lsb-release
```

- 官方密钥

```shell
curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
```

- 官方软件源

```shell
add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
```

- 安装

```shell
apt-get install docker-ce docker-ce-cli containerd.io
```

- 查看状态

```shell
systemctl status docker
```

> 安装docker只是万里长征第一步，后续通过docker搭建服务才是重头戏。
