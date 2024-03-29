---
title: 4월 프리온보딩 프론트엔드 챌린지
description: 4월 프리온보딩 프론트엔드 챌린지 수강 도중 애매하게 알고 있었거나 새로이 알게된 정보 정리
tags: [프리온보딩, 프론트엔드, 리액트, 동시성]
date: '2023-04-06'
---

## 1. Render and Commit

:::note
[렌더링 공식 문서](https://react.dev/learn/render-and-commit#step-1-trigger-a-render)
:::

리액트가 화면을 렌더링 하는 순서를 살펴보자.

컴포넌트: 요리사. 주방에서 재료로 맛있는 요리를 조립한다.  
리액트: 웨이터. 고객의 요청을 접수하고 주문을 가져온다.

1. 렌더링 트리거
   - 리액트: 손님이 Card 컴포넌트를 커밋해달라고 하신다. 준비해 줘.
   - 손님의 주문을 컴포넌트 주방으로 전달
2. 컴포넌트 렌더링 (주방에서 주문 준비)
   - 컴포넌트: Card 컴포넌트 준비(요리 중)
   - 업데이트를 수행해서 화면을 변경하는 것
3. DOM에 커밋 (테이블에 주문하기)
   - 리액트: 테이블에 Card 컴포넌트를 올려둠
   - 변경된 화면을 실제 브라우저에 나타내는 것

## 2. 렌더링 트리거

리액트에서 렌더링이 발생될 수 있는 경우는 총 2가지.

1. It’s the component’s initial render. (컴포넌트의 초기 렌더링)
2. The component’s (or one of its ancestors’) state has been updated. (컴포넌트의 상태가 업데이트 되었을 때)

### 1. 초기 렌더링

앱이 시작될 때 초기 렌더링을 트리거한다. target DOM node로 `createRoot`를 호출한 다음, 컴포넌트로 `render 메서드`를 호출하여 수행한다.

main.tsx에는 다음과 같은 코드가 있다.

```tsx title="main.tsx"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### 1. createRoot

브라우저 DOM 노드 안에 React 컴포넌트를 표시하는 루트를 생성하는 메서드

`createRoot`에 마우스를 올려보면, 다음과 같은 설명이 나온다.

:::note
function createRoot(container: Element | DocumentFragment, options?: ReactDOM.RootOptions | undefined): ReactDOM.Root

Replaces ReactDOM.render when the .render method is called and enables Concurrent Mode.
`.render 메서드`가 호출되고 `Concurrent 모드`를 활성화할 때 `ReactDOM.render`를 대체합니다.
@see — https://reactjs.org/docs/concurrent-mode-reference.html#createroot
:::

1. 첫 번째 인자: container: Element | DocumentFragment
   - `document.getElementById('root')` 처럼 Element나 DocumentFragment가 온다.
2. 두 번째 인자: options?: **ReactDOM.RootOptions** | undefined
3. Concurrent Mode

ReactDOM.createRoot를 찍어보자

```tsx
console.log(
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
);

// ReactDOMRoot {_internalRoot: FiberRootNode}
```

`ReactDOMRoot` 인스턴스가 생성되는데 이는, [FiberRootNode](https://github.com/facebook/react/blob/v16.12.0/packages/react-reconciler/src/ReactFiberRoot.js#L104)를 통해 생성되는 인스턴스이다.

DOMTree의 node들은 VirtualDOM에서 Fiber로 나타낸다

:::note

Fiber란?

1. 리액트 렌더링/업데이트의 가장 작은 단위
2. `work`라고도 한다
3. 효율적인 업데이트를 위해

   - work를 중지하고, 필요 시 다시 시작할 수 있어야 한다.
   - 다른 종류의 work들에게 우선순위를 부여할 수 있어야 한다.
   - 이미 완료된 work를 재사용 할 수 있어야 한다.
   - work가 더이상 필요 없게 되면 버릴 수 있어야 한다.

4. Fiber는 key로 구분된다

   - array.map() 사용 시 0번째 인덱스에 값을 추가하는 것은 지양한다
   - 다른 array들 끼리는 key가 중복되어도 괜찮다
   - 불필요한 tag를 추가하는 것을 지양한다

:::

```tsx title="react-dom/cjs/react-dom.development.js"
// react-dom.development.js
var FunctionComponent = 0;
var ClassComponent = 1;
var IndeterminateComponent = 2; // Before we know whether it is function or class
var HostRoot = 3; // Root of a host tree. Could be nested inside another node.
var HostPortal = 4; // A subtree. Could be an entry point to a different renderer.
```

HostRoot에 Root of a host tree 라는 주석이 달려있다.  
즉, `ReactDOMRoot` 인스턴스는 리액트 앱의 가장 최상단 Root이다.

아무튼, createRoot는 VirtualDOM Tree에서 `<div id=”root” />`를 나타내는 node를 생성하는데 VirtualDOM은 다음 같은 역할을 한다.

1. 최적화된 업데이트로 사용자 경험 개선

   a. 브라우저에 반영하기 전에 사전작업을 하는 것

2. 업데이트에 우선순위를 부여

   a. Animation vs Text

#### 2. render

`render`에 마우스를 올려보면, 다음과 같이 나온다.

:::note
(method) Root.render(children: React.ReactNode): void
:::

JSX 들을 브라우저 DOM node로 렌더하는 메서드

render()를 통해 브라우저 DOM Element 안에 React 컴포넌트를 표시하게 된다.

```tsx title="main.tsx"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // 이부분을 렌더
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 2. 상태 업데이트 시 다시 렌더링

컴포넌트가 처음 렌더링되면 set 함수로 상태를 업데이트하여 추가 렌더링을 트리거할 수 있다.
컴포넌트의 상태를 업데이트하면 렌더링이 자동으로 대기열에 추가된다.

#### 1. [Reconciliation 재조정](https://ko.reactjs.org/docs/reconciliation.html)

컴포넌트에서 prop이나 state가 변경 되었을 때, 직전 렌더링 된 요소와 새로 반환된 요소를 비교하여 실제 DOM을 업데이트 할지 말지 결정해야 한다.

실제 DOM에 반영하기 전까지 VirtualDOM에서 변경된 요소를 확인 후 그 요소만 실제 DOM에 반영하는 것.

재조정은, 두 가지 가정을 기반으로 한다.

1. 서로 다른 타입의 두 엘리먼트는 서로 다른 트리를 만들어낸다.
2. 개발자가 key prop을 통해, 여러 렌더링 사이에서 어떤 자식 엘리먼트가 변경되지 않아야 할지 표시해 줄 수 있다.

때문에 개발자는 다음처럼 개발하는 것이 좋다.

1. 불필요한 jsx element는 없는 것이 좋다
2. key를 잘 지정해주어야 한다

## 3. React가 컴포넌트를 렌더링

렌더링을 트리거한 후 React는 컴포넌트를 호출하여 화면에 표시할 내용을 파악한다.
**"렌더링"은 리액트가 컴포넌트를 호출하는 것을 의미한다.**

1. 초기 렌더링에서 React는 **Root 컴포넌트**(App.tsx) 를 호출한다.
2. 리렌더링의 경우, React는 상태변화(state update)가 렌더링을 트리거한 **함수 컴포넌트**를 호출한다.

이 프로세스는 재귀적이다.
업데이트된 컴포넌트가 다른 컴포넌트를 반환하면 React는 해당 컴포넌트를 다음에 렌더링하고, 그 컴포넌트도 무언가를 반환하면 그 컴포넌트를 역시 다음에 렌더링한다. 이 프로세스는 더 이상 중첩된 구성 요소가 없고 React가 화면에 표시되어야 하는 것을 정확히 알 때까지 계속된다.

## 4. React는 변경 사항을 DOM에 커밋한다.

컴포넌트를 렌더링(호출)한 후 React는 DOM을 수정한다.

1. 초기 렌더링의 경우, React는 `appendChild() DOM API`를 사용하여 생성한 모든 DOM 노드를 화면에 표시한다.
2. 리렌더링의 경우 React는 DOM이 최신 렌더링 출력과 일치하도록 최소한의 필수 작업(렌더링 중에 계산됨)을 적용한다. React는 렌더링 간에 차이가 있는 경우에만 DOM 노드를 변경한다.

   예를 들어, 다음은 매초마다 부모로부터 전달된 다른 소품으로 다시 렌더링하는 컴포넌트이다. `<input>`에 일부 텍스트를 추가하여 해당 값을 업데이트해도 컴포넌트가 다시 렌더링될 때 텍스트가 사라지지 않는 것에 주목하자.

<iframe
  width='100%'
  height='400px'
  src='https://codesandbox.io/embed/bitter-shadow-7fc59g?fontsize=14&hidenavigation=1&theme=dark'></iframe>

어떻게 컴포넌트가 다시 렌더링되어도, input의 text가 사라지지 않는 걸까?

React는 `<h1>`의 내용만 업데이트하기 때문이다.
`<input>`은 `h1`가 업데이트 되어도, h1이 업데이트 되기 전과 **같은 위치**에서 JSX에 나타나고 있기 때문에 React는 `<input>`을 건드리지 않는다.

## 5. hook 올바르게 쓰기

- [개발 페이지로 이동됨](https://uhgenie7.github.io/docs/dev/react/hook)

## 6. React 최적화하기

### 1. Lighthouse

- 구글에서 만든 퍼포먼스 측정 도구. 개발자 도구를 열어서 측정할 수 있음.
- [3가지 모드로 실행 가능](https://github.com/GoogleChrome/lighthouse/blob/HEAD/docs/user-flows.md)
  - Navigation: 단일 페이지 로드를 분석. 일반적으로 네비게이션 모드로 많이 시행한다.
  - Timespan: 일반적으로 사용자 상호 작용을 포함하는 임의의 기간을 분석.
  - Snapshot: 특정 상태의 페이지를 분석.

### 2. [Profiler](https://react.dev/reference/react/Profiler)

#### 1. 코드로 확인하는 방법

- React에서 제공하는 성능 측정도구
- 컴포넌트별로 렌더링 시간을 확인할 수 있음

컴포넌트를 Profiler로 래핑하면 렌더링 성능을 측정할 수 있다.

```tsx
function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  // Aggregate or log render timings...
}

<Profiler id='App' onRender={onRender}>
  <App />
</Profiler>;
```

- id
  - 측정 중인 UI 부분을 식별하는 문자열.
- onRender
  - React가 프로파일링된 트리 내의 컴포넌트가 업데이트될 때마다 호출하는 onRender 콜백. 렌더링된 내용과 소요 시간에 대한 정보를 받는다.
- onRender 함수
  - phase: mount, update, nested-update. 트리가 처음으로 mount되었는지 아니면 props, state 또는 hooks의 변경으로 인해 다시 렌더링되었는지 알 수 있다.
  - actualDuration: `Profiler`를 렌더링하는데 걸린 진짜 시간. 현재 업데이트에 대해 및 하위 항목을 렌더링하는 데 소요된 시간(밀리초)이다. 하위 트리가 메모이제이션을 얼마나 잘 사용하는지 나타낸다 (ex: memo, useMemo) 이상적으로 이 값은 초기 mount 이후에 크게 감소해야 함. 많은 자손이 특정 소품이 변경되는 경우에만 다시 렌더링하면 되기 때문.
  - baseDuration: 아무런 최적화 없이 `Profiler`를 렌더링할 때 걸릴 거라고 예상한 시간. 즉, actualDuration가 baseDuration보다 오래걸리면 최적화하면 좋다. 이 값은 최악의 렌더링 비용을 추정한다.
  - startTime: rendering을 시작한 시간
  - endTime: rendering이 commit된 시간

🐣: 프로덕션 모드에 적용해도 되나요?  
🦊: 프로파일러는 약간의 추가 오버헤드를 추가하므로 안 하는 게 좋다. 필요할 때만 사용하자.

#### 2. 개발자도구로 확인하는 방법

- [Profiler를 개발자 도구로 추가하면 좀 더 간편하게 성능측정을 할 수 있다.](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)
- [구 리액트 문서](https://legacy.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html#flame-chart)
  - ![이미지](https://miro.medium.com/max/1400/1*k7ROvT4NZ7huVa5ewmfaPA.gif)
  - 막대 색상은 컴포넌트(및 자식 요소)가 선택한 커밋에서 렌더링하는 데 걸린 시간을 나타냅니다. 노란색 컴포넌트는 시간이 더 오래 걸리고 파란색 컴포넌트는 조금 덜 걸리고 회색 컴포넌트는 이 커밋 중에 렌더링되지 않았습니다.
  - [괜찮은 아티클](https://velog.io/@cookie004/%EB%B2%88%EC%97%AD%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%ED%8C%8C%EC%9D%BC%EB%9F%AC%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%95%B1-%EC%84%B1%EB%8A%A5-%ED%96%A5%EC%83%81)

### 3. [Performance](https://developer.chrome.com/docs/devtools/performance/reference/)

- 개발자도구 탭에서 볼 수 있음
- 런타임 성능 기록 또는 부하 성능 기록을 할 수 있음
- [Web Vital](https://web.dev/vitals/#core-web-vitals)
  - LCP - Largest Contentful Paint
  - FID - First Input Delay
  - CLS - Cumulative Layout Shift
- ![performance](./performance.png)
  - Scripting: JavaScript 구문 분석 및 평가
  - Rendering: DOM 렌더링
  - Painting: DOM 페인팅
  - System
  - Idle

### 4. [next/bundle-analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)

- Next.js + Webpack 번들 분석기. 번들링 크기를 분석해준다.
- 성능 측정 후 개선사항을 도출한다.
- 초기에 툴을 도입하기보다, 프로젝트 마무리할 때 하는 게 가장 좋다. 초반에 하는 건 의미없음.

### 5. Intersection Observer API

- 레이지 로드 기법
- [강사님의 블로그](https://jasonkang14.github.io/react/lazy-loading-to-improve-web-vitals)에서 개선 경험 포스팅을 인용

0. UI: 챌린지 도전 갯수만큼 Card 컴포넌트(하나의 챌린지)가 map을 돌며 리스트를 만들고 있는 상황이며, 이때 부모 height를 한정해 무한스크롤 기능을 줌.
1. useRef를 사용해 useVisibility 훅의 인수로 넘겨주고, Card 컴포넌트에도 ref로 걸어준다.

```tsx
const Card = () => {
  const wrapperRef = useRef(null);
  const isVisible = useVisibility(wrapperRef);

  return <Wrapper ref={wrapperRef}>{isVisible && <>...</>}</Wrapper>;
};
```

2. useVisibility 훅이 Card 컴포넌트가 뷰포트에 보이는지 안보이는지 확인하고, 보이게 되는 경우 useState의 isVisible를 true로 바꾼다.

```tsx title="useVisibility"
// 출처: 강사님 블로그
import { useState, useEffect, RefObject } from 'react';

function useVisibility<T extends HTMLElement>(ref: RefObject<T>): boolean {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust this value to control when the component should be considered visible.
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
}

export default useVisibility;
```

3. 이때, isVisible true가 되면 card content를 렌더링하게 되는 원리이다.

```tsx
const Card = () => {
  const wrapperRef = useRef(null);
  const isVisible = useVisibility(wrapperRef);

  return <Wrapper ref={wrapperRef}>{isVisible && <>...</>}</Wrapper>;
};
```

이렇게하면 뷰포트에 나타나지 않은 카드들은 렌더링되지 않으므로 성능 개선이 된다.

## 참고자료

- [강사님 블로그](https://jasonkang14.github.io/react/lazy-loading-to-improve-web-vitals)
