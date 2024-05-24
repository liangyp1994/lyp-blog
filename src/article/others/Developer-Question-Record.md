---

title: 开发过程问题记录

date: 2024-05-23

categories: 其他

---



## 前端

- **记 高德地图中输入提示失效问题：**

代码截取

```html
    <el-dialog
      title="设备定位"
      :visible.sync="openLocation"
      width="800px"
      append-to-body
    >
      <Search></Search>
      <MapComponent style="height: 400px"></MapComponent>
    </el-dialog>
```

描述：其中 `Search` 组件为高德地图的搜索框组件，当我把这个组件放到 <el-dialog> 弹窗内发现 输入提示未显示。

解决：通过添加z-index 样式

```css
.amap-sug-result {
  z-index: 2010;
}
```

> amap-sug-result是输入提示的结果class

原理：z-index 样式问题，由于amap-sug-result小于el-dialog，所以这里通过增加amap-sug-result以解决这个问题。

- **vuepress打包问题记录**

```bash
x Build failed in 2.59s
✖ Compiling with vite - failed in 2.68s
SyntaxError: Element is missing end tag.
```

因为该报错没有具体的行数，所以不好定位问题，但考虑到上一次成功到现在这段期间我主要做了几件事情

- 更改了文件夹的目录结构
- 添加了大量文档到项目中
- 使用了自动侧边栏工具

> 记得上一次使用的 vuepress-theme-reco 2.0 也出现了这个问题，当时是使用了该主题中的“类型自动化”的功能，最后我是把所有文章的 分类和标签都删除后 就没有这个报错，因此考虑到两个主题使用的底层技术或许是同一个，所以我 关闭了“自动侧边栏” 。但是开发服务器确实成功启动了，反而是无法编译成dist。 思索一番，既然之前是好的，那就把这次的修改都恢复然后再一步步添加。

大致过程记录

1. 创建一个新的分支，防止代码丢失
2. 修复后再合并到master
  