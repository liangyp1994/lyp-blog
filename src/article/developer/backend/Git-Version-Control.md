---
title: GIT-软件开发离不开的工具之一
date: 2024-05-22
categories: 后端
---

作为一个后端开发，我每天都在使用GIT，但因为习惯了使用IDE中的UI页面操作，今天在开发一个前端项目时候才发现自己已经把命令忘得差不多了，真的是有必要再翻出来学习一下了。

## 介绍

一个分布式的版本管理系统

**原理：**

1. **分布式：** Git 是一种分布式版本控制系统，意味着每个开发者都可以拥有完整的代码仓库副本，而不是依赖于一个中央服务器。这种分布式的架构使得开发者可以在本地进行工作，包括提交代码、创建分支等操作，而不必一直依赖网络连接。

2. **快照存储：** Git 不仅跟踪文件的变化，而是通过记录文件的快照来管理文件的历史版本。每次提交操作都会创建一个快照，这种方式有效地减少了数据冗余，且可以快速地查看文件的变化历史。

3. **分支管理：** Git 的分支概念非常强大，开发者可以轻松创建、合并和删除分支，从而实现并行开发、功能隔离等操作，提高团队的协作效率。

**作用：**

1. **版本控制：** Git 可以帮助开发者追踪文件的变化历史，以及回溯到不同版本的代码，从而可以轻松地管理和比较不同版本之间的差异。

2. **协作：** Git 可以有效地实现团队成员之间的协作开发。通过分支管理、代码合并等功能，团队成员可以同时开发不同的功能模块，并最终将他们的工作整合在一起。

3. **备份和恢复：** Git 提供了对代码仓库的完整备份，开发者可以将代码的整个历史存储在本地或者远程仓库中，保证数据的安全性，并在需要时快速恢复到历史状态。

**术语：**

1. **仓库（Repository）：** Git 仓库是用于存储代码的地方，可以是本地仓库（Local Repository）或远程仓库（Remote Repository）。
2. **提交（Commit）：** 提交是指将代码修改的快照保存到 Git 仓库中，通常包含一个描述性的提交信息。
3. **分支（Branch）：** 分支是代码开发的不同线路，相当于在代码库中独立的开发路径。
4. **合并（Merge）：** 合并是将一个分支的代码变更合并到另一个分支中。
5. **拉取（Pull）和推送（Push）：** 拉取是从远程仓库获取最新代码，推送是将本地代码变更上传到远程仓库。
6. **工作区（Working Directory）和暂存区（Staging Area）：** 工作区是修改代码的地方，暂存区是保存待提交的代码快照的地方。
7. **撤销（Revert）和重置（Reset）：** 撤销是撤销某次提交的修改，重置是将仓库的状态重置到某个指定的提交。
8. **冲突（Conflict）：** 冲突发生在合并不同分支时，同一个文件的不同部分有冲突需要手动解决。

**简单流程：**

1. **克隆（Clone）一个仓库：** 使用 `git clone` 命令将远程仓库克隆到本地。
2. **在工作区修改代码：** 在工作区进行代码编写和修改。
3. **将修改添加到暂存区：** 使用 `git add` 命令将修改的文件添加到暂存区。
4. **提交修改：** 使用 `git commit` 命令将暂存区的内容提交到仓库。
5. **推送到远程仓库：** 使用 `git push` 命令将本地仓库的修改推送到远程仓库。
6. **拉取远程仓库最新变更：** 使用 `git pull` 命令从远程仓库拉取最新的代码变更。

## 安装GIT

**安装：**

