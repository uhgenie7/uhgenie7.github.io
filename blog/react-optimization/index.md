---
title: AI와 함께, 아무도 몰라주던 CSR SPA를 검색되게 만들기
description: Claude Code를 짝꿍 삼아 React 프로젝트의 SEO를 뒤집은 과정
tags: [seo, react, prerender, vite, iis, ai, claude]
last_update:
  date: "2026-07-29"
---

이 기록은 **AI가 제시한 답이 실제로는 절반쯤 틀렸고 그걸 하나씩 뒤집어 검증하면서 개선에 성공한 이야기**입니다.

CSR로 만든 React 사이트가 몇 달째 검색에 안 걸리던 상황을 어떻게 개선했는지, 그리고 그 과정에서 AI를 **어떤 방식으로 활용해야 실제로 도움이 되는지**에 대한 기록입니다.

저는 React 기반으로 만들어진 신규 프로젝트를 시장에 선보이기 위해 새 회사에 입사하고 1년 6개월에 걸쳐 웹사이트를 개발했습니다. 열심히 만든 사이트인 만큼 사람들이 우리 사이트를 찾아주고 잘 사용해주면 좋겠다고 생각했죠. 피드백을 받고 개선할 생각에 설렜지만, 웬 걸. 사람들은 우리 사이트의 존재조차 몰랐습니다. 검색을 해도 잘 나오지 않으니깐요.

> "어? 이 가게 언제 생겼지? 이런 가게가 있었네."

이런 경험을 종종 겪어보셨을 거예요. 사장님이 아무리 음식을 맛있게 만들어도 사람들은 그곳에 가게가 있는 줄 모른다면 소용이 없습니다. 웹사이트도 그렇다고 생각해요. 아무리 잘 만들어도 사이트가 알려지지 않으면 잘 만들었는지 못 만들었는지 아무도 알아주지 못합니다.

우리 프로그램을 잘 알리려면 마케팅도 잘 되어야 하지만, 프론트엔드로써 어떻게 해야할지 고민하게 되었고 문제를 해결하는 과정을 풀어봅니다.

<!--truncate-->

## "내가 더 할 수 있는 일이 있을까?"

론칭하기 전 성능도 챙기고 접근성도 챙기고 `sitemap.xml`, `robots.txt`, 네이버 서치어드바이저와 구글 서치콘솔 등록... 할 수 있는 건 모두 해두었어요.

Lighthouse SEO 점수를 돌려봐도 100점이 나왔고 프론트엔드가 할 수 있는 기술적 체크리스트는 다 통과했습니다.

그런데 네이버에 회사 이름을 쳐도 우리 사이트가 안 나옵니다. 구글도 마찬가지였고 두 달, 세 달이 지나도 그대로였어요.

원인은 어렴풋이 짐작은 했습니다. React가 CSR이기 때문에 SEO에 취약하기 때문이죠. og를 모두 채워도 크롤러는 빈 화면만 보기 때문이에요.

:::note
Q: sns 공유하기 기능 대부분이 og를 통해 공유되는데, 우리 사이트는 SSR을 안 쓴다. 어떻게 하지?

A: 좋은 질문입니다. CSR SPA에서 OG 태그 문제의 핵심은 크롤러(카카오톡, 페이스북, 트위터 봇 등)가 JS를 실행하지 않고 초기 HTML만 읽는다는 점입니다. react-helmet-async로 런타임에 태그를 주입해도 봇은 못 봅니다.
:::

그렇다고 SEO 때문에 NextJS로 마이그레이션 하는 건 너무 크나큰 일이었어요.

그러는 동안 우리 사이트를 알리기 위한 일환으로 마케팅팀에서 우리 사이트를 알리는 이벤트를 준비 중이라는 얘기가 나왔어요. 사용자가 링크를 카톡·페이스북에 공유해야 하는 기능이 핵심이었죠.

이러한 공유 기능은 og만 채워넣어도 썸네일이 잘 뜨는 SNS가 있는 방면, CSR이라면 og를 아무리 채워도 안 뜨는 SNS도 있습니다. 크롤러(카카오톡 봇, 페이스북 봇, 심지어 상당수 검색 봇)는 **JavaScript를 실행하지 않고** 초기 HTML만 읽고 끝나거든요.

`react-helmet-async`로 런타임에 태그를 아무리 주입해도 이런 이슈를 해결하지 못하면 봇은 보지 못합니다.

결국 기술부채로 미뤄두었던 SEO를 어떻게든 개선해야겠다는 생각이 미쳤습니다. 이벤트가 개시되고 나면 기술부채는 점점 커질 테니까요.

저는 검색엔진최적화 경험이 다수 있고 이 경험을 살려 이 문제를 해결해보기로 했습니다.

## "어떻게 최적화 할래?"

애초에 NextJS로 개발된 프로젝트라면 일이 쉽게 풀렸을 텐데, 이제 와서 프로젝트를 통째로 마이그레이션 할 수는 없었습니다. 개발을 시작할 때 NextJS를 선택하지 않은 이유는 명확했거든요.

그래서 `react-helmet`, `react-snap`으로 CSR의 한계를 넘어보려고 했습니다. AI도 이 방법을 가장 먼저 추천해주었습니다. 하지만 react-snap은 유지보수가 중단되었고, vite와도 상성이 나빠서, 문제를 해결하기 위해 코드가 코드를 만드는 일이 반복됐어요.

빌드 전에 스크립트를 실행하게 한다든지, 계속 라이브러리를 설치하게 한다든지 말이죠.

처음의 계획을 무르고 `react-helmet-async`, `@prerenderer/rollup-plugin`, `@prerenderer/renderer-puppeteer` 으로 다시 개선을 시작합니다.

