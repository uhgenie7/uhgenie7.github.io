"use strict";(self.webpackChunkgenie_log=self.webpackChunkgenie_log||[]).push([[8610],{9703:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(5999),l=a(2244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&n.createElement(l.Z,{permalink:s,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(9460),l=a(995);function s(e){let{items:t,component:a=l.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(r.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(7294),r=a(6010),l=a(5999),s=a(8824),o=a(833),i=a(5281),c=a(9960),g=a(9058),m=a(9703),u=a(197),p=a(9985);function d(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=d(t);return n.createElement(n.Fragment,null,n.createElement(o.d,{title:a}),n.createElement(u.Z,{tag:"blog_tags_posts"}))}function b(e){let{tag:t,items:a,sidebar:r,listMetadata:s}=e;const o=d(t);return n.createElement(g.Z,{sidebar:r},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(c.Z,{href:t.allTagsPath},n.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:a}),n.createElement(m.Z,{metadata:s}))}function E(e){return n.createElement(o.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(h,e),n.createElement(b,e))}},995:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(390),l=a(9460),s=a(2949);const o=function(e){const{colorMode:t}=(0,s.I)(),{isBlogPostPage:a}=(0,l.C)(),o="dark"===t?"github-dark":"github-light",i=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(!a)return;const e=i.current.querySelector("iframe.utterances-frame");e?(()=>{const t={type:"set-theme",theme:o};e.contentWindow.postMessage(t,"https://utteranc.es")})():(()=>{const e=document.createElement("script");e.src="https://utteranc.es/client.js",e.setAttribute("repo","uhgenie7/uhgenie7.github.io"),e.setAttribute("issue-term","pathname"),e.setAttribute("label","comment"),e.setAttribute("theme",o),e.crossOrigin="anonymous",e.async=!0,i.current.appendChild(e)})()}),[o]),n.createElement(n.Fragment,null,n.createElement(r.Z,e),a&&n.createElement("div",{ref:i}))}}}]);