安装过程很简单 无非就是到 [GIT官网](https://git-scm.com) 下载对应平台的程序安装即可，跟普通软件安装是一样，只需要选择好合适的安装路径。

**配置：**

配置你的用户名和邮箱

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

查看所有配置项

```bash
git config --global --list
```

## 创建和管理仓库

### 仓库初始化

当远程没有项目仓库你需要在本地项目下初始化一个本地仓库，执行下面命令将会在项目路径下创建一个 `.git` 文件夹。

```bash
git init
```

当远程仓库已存在，你需要通过 `pull` 指令拉取远程代码

```bash
git clone <remote_repository_URL>
```

### 开发阶段

#### 暂存

添加修改的文件到暂存区, 通过add命令

```bash
git add <file_name>
```

`<file_name>` 参数应该是您要添加到暂存区的文件名或文件路径。可以指定单个文件名或多个文件名，甚至可以使用通配符来匹配多个文件。

**示例：**

1. 添加单个文件：

   ```bash
   git add index.html
   ```

2. 添加多个文件：

   ```bash
   git add index.html style.css script.js
   ```

3. 使用通配符：

   ```bash
   git add *.html   # 添加所有 .html 文件
   git add src/*    # 添加 src 目录下所有文件
   ```

> 可以通过  git  status 查看状态，Changes to be committed: 表示的就是待提交的文件，也就是暂存。

#### 提交

暂存区文件提交

```bash
git commit -m "Commit message"
```

查看提交历史

```bash
git log
```

撤销提交

```bash
# 撤销最近的提交并保留更改
git reset HEAD~1


# 撤销提交并丢弃更改
git reset --hard HEAD~1


# 撤销已推送到远程仓库的提交,并不会删除指定的提交 它的底层是 会创建一个新的提交，撤销指定的提交
git revert <commit_SHA>
```

## 分支管理

1. 创建分支：

   - 使用`git branch <branch-name>`命令可以创建一个新的分支，分支名称可以自定义。

   ```bash
   git branch new-feature
   ```

2. 查看所有分支：

   - 使用`git branch`命令可以查看所有本地分支，并且已处于当前分支的前面有一个`*`标志。 参数 `-r` 可查看远程分支

   ```bash
   git branch
   ```

3. 切换分支：

   - 使用`git checkout <branch-name>`命令可以切换到指定的分支。

   ```bash
   git checkout new-feature
   ```

4. 创建并切换分支：

   - 使用`git checkout -b <branch-name>`命令可以创建并切换到新的分支。

   ```bash
   git checkout -b new-feature
   ```

5. 合并分支：

   - 在完成对新分支的工作后，可以切换回主分支并使用`git merge <branch-name>`命令将新分支合并到当前分支。

   ```bash
   git checkout maingit merge new-feature
   ```

6. 删除分支：

   - 使用`git branch -d <branch-name>`命令可以删除不需要的分支。

   ```bash
   git branch -d new-feature
   ```

   - 使用`git push <remote-name> --delete <branch-name>`命令将指定的远程分支删除

   ```bash
   git push <remote-name> --delete new-feature
   ```

## 远程仓库操作

1. 添加远程仓库：

   - 使用 `git remote add <remote-name> <remote-url>` 命令添加远程仓库，`<remote-name>` 为远程仓库的名称，`<remote-url>` 为远程仓库的 URL。

   ```bash
   git remote add origin https://github.com/username/repository.git
   ```

2. 查看远程仓库：

   - 使用 `git remote -v` 命令可以查看远程仓库的名称和对应的 URL。

   ```bash
   git remote -v
   ```

3. 推送代码到远程仓库：

   - 使用 `git push <remote-name> <branch-name>` 命令将本地代码推送到指定的远程仓库和分支。

   ```bash
   git push origin main
   ```

4. 拉取远程仓库代码：

   - 使用 `git pull <remote-name> <branch-name>` 命令从远程仓库拉取最新的代码到本地仓库和分支。

   ```bash
   git pull origin main
   ```

   - `git fetch`命令会从远程仓库下载最新的提交和数据，但不会自动合并这些改动到当前分支。首先通过`git fetch`获取最新的代码到本地，然后使用`git checkout`切换到您想要更新的分支，并通过`git merge`将远程分支的改动合并到当前分支。

   ```bash
   git fetch
   git checkout <branch-name>
   git merge origin/<branch-name>
   ```

> - `git fetch`：用于从远程仓库下载最新的代码和历史记录，但并不自动合并或更新您当前的工作目录。执行`git fetch`会将远程仓库的最新更新下载到本地，但不会直接修改您当前所在的分支。
>
> - `git pull`：是将`git fetch`和`git merge`两个操作结合起来的一个命令，用于从远程仓库获取最新的代码并合并到当前分支。执行`git pull`会自动下载远程仓库的最新内容，并尝试将其合并到您当前所在的分支。
