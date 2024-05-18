---
title: 腾讯混元-HunyuanDiT
date: 2024/05/15
categories:
- AI
---

它是一种文本到图像的扩散转换器，强大的多分辨率扩散变压器，与其他开源模型相比，Hunyuan-DiT 在中文到图像生成方面树立了新的最先进水平。

通过查阅相关文档能够发现它其实就是基于 Stable Diffusion 实现的，它的增强点在于

1. 结合了预先训练的双语（英语和中文）CLIP 和多语言 T5 编码器
2. 执行多轮对话和图像生成的能力，训练 MLLM 来理解多轮用户对话并输出用于图像生成的新文本提示

## 体验

<https://hunyuan.tencent.com/bot/chat>

## 配置要求

- 需要支持 CUDA 的 NVIDIA GPU。
  - 我们测试了 V100 和 A100 GPU。
  - 最低：所需的最低 GPU 内存为 11GB。
  - 推荐：我们建议使用具有 32GB 内存的 GPU，以获得更好的生成质量。
- 测试操作系统：Linux

## 依赖与安装

```bash
git clone https://github.com/tencent/HunyuanDiT
cd HunyuanDiT
```

提供了一个environment.yml用于设置 Conda 环境的文件

```bash
# 1. Prepare conda environment
conda env create -f environment.yml

# 2. Activate the environment
conda activate HunyuanDiT

# 3. Install pip dependencies
python -m pip install -r requirements.txt

# 4. (Optional) Install flash attention v2 for acceleration (requires CUDA 11.6 or above)
python -m pip install git+https://github.com/Dao-AILab/flash-attention.git@v2.1.2.post3
```

## 模型下载

要下载模型，请首先安装huggingface-cli。

```bash
python -m pip install "huggingface_hub[cli]"
```

然后使用以下命令下载模型：

```bash
# 创建 'ckpts' 文件夹 用来保存模型
mkdir ckpts
# 使用 huggingface-cli 命令下载模型.
huggingface-cli download Tencent-Hunyuan/HunyuanDiT --local-dir ./ckpts
```

> 注意：如果No such file or directory: 'ckpts/.huggingface/.gitignore.lock'在下载过程中出现类似错误，可以忽略该错误并通过执行重试该命令huggingface-cli download Tencent-Hunyuan/HunyuanDiT --local-dir ./ckpts

## 开始

### 使用Gradio

在运行以下命令之前，请确保您已激活 conda 环境。

```bash
# By default, we start a Chinese UI.
python app/hydit_app.py

# Using Flash Attention for acceleration.
python app/hydit_app.py --infer-mode fa

# You can disable the enhancement model if the GPU memory is insufficient.
# The enhancement will be unavailable until you restart the app without the `--no-enhance` flag. 
python app/hydit_app.py --no-enhance

# Start with English UI
python app/hydit_app.py --lang en
```

### 使用命令行

三者模式启动

```bash
# Prompt Enhancement + Text-to-Image. Torch mode
python sample_t2i.py --prompt "渔舟唱晚"

# Only Text-to-Image. Torch mode
python sample_t2i.py --prompt "渔舟唱晚" --no-enhance

# Only Text-to-Image. Flash Attention mode
python sample_t2i.py --infer-mode fa --prompt "渔舟唱晚"

# Generate an image with other image sizes.
python sample_t2i.py --prompt "渔舟唱晚" --image-size 1280 768
```

更多的配置项

我们列出了一些更有用的配置以方便使用：

--prompt 图像生成的文字提示
--image-size 生成图像的大小
--seed 用于生成图像的随机种子
--infer-steps 采样步数
--negative 图像生成的负面提示
--infer-mode 推理模式（torch 或 fa）
--sampler 扩散采样器（ddpm、ddim 或 dpmms）
--no-enhance 禁用提示增强模型
--model-root  模型检查点的根目录
--load-key 加载学生模型或EMA模型（ema或模块）
