/**
 * 作品数据（数据驱动核心）
 *
 * 运维说明：新增或修改作品**只改这个文件**，HTML 和 CSS 都不用动。
 * 每张卡片由 works-render.js 自动生成，封面背景色由 coverClass 决定。
 *
 * 字段说明：
 *   title        卡片标题
 *   description  一句话说明
 *   image        封面图路径
 *   url          点击跳转地址
 *   year         年份（用于排序和右上角徽标）
 *   tags         标签数组（用于筛选）
 *   coverClass   作品专属类名（对应 styles.css 中的封面背景色）
 */
const works = [
  {
    title: '长风成卷 · 博客应用',
    description: '文章展示、接口与数据库。',
    image: 'assets/work-blog.png',
    url: 'https://ffd-p2-blog.netlify.app/',
    year: 2026,
    tags: ['前端', '后端', '数据库'],
    coverClass: 'work-blog',
  },
  {
    title: '群像云图 · 社区应用',
    description: '内容发布与社区互动。',
    image: 'assets/work-community.png',
    url: 'https://ffd-p3-community.netlify.app/',
    year: 2026,
    tags: ['前端', '数据库', '部署'],
    coverClass: 'work-community',
  },
  {
    title: '一笺心意 · 祝福卡片',
    description: '卡片制作与作品分享。',
    image: 'assets/work-greeting-card.png',
    url: 'https://ffd-p4-greeting-card.netlify.app/',
    year: 2025,
    tags: ['前端', 'AI'],
    coverClass: 'work-greeting-card',
  },
  {
    title: '星声音乐站 · 音乐应用',
    description: '网页音频与交互实践。',
    image: 'assets/work-music-station.png',
    url: 'https://ffd-p5-music-station.netlify.app/',
    year: 2025,
    tags: ['前端', '测试'],
    coverClass: 'work-music-station',
  },
]
