# 文本与 Web 挖掘刷题网站｜多文件工程版

这是按你喜欢的“完整网站工程结构”重新整理的版本。

## 文件结构

- `index.html`：网页入口
- `style.css`：样式
- `app.js`：刷题逻辑
- `questions.js`：题库数据
- `README.md`：说明

## GitHub Pages 上传方式

新建仓库后，把以上文件直接上传到仓库根目录。仓库首页必须直接看到：

```text
index.html
style.css
app.js
questions.js
README.md
```

然后在 Settings → Pages 中选择：

- Source: Deploy from a branch
- Branch: main
- Folder: / root

本版本不包含 `sw.js`，不注册 Service Worker，避免旧缓存导致题库显示 0 的问题。
