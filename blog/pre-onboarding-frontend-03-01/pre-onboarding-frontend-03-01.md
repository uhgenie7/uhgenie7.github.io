---
title: 10월 프리온보딩 프론트엔드 챌린지(1)
description: 10월 프리온보딩 프론트엔드 챌린지 수강 도중 애매하게 알고 있었거나 새로이 알게된 정보 정리
tags: [프리온보딩, web]
date: '2022-10-18T10:00'
---

10월 프리온보딩 프론트엔드 챌린지 수강 도중 애매하게 알고 있었거나 새로이 알게된 정보 정리합니다.  
문서가 길어져서 나누어서 작성합니다.
이 문서는 Web에 대해 말하고 있습니다.

<!--truncate-->

# Web

## 1. MPA(Multi Page Application)

여러 개의 HTML 파일로 웹 애플리케이션을 구성하는 방식

> 라우팅: 경로를 변경하여 새로운 화면을 제공하는 기능

### MPA에서 라우팅을 어떻게 했을까?

- 새로운 페이지에 대응되는 새로운 HTML 파일 하나를 서버에서 가져오는 방식을 사용. 즉, `다른 경로`에 따라 `다른 화면`을 보여준다.
- 말은 어려워보이지만 이미 이 방식을 알고있다.

  ```html
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="blog.html">Blog</a>
  ```

- a (href): Anchor (Hypertext Refernce)

  - Hyper: 건너편의, 초월, 과도히, 비상한
  - 즉, `초월`한 텍스트를 참조한다.

- form을 `submit`하면 왜 화면이 깜빡이죠?
  - 정적인 html을 새로 갈아 끼우려면 새로고침을 해야 함.
  - 서버에서 html을 가져오는 동안 로딩을 기다려야 하므로 흰 화면을 보고 있어야 했다.

### MPA 장단점

- 장점: 정적 페이지 그대로를 서빙하므로 SEO 최적화. 페이지 로딩 속도가 빠름.
- 단점: 새로운 페이지를 보여주기 위해 페이지를 새로고침 하는 것은 불필요한 통신으로 인한 오버헤드가 발생하므로 낭비다. 깜빡임을 볼 수밖에 없다.
  이러한 단점을 해결하기 위해 나온 것이 SPA + CSR 이다.

## 2. SPA(Single Page Application) + CSR(Client-side Rendering)

**깜빡임을 어떻게 없앨까?** :

- 서버에서 HTML을 한 번만 받고 새로운 HTML 파일을 받지 말자.

**그러면 다른 페이지에서 화면을 어떻게 그릴 건가요?** :

- 하나의 페이지(HTML)에서 화면만 자바스크립트로 다시 그리면 된다!

- 브라우저에서 서버로 웹 페이지를 조회하고 싶다는 요청을 보낸다.
- 서버는 요청 경로를 확인(`/`)하고 `index.html`을 서버 내 자원으로부터 찾아 `응답`으로 돌려준다. 이때 `index.html`의 `body` 내부는 비어있다.
  - 이것이 최초의 HTML
- 브라우저는 HTML파일에서 head 태그를 읽으며 필요한 자원(js, css)을 서버로 재요청한다.
- **js가 다운로드, 로딩, 실행되면서 DOM API를 활용해 화면을 그린다.**

**그럼 데이터 요청은 어떻게 하시려구요?** :

- 새로운 데이터를 `새로운 파일`로 받아 오는 게 아니라, `경로`를 요청하자
  - 1 → 2페이지로 상품페이지를 넘긴다고 하자.
  - `onclick=getPost()` 등으로 API에 요청하여 갈아 끼운다.
- api 서버는 db에 요청하고 객체형태로 만들어서 응답으로 보내준다.

**화면 이동은 어떻게 하실 거죠?** :

- 브라우저 경로를 변경하면 트리거 되는 **기본 HTTP GET 요청은 막되**
- 브라우저 **주소는 변경된 상태를 유지**하도록 한 다음
- 변경을 감지하여 **DOM API가 다른 페이지에 알맞은 화면을 그리도록** 한다

**왜 굳이 이렇게까지 하는 거죠?** :

- 이렇게 하면 html을 새로 받아올 필요가 없어서 불필요한 통신으로 인한 오버헤드를 줄일 수 있음.
- 전체 화면이 하얗게 날아가 화면이 깜빡이는 현상을 볼 필요 없다

## 3. Critical Rendering Path

**render**: 상태(state)를 변수로 받아 상태에 따른 화면(view)을 결과물로 출력하는 함수

- 새로운 화면에 대한 새로운 스냅샷을 만든다.

