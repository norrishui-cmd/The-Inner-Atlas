# Dunhuang Within — AdSense 验证代码覆盖包

本包基于上一轮 SEO 覆盖包，源码仅覆盖 `src/layouts/Base.astro`，在共用页面模板的 `<head>` 中加入截图所选的 AdSense 代码段。无需设置环境变量。

1. 如果还没应用上一轮 SEO 覆盖包，先应用 SEO 包，再应用本包。在含 `package.json` 的项目根目录解压本包。若此后自己改过 `Base.astro`，建议只合并新增的 script 行，保留自己的修改。
2. 执行 `npm ci`（尚未安装依赖时）和 `npm run build`，按现有发布流程部署 `dist/` 到 dunhuangwithin.com。
3. 部署后查看首页网页源代码，确认 `adsbygoogle.js` 出现在 `<head>` 内。回到 AdSense 勾选「我已放置代码」，点击「验证」。[Google 官方连接指南](https://support.google.com/adsense/answer/7584263?hl=zh-Hans)。

本地验证：生产构建通过，167 个静态 HTML 页面各包含一次截图中的代码。上一轮 SEO 检查通过。未执行线上部署或 AdSense 验证。
