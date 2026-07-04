# 文本与Web挖掘刷题网站 V2（V4结构 + MathJax）

本网站基于你上传的《文本与Web挖掘》标准化期末考试题库制作，共 **100 道单项选择题**。

## 文件结构

```text
index.html
style.css
app.js
questions.js
manifest.webmanifest
sw.js
assets/
README.md
```

## 功能

- 电脑端：章节学习、刷题模式、错题本、进度总览
- 手机端：独立移动端界面
- 每题均带答案与解析
- 支持 MathJax 公式渲染
- 支持本地保存学习记录、导出与导入记录

## 上传 GitHub Pages

解压后进入本文件夹，把里面所有内容上传到仓库根目录。仓库首页应直接看到 `index.html`、`style.css`、`app.js`、`questions.js`。

## 重要修正

原题库中“KNN算法容易受到噪声干扰”的题目答案与解析不一致。解析和考点均指向“局部K个邻居受噪声影响”，因此本版已将该题答案修正为 B。
