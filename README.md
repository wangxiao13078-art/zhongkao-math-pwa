# 🧮 中考数学全面解析 PWA

一个精美的中考数学刷题 PWA 应用，支持离线使用、添加到主屏幕。

## ✨ 功能特性

- 📚 **题库浏览** - 多维度筛选（题型、章节、难度）
- 🎯 **刷题练习** - 顺序/随机/专题/错题多种模式
- 📊 **学习统计** - 追踪做题进度和正确率
- ❤️ **收藏功能** - 收藏重要题目随时复习
- 📝 **错题本** - 自动记录错题，便于复习
- 🌙 **PWA 支持** - 可安装到手机主屏幕，离线使用
- 📱 **移动优先** - 专为手机端设计的精美 UI

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **状态管理**: Zustand
- **数学公式**: KaTeX
- **PWA**: next-pwa

## 🚀 快速开始

### 安装依赖

```bash
cd pwa-app
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 生产构建

```bash
npm run build
npm start
```

## 📁 项目结构

```
pwa-app/
├── public/
│   ├── icons/          # PWA 图标
│   └── manifest.json   # PWA 配置
├── src/
│   ├── app/            # 页面路由
│   │   ├── page.tsx           # 首页
│   │   ├── questions/         # 题库
│   │   ├── practice/          # 练习
│   │   ├── stats/             # 统计
│   │   └── profile/           # 个人中心
│   ├── components/     # 通用组件
│   │   ├── MathText.tsx       # 数学公式渲染
│   │   ├── QuestionCard.tsx   # 题目卡片
│   │   ├── BottomNav.tsx      # 底部导航
│   │   └── InstallPrompt.tsx  # 安装提示
│   ├── data/           # 数据
│   │   └── questions.ts       # 题目数据
│   ├── stores/         # 状态管理
│   │   └── useStore.ts
│   └── types/          # 类型定义
│       └── index.ts
├── next.config.js      # Next.js 配置
├── tailwind.config.ts  # Tailwind 配置
└── package.json
```

## 📱 PWA 安装

### iOS (Safari)
1. 用 Safari 打开应用
2. 点击底部分享按钮
3. 选择"添加到主屏幕"

### Android (Chrome)
1. 用 Chrome 打开应用
2. 点击菜单 → "添加到主屏幕"
3. 或等待自动安装提示

### 桌面 (Chrome/Edge)
1. 打开应用后地址栏会显示安装图标
2. 点击安装即可

## 🎨 设计特色

- **活力橙色主题** - 积极向上的学习氛围
- **圆润卡片设计** - 现代化的 UI 风格
- **流畅动画效果** - 提升用户体验
- **安全区域适配** - 完美支持刘海屏/全面屏

## 📦 部署

### Vercel 部署（推荐）

```bash
npm i -g vercel
vercel
```

### 静态导出

```bash
# 在 next.config.js 中启用 output: 'export'
npm run build
# 生成的文件在 out/ 目录
```

## 🔧 自定义

### 添加更多题目

编辑 `src/data/questions.ts`，添加新的题目数据：

```typescript
{
  id: 11,
  original_num: "11",
  type: "选择题",
  chapter: "数与式",
  content: "题目内容...",
  options: ["A. ...", "B. ...", "C. ...", "D. ..."],
  answer: "A",
  analysis: "解析内容...",
  difficulty: 2,
  source: "来源",
  year: 2024
}
```

### 修改主题色

编辑 `tailwind.config.ts` 中的 `primary` 颜色配置。

## 📄 许可

MIT License

---

🎯 **助你轻松备战中考！加油！**