> [브라우저는 어떻게 작동할까?](https://web.dev/howbrowserswork/)

1. **HTML를 [파싱](https://github.com/Esoolgnah/Frontend-Interview-Questions/blob/main/Notes/important-5/browser-rendering.md#gear-%ED%8C%8C%EC%8B%B1) 후, [DOM](https://github.com/Esoolgnah/Frontend-Interview-Questions/blob/main/Notes/important-5/browser-rendering.md#gear-dom)트리를 구축합니다.**
2. **CSS를 파싱 후, [CSSOM](https://github.com/Esoolgnah/Frontend-Interview-Questions/blob/main/Notes/important-5/browser-rendering.md#gear-cssom)트리를 구축합니다.**

   - HTML, CSS는 그 자체로 `2진수 문자열`이므로, 이 문서를 Parser로 읽어와 의미 단위로 토큰화해야 한다.

3. **Javascript를 실행합니다.**
   - 주의! HTML 중간에 스크립트가 있다면 HTML 파싱이 중단됩니다.
4. **DOM과 CSSOM을 조합하여 [렌더트리](https://github.com/Esoolgnah/Frontend-Interview-Questions/blob/main/Notes/important-5/browser-rendering.md#gear-%EB%A0%8C%EB%8D%94%ED%8A%B8%EB%A6%AC)를 구축합니다.**
   - `display: none` 속성과 같이 화면에서 보이지도 않고 공간을 차지하지 않는 것은 렌더트리로 구축되지 않음.
   - 렌더트리엔 '정말로' 그려질 것만 모여 있음.
5. **뷰포트 기반으로 렌더트리의 각 노드가 가지는 정확한 위치와 크기를 계산합니다. ([Layout](https://github.com/Esoolgnah/Frontend-Interview-Questions/blob/main/Notes/important-5/browser-rendering.md#gear-layout) 단계)**
6. **계산한 위치/크기를 기반으로 화면에 그립니다. ([Paint](https://github.com/Esoolgnah/Frontend-Interview-Questions/blob/main/Notes/important-5/browser-rendering.md#gear-paint) 단계)**
7. **레이어간 순서를 따져 하나의 화면으로 합성(Composite) 하면 마무리 됩니다.**

브라우저는 변경이 일어난 범위나 속성에 따라 새로 그리는 범위가 달라진다.

## 4. React가 Client-side Rendering을 최적화하는 원리

> [최신 웹 브라우저 내부 살펴보기](https://developer.chrome.com/blog/inside-browser-part3/#updating-rendering-pipeline-is-costly)
> 브라우저가 화면을 그리기 위해 일어나는 일련의 과정은 '변화'가 발생했을 때 일어남. JS가 브라우저의 메인 스레드를 먹어버리면 끊김 현상이 일어난다.
> 그래서 중요하게 생각되는 숫자가 바로 초당 60회의 새로 고침이다(60fps, frame per second).
> 이걸 가능하도록 하기 위해 자바스크립트의 동작을 작은 덩어리로 나누어 줘야 하는데, window.requestAnimationFrame()을 사용하면 프레임 수를 보장하여 부드러운 렌더링을 제공할 수 있다.

React는 변화가 있을 때마다 실제 DOM을 업데이트 하지 않고, 메모리에 올려둔 가상 DOM(Vitural DOM, 트리 형태의 자바스크립트 객체)을 업데이트 한다.
또한, 이러한 변화가 잦을 것을 대비하여 변화를 반영하는 타이밍을 스케줄러를 통해 관리한다.
변화는 스케줄러에 의해 배치(Batch)로 모아진 다음 적절한 타이밍에 비동기적(즉각적이지 않은 방식으로)으로 한꺼번에 처리된다.

### 재조정(Reconciliation)

> [재조정 리액트 공식문서](https://ko.reactjs.org/docs/reconciliation.html)
> React는 선언적 API를 제공하기 때문에 갱신이 될 때마다 매번 무엇이 바뀌었는지를 걱정할 필요가 없습니다. 이는 애플리케이션 작성을 무척 쉽게 만들어주지만, React 내부에서 어떤 일이 일어나고 있는지는 명확히 눈에 보이지 않습니다. 이 글에서는 우리가 React의 “비교 (diffing)” 알고리즘을 만들 때 어떤 선택을 했는지를 소개합니다. 이 비교 알고리즘 덕분에 컴포넌트의 갱신이 예측 가능해지면서도 고성능 앱이라고 불러도 손색없을 만큼 충분히 빠른 앱을 만들 수 있습니다.

1. 서로 다른 타입의 두 엘리먼트는 서로 다른 트리를 만들어낸다.
2. 개발자가 key prop을 통해, 여러 렌더링 사이에서 어떤 자식 엘리먼트가 변경되지 않아야 할지 표시해 줄 수 있다.

## 5. SSR

SSR은 CSR에 비해 서버 부하가 크다. SSR은 서버 측에서 처리해야 하는 렌더링 로직 때문에 응답을 처리해줄 서버가 필요하다.
트래픽이 많이 몰릴 경우 응답이 느려지거나 메모리가 한도를 초과하여 서버가 멈추기도 한다.

- CSR only 서비스의 경우 미리 빌드해둔 HTML, JS, CSS 파일을 S3 등의 저장소에 올려두고, Cloudfront 등의 CDN을 붙여 별도의 컴퓨팅 자원 없이 정적으로 제공할 수 있다.
- 서버에서 렌더링하는 로직이 없고, 동일한 응답을 돌려주어 캐싱이 용이한 특징 덕분에 SSR보다 많은 트래픽을 효과적으로 받아낼 수 있다.

### CDN?

Content Delivery Network의 약자인 CDN은 지리적 제약 없이 전 세계 사용자에게 빠르고 안전하게 콘텐츠를 전송할 수 있는 콘텐츠 전송 기술을 의미합니다.
CDN은 서버와 사용자 사이의 물리적인 거리를 줄여 콘텐츠 로딩에 소요되는 시간을 최소화합니다.
CDN은 각 지역에 캐시 서버(PoP, Points of presence)를 분산 배치해, 근접한 사용자의 요청에 원본 서버가 아닌 캐시 서버가 콘텐츠를 전달합니다.

- 유투브는 미국에 있으나, 캐시는 한국에 둔다.

### AWS CloudFront?

- [cludFront](https://docs.aws.amazon.com/ko_kr/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
  - Amazon CloudFront는 뛰어난 성능, 보안 및 개발자 편의를 위해 구축된 콘텐츠 전송 네트워크(CDN) 서비스입니다.
  - Amazon CloudFront는 .html, .css, .js 및 이미지 파일과 같은 정적 및 동적 웹 콘텐츠를 사용자에게 **더 빨리 배포하도록 지원하는 웹 서비스**입니다.
  - CloudFront는 **엣지 로케이션**이라고 하는 데이터 센터의 전 세계 네트워크를 통해 콘텐츠를 제공합니다.
  - CloudFront를 통해 서비스하는 콘텐츠를 사용자가 요청하면 지연 시간이 가장 낮은 엣지 로케이션으로 요청이 라우팅되므로 가능한 최고의 성능으로 콘텐츠가 제공됩니다.

#### 최초 검색한 유저

1. 최초 검색한 유저가 영상을 검색
2. edge를 한 번 거침
3. 본가로 가서 데이터를 받아옴
4. cdn에 저장
5. 최초의 사람이 영상을 본다.

#### 두 번째로 검색한 유저

1. 유저가 영상을 검색
2. 요청을 보냄
3. location에 캐시가 이미 차있다.
4. 본가로 갈 필요 없이 바로 영상을 볼 수 있다.

- 본가로 가느냐 마느냐는 http header에서 결정 가능하다.

### Amazon Simple Storage Service(Amazon S3)?

- [S3](https://aws.amazon.com/ko/s3/)
  - 확장성, 데이터 가용성, 보안 및 성능을 제공하는 객체 스토리지 서비스

### 캐싱

- SSR은 요청에 대한 값이 같기 어려우므로 캐싱하기 어렵다.
- html 내용이 같아야 한다.
- SSG는 이미 빌드되어있고, 응답을 다르게 보낼 수 없으므로 캐싱하기 쉽다.
- 그러나 빌드가 오래걸리고 데이터 수정이 어렵다. 규모가 아무리 커져도 html을 모두 서버에 올려야 한다.

## 6. CSR과 SSR, 성능 차이

### 메트릭 - 성능 및 사용자 경험 측정

- [메트릭](https://web.dev/metrics/)
  - [Core Web Vitals](https://web.dev/vitals/)

**:: TTFB(Time to First Byte)**

- 어떤 리소스를 요청하고 난 뒤, 해당 요청에 대한 첫 번째 바이트가 도착하기 까지 걸리는 시간을 의미합니다.

**:: FCP(First Contentful Paint)**

- 텍스트, 이미지 등 페이지가 로드되기 시작한 시점으로부터, 콘텐츠 일부가 화면에 렌더링 되기 시작한 시점의 시간을 측정합니다.
- FCP가 빠르면 사용자가 ‘콘텐츠가 로드되었음’을 인지하고 서비스를 더 빠르게 이용할 수 있습니다. 1.8초 이하면 좋은 점수입니다.
- SSG는 요청이 오면 바로 FCP가 가능하다.

**:: TTI(Time to Interactive)**

- 앱이 사용자와 상호작용하기에 준비가 된 시점을 뜻합니다. 화면이 그려지는 것과는 거의 무관합니다.
- 자바스크립트 이벤트가 걸린 버튼을 눌렀을 때 해당 버튼이 제대로 이벤트 리스너에 연결된 함수를 호출하는 최초의 시점입니다.
- 자바스크립트가 실행되어서 그 안에 리액트가 실행되고, 이벤트 리스너가 html에 연결되어야함
- 이것이 최초로 가능해지는 시점이 TTI
- 첫 화면은 보이지만 버튼을 눌렀는데 클릭이 안된다면 TTI가 되지 않았다는 것.

## 7. 웹 렌더링 과정

> [웹 렌더링](https://web.dev/rendering-on-the-web/)
