---
title: AI绘画-在ComfyUI中如何使用Controlnet
date: 2024-05-03
categories:
- AI绘画
tags:
- ComfyUI
- Controlnet
---
## 什么是Controlnet

我们先想一下自己为什么要学习AI绘画，无非就是想要得到符合我们需要的图像。那么如何通过AI得到我们脑海中期待的画面呢？ 这时候就要了解Controlnet，中文名我们通常称为 “控制网络” ，通过它我们可以得到一些控制更为精准的图像。
> 提示词是以文字的方式去告诉AI我要什么东西，而Lora则是在原有流程上进行了一定微调，具体调整方向以及力度由Lora模型和强度参数有关，本节要讲的Controlnet的作用则是更加精细化地控制输出，至于具体的作用跟选择的预处理器有关，预处理器也是与前面两者（提示词/Lora）的最大区别所在，由一定的学习成本。

## 简介

Controlnet的大致流程是 加载图像>预处理器>特征参数>采样>输出。它可以控制人物的姿势，对线稿进行上色，对画质进行增强，对图像风格进行转换
预处理器：选择不同的预处理器可以得到不同的特征参数，例如 人物姿势，图像深度，画面线稿
Controlnet模型：不同的预处理器分别要对应相符合的Controlnet模型。

## 插件下载

<https://github.com/Fannovel16/comfyui_controlnet_aux.git>
插件放置位置 ComfyUI\custom_nodes\comfyui_controlnet_aux

## 模型下载

模型放置位置 ComfyUI_windows_portable\ComfyUI\models\controlnet

## 节点介绍

它可以引入更多的条件来让我们出图更加可控。

### 预处理器

线条、面部与姿态、法向与深度、语义分割、颜色、Tile平铺
将 “加载图片” “预处理器” “图片预览” 连接后可以看到预处理器的输出效果，后面我们会就各种预处理器的处理结果进行分析，根据分析我们更能够理解何时该使用哪种预处理器进行处理达到更好的控制出图效果。

### 加载controlnet模型

模型与预处理器是需要对应的，注意大模型的版本需要与controlnet模型进行适配。

### 应用Controlnet模型

该节点会 接收上面预处理器得到的图片壹基金加载的controlnet模型作为输入
然后可以调节 controlnet强度和开始 结束控制的时间，对于Controlnet高级应用节点我们还可以接收 正反向提示词。

## 操作流程

不管选择哪种Controlnet，大致的流程都是一样的，这里就以“Canny线稿”为例做一个介绍

1. 先使用文生图生成一张图片作为预处理器的原图
2. 上一步得到的图片作为预处理器的输入图像，然后输出一个预览图
3. 选择与预处理器一致的Controlnet模型进行使用然后输入给到采样器

## Controlnet分类

### 控制姿势

身体姿势（openpose ），表情（openpose_faceonly ），手指形态（openpose_hand ）三种都可以控制，具体取决于我们选择的预处理器和controlnet模型如何。可以上面单个的情况或组合

- 身体控制
- 身体+手指控制
- 身体+表情控制
- 只有表情控制
- 身体+手指+表情控制

都知道手脚是AI绘画中最容器出问题的地方，经常不小心就出现六指琴魔，这时控制手指形态就显得尤为可靠了。而表情则是更适合原图为大头照，人物头部特写图，注意如果使用了Lora微调人物面部的话，二者会有一定的冲突影响，可能发生混乱。

> 如果姿势控制的火柴人不太准确该怎么办？

### 艺术线条

- lineart

lineart专门用于提取线稿 针对不同的类型会进行不同的处理
> 动漫：lineart_anime 或 lineart_anime_denoise
> 素描:lineart_coarse
> 写实：lineart_realistic
> 黑白线稿：lineart_standard

想要得到动漫照片要选择二次元的大模型，如果讲写实风格和动漫风格进行转换的话需要注意调整controlnet的强度，不能太高。黑白线稿我个人认为适合那种对颜色较为敏感的人。

- canny

可以识别到画面最多的线条，更适合二次元照片

- softedge

大致的轮廓细节，线条比较柔和，自由度更高。

- scribble

涂鸦：说的就是它，随便画两笔就能出一张图

- mlsd

只识别直线 适合做房屋设计

### 空间深度

整体的线条布局以及镜头前后分布情况 选择 depth

### 物品种类

seg 识别图片不一样的东西，就用不同的颜色表示

### 风格约束

- shuffle
将图片颜色混合融到新图里，可以将其他图片的画风转移到自己的照片上

- reference
参考原图的风格或角色，比如让图片中的狗站立起来

- normal
参考原图的光影和姿势，它会参考明暗关系以及人物的姿势

- t2ia
还原原图的颜色，比较特殊的是不同的预处理器用的模型不一样，
它的主要功能有3个：

1. 将原图的颜色模糊成马赛克再重新生成图片 预处理器：t2ia_color_grid 模型：t2iadapter_color
2. 提取素描的线稿，生成真人照片（这个不好用，直接用lineart就行）
3. 参考原图风格，生成相似风格的照片

### 重绘

很多教程都有图生图的局部重绘介绍，而controlnet能让图片融合度更高。它可以用于消除图片信息或给人物换衣服，只是关键词不一样即可
预处理器：inpaint_global_harmonious 模型：inpaint

### 添加细节-tile

可以用来 恢复画质 预处理器：tile_resample 模型：tile tile模型的工作原理是先忽略掉照片的一些细节，再加上一些细节。
可以涂鸦
可以风格变换

## 一些案例

## Line里面的Canny

![工作流程图](https://lianyp.fun/picture/open-admin-pro/picture/article/image/84e41875-bedd-4446-af8e-c05ee2e3b8fd.png)

![线图](https://lianyp.fun/picture/open-admin-pro/picture/article/image/3173eca1-8d6a-41ad-a848-87d2b7daaaf6.png)

![生成图1](https://lianyp.fun/picture/open-admin-pro/picture/article/image/9aa72787-9375-460c-88c1-94049190494a.png)

![生成图2](https://lianyp.fun/picture/open-admin-pro/picture/article/image/b845164b-4d88-4c79-b8c4-07ef4a983523.png)