:::note
Q: @prerenderer/renderer-puppeteer ?

A: @prerenderer/renderer-puppeteer는 prerenderer 코어 패키지와 함께 사용하는 렌더러 플러그인으로, Puppeteer(헤드리스 Chrome)를 이용해 SPA를 정적 HTML로 프리렌더링하는 역할을 합니다.

빌드 후 산출물을 로컬 서버에 띄운 뒤, Puppeteer로 각 라우트를 실제 브라우저처럼 열어서 JS 실행이 끝난 시점의 DOM을 캡처해 정적 HTML 파일로 저장합니다. 서버사이드에서 문자열을 조립하는 SSR과 달리, 클라이언트 코드를 그대로 브라우저에서 실행시킨 결과물을 스냅샷 뜨는 방식이라 별도의 SSR 엔트리 코드 작성이 필요 없다는 게 특징입니다.
:::

```js
import prerender from "@prerenderer/rollup-plugin";

const PRERENDER_ROUTES = [
  "/",
  "/a/b",
  "/a/c",
  // ... 검색 노출이 필요한 랜딩 페이지들
];

export default defineConfig({
  plugins: [
    // ...
    prerender({
      routes: PRERENDER_ROUTES,
      renderer: "@prerenderer/renderer-puppeteer",
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 1500,
      },
    }),
  ],
});
```

빌드하면 `dist/` 아래에 이런 구조가 생깁니다.

```
dist/
  index.html
  a/b/index.html
  a/c/index.html
  ...
```

크롤러가 `/a/b`을 요청하면 완성된 HTML을 그대로 받아갑니다.

## AI가 놓친 것 — SPA 셸 백업

여기까지는 어렵지 않은 과정이었습니다. 에러도 없어보였죠. 그런데 새로고침을 하니 숨겨진 문제가 발견되었습니다. 반짝이면서 페이지가 좀 이상했습니다. 홈("/")이 잠깐 뜨다가 사라지는 문제였죠.

원인을 확인해 보니, 프리렌더 플러그인이 **`dist/index.html`을 "/" 경로의 프리렌더 결과물로 덮어쓰고 있었습니다.** 그런데 `/login`이나 `/settings` 같은 프리렌더 대상이 **아닌** 경로들도 여전히 원본 SPA 셸을 필요로 했어요. 홈으로 덮여버린 index.html이 그 자리를 채우고 있었던 겁니다.

:::note
"프리렌더 플러그인이 실행되기 전에, 원본 셸을 다른 이름으로 백업하는 작은 Vite 플러그인을 만드세요."
:::

```js
function preserveSpaShellPlugin() {
  return {
    name: "preserve-spa-shell",
    writeBundle() {
      const src = resolve("dist/index.html");
      const dest = resolve("dist/spa-fallback.html");
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
      }
    },
  };
}
```

### 서버 설정

저희는 IIS 웹서버를 사용합니다. IIS는 웹 서버에서 애플리케이션의 동작을 제어하기 위해 사용하는 XML 기반의 웹 설정 파일(web.config)이 필요한데, config를 바꿔줄 필요가 있었습니다.

```
      <!-- HTML 응답에 charset=utf-8을 명시: 크롤러(트위터/카카오 등)가 Latin-1로 폴백해 OG description이 mojibake로 표시되는 문제 방지 -->
    <staticContent>
      <remove fileExtension=".html" />
      <mimeMap fileExtension=".html" mimeType="text/html; charset=utf-8" />
    </staticContent>

    ...

            <rule name="PrerenderedDirectoryToIndex" stopProcessing="true">
            <match url="^(.+[^/])$" />
            <conditions logicalGrouping="MatchAll">
              <add input="{REQUEST_FILENAME}" matchType="IsDirectory" />
            </conditions>
            <action type="Rewrite" url="{R:1}/index.html" />
        </rule>
    ...
         <action type="Rewrite" url="/spa-fallback.html" />
```

## 최적화 이후 결과

우리 사이트를 검색하면 1페이지에 뜨기 시작했고, 원하는대로 페이지마다 desc를 줄 수 있게 됐습니다.

## 후기

- 요즘 AI 때문에 제 주변의 많은 사람들이 심란해하고 있습니다. 개발자로써 AI를 어떻게 사용하면 좋은지 끝없이 고민하게 되는 시기인 것 같네요. AI가 처방을 내려주긴 하지만 그것이 정말 옳은 처방인지 판단하는 몫은 개발자의 몫입니다.

- 이번 SEO 개선은 기술적으로는 **프리렌더링을 얹은 것**이 전부입니다. `@prerenderer/rollup-plugin` 하나로 요약될 만큼 단순하지만 시행착오도 겪었고 서버 환경 설정 파일도 수정해야 하는 과정을 거쳤습니다. AI가 없었다면 사이드이펙트도 많이 생겼을 테고, 대응하기에 시간이 오래 걸렸을 것 같아요.

- **모르는 영역에 진입할 때 "이 문제를 어떻게 프레이밍해야 하는가"부터 대화할 수 있는 상대가 옆에 있다**는 장점을 명확히 느꼈습니다.

## Reference

- [MDN — Cache-Control](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Cache-Control)
- [React 공식 문서 — 풀스택 프레임워크 권장](https://ko.react.dev/learn/creating-a-react-app#full-stack-frameworks)
- [@prerenderer/rollup-plugin](https://github.com/prerenderer/prerenderer)
- [react-helmet-async](https://github.com/staylor/react-helmet-async)
- [IIS URL Rewrite Module 공식 문서](https://learn.microsoft.com/en-us/iis/extensions/url-rewrite-module/)
