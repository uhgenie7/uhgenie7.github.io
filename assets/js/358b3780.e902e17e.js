"use strict";(self.webpackChunkgenie_log=self.webpackChunkgenie_log||[]).push([[661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),d=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?l.createElement(h,a(a({ref:t},p),{},{components:n})):l.createElement(h,a({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var d=2;d<o;d++)a[d]=n[d];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var l=n(7462),r=(n(7294),n(3905));const o={title:"02 \ub80c\ub354\ub9c1"},a=void 0,i={unversionedId:"books/frameworkless-front-end-development/02",id:"books/frameworkless-front-end-development/02",title:"02 \ub80c\ub354\ub9c1",description:"\ub370\uc774\ud130\ub97c \ud45c\uc2dc\ud55c\ub2e4\ub294 \uac83\uc740 \uc694\uc18c\ub97c \ud654\uba74\uc774\ub098 \ub2e4\ub978 \ucd9c\ub825 \uc7a5\uce58\uc5d0 \ub80c\ub354\ub9c1\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4.",source:"@site/docs/books/frameworkless-front-end-development/02.md",sourceDirName:"books/frameworkless-front-end-development",slug:"/books/frameworkless-front-end-development/02",permalink:"/docs/books/frameworkless-front-end-development/02",draft:!1,editUrl:"https://github.com/uhgenie7/uhgenie7.github.io/edit/main/docs/books/frameworkless-front-end-development/02.md",tags:[],version:"current",lastUpdatedAt:1666582173,formattedLastUpdatedAt:"Oct 24, 2022",frontMatter:{title:"02 \ub80c\ub354\ub9c1"},sidebar:"books",previous:{title:"01 \ud504\ub808\uc784\uc6cc\ud06c\uc5d0 \ub300\ud55c \uc774\uc57c\uae30",permalink:"/docs/books/frameworkless-front-end-development/01"},next:{title:"03 DOM \uc774\ubca4\ud2b8 \uad00\ub9ac",permalink:"/docs/books/frameworkless-front-end-development/03"}},s={},d=[{value:"\ubb38\uc11c \uac1d\uccb4 \ubaa8\ub378(DOM)",id:"\ubb38\uc11c-\uac1d\uccb4-\ubaa8\ub378dom",level:2},{value:"\ub80c\ub354\ub9c1 \uc131\ub2a5 \ubaa8\ub2c8\ud130\ub9c1",id:"\ub80c\ub354\ub9c1-\uc131\ub2a5-\ubaa8\ub2c8\ud130\ub9c1",level:2},{value:"\ud06c\ub86c \uac1c\ubc1c\uc790 \ub3c4\uad6c",id:"\ud06c\ub86c-\uac1c\ubc1c\uc790-\ub3c4\uad6c",level:3},{value:"FPS(\ucd08\ub2f9 \ud504\ub808\uc784 \uc218)",id:"fps\ucd08\ub2f9-\ud504\ub808\uc784-\uc218",level:4},{value:"stats.js",id:"statsjs",level:3},{value:"\ub80c\ub354\ub9c1 \ud568\uc218",id:"\ub80c\ub354\ub9c1-\ud568\uc218",level:2},{value:"01. \uc21c\uc218\ud568\uc218 \ub80c\ub354\ub9c1",id:"01-\uc21c\uc218\ud568\uc218-\ub80c\ub354\ub9c1",level:3},{value:"1. \uacb0\uacfc",id:"1-\uacb0\uacfc",level:4},{value:"2. html",id:"2-html",level:4},{value:"3. view.js",id:"3-viewjs",level:4},{value:"4. \ucee8\ud2b8\ub864\ub7ec",id:"4-\ucee8\ud2b8\ub864\ub7ec",level:4},{value:"02 \ub9ac\ud329\ud1a0\ub9c1",id:"02-\ub9ac\ud329\ud1a0\ub9c1",level:3},{value:"\uacb0\uacfc",id:"\uacb0\uacfc",level:4},{value:"03. \ub370\uc774\ud130 \uc18d\uc131\uc744 \uc774\uc6a9\ud558\uc5ec \uad6c\uc131\uc694\uc18c(Component) \uae30\ubc18\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc791\uc131\ud558\uae30",id:"03-\ub370\uc774\ud130-\uc18d\uc131\uc744-\uc774\uc6a9\ud558\uc5ec-\uad6c\uc131\uc694\uc18ccomponent-\uae30\ubc18\uc758-\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744-\uc791\uc131\ud558\uae30",level:3},{value:"1. \uacb0\uacfc",id:"1-\uacb0\uacfc-1",level:4},{value:"2. html",id:"2-html-1",level:4},{value:"3. registry.js",id:"3-registryjs",level:4},{value:"4. index.js",id:"4-indexjs",level:4},{value:"\ub3d9\uc801 \ub370\uc774\ud130 \ub80c\ub354\ub9c1",id:"\ub3d9\uc801-\ub370\uc774\ud130-\ub80c\ub354\ub9c1",level:2},{value:"\uacb0\uacfc",id:"\uacb0\uacfc-1",level:4},{value:"setInterval",id:"setinterval",level:4},{value:"\uac00\uc0c1DOM",id:"\uac00\uc0c1dom",level:3},{value:"\uacb0\uacfc",id:"\uacb0\uacfc-2",level:4},{value:"index.js",id:"indexjs",level:4},{value:"applyDiff.js",id:"applydiffjs",level:4},{value:"Reference",id:"reference",level:2}],p={toc:d};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ub370\uc774\ud130\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ud45c\uc2dc"),"\ud55c\ub2e4\ub294 \uac83\uc740 \uc694\uc18c\ub97c \ud654\uba74\uc774\ub098 \ub2e4\ub978 \ucd9c\ub825 \uc7a5\uce58\uc5d0 \ub80c\ub354\ub9c1\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","W3C\ub294 \ud504\ub85c\uadf8\ub798\ubc0d \ubc29\uc2dd\uc73c\ub85c \uc694\uc18c\ub97c \ub80c\ub354\ub9c1\ud558\ub294 \ubc29\uc2dd\uc744 ",(0,r.kt)("strong",{parentName:"p"},"\ubb38\uc11c \uac1d\uccb4 \ubaa8\ub378(DOM)\ub85c \uc815\uc758"),"\ud588\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","2\uc7a5\uc758 \ubaa9\uc801\uc740 \ud504\ub808\uc784\uc6cc\ud06c \uc5c6\uc774 DOM\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \uc870\uc791\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6b0\ub294 \ub370 \uc788\ub2e4."),(0,r.kt)("h2",{id:"\ubb38\uc11c-\uac1d\uccb4-\ubaa8\ub378dom"},"\ubb38\uc11c \uac1d\uccb4 \ubaa8\ub378(DOM)"),(0,r.kt)("p",null,"DOM\uc740 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\uc131\ud558\ub294 \uc694\uc18c\ub97c \uc870\uc791\ud560 \uc218 \uc788\ub294 API\ub2e4.\n",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/1998/WD-DOM-19980720/introduction.html"},"what is the DOM?")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uae30\uc220\uc801 \uad00\uc810\uc5d0\uc11c \ubcf4\uba74 \ubaa8\ub4e0 HTML \ud398\uc774\uc9c0\ub294 \ud2b8\ub9ac\ub85c \uad6c\uc131\ub41c\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="\uac04\ub2e8\ud55c HTML \ud14c\uc774\ube14"',title:'"\uac04\ub2e8\ud55c',HTML:!0,'\ud14c\uc774\ube14"':!0},"<html>\n  <body>\n    <table>\n      <tr>\n        <th>Framework</th>\n        <th>GitHub Stars</th>\n      </tr>\n      <tr>\n        <td>Vue</td>\n        <td>118917</td>\n      </tr>\n      <tr>\n        // highlight-next-line\n        <td>React</td>\n        <td>115392</td>\n      </tr>\n    </table>\n  </body>\n</html>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="React \uc140\uc758 \uc0c9\uc0c1 \ubcc0\uacbd"',title:'"React',"\uc140\uc758":!0,"\uc0c9\uc0c1":!0,'\ubcc0\uacbd"':!0},"const SELECTOR = 'tr:nth-child(3) > td';\nconst cell = document.querySelector(SELECTOR);\ncell.style.backgroundColor = 'red';\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub3d4\uc5d0 \uc811\uadfc\ud558\uc5ec backgroundColor\ub97c \ubc14\uafd4\uc8fc\uace0 \uc788\ub2e4.")),(0,r.kt)("h2",{id:"\ub80c\ub354\ub9c1-\uc131\ub2a5-\ubaa8\ub2c8\ud130\ub9c1"},"\ub80c\ub354\ub9c1 \uc131\ub2a5 \ubaa8\ub2c8\ud130\ub9c1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc6f9\uc6a9 \ub80c\ub354\ub9c1 \uc5d4\uc9c4\uc744 \uc124\uacc4\ud560 \ub54c\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"\uac00\ub3c5\uc131"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"\uc720\uc9c0 \uad00\ub9ac\uc131"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"\uc131\ub2a5"),"\uc744 \uace0\ub824\ud55c\ub2e4.")),(0,r.kt)("h3",{id:"\ud06c\ub86c-\uac1c\ubc1c\uc790-\ub3c4\uad6c"},"\ud06c\ub86c \uac1c\ubc1c\uc790 \ub3c4\uad6c"),(0,r.kt)("h4",{id:"fps\ucd08\ub2f9-\ud504\ub808\uc784-\uc218"},"FPS(\ucd08\ub2f9 \ud504\ub808\uc784 \uc218)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uac1c\ubc1c\uc790 \ub3c4\uad6c"),(0,r.kt)("li",{parentName:"ol"},"Cmd/Ctrl+Shift+P"),(0,r.kt)("li",{parentName:"ol"},"Show frame per seconds(FPS) meter")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fps",src:n(458).Z,width:"193",height:"180"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GPU\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uba54\ubaa8\ub9ac\uc591\uc774 \ud45c\uc2dc\ub41c\ub2e4.")),(0,r.kt)("h3",{id:"statsjs"},"stats.js"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mrdoob/stats.js"},"stats \ub77c\uc774\ube0c\ub7ec\ub9ac")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FPS \ubaa8\ub2c8\ud130\ub9c1 \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,r.kt)("li",{parentName:"ul"},"\ud504\ub808\uc784\uacfc \ud560\ub2f9\ub41c \uba54\uac00\ubc14\uc774\ud2b8\uc758 \uba54\ubaa8\ub9ac\ub97c \ub80c\ub354\ub9c1\ud558\ub294\ub370 \ud544\uc694\ud55c \ubc00\ub9ac\ucd08\ub97c \ud45c\uc2dc\ud560 \uc218 \uc788\uc74c")),(0,r.kt)("h2",{id:"\ub80c\ub354\ub9c1-\ud568\uc218"},"\ub80c\ub354\ub9c1 \ud568\uc218"),(0,r.kt)("p",null,"\uc21c\uc218 \ud568\uc218\ub85c \uc694\uc18c\ub97c \ub80c\ub354\ub9c1\ud55c\ub2e4\ub294 \uac83\uc740 DOM \uc694\uc18c\uac00 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0c1\ud0dc\uc5d0\ub9cc \uc758\uc874\ud55c\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4.\n\uc21c\uc218 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uba74 \ud14c\uc2a4\ud2b8 \uac00\ub2a5\uc131\uc774\ub098 \uad6c\uc131 \uac00\ub2a5\uc131 \uac19\uc740 \ub9ce\uc740 \uc7a5\uc810\uc774 \uc788\uc9c0\ub9cc \uba87 \uac00\uc9c0 \ubb38\uc81c\ub3c4 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"view = f(state)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TodoMVC")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://todomvc.com/examples/react/#/"},"\uc608\uc81c \ud15c\ud50c\ub9bf"))),(0,r.kt)("h3",{id:"01-\uc21c\uc218\ud568\uc218-\ub80c\ub354\ub9c1"},"01. \uc21c\uc218\ud568\uc218 \ub80c\ub354\ub9c1"),(0,r.kt)("h4",{id:"1-\uacb0\uacfc"},"1. \uacb0\uacfc"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/trusting-flower-snq3b7?fontsize=14&hidenavigation=1&theme=dark",width:"100%",height:"400px"}),(0,r.kt)("h4",{id:"2-html"},"2. html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<body>\n  // highlight-next-line\n  <section class="todoapp">\n    \x3c!-- todoapp: targetElement \uc73c\ub85c \uc811\uadfc\ud560 \uc694\uc18c --\x3e\n    <header class="header">\n      <h1>todos</h1>\n      <input class="new-todo" placeholder="What needs to be done?" autofocus />\n    </header>\n    <section class="main">\n      <input id="toggle-all" class="toggle-all" type="checkbox" />\n      <label for="toggle-all">Mark all as complete</label>\n      <ul class="todo-list"></ul>\n    </section>\n    <footer class="footer">\n      <span class="todo-count">1 Item Left</span>\n      <ul class="filters">\n        <li>\n          <a href="#/">All</a>\n        </li>\n        <li>\n          <a href="#/active">Active</a>\n        </li>\n        <li>\n          <a href="#/completed">Completed</a>\n        </li>\n      </ul>\n      <button class="clear-completed">Clear completed</button>\n    </footer>\n  </section>\n  <footer class="info">\n    <p>Double-click to edit a todo</p>\n    <p>\n      Created by\n      <a href="http://twitter.com/thestrazz86">Francesco Strazzullo</a>\n    </p>\n    <p>Thanks to <a href="http://todomvc.com">TodoMVC</a></p>\n  </footer>\n  <script type="module" src="index.js"><\/script>\n</body>\n')),(0,r.kt)("h4",{id:"3-viewjs"},"3. view.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="view.js"',title:'"view.js"'},"const getTodoElement = (todo) => {\n  const { text, completed } = todo;\n\n  return `\n  // highlight-next-line\n  <li ${completed ? 'class=\"completed\"' : ''}>\n    <div class=\"view\">\n      <input \n        // highlight-next-line\n        ${completed ? 'checked' : ''}\n        class=\"toggle\" \n        type=\"checkbox\">\n      <label>${text}</label>\n      <button class=\"destroy\"></button>\n    </div>\n    <input class=\"edit\" value=\"${text}\">\n  </li>`;\n};\n// completed \uc5ec\ubd80\uc5d0 \ub530\ub77c\uc11c class\ub97c \ub2e4\ub974\uac8c \ubd80\uc5ec\ud558\uac70\ub098 <input type='checkbox'/>\ub97c checked\ub85c \uc8fc\uace0 \uc788\ub2e4.\n\nconst getTodoCount = (todos) => {\n  const notCompleted = todos.filter((todo) => !todo.completed);\n\n  const { length } = notCompleted;\n  if (length === 1) {\n    return '1 Item left';\n  }\n\n  return `${length} Items left`;\n};\n// filter\uba54\uc11c\ub4dc\ub97c \uc774\uc6a9\ud574 \ub0a8\uc740 \ud560\uc77c \uac1c\uc218\ub97c \uc138\uace0 \uc788\ub2e4.\n\nexport default (targetElement, state) => {\n  const { currentFilter, todos } = state;\n  // \ub4e4\uc5b4\uc624\ub294 \ub9e4\uac1c\ubcc0\uc218 state\ub294 currentFilter, todos\ub97c obj\ub85c \uac16\uace0 \uc788\ub2e4.\n\n  const element = targetElement.cloneNode(true);\n  // targetElement(todoapp)\ub97c \ubcf5\uc0ac\ud558\uc5ec \ubcf5\uc81c\ubcf8 DOM\uc744 \uc218\uc815\ud560 \uac83\uc774\ub2e4.\n\n  const list = element.querySelector('.todo-list');\n  const counter = element.querySelector('.todo-count');\n  const filters = element.querySelector('.filters');\n\n  list.innerHTML = todos.map(getTodoElement).join('');\n  // \ubcf5\uc81c\ub41c list\uc5d0 todos\ub97c \ub07c\uc6cc\ub123\ub294\ub2e4.\n  counter.textContent = getTodoCount(todos);\n  // getTodoCount \ud568\uc218\uc758 return \uac12\uc774 'string'\uc774\uc5c8\uc74c\uc744 \uae30\uc5b5\ud558\uc790.\n  //counter.textContent\uc5d0 \ub0a8\uc740 todo\uc758 \uac1c\uc218\ub97c \ub07c\uc6cc\ub123\ub294\ub2e4.\n\n  Array.from(filters.querySelectorAll('li a')).forEach((a) => {\n    if (a.textContent === currentFilter) {\n      a.classList.add('selected');\n    } else {\n      a.classList.remove('selected');\n    }\n  });\n\n  return element;\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cloneNode\ub97c \ud558\uace0 \uc218\uc815\uc744 \uac00\ud588\uc73c\ubbc0\ub85c \uc2e4\uc81c DOM\uc5d0\uac8c\ub294 \uc544\ubb34\ub7f0 \uc601\ud5a5\uc774 \uc5c6\ub2e4.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Node.cloneNode()"),(0,r.kt)("small",null,"Node.cloneNode() \uba54\uc11c\ub4dc\ub294 \uc774 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud55c Node \uc758 \ubcf5\uc81c\ub41c Node\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. cloneNode(true) \uc77c \uacbd\uc6b0 \uc790\uc2dd \ub178\ub4dc\ub97c \ud568\uaed8 \ubcf5\uc0ac\ud569\ub2c8\ub2e4.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Node.textContent"),(0,r.kt)("small",null,"Node.textContent\ub294 \ub178\ub4dc\uc640 \uadf8 \uc790\uc190\uc758 \ud14d\uc2a4\ud2b8 \ucf58\ud150\uce20\ub97c \ud45c\ud604\ud569\ub2c8\ub2e4. innerText\ub294 \ud574\ub2f9 Element \ub0b4\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc5d0\uac8c '\ubcf4\uc5ec\uc9c0\ub294' \ud14d\uc2a4\ud2b8 \uac12\uc744 \uc77d\uc5b4\uc624\uc9c0\ub9cc, textContent\ub294 \ud14d\uc2a4\ud2b8\uac00 \uc228\uaca8\uc838 \uc788\ub354\ub77c\ub3c4 \ud574\ub2f9 \ub178\ub4dc\uac00 \uac00\uc9c0\uace0 \uc788\ub294 \ud14d\uc2a4\ud2b8 \uac12\uc744 \ubaa8\ub450 \uc77d\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h4",{id:"4-\ucee8\ud2b8\ub864\ub7ec"},"4. \ucee8\ud2b8\ub864\ub7ec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import getTodos from './getTodos.js';\n// getTodos \ud30c\uc77c\uc740 fake \ud30c\uc77c\uc774\ub2e4.\nimport view from './view.js';\n\nconst state = {\n  todos: getTodos(),\n  currentFilter: 'All',\n};\n\nconst main = document.querySelector('.todoapp');\n\n// highlight-next-line\nwindow.requestAnimationFrame(() => {\n  const newMain = view(main, state);\n  main.replaceWith(newMain);\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubcf5\uc81c\ubcf8 DOM\uc744 \uc2e4\uc81c DOM\uacfc \uc5f0\uacb0\ud558\uae30 \uc704\ud574 \ucee8\ud2b8\ub864\ub7ec\uac00 \ud544\uc694\ud558\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uadf8\ub0e5 \uc5f0\uacb0\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c, ",(0,r.kt)("inlineCode",{parentName:"li"},"requestAnimationFrame"),"\uc744 \uc774\uc6a9\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 DOM \uc870\uc791\uc774\ub098 \uc560\ub2c8\uba54\uc774\uc158\uc740 requestAnimationFrame\uc744 \uae30\ubc18\uc73c\ub85c \ud574\uc57c \ud55c\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud6a8\uc728\uc801\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774 API\ub294 \uba54\uc778 \uc2a4\ub808\ub4dc\ub97c \ucc28\ub2e8\ud558\uc9c0 \uc54a\uc73c\uba70 repaint\uac00 \uc774\ubca4\ud2b8\ub8e8\ud504\uc5d0\uc11c \uc2a4\ucf00\uc904\ub9c1 \ub419 \uc9c1\uc804\uc5d0 \uc2e4\ud589\ub41c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vimeo.com/254947206"},"\ucc38\uc870 \ube44\ub514\uc624"))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Element.replaceWith()"),(0,r.kt)("small",null,"replaceWith\ub294 Element \ubd80\ubaa8\uc758 \uc790\uc2dd \ubaa9\ub85d\uc744 Node \ub610\ub294 \ubb38\uc790\uc5f4 \uac1c\uccb4 \uc9d1\ud569\uc73c\ub85c \ubc14\uafc9\ub2c8\ub2e4. \ubb38\uc790\uc5f4 \uac1c\uccb4\ub294 \ub3d9\ub4f1\ud55c Text \ub178\ub4dc\ub85c \uc0bd\uc785\ub429\ub2c8\ub2e4.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"window.requestAnimationFrame()"),(0,r.kt)("small",null,"\ube0c\ub77c\uc6b0\uc800\uc5d0\uac8c \uc218\ud589\ud558\uae30\ub97c \uc6d0\ud558\ub294 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc54c\ub9ac\uace0 \ub2e4\uc74c \ub9ac\ud398\uc778\ud2b8\uac00 \uc9c4\ud589\ub418\uae30 \uc804\uc5d0 \ud574\ub2f9 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uac8c \ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"02-\ub9ac\ud329\ud1a0\ub9c1"},"02 \ub9ac\ud329\ud1a0\ub9c1"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud568\uc218\uac00 \ub108\ubb34 \ub9ce\uc740 \uc77c\uc744 \ud558\uace0 \uc788\ub2e4."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec DOM \uc694\uc18c\ub97c \uc870\uc791\ud558\ub294 \ud568\uc218\uac00 \ub2e8 \ud558\ub098\ubfd0\uc774\ub2e4. \uc774\ub294 \uc0c1\ud669\uc744 \uc544\uc8fc \uc27d\uac8c \ubcf5\uc7a1\ud558\uac8c \ub9cc\ub4e4 \uc218 \uc788\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ub3d9\uc77c\ud55c \uc791\uc5c5\uc784\uc5d0\ub3c4 \uc5ec\ub7ec \ubc29\ubc95\uc73c\ub85c \uc218\ud589 \uc911\uc774\ub2e4."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DOM\uc744 \uc218\uc815\ud560 \ub54c \ubb38\uc790\uc5f4\ub85c \ucc98\ub9ac\ud558\uac70\ub098 \ub0b4\ubd80 text\ub9cc \ubcc0\uacbd\ud558\uac70\ub098 classList\ub85c \uad00\ub9ac\ud558\ub294 \ub4f1 \uc5ec\ub7ec \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4.")))),(0,r.kt)("h4",{id:"\uacb0\uacfc"},"\uacb0\uacfc"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/restless-thunder-p89ydl?fontsize=14&hidenavigation=1&theme=dark",width:"100%",height:"400px"}),(0,r.kt)("h3",{id:"03-\ub370\uc774\ud130-\uc18d\uc131\uc744-\uc774\uc6a9\ud558\uc5ec-\uad6c\uc131\uc694\uc18ccomponent-\uae30\ubc18\uc758-\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744-\uc791\uc131\ud558\uae30"},"03. \ub370\uc774\ud130 \uc18d\uc131\uc744 \uc774\uc6a9\ud558\uc5ec \uad6c\uc131\uc694\uc18c(Component) \uae30\ubc18\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc791\uc131\ud558\uae30"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc704\uc758 view\ub97c \ubcf4\uba74, \ud568\uc218\ub97c \ubaa8\ub450 \uc218\ub3d9\uc73c\ub85c \ud638\ucd9c\ud558\uace0 \uc788\uc74c. list, counter, filters \ub4f1 querySelector\ub85c \uac00\uc838\uc640 replace\ud558\uace0 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Component \uae30\ubc18\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc791\uc131\ud558\ub824\uba74 \uad6c\uc131 \uc694\uc18c \uac04\uc758 \uc0c1\ud638\uc791\uc6a9\uc5d0 ",(0,r.kt)("strong",{parentName:"li"},"\uc120\uc5b8\uc801 \ubc29\uc2dd"),"\uc744 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac00\uc7a5 \uba3c\uc800, \ud2b9\uc815 \uc0ac\ub840\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc120\uc5b8\ud558\ub294 \ubc29\ubc95\uc744 \uc815\uc758\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/Use_data_attributes"},"\ub370\uc774\ud130 \uc18d\uc131"),"\uc744 \uc774\uc6a9\ud574 \uc0ac\uc6a9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc815\uc758\ud55c\ub2e4.")),(0,r.kt)("h4",{id:"1-\uacb0\uacfc-1"},"1. \uacb0\uacfc"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/inspiring-lake-o6rov5?fontsize=14&hidenavigation=1&theme=dark",width:"100%",height:"400px"}),(0,r.kt)("h4",{id:"2-html-1"},"2. html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<html>\n  \x3c!-- \uc0dd\ub7b5 --\x3e\n      <section class="main">\n        <input id="toggle-all" class="toggle-all" type="checkbox" />\n        <label for="toggle-all"> Mark all as complete </label>\n        // highlight-next-line\n        <ul class="todo-list" data-component="todos"></ul>\n      </section>\n      <footer class="footer">\n        // highlight-next-line\n        <span class="todo-count" data-component="counter"> 1 Item Left </span>\n        // highlight-next-line\n        <ul class="filters" data-component="filters">\n          <li>\n            <a href="#/">All</a>\n          </li>\n          <li>\n            <a href="#/active">Active</a>\n          </li>\n          <li>\n            <a href="#/completed">Completed</a>\n          </li>\n        </ul>\n        <button class="clear-completed">Clear completed</button>\n      </footer>\n    </section>\n  </body>\n</html>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"data-component \uc18d\uc131\uc744 \uc0ac\uc6a9\ud558\uc5ec component\uc758 name\uc744 \uc815\uc758\ud574\uc8fc\uc5c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774 \uc18d\uc131\uc740 \ubdf0 \ud568\uc218\uc758 \ud544\uc218 \ud638\ucd9c\uc744 \ub300\uccb4\ud55c\ub2e4.")),(0,r.kt)("h4",{id:"3-registryjs"},"3. registry.js"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc778\ub371\uc2a4"),(0,r.kt)("li",{parentName:"ul"},"\uc774 \ub9e4\ucee4\ub2c8\uc998\uc740 \uc7ac\uc0ac\uc6a9\uc131\uc744 \uc704\ud574 \ub8e8\ud2b8 \ucee8\ud14c\uc774\ub108(view.js) \ubfd0\ub9cc \uc544\ub2c8\ub77c \uc0dd\uc131\ud560 \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\ub3c4 \uc801\uc6a9\ub418\uc5b4\uc57c \ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\uac00 data-component \uc18d\uc131\uc758 \uac12\uc744 \uc77d\uace0 \uc62c\ubc14\ub978 \ud568\uc218\ub97c \uc790\ub3d9\uc73c\ub85c \ud638\ucd9c\ud558\ub294 \uae30\ubcf8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0c1\uc18d\ub3fc\uc57c \ud55c\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8\ub97c \ub798\ud551\ud558\ub294 \uace0\ucc28 \ud568\uc218\ub97c \uc0dd\uc131\ud574\uc57c \ud55c\ub2e4.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="registry.js"',title:'"registry.js"'},"const registry = {};\n// \ub808\uc9c0\uc2a4\ud2b8\ub9ac \ud0a4\ub294 data-component \uc18d\uc131 \uac12\uacfc \uc77c\uce58\ud55c\ub2e4.\n\nconst renderWrapper = (component) => {\n  return (targetElement, state) => {\n    const element = component(targetElement, state);\n\n    const childComponents = element.querySelectorAll('[data-component]');\n\n    Array.from(childComponents).forEach((target) => {\n      const name = target.dataset.component;\n\n      const child = registry[name];\n      if (!child) {\n        return;\n      }\n\n      target.replaceWith(child(target, state));\n    });\n\n    return element;\n  };\n};\n// [data-component]\ub97c \ud1a0\ub300\ub85c \uc6d0\ubcf8 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uac00\uc838\uc640 \ub3d9\uc77c\ud55c \uad6c\uc131\uc758 \uc0c8\ub85c\uc6b4 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubc18\ud658\ud55c\ub2e4.\n// \uc694\uc18c\uac00 \ubc1c\uacac\ub418\uba74 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub3d9\uc77c\ud55c \ud568\uc218\ub85c \ub7a9\ud551\ud558\uc5ec \ud638\ucd9c\ud55c\ub2e4.\n\nconst add = (name, component) => {\n  registry[name] = renderWrapper(component);\n};\n// \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ucd94\uac00\ud558\uae30 \uc704\ud574 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub7a9\ud551\n// renderWrapper\ub97c registry\uc5d0 \ucd94\uac00\n\nconst renderRoot = (root, state) => {\n  const cloneComponent = (root) => {\n    return root.cloneNode(true);\n  };\n\n  return renderWrapper(cloneComponent)(root, state);\n};\n// \ucd5c\ucd08 DOM \uc694\uc18c\uc5d0\uc11c \ub80c\ub354\ub9c1\uc744 \uc2dc\uc791\ud558\ub824\uba74 root\ub97c \ub80c\ub354\ub9c1\ud558\ub294 \uba54\uc11c\ub4dc\uac00 \uc788\uc5b4\uc57c \ud55c\ub2e4.\n// \uc774\ub807\uac8c \ub9cc\ub4e0 \uac83\uc744 renderRoot\ub85c \ub0b4\ubcf4\ub0b4\uc11c, index.js\uc5d0\uc11c \ud55c \ubc88\uc5d0 \ucc98\ub9ac\ud55c\ub2e4.\n\nexport default {\n  add,\n  renderRoot,\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"component \uae30\ubc18 \ub80c\ub354\ub9c1 \uc5d4\uc9c4\uc758 \ud575\uc2ec \uba54\ucee4\ub2c8\uc998."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"li"},"renderRoot"),"\ub294 \ucef4\ud3ec\ub10c\ud2b8 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc758 \uacf5\uc6a9 \uc778\ud130\ud398\uc774\uc2a4\ub2e4.")),(0,r.kt)("h4",{id:"4-indexjs"},"4. index.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import getTodos from './getTodos.js';\nimport todosView from './view/todos.js';\nimport counterView from './view/counter.js';\nimport filtersView from './view/filters.js';\n\n// highlight-next-line\nimport registry from './registry.js';\n\n// highlight-start\nregistry.add('todos', todosView);\nregistry.add('counter', counterView);\nregistry.add('filters', filtersView);\n// highlight-end\n// \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ucef4\ud3ec\ub10c\ud2b8 \ucd94\uac00\n// \ub450 \ubc88\uc9f8 \ub9e4\uac1c\ubcc0\uc218\ub294 renderWrapper\uac00 \ucc98\ub9ac\ud55c\ub2e4.\n\nconst state = {\n  todos: getTodos(),\n  currentFilter: 'All',\n};\n\nwindow.requestAnimationFrame(() => {\n  const main = document.querySelector('.todoapp');\n  // highlight-next-line\n  const newMain = registry.renderRoot(main, state);\n  main.replaceWith(newMain);\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc55e\uc11c \ub9cc\ub4e0 ",(0,r.kt)("inlineCode",{parentName:"li"},"registry"),"\ub97c \uc774\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub864\ub7ec\uc5d0\uc11c \ud569\uccd0\uc8fc\uace0 \uc788\ub2e4.")),(0,r.kt)("h2",{id:"\ub3d9\uc801-\ub370\uc774\ud130-\ub80c\ub354\ub9c1"},"\ub3d9\uc801 \ub370\uc774\ud130 \ub80c\ub354\ub9c1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc0c8 \ub370\uc774\ud130\uac00 \uc788\uc744 \ub54c\ub9c8\ub2e4 \uac00\uc0c1 \ub8e8\ud2b8 \uc694\uc18c\ub97c \ub9cc\ub4e0 \ud6c4 \uc2e4\uc81c \uc694\uc18c\ub97c \uc0c8\ub85c \uc0dd\uc131\ud55c \uc694\uc18c\ub85c \ubc14\uafbc\ub2e4.")),(0,r.kt)("h4",{id:"\uacb0\uacfc-1"},"\uacb0\uacfc"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/clever-forest-2unfcw?fontsize=14&hidenavigation=1&theme=dark",width:"100%",height:"400px"}),(0,r.kt)("h4",{id:"setinterval"},"setInterval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"const state = {\n  todos: getTodos(),\n  currentFilter: 'All',\n};\n\nconst render = () => {\n  window.requestAnimationFrame(() => {\n    const main = document.querySelector('.todoapp');\n    const newMain = registry.renderRoot(main, state);\n    // highlight-next-line\n    main.replaceWith(newMain);\n  });\n};\n\n// highlight-start\nwindow.setInterval(() => {\n  state.todos = getTodos();\n  render();\n}, 5000);\n// highlight-end\nrender();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub300\uaddc\ubaa8 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\ub294 \uc131\ub2a5\uc744 \uc800\ud558\uc2dc\ud0ac \uc218 \uc788\ub2e4.")),(0,r.kt)("h3",{id:"\uac00\uc0c1dom"},"\uac00\uc0c1DOM"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://uhgenie7.github.io/blog/pre-onboarding-frontend-03-01/pre-onboarding-frontend-03-01/#%EC%9E%AC%EC%A1%B0%EC%A0%95reconciliation"},"reconciliation(\uc7ac\uc870\uc815)"),": UI \ud45c\ud604\uc740 \uba54\ubaa8\ub9ac\uc5d0 \uc720\uc9c0\ud558\uace0 ",(0,r.kt)("strong",{parentName:"p"},"\uc2e4\uc81c")," DOM\uacfc \ub3d9\uae30\ud654\ub41c\ub2e4. \uc2e4\uc81c DOM\uc740 \uac00\ub2a5\ud55c \uc801\uc740 \uc791\uc5c5\uc744 \uc218\ud589\ud55c\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac00\uc0c1\ub3d4\uc740 diff \uc54c\uace0\ub9ac\uc998\uc744 \uc0ac\uc6a9\ud558\uc5ec, ",(0,r.kt)("inlineCode",{parentName:"li"},"\uc2e4\uc81c \ub3d4"),"\uc744 ",(0,r.kt)("inlineCode",{parentName:"li"},"\uc0c8\ub85c\uc6b4 \ub3d4")," \uc694\uc18c\uc758 \uc0ac\ubcf8\uc73c\ub85c \ubc14\uafb8\ub294 \uac00\uc7a5 \ube60\ub978 \ubc29\ubc95\uc744 \ucc3e\uc544\ub0b8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"replaceWith \ub300\uc2e0\uc5d0 diff \uc54c\uace0\ub9ac\uc998\uc744 \uc0ac\uc6a9\ud558\uc5ec \uac00\uc0c1\ub3d4\uc744 \uad6c\ud604\ud574\ubcf4\uc790.")),(0,r.kt)("h4",{id:"\uacb0\uacfc-2"},"\uacb0\uacfc"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/competent-volhard-ul9bv9?fontsize=14&hidenavigation=1&theme=dark",width:"100%",height:"400px"}),(0,r.kt)("h4",{id:"indexjs"},"index.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"const state = {\n  todos: getTodos(),\n  currentFilter: 'All',\n};\n\nconst render = () => {\n  window.requestAnimationFrame(() => {\n    const main = document.querySelector('.todoapp');\n    const newMain = registry.renderRoot(main, state);\n    // highlight-next-line\n    applyDiff(document.body, main, newMain);\n    // main.replaceWith(newMain);\uc5d0\uc11c applyDiff(document.body, main, newMain)\uc73c\ub85c \ubc14\uafb8\uc5c8\ub2e4.\n  });\n};\n\nwindow.setInterval(() => {\n  state.todos = getTodos();\n  render();\n}, 5000);\n\nrender();\n")),(0,r.kt)("h4",{id:"applydiffjs"},"applyDiff.js"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"applyDiff(\ud604\uc7ac DOM \ub178\ub4dc, \uc2e4\uc81c DOM \ub178\ub4dc, \uc0c8\ub85c\uc6b4 \uac00\uc0c1 DOM \ub178\ub4dc\uc758 \ubd80\ubaa8)")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"applyDiff")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="applyDiff.js"',title:'"applyDiff.js"'},"const realChildren = Array.from(realNode.children); // \uc2e4\uc81c \ub178\ub4dc\uc758 \uc790\uc2dd \ub178\ub4dc\ub4e4\uc744 \ubc30\uc5f4\ub85c,\nconst virtualChildren = Array.from(virtualNode.children); // \uac00\uc0c1 \ub178\ub4dc\uc758 \uc790\uc2dd \ub178\ub4dc\ub4e4\uc744 \ubc30\uc5f4\ub85c,\n\nconst max = Math.max(realChildren.length, virtualChildren.length); // \ub450 \ubc30\uc5f4\uc758 \uac1c\uc218 \uc911 \ub354 \ud070 \uac83\uc744 max\ub85c \ud560\ub2f9\nfor (let i = 0; i < max; i++) {\n  applyDiff(realNode, realChildren[i], virtualChildren[i]); // \ubc18\ubcf5\ubb38\uc73c\ub85c applyDiff\ub85c \ube44\uad50\ud55c\ub2e4.\n}\n// \ud558\uc704 \ub178\ub4dc\uc5d0 \ub300\ud574 \ub3d9\uc77c\ud55c diff \uc54c\uace0\ub9ac\uc998\uc744 \uc801\uc6a9.\n\nconst applyDiff = (parentNode, realNode, virtualNode) => {\n  if (realNode && !virtualNode) {\n    realNode.remove();\n    return;\n  }\n  // \uc2e4\uc81c \ub178\ub4dc\uac00 \uc815\uc758\ub418\uc5b4 \uc788\uace0, \uac00\uc0c1\ub178\ub4dc\uac00 \uc815\uc758\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \uc2e4\uc81c \ub178\ub4dc\ub97c \uc0ad\uc81c\n\n  if (!realNode && virtualNode) {\n    parentNode.appendChild(virtualNode);\n    return;\n  }\n  // \uc2e4\uc81c \ub178\ub4dc\uac00 \uc815\uc758\ub418\uc5b4 \uc788\uc9c0 \uc54a\uace0, \uac00\uc0c1\ub178\ub4dc\uac00 \uc815\uc758\ub41c \uacbd\uc6b0, \uac00\uc0c1\ub178\ub4dc\ub97c \ubd80\ubaa8 \ub178\ub4dc\uc5d0 \ucd94\uac00\n\n  // highlight-next-line\n  if (isNodeChanged(virtualNode, realNode)) {\n    realNode.replaceWith(virtualNode);\n    return;\n  }\n  // \uc2e4\uc81c \ub178\ub4dc, \uac00\uc0c1\ub178\ub4dc \ubaa8\ub450 \uc815\uc758\ub418\uc5c8\ub2e4\uba74 \ub450 \ub178\ub4dc\uac04\uc758 \ucc28\uc774\ub97c \ubd84\uc11d\ud55c\ub2e4.\n  // Node\uac00 \ubc14\ub00c\uc558\ub2e4\uba74(true\ub77c\uba74), \uc2e4\uc81c \ub178\ub4dc\ub97c \uac00\uc0c1 \ub178\ub4dc\ub85c \ubc14\uafbc\ub2e4.\n};\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"isNodeChanged")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="applyDiff.js"',title:'"applyDiff.js"'},"const isNodeChanged = (node1, node2) => {\n  const n1Attributes = node1.attributes;\n  const n2Attributes = node2.attributes;\n\n  // highlight-next-line\n  if (n1Attributes.length !== n2Attributes.length) {\n    return true;\n  }\n  // \uc18d\uc131 \uc218\uac00 \ub2e4\ub974\ub2e4.\n\n  const differentAttribute = Array.from(n1Attributes).find((attribute) => {\n    const { name } = attribute;\n    const attribute1 = node1.getAttribute(name);\n    const attribute2 = node2.getAttribute(name);\n\n    return attribute1 !== attribute2;\n  });\n\n  // highlight-next-line\n  if (differentAttribute) {\n    return true;\n  }\n  // \ud558\ub098 \uc774\uc0c1\uc758 \uc18d\uc131\uc774 \ubcc0\uacbd\ub418\uc5c8\ub2e4.\n\n  if (\n    node1.children.length === 0 &&\n    node2.children.length === 0 &&\n    // highlight-next-line\n    node1.textContent !== node2.textContent\n  ) {\n    return true;\n  }\n  // \ub178\ub4dc\uc5d0 \uc790\uc2dd\uc774 \uc5c6\uace0 textContent\uac00 \ub2e4\ub974\ub2e4.\n\n  return false;\n};\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/API/Node/cloneNode"},"cloneNode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/API/Node/textContent"},"textContent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceWith"},"replaceWith")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame"},"requestAnimationFrame")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/Use_data_attributes"},"\ub370\uc774\ud130 \uc18d\uc131"))))}m.isMDXComponent=!0},458:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/fps-5e465c13ba30ac048b152964e83dcd73.png"}}]);