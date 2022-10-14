"use strict";(self.webpackChunkgenie_log=self.webpackChunkgenie_log||[]).push([[8681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={title:"NextJS \ud504\ub85c\uc81d\ud2b8 \ucd5c\uc801\ud654 \ud558\uae30",description:"NextJS\uac00 \uc81c\uacf5\ud558\ub294 \uae30\ub2a5\uc73c\ub85c \ucd5c\uc801\ud654\ud569\ub2c8\ub2e4",tags:["\ucd5c\uc801\ud654","nextjs"],date:"2022-10-14"},o=void 0,i={permalink:"/en/blog/nextjs-optimization",editUrl:"https://github.com/uhgenie7/uhgenie7.github.io/edit/main/blog/nextjs-optimization.md",source:"@site/blog/nextjs-optimization.md",title:"NextJS \ud504\ub85c\uc81d\ud2b8 \ucd5c\uc801\ud654 \ud558\uae30",description:"NextJS\uac00 \uc81c\uacf5\ud558\ub294 \uae30\ub2a5\uc73c\ub85c \ucd5c\uc801\ud654\ud569\ub2c8\ub2e4",date:"2022-10-14T00:00:00.000Z",formattedDate:"October 14, 2022",tags:[{label:"\ucd5c\uc801\ud654",permalink:"/en/blog/tags/\ucd5c\uc801\ud654"},{label:"nextjs",permalink:"/en/blog/tags/nextjs"}],readingTime:3.41,hasTruncateMarker:!1,authors:[],frontMatter:{title:"NextJS \ud504\ub85c\uc81d\ud2b8 \ucd5c\uc801\ud654 \ud558\uae30",description:"NextJS\uac00 \uc81c\uacf5\ud558\ub294 \uae30\ub2a5\uc73c\ub85c \ucd5c\uc801\ud654\ud569\ub2c8\ub2e4",tags:["\ucd5c\uc801\ud654","nextjs"],date:"2022-10-14"},prevItem:{title:"Introduction",permalink:"/en/blog/Introduction"}},p={authorsImageUrls:[]},s=[{value:"\ucd5c\uc801\ud654 \ud558\ub824\ub294 \ud504\ub85c\uc81d\ud2b8",id:"\ucd5c\uc801\ud654-\ud558\ub824\ub294-\ud504\ub85c\uc81d\ud2b8",level:2},{value:"\ucd5c\uc801\ud654 \uc804, lighthouse \uacb0\uacfc",id:"\ucd5c\uc801\ud654-\uc804-lighthouse-\uacb0\uacfc",level:2},{value:"1. SEO",id:"1-seo",level:3},{value:"2. Compression",id:"2-compression",level:3},{value:"3. SWC",id:"3-swc",level:3},{value:"4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud06c\uae30 \uc904\uc774\uae30",id:"4-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8-\ud06c\uae30-\uc904\uc774\uae30",level:3},{value:"\ucd5c\uc801\ud654 \uc774\ud6c4, lighthouse \uacb0\uacfc",id:"\ucd5c\uc801\ud654-\uc774\ud6c4-lighthouse-\uacb0\uacfc",level:2},{value:"Reference",id:"reference",level:2},{value:"mdn",id:"mdn",level:3},{value:"NextJs",id:"nextjs",level:3}],c={toc:s};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ucd5c\uc801\ud654-\ud558\ub824\ub294-\ud504\ub85c\uc81d\ud2b8"},"\ucd5c\uc801\ud654 \ud558\ub824\ub294 \ud504\ub85c\uc81d\ud2b8"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"nextjs-blog-challenge.vercel.app"},"nextjs-blog")),(0,a.kt)("h2",{id:"\ucd5c\uc801\ud654-\uc804-lighthouse-\uacb0\uacfc"},"\ucd5c\uc801\ud654 \uc804, lighthouse \uacb0\uacfc"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\ub9ac\ud329\ud130\ub9c1\uc804",src:n(4265).Z,width:"689",height:"441"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SSG\ub85c \ub9cc\ub4e4\uc5b4\uc838\uc788\ub294\ub370\ub2e4 \uae30\ub2a5\uc774 \ub9ce\uc774 \uc5c6\uc5b4\uc11c \ub300\ubd80\ubd84\uc758 \uc131\ub2a5\uc774 \uc774\ubbf8 \ub192\uc740 \uc0c1\ud0dc\uc600\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 SSG\ub85c \ub9cc\ub4e4\uc5b4\uc84c\uc74c\uc5d0\ub3c4 SEO\uc758 \uc810\uc218\uac00 \ub0ae\uae30 \ub54c\ubb38\uc5d0 SEO\ub97c \ub354 \ucc59\uaca8\ubcf4\uae30\ub85c \ud588\ub2e4.")),(0,a.kt)("h3",{id:"1-seo"},"1. SEO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Head"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc740 \ub450 \uac00\uc9c0\uc774\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"li"},"next/head")," \uc5d0\uc11c \uac00\uc838\uc624\ub294 \ubc29\ubc95\uacfc ",(0,a.kt)("inlineCode",{parentName:"li"},"next/document"),"\uc5d0\uc11c \uac00\uc838\uc624\ub294 \ubc29\ubc95\uc774 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ud398\uc774\uc9c0\uc5d0\uc11c meta \ud0dc\uadf8\ub97c '\uacf5\ud2cd'\uc73c\ub85c \uc4f0\uace0\uc790 \ud55c\ub2e4\uba74 ",(0,a.kt)("inlineCode",{parentName:"li"},"pages/_document.tsx"),"\uc5d0\uc11c \uc791\uc5c5\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud398\uc774\uc9c0\ub9c8\ub2e4 \ub2e4\ub978 meta \ud0dc\uadf8\ub97c \ubd80\uc5ec\ud558\uace0\uc790 \ud55c\ub2e4\uba74 (ex: title) ",(0,a.kt)("inlineCode",{parentName:"li"},"next/head")," \uc5d0\uc11c \uac00\uc838\uc640\uc11c \uc4f4\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\ub294 \uacf5\ud1b5\uc73c\ub85c \uc4f0\uace0\uc790 \ud588\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// src/components/Meta.tsx\n\nconst Meta = () => {\n  return (\n    <>\n      <meta charSet='utf-8' />\n      <meta\n        name='viewport'\n        content='width=device-width, initial-scale=1, shrink-to-fit=no'\n      />\n      <meta name='keywords' content='nextjs, \uc9c0\ub2c8, \ube14\ub85c\uadf8' />\n      // ...\n    </>\n  );\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Meta \ud0dc\uadf8\uac00 \uae38\uc5b4\uc9c8 \uac83 \uac19\uc544\uc11c, \ub610\ub294 \ucd94\ud6c4 \ub3d9\uc801 meta \ud0dc\uadf8\ub97c \ubd80\uc5ec\ud558\uace0\uc790 \ud560 \ub54c\ub97c \ub300\ube44\ud574 meta \ud0dc\uadf8\ub97c \ucef4\ud3ec\ub10c\ud2b8\ub85c \ube7c\ub450\uc5c8\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// pages/_document.tsx\n\nimport { Html, Head, Main, NextScript } from 'next/document';\nimport Meta from '@src/components/Meta';\n\nexport default function Document() {\n  return (\n    <Html lang='ko'>\n      <Head>\n        <Meta />\n      </Head>\n      <body>\n        <Main />\n        <NextScript />\n      </body>\n    </Html>\n  );\n}\n")),(0,a.kt)("h3",{id:"2-compression"},"2. ",(0,a.kt)("a",{parentName:"h3",href:"https://nextjs.org/docs/api-reference/next.config.js/compression"},"Compression")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Next.js\ub294 \ub80c\ub354\ub9c1\ub41c \ucf58\ud150\uce20\uc640 \uc815\uc801 \ud30c\uc77c\uc744 \uc555\ucd95\ud558\uae30 \uc704\ud574 ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc6713#section-3"},"gzip \uc555\ucd95"),"\uc744 \uc81c\uacf5\ud55c\ub2e4."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"gzip\uc740 \ud30c\uc77c \uc555\ucd95\uc5d0 \uc4f0\uc774\ub294 \uc751\uc6a9 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc774\ub2e4. gzip\uc740 GNU zip\uc758 \uc900\ub9d0\uc774\uba70, \ucd08\uae30 \uc720\ub2c9\uc2a4 \uc2dc\uc2a4\ud15c\uc5d0 \uc4f0\uc774\ub358 \uc555\ucd95 \ud504\ub85c\uadf8\ub7a8\uc744 \ub300\uccb4\ud558\uae30 \uc704\ud55c \uc790\uc720 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc774\ub2e4.")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// next.config.js\nmodule.exports = {\n  compress: true,\n};\n")))),(0,a.kt)("h3",{id:"3-swc"},"3. ",(0,a.kt)("a",{parentName:"h3",href:"https://nextjs.org/docs/advanced-features/compiler"},"SWC")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucef4\ud30c\uc77c\ub7ec. \uc774 \ucef4\ud30c\uc77c\ub7ec\ub97c \uc0ac\uc6a9\ud55c \ucef4\ud30c\uc77c\uc740 Babel\ubcf4\ub2e4 17\ubc30 \ube60\ub974\uba70 Next.js \ubc84\uc804 12\ubd80\ud130 \uae30\ubcf8\uc801\uc73c\ub85c \ud65c\uc131\ud654\ub41c\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// next.config.js\nmodule.exports = {\n  swcMinify: true,\n};\n")))),(0,a.kt)("h3",{id:"4-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8-\ud06c\uae30-\uc904\uc774\uae30"},"4. ",(0,a.kt)("a",{parentName:"h3",href:"https://nextjs.org/docs/going-to-production#reducing-javascript-size"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud06c\uae30 \uc904\uc774\uae30")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uad8c\uc7a5\ud558\ub294 \ub3c4\uad6c\ub294 \uc5ec\ub7ec \uac00\uc9c0\uac00 \uc788\uc9c0\ub9cc \uadf8 \uc911 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer"},"Webpack \ubc88\ub4e4 \ubd84\uc11d\uae30"),"\ub97c \uc801\uc6a9\ud574\ubcf4\uc558\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// next.config.js\nconst withBundleAnalyzer = require('@next/bundle-analyzer')({\n  enabled: process.env.ANALYZE === 'true',\n});\n\nmodule.exports = withBundleAnalyzer({\n  compress: true,\n  reactStrictMode: true,\n  swcMinify: true,\n  compiler: {\n    removeConsole: {\n      exclude: ['error'],\n    },\n  },\n  webpack(config, { webpack }) {\n    const prod = process.env.NODE_ENV === 'production';\n    return {\n      ...config,\n      mode: prod ? 'production' : 'development',\n      devtool: prod ? 'hidden-source-map' : 'eval-source-map',\n      plugins: [\n        ...config.plugins,\n        new webpack.ContextReplacementPlugin(\n          /moment[/\\\\]locale$/,\n          /^\\.\\/ko$/\n        ),\n      ],\n    };\n  },\n});\n")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\ubc88\ub4e4 clinet",src:n(9348).Z,width:"1909",height:"936"}),"\n",(0,a.kt)("img",{alt:"\ubc88\ub4e4 clinet2",src:n(5341).Z,width:"1904",height:"931"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc778 \ubc88\ub4e4\uc778 \uac83 \uac19\uc544\uc11c \ud2b8\ub9ac \uc250\uc774\ud0b9\ud558\uc9c4 \uc54a\uc558\ub2e4.")),(0,a.kt)("h2",{id:"\ucd5c\uc801\ud654-\uc774\ud6c4-lighthouse-\uacb0\uacfc"},"\ucd5c\uc801\ud654 \uc774\ud6c4, lighthouse \uacb0\uacfc"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\ub9ac\ud329\ud130\ub9c1\ud6c4",src:n(7293).Z,width:"722",height:"470"})),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("h3",{id:"mdn"},"mdn"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/HTTP/Compression"},"HTTP\uc5d0\uc11c\uc758 \uc555\ucd95"))),(0,a.kt)("h3",{id:"nextjs"},"NextJs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/api-reference/next.config.js/compression"},"NextJs \uc555\ucd95")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/advanced-features/dynamic-import"},"Dynamic Import")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/advanced-features/compiler"},"SWC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/going-to-production#reducing-javascript-size"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud06c\uae30 \uc904\uc774\uae30"))))}u.isMDXComponent=!0},7293:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/after-refactor-ec0db739e8723dad0362b06ea2e8bd61.png"},4265:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/before-refactor-e1fd72f6bcda37d65bad51bef50d4c49.png"},9348:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bundle-8b9970c3fc3095adf18028a948b043dd.png"},5341:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bundle2-cfeebeb0440d579ec7dad89d017a604a.png"}}]);