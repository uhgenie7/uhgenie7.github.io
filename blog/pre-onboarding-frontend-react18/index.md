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

### 1. useState

1. **setSomething(nextState)** :

함수를 nextState로 전달하면 업데이트 함수로 처리됩니다. 이것은 **순수**해야 하고 pending 상태를 유일한 인수로 가져와야 하며 다음 상태를 반환해야 합니다.
React는 updater function을 대기열에 넣고 컴포넌트를 다시 렌더링합니다. 다음 렌더링 동안 React는 대기 중인 모든 updater를 이전 상태에 적용하여 다음 상태를 계산합니다.

React는 상태 업데이트를 일괄 처리합니다. 모든 이벤트 핸들러가 실행되고 **해당 설정 함수를 호출**한 후 **화면을 업데이트**합니다. 이렇게 하면 **단일 이벤트 중에 여러 번 다시 렌더링되는 것을 방지**할 수 있습니다. 드문 경우지만 예를 들어 DOM에 액세스하기 위해 React가 화면을 더 일찍 업데이트하도록 강제해야 하는 경우 flushSync를 사용할 수 있습니다.

:::warning 특히 주의
일반적으로 많이 저지르는 실수
함수가 끝나기 전에 set함수를 호출해도 **이미 실행 중인 코드의 현재 상태**는 변경 되지 않는다.

```tsx
import { useState } from 'react';

export default function Counter() {
  const [name, setName] = useState('Taylor');

  function handleNameClick() {
    setName('Robin');
    console.log(name); // 여전히 Robin으로 set하더라도, 아직 "Taylor" 인 것을 확인할 수 있음.
  }

  return (
    <>
      <button onClick={handleNameClick}>You pressed me {name}</button>
    </>
  );
}
```

:::

2. 이전 상태를 기반으로 상태 업데이트

여기 두 가지 방법의 상태 업데이트가 있다. 둘의 차이는 엄연히 다르다.

```tsx
const [age, setAge] = useState(42);

function handleClick1() {
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
}

function handleClick2() {
  setAge((prevAge) => prevAge + 1); // setAge(42 => 43)
  setAge((prevAge) => prevAge + 1); // setAge(43 => 44)
  setAge((prevAge) => prevAge + 1); // setAge(44 => 45)
}
```

handleClick1 은 이미 실행 중인 코드의 상태 변수가 업데이트 되지 않고 있다. 계속 바깥에 있는 age를 참조하고 있기 때문이다.

handleClick2 는 보류 상태를 가져와 다음 상태를 업데이트 한다.

prevAge => prevAge + 1 는 42를 보류 상태로 갖고 있다가 43으로 다음 상태를 반환한다.  
prevAge => prevAge + 1 는 43를 보류 상태로 갖고 있다가 44으로 다음 상태를 반환한다.  
prevAge => prevAge + 1 는 44를 보류 상태로 갖고 있다가 45으로 다음 상태를 반환한다.

즉, prevAge => prevAge +1 방식으로 상태를 업데이트 하게 되면, automatic batching으로 큐에 setAge 함수가 3번 들어간다.
2번째 setAge 함수 처리를 할 때, 첫 번째 setAge를 이미 처리해서 prev 값이 43이기 때문에 43+1 => 44가 되는 것이다.

:::note
관례적으로 대기 중인 상태 인수의 이름을 `age`와 같이 지정하는 것이 일반적이지만, prevAge 또는 더 명확하다고 생각되는 다른 것으로 부를 수도 있다.
(필자는 prev를 붙이는 방식을 좀 더 선호함)
:::

<iframe
  width='100%'
  height='400px'
  src='https://codesandbox.io/embed/boring-johnson-1x4izw?fontsize=14&hidenavigation=1&theme=dark'></iframe>

이 원리를 모른 채 setState를 사용하면, 의도한대로 작동하지 않는 경우가 있다.

<iframe
  width='100%'
  height='400px'
  src='https://codesandbox.io/embed/gracious-wave-wv2vqw?fontsize=14&hidenavigation=1&theme=dark'></iframe>

increment() 함수를 세 번 호출하는 onClick +3 버튼을 눌러도 하나씩 증가한다.

```tsx
const [age, setAge] = useState(42);

function increment() {
  setAge(age + 1);
}
```

함수가 업데이트 기능을 전달 하지 않기 때문이다.

