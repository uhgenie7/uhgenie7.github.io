"use strict";(self.webpackChunkgenie_log=self.webpackChunkgenie_log||[]).push([[8476],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6167:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={title:"Stale While Revalidate",description:"stale-while-revalidate \uc774\ub780?",tags:["stale-while-revalidate","cache"],date:"2022-10-12",image:"https://i.imgur.com/mErPwqL.png"},i=void 0,s={unversionedId:"dev/cs/stale-while-revalidate",id:"dev/cs/stale-while-revalidate",title:"Stale While Revalidate",description:"stale-while-revalidate \uc774\ub780?",source:"@site/docs/dev/cs/stale-while-revalidate.md",sourceDirName:"dev/cs",slug:"/dev/cs/stale-while-revalidate",permalink:"/en/docs/dev/cs/stale-while-revalidate",draft:!1,editUrl:"https://github.com/uhgenie7/uhgenie7.github.io/edit/main/docs/dev/cs/stale-while-revalidate.md",tags:[{label:"stale-while-revalidate",permalink:"/en/docs/tags/stale-while-revalidate"},{label:"cache",permalink:"/en/docs/tags/cache"}],version:"current",frontMatter:{title:"Stale While Revalidate",description:"stale-while-revalidate \uc774\ub780?",tags:["stale-while-revalidate","cache"],date:"2022-10-12",image:"https://i.imgur.com/mErPwqL.png"},sidebar:"dev",previous:{title:"introduction",permalink:"/en/docs/dev/jsts/introduction"},next:{title:"Fork \ud55c Repository\ub97c \uc6d0\ubcf8 Repository\uc640 \ub3d9\uae30\ud654\ud558\uae30",permalink:"/en/docs/dev/git/sync-repository"}},o={},p=[{value:"stale-while-revalidate?",id:"stale-while-revalidate",level:2},{value:"\uba54\ucee4\ub2c8\uc998",id:"\uba54\ucee4\ub2c8\uc998",level:2},{value:"&#39;\uc624\ub798 \ub418\uc5c8\ub2e4&#39;\ub294 \uae30\uc900\uc740?",id:"\uc624\ub798-\ub418\uc5c8\ub2e4\ub294-\uae30\uc900\uc740",level:3},{value:"Server State\uc640 UI State\uc758 \ucc28\uc774",id:"server-state\uc640-ui-state\uc758-\ucc28\uc774",level:2},{value:"Reference",id:"reference",level:2}],c={toc:p};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"stale-while-revalidate"},"stale-while-revalidate?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"The stale-while-revalidate Cache-Control Extension"),(0,n.kt)("br",{parentName:"p"}),"\n","When present in an HTTP response, the stale-while-revalidate Cache-Control extension indicates that caches MAY serve the response in which it appears after it becomes stale, up to the indicated number of seconds.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\uce90\uc2dc\ub41c \uc751\ub2f5\uc774 \uc624\ub798\ub41c \uac83\uc77c \uc218 \uc788\ub2e4\ub294 \uc544\uc774\ub514\uc5b4\uc640 \uc7ac\uac80\uc99d \ud504\ub85c\uc138\uc2a4.")),(0,n.kt)("p",null,"\uce90\uc2dc\ub780 \uc790\uc8fc \uc4f0\uc774\ub294 \ubb38\uc11c\uc758 \uc0ac\ubcf8\uc744 \uc790\ub3d9\uc73c\ub85c \ubcf4\uad00\ud558\ub294 HTTP \uc7a5\uce58\ub2e4. \uc6f9 \uc694\uccad\uc774 \uce90\uc2dc\uc5d0 \ub3c4\ucc29\ud588\uc744 \ub54c, \uce90\uc2dc\ub41c \ub85c\uceec \uc0ac\ubcf8\uc774 \uc874\uc7ac\ud55c\ub2e4\uba74, \uadf8 \ubb38\uc11c\ub294 \uc6d0\uc11c\ubc84\uac00 \uc544\ub2c8\ub77c \uce90\uc2dc\ub85c\ubd80\ud130 \uc81c\uacf5\ub41c\ub2e4. \uc989, \uce90\uc2dc\ub41c \ucf58\ud150\uce20\ub97c \uc989\uc2dc \ub85c\ub4dc\ud558\ub294 ",(0,n.kt)("strong",{parentName:"p"},"\uc989\uc2dc\uc131"),"\uc744 \uac00\uc9c0\uace0 \uc788\ub2e4."),(0,n.kt)("p",null,"\uc694\uc998 \uc790\uc8fc \ub4e4\uc5b4\uac00\ub294 \uc0ac\uc774\ud2b8\uc778 ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus"),"\uc5d0 \ub2e4\uc2dc \ub4e4\uc5b4\uac00 \ubcf4\uc558\ub2e4. \uc774\uacf3\uc758 Network\ub97c \ud655\uc778\ud574\ubcf4\uc790 \uc774\ubbf8\uc9c0 \uc678 \ub2e4\uc218\uac00 (memory cache) \ub418\uc5b4\uc788\uace0 \uc989\uc2dc \uac00\uc838\uc628 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"0ms\ub85c \uac00\uc838\uc628 \ubaa8\uc2b5",src:a(3584).Z,width:"971",height:"312"}),"\n",(0,n.kt)("em",{parentName:"p"},"0ms\ub85c \uac00\uc838\uc628 \ubaa8\uc2b5")),(0,n.kt)("p",null,"\uc624\ub79c \uc2dc\uac04 \ub4a4, \uc774 \uc6f9 \uc0ac\uc774\ud2b8\ub97c \ub2e4\uc2dc \ub4e4\uc5b4\uac00\ubcf8\ub2e4\uace0 \ud558\uc790. \uadf8 \uc0ac\uc774\uc5d0 docusaurus \uc0ac\uc774\ud2b8\uc5d0\uc11c \ubb38\uc11c\ub97c \uc5c5\ub370\uc774\ud2b8 \ud588\ub2e4\uace0 \uc0dd\uac01\ud574\ubcf4\uc790. \uadf8\ub7fc\uc5d0\ub3c4 \ube0c\ub77c\uc6b0\uc800\uac00 \uc624\ub798\ub41c \uce90\uc2dc\ub97c \uacc4\uc18d \uac00\uc838\uc628\ub2e4\uba74 \uc6b0\ub9ac\ub294 \uc624\ub798\ub41c \ubb38\uc11c\ub97c \ubcfc \uc218\ubc16\uc5d0 \uc5c6\ub2e4. \uc624\ub798\ub41c \uac83\uc744 stale \ud558\ub2e4\uace0 \uc774\uc57c\uae30\ud55c\ub2e4."),(0,n.kt)("p",null,"\uc774\ucc98\ub7fc \uc6d0 \uc11c\ubc84 \ucee8\ud150\uce20\ub294 \ubcc0\uacbd\ub420 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0, \uce90\uc2dc\ub294 \ubc18\ub4dc\uc2dc \uadf8\ub4e4\uc774 \uac16\uace0 \uc788\ub294 \uc0ac\ubcf8\uc774 \uc5ec\uc804\ud788 \ucd5c\uc2e0\uc778\uc9c0 \uc11c\ubc84\ub97c \ud1b5\ud574 \uc810\uac80\ud574\uc57c\ud55c\ub2e4."),(0,n.kt)("p",null,"stale-while-revalidate\ub294 \uce90\uc2dc\ub41c \ucf58\ud150\uce20\uc5d0 \ub300\ud55c \uc5c5\ub370\uc774\ud2b8\uac00 \ud5a5\ud6c4\uc5d0 \uc0ac\uc6a9\ub418\ub3c4\ub85d \ubcf4\uc7a5\ud558\ub294 \ucd5c\uc2e0\uc131 \uac04\uc758 \uade0\ud615\uc744 \uc720\uc9c0\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub41c\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cache-Control\uc744 \ud655\uc778\ud574\ubcf4\uc790",src:a(9428).Z,width:"903",height:"348"})),(0,n.kt)("h2",{id:"\uba54\ucee4\ub2c8\uc998"},"\uba54\ucee4\ub2c8\uc998"),(0,n.kt)("h3",{id:"\uc624\ub798-\ub418\uc5c8\ub2e4\ub294-\uae30\uc900\uc740"},"'\uc624\ub798 \ub418\uc5c8\ub2e4'\ub294 \uae30\uc900\uc740?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\uc694\uccad\uc774 \ucc98\uc74c \uc804\uc1a1\ub418\uba74 \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc758\ud574 \uce90\uc2dc\ub41c\ub2e4."),(0,n.kt)("li",{parentName:"ol"},"\ub3d9\uc77c\ud55c \uc694\uccad\uc774 \ub450 \ubc88\uc9f8\ub85c \uc804\uc1a1\ub418\uba74 \uce90\uc2dc\ub97c \uba3c\uc800 \ud655\uc778\ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ol"},"\ud574\ub2f9 \uc694\uccad\uc758 \uce90\uc2dc\uac00 ",(0,n.kt)("strong",{parentName:"li"},"\uc0ac\uc6a9 \uac00\ub2a5"),"\ud558\uace0 ",(0,n.kt)("strong",{parentName:"li"},"\uc720\ud6a8"),"\ud55c \uacbd\uc6b0 \uce90\uc2dc\uac00 \uc751\ub2f5\uc73c\ub85c \ubc18\ud658\ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ol"},"\uadf8\ub7f0 \ub2e4\uc74c \uce90\uc2dc\uc5d0 staleness(","*","\uc624\ub798\ub41c)\uac00 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uace0 staleness\uac00 \ubc1c\uacac\ub418\uba74 \uc5c5\ub370\uc774\ud2b8\ub41c\ub2e4.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc5ec\uae30\uc11c \uce90\uc2dc\uc758 staleness\ub294 ",(0,n.kt)("inlineCode",{parentName:"li"},"Cache-Control Header"),"\uc5d0 \uc788\ub294 ",(0,n.kt)("inlineCode",{parentName:"li"},"max-age"),"\uac12\uacfc ",(0,n.kt)("inlineCode",{parentName:"li"},"stale-while-revalidate"),"\uc5d0 \uc758\ud574 \uacb0\uc815\ub41c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"max-age\uac00 \ub9cc\ub8cc\ub418\uc9c0 \uc54a\uc558\ub2e4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc544\ubb34\uac83\ub3c4 \ud558\uc9c0 \uc54a\uc74c"))),(0,n.kt)("li",{parentName:"ul"},"max-age\uac00 \ub9cc\ub8cc\ub418\uc5c8\ub2e4.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stale-while-revalidate")," \ud655\uc778,"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stale-while-revalidate")," \uac00 \ub9cc\ub8cc\ub418\uc9c0 \uc54a\uc558\ub2e4\uba74?"),(0,n.kt)("li",{parentName:"ul"},'\uce90\uc2dc\ub41c \uc751\ub2f5\uc758 \uc0ac\uc6a9\uc744 \uc9c0\uc5f0\uc2dc\ud0a4\uc9c0 \uc54a\ub294 \ubc29\uc2dd\uc73c\ub85c \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ub300\ud574 "\uc7ac\uac80\uc99d" \uc694\uccad\uc774 \uc774\ub8e8\uc5b4\uc9c4\ub2e4. \ubc18\ud658\ub41c \uc751\ub2f5\uc740 \uc774\uc804\uc5d0 \uce90\uc2dc\ub41c \uc751\ub2f5\uacfc \ub3d9\uc77c\ud55c \uc815\ubcf4\ub97c \ud3ec\ud568\ud558\uac70\ub098 \ub2e4\ub97c \uc218 \uc788\ub2e4.'),(0,n.kt)("li",{parentName:"ul"},'\uc5b4\ub290 \ucabd\uc774\ub4e0 \ub124\ud2b8\uc6cc\ud06c \uc751\ub2f5\uc740 \ub85c\uceec\uc5d0 \uc800\uc7a5\ub418\uc5b4 \uc774\uc804\uc5d0 \uce90\uc2dc\ub41c \ud56d\ubaa9\uc744 \ub300\uccb4\ud558\uace0 \ud5a5\ud6c4 max-age \ube44\uad50 \uc911\uc5d0 \uc0ac\uc6a9\ub418\ub294 "\ucd5c\uc2e0\uc131" \ud0c0\uc774\uba38\ub97c \uc7ac\uc124\uc815\ud55c\ub2e4.'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stale-while-revalidate"),"\ub9c8\uc800 \ub118\uc5c8\ub2e4\uba74",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \uc0c8\ub85c \uc694\uccad\ud55c\ub2e4.")))))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\ub9e4\ucee4\ub2c8\uc998",src:a(9582).Z,width:"1720",height:"1189"}),"\n",(0,n.kt)("em",{parentName:"p"},"\ucd9c\ucc98:toptal")),(0,n.kt)("h2",{id:"server-state\uc640-ui-state\uc758-\ucc28\uc774"},"Server State\uc640 UI State\uc758 \ucc28\uc774"),(0,n.kt)("p",null,"\uc774\uc5d0 \ub300\ud574\uc120 ",(0,n.kt)("inlineCode",{parentName:"p"},"tanstack-query"),"\ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc798 \uc124\uba85\ud574\uc8fc\uace0 \uc788\ub2e4. \uc11c\ubc84 \uc0c1\ud0dc \ub77c\uc774\ube0c\ub7ec\ub9ac \uc911 \ud558\ub098\uc778 ",(0,n.kt)("inlineCode",{parentName:"p"},"tanstack-query"),"\ub294 \uc774\ucc98\ub7fc \uc774\uc57c\uae30\ud55c\ub2e4."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"React Query\ub294 \uc11c\ubc84\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8 \uac04\uc758 \ube44\ub3d9\uae30 \uc791\uc5c5\uc744 \uad00\ub9ac \ud558\ub294 \uc11c\ubc84 \uc0c1\ud0dc \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4.\nRedux, MobX, Zusstand \ub4f1\uc740 \ube44\ub3d9\uae30 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc0c1\ud0dc \ub77c\uc774\ube0c\ub7ec\ub9ac \uc774\uc9c0\ub9cc React Query\uc640 \uac19\uc740 \ub3c4\uad6c\uc640 \ube44\uad50\ud560 \ub54c \ube44\ud6a8\uc728\uc801\uc785\ub2c8\ub2e4.")),(0,n.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uc804\uc5ed \uc0c1\ud0dc\uac00 \uc788\ub2e4\uace0 \ud574\ubcf4\uc790."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"const globalState = {\n  projects,\n  teams,\n  tasks,\n  users,\n  themeMode,\n  sidebarStatus,\n}\n")),(0,n.kt)("p",null,"\uc774\ub97c '\uc11c\ubc84 \uc0c1\ud0dc'\uc640 'UI \uc0c1\ud0dc'\ub85c \ub098\ub204\uc5b4\ubcf4\uc790\uba74 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"const serverState = {\n  projects,\n  teams,\n  tasks,\n  users\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"const uiState = {\n  themeMode,\n  sidebarStatus,\n}\n")),(0,n.kt)("p",null,"\uc11c\ubc84\uc5d0\uc11c \uac00\uc838\uc624\ub294 \ub370\uc774\ud130\ub97c \uce90\uc2f1\ud560 \uc218 \uc788\ub294 ",(0,n.kt)("inlineCode",{parentName:"p"},"projects"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"teams"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"tasks"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"users")," \uc0c1\ud0dc\ub294 \uc5b8\uc81c\ub4e0\uc9c0 stale \ud574\uc9c8 \uc218 \uc788\uc9c0\ub9cc, \ub2e4\ud06c\ubaa8\ub4dc \uac19\uc740 \uc2a4\ud0c0\uc77c\uc774\ub098 \uc0ac\uc774\ub4dc\ubc14\uc758 \uc5ec\ub2eb\ud798\uc740 \uadf8\ub807\uc9c0 \uc54a\ub2e4."),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc5861#section-3"},"rfc")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://web.dev/stale-while-revalidate/"},"web.dev")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.toptal.com/react-hooks/stale-while-revalidate"},"toptal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tanstack.com/query/v4/docs/guides/does-this-replace-client-state?from=reactQueryV3&original=https://react-query-v3.tanstack.com/guides/does-this-replace-client-state"},"tanstack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"},"mdn"))))}d.isMDXComponent=!0},3584:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cashe1-4615d6ab67a0a543eb38f8ca89b79af2.png"},9582:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cashe2-073f2cd2df04eb2885deba37fa3db371.png"},9428:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cashe3-186a1fbcf737a1dd28148db716db92ec.png"}}]);