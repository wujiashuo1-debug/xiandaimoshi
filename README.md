# 现代模式识别刷题网站｜稳定版·双端带解析

这是稳定版：**核心题库、样式和逻辑已内联到 `index.html`**，不再依赖 `questions.js` / `app.js` / `style.css` 外部加载，因此更适合 GitHub Pages 部署。

## 为什么出稳定版
之前显示 `0 总题数` 的根因不是页面没部署，而是题库数据或旧 Service Worker 缓存没有正常生效。稳定版做了三件事：

1. 题库直接写进 `index.html`，不会再因为 `questions.js` 路径/缓存问题导致题库为 0。
2. 不再注册 PWA Service Worker。
3. 附带 `sw.js` 清理旧缓存，覆盖旧版后可自动注销旧 Service Worker。

## 部署方式
把本文件夹里的内容上传到 GitHub 仓库根目录即可。最少只需要：

- `index.html`
- `sw.js`
- `assets/modern_pattern_recognition_question_bank_150.md`（可选，只用于打开原题库）

仓库根目录必须直接看到 `index.html`。

## 部署后若仍显示旧页面
浏览器可能还被旧 Service Worker 控制。处理方式：

- 先强制刷新一次。
- Safari：设置 → 隐私 → 管理网站数据 → 删除 `wujiashuo1-debug.github.io`。
- Chrome：地址栏左侧网站设置 → 清除网站数据。

然后重新打开网站。
