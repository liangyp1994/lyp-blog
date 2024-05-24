---

title: 开发过程问题记录

date: 2024-05-23

categories: 其他

---



## 前端



- 记 高德地图中输入提示失效问题

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
