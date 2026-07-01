# VitePress 博客

基于 VitePress 构建的个人博客系统。


## 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### Node.js 下载

推荐使用 Node.js v22.23.1 LTS 版本：

- Windows x64: [node-v22.23.1-x64.msi](https://nodejs.org/dist/v22.23.1/node-v22.23.1-x64.msi)
- 其他版本请访问 [Node.js 官网](https://nodejs.org/)

验证安装：

```bash
node -v
npm -v
```



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

- ✅ 基于 VitePress 2.x
- ✅ 支持 Markdown 写作
- ✅ 本地搜索功能
- ✅ 深色模式支持
- ✅ 响应式设计
- ✅ 代码高亮
- ✅ 文章分类
- ✅ Google AdSense 集成

## 自定义配置

编辑 `docs/.vitepress/config.js` 文件可以自定义：

- 站点标题和描述
- 导航栏菜单
- 侧边栏结构
- 主题样式
- 社交链接

## Google AdSense 集成

项目已集成 Google AdSense 自动广告，配置位于 `docs/.vitepress/config.js` 的 `head` 部分。

### 配置说明

1. 在 `config.js` 中找到 AdSense 配置：

```javascript
head: [
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  // ==================== Google AdSense ====================
  [
    'script',
    {
      async: true,
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX',
      crossorigin: 'anonymous'
    }
  ],
],
```

2. 将 `ca-pub-XXXXXXXXXXXXXXXX` 替换为你的 AdSense 发布商 ID

### 获取发布商 ID

1. 登录 [Google AdSense](https://adsense.google.com/)
2. 进入"账户" -> "账户信息"
3. 找到"发布商 ID"（格式：ca-pub-XXXXXXXXXXXXXXXX）

### 验证集成

- 开发环境：`npm run dev` 后查看页面源代码，确认 `<head>` 中包含 AdSense 脚本
- 生产环境：构建后检查 `dist` 目录中的 HTML 文件

## 写作指南

### 创建新文章

1. 在 `docs/posts/` 目录下创建新的 `.md` 文件
2. 添加 Front Matter（可选）：

```markdown
---
title: 文章标题
date: 2026-05-30
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

## 服务器推荐

推荐使用高性能 VPS 服务器部署博客：

- [搬瓦工 VPS](https://bwh81.net/aff.php?aff=79811) - 高性价比、稳定可靠的云服务器

## 部署

### Nginx 部署（Ubuntu 20.04）

#### 1. 安装 Nginx

```bash
sudo apt update
sudo apt install nginx -y
```

#### 2. 构建项目

在本地执行：

```bash
npm run build
```

将 `docs/.vitepress/dist` 目录的内容上传到服务器。

#### 3. 配置 Nginx

创建站点配置：

```bash
sudo nano /etc/nginx/sites-available/blog
```

添加以下配置：

```nginx
server {
    listen 80;
    server_name your-domain.com;  # 替换为你的域名

    root /var/www/blog;  # 网站文件目录
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html;
    }

    # 启用 Gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

#### 4. 启用站点

```bash
# 创建软链接
sudo ln -s /etc/nginx/sites-available/blog /etc/nginx/sites-enabled/

# 上传构建文件到服务器
sudo mkdir -p /var/www/blog
sudo cp -r docs/.vitepress/dist/* /var/www/blog/

# 设置权限
sudo chown -R www-data:www-data /var/www/blog
sudo chmod -R 755 /var/www/blog

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
```

#### 5. 配置 SSL（可选）

使用 Certbot 配置 HTTPS：

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com
```

#### 6. 更新部署

每次更新博客后：

```bash
# 本地构建
npm run build

# 上传到服务器（示例使用 scp）
scp -r docs/.vitepress/dist/* user@your-server:/var/www/blog/
```

### GitHub Pages

1. 在 `config.js` 中设置 `base` 为你的仓库名
2. 构建项目：`npm run build`
3. 将 `docs/.vitepress/dist` 目录部署到 GitHub Pages

### Netlify / Vercel

1. 连接你的 Git 仓库
2. 设置构建命令：`npm run build`
3. 设置输出目录：`docs/.vitepress/dist`

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 前端框架
- [Vite](https://vitejs.dev/) - 构建工具

## License

ISC
