export interface Articles{
  type: string,
  color: string,
  title: string,
  link: string
}

export interface Data{
  lang: string,
  articles: Articles[]
}

export const cardData: Data[] = [
  {
    lang: 'HTML',
    articles: [
      {type:'基礎',color:'#777',title:'Learn HTML',link:'https://web.dev/learn/html/welcome?hl=zh-tw'},
      {type:'基礎',color:'#777',title:'HTML 備忘清單',link:'https://wangchujiang.com/reference/docs/html.html'},
      {type:'工具',color:'#c44',title:'HTML 語系',link:'https://hoohoo.top/blog/national-language-code-table-zh-tw-zh-cn-en-us-json-format/'},
      {type:'套件',color:'#d00',title:'htmx Document',link:'https://htmx.org/'},
    ]
  },
  {
    lang: 'CSS',
    articles: [
      {type:'基礎',color:'#777',title:'Learn CSS',link:'https://web.dev/learn/css/welcome?hl=zh-tw'},
      {type:'基礎',color:'#777',title:'CSS 備忘清單',link:'https://wangchujiang.com/reference/docs/css.html'},
      {type:'工具',color:'#c44',title:'Reset CSS',link:'https://meyerweb.com/eric/tools/css/reset/'},
      {type:'工具',color:'#c44',title:'clip-path maker',link:'https://bennettfeely.com/clippy/'},
      {type:'工具',color:'#c44',title:'Google Fonts',link:'https://fonts.google.com/'},
      {type:'工具',color:'#c44',title:'調色器',link:'https://gradients.app/zh/mix'},
      {type:'套件',color:'#d00',title:'Sass Document',link:'https://sass-lang.com/documentation/'},
      {type:'套件',color:'#d00',title:'tailwindcss Document',link:'https://tailwindcss.com/'},
      {type:'套件',color:'#d00',title:'Bootstrap Document',link:'https://getbootstrap.com/'},
      {type:'遊戲',color:'#55a',title:'flex game',link:'https://flexboxfroggy.com/#zh-tw'},
      {type:'遊戲',color:'#55a',title:'grid game',link:'https://cssgridgarden.com/#zh-tw'},
    ]
  },
  {
    lang: 'JavaScript',
    articles: [
      {type:'基礎',color:'#777',title:'JavaScript 教學',link:'https://www.runoob.com/js/js-intro.html'},
      {type:'基礎',color:'#777',title:'JavaScript 備忘清單',link:'https://wangchujiang.com/reference/docs/javascript.html'},
      {type:'基礎',color:'#777',title:'隱式轉換',link:'https://www.freecodecamp.org/chinese/news/javascript-implicit-type-conversion/'},
      {type:'基礎',color:'#777',title:'操控 DOM 元素',link:'https://nicolakacha.coderbridge.io/2020/09/06/dom/'},
      {type:'基礎',color:'#777',title:'事件循環',link:'https://juejin.cn/post/7002037475874963493'},
      {type:'基礎',color:'#777',title:'事件委派',link:'https://teagan-hsu.coderbridge.io/2021/01/01/javascript-dom-event-and-event-delegation/'},
      {type:'基礎',color:'#777',title:'this 解析',link:'https://medium.com/%E5%BE%AE%E5%B3%AF%E9%A3%9B%E7%BF%94/%E4%BB%8B%E7%B4%B9-javascript-this-%E7%9A%84%E4%BA%94%E7%A8%AE%E7%94%A8%E6%B3%95-d279327fe53a'},
      {type:'基礎',color:'#777',title:'Fetch API 使用教學',link:'https://www.oxxostudio.tw/articles/201908/js-fetch.html'},
      {type:'基礎',color:'#777',title:'Async/Await 詳解',link:'https://www.casper.tw/development/2020/10/16/async-await/'},
      {type:'基礎',color:'#777',title:'Promise 詳解',link:'https://www.casper.tw/development/2020/02/16/all-new-promise/'},
      {type:'基礎',color:'#777',title:'Cookie、LocalStorage',link:'https://medium.com/@bebebobohaha/cookie-localstorage-sessionstorage-%E5%B7%AE%E7%95%B0-9e1d5df3dd7f'},
      {type:'套件',color:'#d00',title:'TypeScript Document',link:'https://www.typescriptlang.org/'},
      {type:'套件',color:'#d00',title:'Swiper 幻燈片',link:'https://swiperjs.com/get-started'},
      {type:'套件',color:'#d00',title:'GSAP 動畫',link:'https://gsap.com/docs/v3/'},
      {type:'套件',color:'#d00',title:'axios HTTP請求工具',link:'https://axios-http.com/docs/intro'},
      {type:'框架',color:'#e00',title:'Vue Document',link:'https://vuejs.org/guide/introduction'},
      {type:'框架',color:'#e00',title:'React Document',link:'https://react.dev/'},
      {type:'框架',color:'#e00',title:'Express Document',link:'https://expressjs.com/zh-tw/guide/routing.html'},
      {type:'框架',color:'#e00',title:'NEXT.js Document',link:'https://nextjs.org/docs'},
      {type:'其他',color:'#F60',title:'KeyCodes 鍵盤編號',link:'https://gist.github.com/tylerbuchea/8011573'},
    ]
  },
]