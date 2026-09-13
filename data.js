// 番剧数据 —— 由站长维护
// 字段说明：
//   title    番剧名称（搜索、收藏都按它识别，需唯一）
//   year     放送年份（索引用）
//   month    首播月份 1-12（4K 站只标注年份，月份按各季首播时间填）
//   season   第几季，不填按 1
//   episodes 集数（以 4K 站线路1为准）
//   tags     标签数组，可参与搜索
//   synopsis 简介（复制自 4K 站，略作整理）
//   cover    封面图直链（4K 站图床）
//   play     播放入口：线路1第1集的播放页链接
//   site     该番在 4K 的详情页链接（备用入口）
const ANIME_DATA = [
  {
    title: "葬送的芙莉莲第二季",
    year: 2026, month: 1, season: 2, episodes: 10,
    tags: ["动画", "奇幻", "冒险"],
    synopsis: "动画《葬送的芙莉莲》第二季，精灵魔法使芙莉莲与修塔尔克、费伦一行的新旅程继续。",
    cover: "https://as.cfhls.top//upload/vod/20260116-1/d2488a7aac8be6c4c0fbe0802986bdf5.webp",
    play: "https://cn.agekkkk.com/anime/de236bc31b220c7115bf9cd1/play/1/1.html",
    site: "https://cn.agekkkk.com/anime/de236bc31b220c7115bf9cd1.html",
  },
  {
    title: "鬼灭之刃 柱训练篇",
    year: 2024, month: 5, season: 4, episodes: 8,
    tags: ["动画", "热血"],
    synopsis: "讲述鬼杀队九柱集训的故事，为与鬼舞辻无惨的最终决战做准备。",
    cover: "https://as.cfhls.top/upload/vod/20240302-1/07946b89d078913d3287a5bce769899f.jpg",
    play: "https://cn.agekkkk.com/anime/c62ed41f20d0a839e33f12c7/play/1/1.html",
    site: "https://cn.agekkkk.com/anime/c62ed41f20d0a839e33f12c7.html",
  },
  {
    title: "葬送的芙莉莲",
    year: 2023, month: 9, season: 1, episodes: 28,
    tags: ["动画", "奇幻", "冒险", "剧情"],
    synopsis: "改编自山田钟人原作、阿部司作画的同名漫画。打倒魔王的勇者一行中，精灵魔法使芙莉莲活在「之后」的世界里，故事从冒险结束的地方开始，讲述英雄们的活法的日后谈奇幻作品。",
    cover: "https://as.cfhls.top/upload/vod/20230919-1/59a774ab931b79d3957b40d38c43bf31.jpg",
    play: "https://cn.agekkkk.com/anime/e2b41c495b57bceaac10a5fd/play/1/1.html",
    site: "https://cn.agekkkk.com/anime/e2b41c495b57bceaac10a5fd.html",
  },
  {
    title: "鬼灭之刃 锻刀村篇",
    year: 2023, month: 4, season: 3, episodes: 11,
    tags: ["动画", "剧情", "热血"],
    synopsis: "炭治郎为修补日轮刀来到锻刀之里，与霞柱时透无一郎一同迎击逼近的上弦之鬼。",
    cover: "https://as.cfhls.top/upload/vod/20230723-4/7d0c947a18d706ee75b310834b034807.jpg",
    play: "https://cn.agekkkk.com/anime/bc8d2758594c39ce91c54349/play/1/1.html",
    site: "https://cn.agekkkk.com/anime/bc8d2758594c39ce91c54349.html",
  },
  {
    title: "鬼灭之刃 游郭篇",
    year: 2021, month: 10, season: 2, episodes: 11,
    tags: ["动画", "热血"],
    synopsis: "故事从《无限列车篇》失去炎柱后开端，以日本花街为舞台，音柱宇髄天元与堕姬姊妹即将登场。",
    cover: "https://as.cfhls.top/upload/vod/20230723-1/99d63a6d27ae8ebc4f77b0801a0c3949.jpg",
    play: "https://cn.agekkkk.com/anime/85812dbda0a619436bb167dc/play/1/1.html",
    site: "https://cn.agekkkk.com/anime/85812dbda0a619436bb167dc.html",
  },
  {
    title: "鬼灭之刃",
    year: 2019, month: 4, season: 1, episodes: 26,
    tags: ["动画", "奇幻", "热血"],
    synopsis: "改编自吾峠呼世晴同名漫画，ufotable 制作，2019年4月放送。大正时期，吃人的恶鬼横行。家人被鬼所杀、妹妹变成鬼的炭治郎加入「鬼杀队」，为让妹妹变回人类、为斩断悲伤的连锁而战斗。",
    cover: "https://as.cfhls.top/upload/vod/20230723-2/a7b978e8c75d0ed9d0a6dab56f6e8a79.jpg",
    play: "https://cn.agekkkk.com/anime/648a7c474de23984aae896f4/play/1/1.html",
    site: "https://cn.agekkkk.com/anime/648a7c474de23984aae896f4.html",
  },
];
