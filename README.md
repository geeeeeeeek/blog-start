# VitePress 博客

基于 VitePress 构建的个人博客系统。


## 注意

npm run build后 将dist内容复制到blog文件夹下

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 `http://localhost:5173` 查看博客。

### 构建生产版本

```bash
npm run build
```

构建后的文件将输出到 `docs/.vitepress/dist` 目录。

### 预览构建结果

```bash
npm run preview
```

## 项目结构

```
blog/
├── docs/                   # 文档目录
│   ├── .vitepress/        # VitePress 配置
│   │   └── config.js      # 配置文件
│   ├── posts/             # 博客文章
│   │   ├── index.md       # 文章列表
│   │   ├── welcome.md     # 欢迎文章
│   │   └── vitepress-guide.md  # VitePress 指南
│   ├── public/            # 静态资源
│   ├── index.md           # 首页
│   └── about.md           # 关于页面
├── node_modules/          # 依赖包
├── .gitignore            # Git 忽略文件
├── package.json          # 项目配置
└── README.md             # 项目说明
```

## 功能特性

- ✅ 基于 VitePress 1.x
- ✅ 支持 Markdown 写作
- ✅ 本地搜索功能
- ✅ 深色模式支持
- ✅ 响应式设计
- ✅ 代码高亮
- ✅ 文章分类

## 自定义配置

编辑 `docs/.vitepress/config.js` 文件可以自定义：

- 站点标题和描述
- 导航栏菜单
- 侧边栏结构
- 主题样式
- 社交链接

## 写作指南

### 创建新文章

1. 在 `docs/posts/` 目录下创建新的 `.md` 文件
2. 添加 Front Matter（可选）：

```markdown
---
title: 文章标题
date: 2025-11-30
tags:
  - 标签1
  - 标签2
---
```

3. 在 `docs/.vitepress/config.js` 的侧边栏配置中添加文章链接

### Markdown 扩展语法

VitePress 支持丰富的 Markdown 扩展：

- 容器（提示框、警告框等）
- 代码块高亮
- 表格
- Emoji
- 目录
- 自定义容器

详见 [VitePress 文档](https://vitepress.dev/)

## 部署

### GitHub Pages

1. 在 `config.js` 中设置 `base` 为你的仓库名
2. 构建项目：`npm run docs:build`
3. 将 `docs/.vitepress/dist` 目录部署到 GitHub Pages

### Netlify / Vercel

1. 连接你的 Git 仓库
2. 设置构建命令：`npm run docs:build`
3. 设置输出目录：`docs/.vitepress/dist`

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 前端框架
- [Vite](https://vitejs.dev/) - 构建工具

## License

ISC
