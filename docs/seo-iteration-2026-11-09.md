# Dunhuang Within｜SEO 规划与第一轮覆盖说明

基准：用户提供的 `The-Inner-Atlas-main.zip` 和 2026-11-09 导出的两份 Google Search Console 数据。第一轮选择已有曝光的英文文化与档案内容、敦煌地图和可复现的分享元数据缺陷。**代码已在副本实施，尚未上线。**

## 1. 数据读数与优先级

日期按导出报告标签；两份过滤器均为文字网页搜索。站点合计来自「图表」日数据，CTR = 点击 ÷ 展示，表内平均排名按展示量加权重算，受原始四舍五入影响。

| 窗口 | 点击 | 展示 | CTR | 平均排名约 |
|---|---:|---:|---:|---:|
| 2026-08-08 至 11-07，近 3 个月（92 天） | 111 | 7,864 | 1.41% | 14.55 |
| 2026-09-13 至 10-10，此前 28 天 | 33 | 2,710 | 1.22% | 10.97 |
| 2026-10-11 至 11-07，最近 28 天 | 54 | 2,315 | 2.33% | 10.31 |

最近 28 天的逐日数据与三个月表最后 28 天完全一致，不能相加。与此前相邻 28 天相比，点击 +63.6%、展示 −14.6%、CTR +1.11 个百分点；这两份表无法证明变化原因。最近 28 天仅导出 111 条可见查询（合计 2 点击、484 展示）；查询行与页面行也不是一对一。以下是可执行的意图映射，须上线后用 GSC 逐页筛选查询验证。[Google 对性能报告维度与聚合方式的说明](https://support.google.com/webmasters/answer/7576553?hl=en)

| 优先页面 | 最近 28 天：点击 / 展示 · CTR · 排名 | 三个月：点击 / 展示 | 搜索意图与本轮动作 |
|---|---|---:|---|
| [敦煌壁画](https://dunhuangwithin.com/places/dunhuang/murals/) | 7 / 363 · 1.93% · 8.83 | 13 / 759 | `dunhuang murals` 2/124、`dunhuang mural` 0/18。补直接首答、257 与 61 窟读画示例、数字敦煌入口。 |
| [九色鹿](https://dunhuangwithin.com/places/dunhuang/nine-colored-deer-meaning/) | 6 / 321 · 1.87% · 6.40 | 13 / 993 | “故事、寓意、壁画在哪”三个问题由同一页承接；先讲故事和读画，保留原有文化阐释与网址。 |
| [莫高窟第 17 窟](https://dunhuangwithin.com/places/dunhuang/cave-17/) | 3 / 176 · 1.70% · 9.93 | 6 / 617 | `mogao cave 17` 0/13、排名 7.31。聚焦位置、发现与藏品，指向公开的藏品指南。 |
| [敦煌文献](https://dunhuangwithin.com/places/dunhuang/manuscripts/) | 2 / 143 · 1.40% · 7.80 | 4 / 630 | `dunhuang manuscripts` 0/12、排名 3.67。补按馆藏编号查找的步骤和《金刚经》原始目录。 |
| [国际敦煌项目 IDP](https://dunhuangwithin.com/places/dunhuang/international-dunhuang-programme/) | 0 / 184 · 0% · 7.67 | 2 / 468 | `international dunhuang programme` 0/61、`idp dunhuang` 0/17。部分用户可能直接找官网；突出独立解读、官网入口和检索方法。 |
| [敦煌地图](https://dunhuangwithin.com/dunhuang-map/) | 0 / 45 · 0% · 9.78 | 1 / 135 | `dunhuang map` 0/8、排名 11.88。补可直接点开的静态景点与文化指南入口，改正地图内链。 |

路径以 `https://dunhuangwithin.com` 为站点根。五篇文化与档案重点页的页面行合计为 **18 点击 / 1,187 展示，CTR 1.52%**。这是用来复盘这组 URL 的口径，不能当成站点去重曝光。页面和关键词两套点击/展示均直接来自导出；表中的查询不是该页的已证实归因。

其他信号：

- `dunhuang` 和 `mogao caves` 近 28 天平均排名约 69 和 67。继续维护地点和主指南，短期用更具体的读画、文献、行程意图作为切口。
- Paul Pelliot 页面三个月 3 点击 / 564 展示，近 28 天 1/56；在 GSC 拆出姓名与藏品相关查询，再决定是否补法国国家图书馆目录或法语页面。旅行清单 3/24、两日行程 2/12，先保留有效页面、累积样本。
- 法语页面行合计 5/136，德语 6/99；法语《金刚经》单页 3/13，样本仍小。先保持现有互链和页面，暂缓批量扩语言。法国和德国的国家数据不能用来替代这些语言页面的表现。
- 桌面 27/1,424（1.90%），手机 26/860（3.02%）。不同设备的查询组合和排名不同；不能据此判断移动页面体验好坏。地图图片与视频的实际网络负载安排在后续测量。

## 2. 第一轮已实施

- 五篇英文文章改写搜索标题、描述和页面首段；保留现有 slug、主内容框架与发布日。新增的读画示例、馆藏记录与项目检索说明分别引用[敦煌研究院 Cave 257](https://www.e-dunhuang.com/cave/10.0001/0001.0001.0257)、[敦煌研究院 Cave 61](https://www.e-dunhuang.com/cave/10.0001/0001.0001.0061)、[IDP 藏经洞导览](https://idp.bl.uk/discover/learning/dunhuang/collection-items/cave-17-the-library-cave/)、[IDP《金刚经》目录](https://idp.bl.uk/collection/51FDAEAFB4A24E2E9981692A98130BC8/)和[官方检索指南](https://idp.bl.uk/using-the-collection/)。
- 敦煌主题中心分出壁画、档案、文化物件和旅行入口。地图补普通 HTML 导航，并修正已有文章指向 `/map/` 的失效链接。
- 默认 OG/Twitter 图改为站内已有莫高窟外景 JPEG。原版构建中 94 个页面指向不存在的 `/og.png`。有独立配图的文章仍使用自己的图片。
- 保留原有的自指 canonical、EN/DE/FR hreflang、robots 和 XML Sitemap。保留供读者使用的问答；本轮不以 FAQ 富结果为目标。[Google 搜索文档更新](https://developers.google.com/search/updates)

## 3. 上线后 90 天

| 时间 | 动作 | 复盘与决策 |
|---|---|---|
| 上线当天至第 7 天 | 部署预览后查正式域名、尾斜杠、404 状态、5 个重点 URL 和地图，抽查 DE/FR 页面、robots、XML Sitemap。GSC 中检查这 6 个 URL 的 Google 所选 canonical 与抓取状态；已有 sitemap 提交可沿用，必要时对少数改动页请求编入索引。 | 记录实际部署日和提交号；确认重点页返回 200、可索引、服务器提供正确的 HTML。不要把生产构建当成 Google 已重新抓取。 |
| 第 8–35 天 | 每周导出一次 Web 搜索数据，记录 5 页各自的展示、点击、CTR 和平均排名；另看地图，分设备与国家抽查。同页筛选查询，用上文的意图簇做对照；避免从不同维度的表强行拼接。 | 用重新抓取后首个完整 28 天和本次基线比较；五页组 CTR 1.52% → 2.00% 为试验目标，按 1,187 展示约为 24 点击（基线 18）。只有展示量、排名和查询构成大致可比时才解读；样本不足就延长。IDP 看非纯导航查询及有统计条件时的官方链接点击。 |
| 第 36–60 天 | 按曝光与意图差距逐个深化 Pelliot、壁画相邻主题、地图、行程与旅行清单。地图测试移动实机及 PageSpeed Insights，优先核实首图、视频和 LCP。补景点时效信息前查官方来源。 | 高曝光低 CTR 先检查实际搜索标题、排名与意图；曝光不足再核实索引状态、站内入口和主题覆盖。每轮集中调整少量页面并记录变更日。 |
| 第 61–90 天 | 复核 DE/FR 现有重点页，只有持续获得本地化查询或清晰读者需求才扩语言。用来源扎实的壁画导览、档案检索和原创资料争取相关教育、旅行与文化资源引用。 | 以相同 28 天窗口跟踪内容簇与语言页；仅在可用分析工具已接入时再看订阅、地图导航等行为转化。 |

Google 的标题和摘要会按查询生成或改写，预期方向是让站点标题与页面首答一致，不保证固定展示文案或排名。[标题链接](https://developers.google.com/search/docs/appearance/title-link) · [摘要](https://developers.google.com/search/docs/appearance/snippet) · [请求重新抓取](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)

## 4. 覆盖、发布与回滚

1. 备份当前项目或从原 ZIP 对应版本建立独立分支。在项目根目录（有 `package.json`、`astro.config.mjs`、`src` 的那层）解压覆盖包，接受同路径文件覆盖。若项目比原 ZIP 更新，先逐文件比较再合并。
2. 使用现有 Node 版本及锁定依赖：`npm ci`，再 `npm run build`。部署产物为 `dist/`；使用现有托管平台的预览和发布流程。本包是源码增量，不能直接上传作为完整网站。
3. 发布后按上面的 200、canonical、hreflang、robots、sitemap 和地图链接清单验收。需要回滚时，撤销本次变更提交，或从备份／原始 ZIP 恢复清单中的源文件，重新构建部署。

## 5. 本地验收与覆盖文件

- 锁定依赖安装与生产构建通过：Astro 检查 34 个文件，0 错误、0 警告。生成 167 个 HTML 页面，路由集合与原版一致。
- 164 个 Sitemap URL 与对应 HTML canonical 一致，404、Privacy、Terms 不进入地图；验证 60 个页面的 hreflang 自指和互指。原先 94 个页面的缺失 OG/Twitter 图片引用已归零。
- 核对改动页面 HTML 中 358 次站内链接引用。Chrome 本地构建预览在 1280px 和 390px 下可切换地图并通过九色鹿标记进入文章；390px 禁用 JavaScript 后可从静态指南进入同一文章。
- 网站首页和部分英文页的公开缓存可访问；本地验收不代表托管重定向、实时 robots、Google 索引或第三方分享卡已验证。请部署后按第 3 节复核。

下列 **10 个源文件**会被覆盖，ZIP 另带本说明；原有依赖、配置和资源未变。

- `src/content/articles/places/dunhuang.md`
- `src/content/articles/places/dunhuang/cave-17.md`
- `src/content/articles/places/dunhuang/dunhuang-desert-retreat.md`
- `src/content/articles/places/dunhuang/international-dunhuang-programme.md`
- `src/content/articles/places/dunhuang/manuscripts.md`
- `src/content/articles/places/dunhuang/murals.md`
- `src/content/articles/places/dunhuang/nine-colored-deer-meaning.md`
- `src/layouts/Base.astro`
- `src/pages/[...slug].astro`
- `src/pages/dunhuang-map.astro`