<iframe
  width='100%'
  height='400px'
  src='https://codesandbox.io/embed/optimistic-framework-cm3zow?fontsize=14&hidenavigation=1&theme=dark'></iframe>

따라서 올바르게 setState를 이해하고 함수를 사용하자

```tsx
const [age, setAge] = useState(42);

function increment() {
  setAge((a) => a + 1);
}
```

:::note
함수형 프로그래밍의 원칙에 따라 (같은 input이 들어오면 같은 output이 나와야함) 보류 상태를 가져와 다음 상태를 업데이트 하는 방식을 쓰려고 노력하자
:::

- [더 읽어보면 좋은 글: automatic batching](https://react.dev/blog/2022/03/08/react-18-upgrade-guide#automatic-batching)

  React 18은 기본적으로 더 많은 batching(일괄 처리)를 수행하여 즉시 사용 가능한 성능 향상을 추가합니다.  
  batching은 React가 성능 향상을 위해 **여러 상태 업데이트를 단일 재렌더링으로 그룹화**하는 것입니다.

  React 18 이전에는 React 이벤트 핸들러 내에서만 업데이트를 일괄 처리했습니다. Promise, setTimeout, 기본 이벤트 핸들러 또는 기타 이벤트 내부의 업데이트는 기본적으로 React에서 일괄 처리되지 않았습니다.

```tsx title=" React 18 이전에는 React 이벤트만 일괄 처리함"
function handleClick() {
  setCount((c) => c + 1);
  setFlag((f) => !f);
  //  React는 마지막에 한 번만 다시 렌더링합니다. (이게 batching 임)
}

setTimeout(() => {
  setCount((c) => c + 1);
  setFlag((f) => !f);
  // setTimeout 내에서 React는 각 상태 업데이트에 대해 한 번씩 두 번 렌더링합니다 (일괄 처리 batching 없음).
}, 1000);
```

createRoot가 포함된 React 18부터 모든 업데이트는 출처에 관계없이 자동으로 일괄 처리됩니다. 즉, Promise, setTimeout, 기본 이벤트 핸들러 또는 기타 이벤트 내부 업데이트는 React 이벤트 내부의 업데이트와 동일한 방식으로 일괄 처리됩니다.

```tsx title=" React 18 이후에는 출처에 관계없이 일괄 처리함"
function handleClick() {
  setCount((c) => c + 1);
  setFlag((f) => !f);
  //  React는 마지막에 한 번만 다시 렌더링합니다. (이게 batching 임)
}

setTimeout(() => {
  setCount((c) => c + 1);
  setFlag((f) => !f);
  // setTimeout 내에도 React는 마지막에 한 번만 다시 렌더링합니다. (batching)
}, 1000);
```

> batching은 React가 성능 향상을 위해 여러 상태 업데이트를 단일 재렌더링으로 그룹화하는 것.  
> [더 자세히 읽어보기](https://github.com/reactwg/react-18/discussions/21)

3. 상태에 Object 넣기

object 상태의 state 상태를 업데이트 할 때는 불변성을 위해 spread 구문을 이용하여 업데이트 해야 한다. 절대 React 상태에 있는 객체를 직접 변경해서는 안 된다. 기존 객체를 변경하는 대신 **교체**한다고 생각해야한다.

- [상태의 개체 업데이트](https://react.dev/learn/updating-objects-in-state)
- [중첩 개체 업데이트](https://react.dev/learn/updating-objects-in-state#updating-a-nested-object)

```tsx
import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  const [form, setForm] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
    </>
  );
}
```

배열도 같은 방식으로 접근한다.

<iframe
  width='100%'
  height='400px'
  src='https://codesandbox.io/embed/quiet-sky-ror709?fontsize=14&hidenavigation=1&theme=dark'></iframe>

4. 초기 상태 재생성 방지

   `const [todos, setTodos] = useState(createInitialTodos());` 이 코드와,  
   `const [todos, setTodos] = useState(createInitialTodos);` 이 코드는 엄연히 다르다.

   전자는 초기 상태를 **직접** 전달해, 입력할 때와 같이 모든 렌더링에서 함수가 실행 실행되며, 후자는 이니셜라이저 함수 그 자체를 전달하고, 초기화 중에만 실행되어 컴포넌트가 다시 렌더링 될 땐 실행하지 않는다.

### 2. useEffect

### 3. useMemo

### 4. useCallback