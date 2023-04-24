---
title: React Hook 정리
description: 공식문서 읽기
tags: [hook]
last_update:
  date: '2023-04-24'
---

## 공식문서 톺아보기

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

컴포넌트의 최상위 수준에서 useCallback을 호출하여 재렌더링 간에 **함수를 캐시**함.

`useCallback(fn, dependencies)`

1. fn: 리랜더링 시 캐시하려는 함수 정의
2. dependencies: 함수 내에서 사용되는 컴포넌트 내의 모든 값을 포함하는 종속성 목록.

#### 1. 컴포넌트의 재랜더링 스킵하기

렌더링 성능을 최적화할 때 자식 컴포넌트에 전달하는 함수를 캐시해야 하는 경우.

1. 초기 렌더링에서 useCallback에서 반환되는 함수는 fn.
2. 그 다음 렌더링에서 React는 종속성을 이전 렌더링 중 종속성과 비교한다.
3. 종속성이 **변경되지 않은 경우**(Object.is와 비교하여) useCallback은 이전과 동일한 함수를 반환한다.
4. 그렇지 않으면 useCallback은 이 렌더링에서 전달한 함수를 반환한다.

**즉, useCallback은 종속성이 변경될 때까지 다시 렌더링 간에 함수를 캐시함.**

```tsx
function ProductPage({ productId, referrer, theme }) {
  // theme가 바뀔때마다 다른 기능이 될텐데...
  function handleSubmit(orderDetails) {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }

  return (
    <div className={theme}>
      {/* ... 따라서 ShippingForm의 소품은 동일하지 않으며 매번 다시 렌더링됩니다. */}
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}
```

handleSubmit 이라는 함수를, ProductPage 컴포넌트에서 ShippingForm 자식 컴포넌트에게 전달함.
useCallback 으로 감싸지 않은 handleSubmit 함수는 리액트가 리렌더링 할 때 새 객체를 계속 생성하므로 다른 함수를 생성한다고 본다.
즉, handleSubmit 함수를 prop으로 받는 ShippingForm 컴포넌트 역시도 다른 값이 온다고 인식하므로, 다시 그려진다.

```tsx
function ProductPage({ productId, referrer, theme }) {
  // 함수를 캐시함
  const handleSubmit = useCallback(
    (orderDetails) => {
      post('/product/' + productId + '/buy', {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  ); // ...종속성이 변경되지 않는 한...

  return (
    <div className={theme}>
      {/* ...ShippingForm은 동일한 prop을 수신하고 재렌더링을 건너뛸 수 있다. 동일한 prop이라는 것에 주목하자. */}
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}
```

#### 2. useMemo와 차이

어떤 것을 캐시하느냐에 달렸다.

```tsx
import { useMemo, useCallback } from 'react';

function ProductPage({ productId, referrer }) {
  const product = useData('/product/' + productId);

  const requirements = useMemo(() => {
    // 값 그 자체를 캐시함
    // Calls your function and caches its result
    return computeRequirements(product);
  }, [product]);

  const handleSubmit = useCallback(
    // 함수를 캐시함
    (orderDetails) => {
      // Caches your function itself
      post('/product/' + productId + '/buy', {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  );

  return (
    <div className={theme}>
      <ShippingForm requirements={requirements} onSubmit={handleSubmit} />
      // 값
    </div>
  );
}
```

1. useMemo는 **함수 호출 결과**를 캐시함. product가 변경되지 않는 한, computeRequirements(product) 호출 **결과**를 캐시함. 이렇게 하면 ShippingForm을 불필요하게 다시 렌더링하지 않고도 요구 사항 개체를 전달할 수 있습니다.
2. useCallback은 **함수 자체**를 캐시함. 사용자가 제공하는 함수를 호출하지 않음! 대신 productId, referrer가 변경되지 않는 한 handleSubmit 자체가 변경되지 않도록 제공한 함수을 캐시함. 이렇게 하면 ShippingForm을 불필요하게 다시 렌더링하지 않고 handleSubmit 함수를 전달할 수 있음.

#### 3. 메모화된 콜백(memoized callback)에서 상태 업데이트 (feat. useState)

경우에 따라 메모화된 콜백의 **이전 상태를 기반**으로 상태를 업데이트해야 할 수도 있음.

아래 예의 `handleAddTodo`함수는 todos에서 다음 todos를 계산하기 때문에 **todos를 종속성**으로 지정한다.

```tsx
function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };

// highlight-start
    setTodos([...todos, newTodo]);
  }, [todos]);
// highlight-end
```

그러나 일반적으로, 메모화된 함수는 가능한 적은 종속성을 갖고 싶으므로, 다음 상태(next state)를 계산하기 위해 일부 상태를 읽는 경우, 업데이트 함수를 전달해서 종속성을 제거할 수 있다. 업데이트 함수는 위에서(useState) 설명했다.

```tsx
function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };

  // highlight-start
    setTodos(todos => [...todos, newTodo]);
  }, []); // ✅ 이런 식으로 종속성을 제거가능.
  // highlight-end
  // ...
```

#### 4. Effect가 너무 자주 발생하지 않도록 방지 (feat. useEffect)

```tsx title="Effect 내부에서 함수 호출 중"
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  function createOptions() {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]);
```

이 코드의 문제는, 모든 반응 값(reactive value)은 Effect의 종속성으로 지정해야 하는데서 온다. 그러나 createOptions을 종속성으로 선언하면, Effect가 채팅방에 지속적으로 다시 연결된다.

이 문제는 createOptions 를 useCallback으로 감싸면 된다.

```tsx
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

// highlight-start
  const createOptions = useCallback(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }, [roomId]); // ✅ Only changes when roomId changes
// highlight-end

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]); // ✅ Only changes when createOptions changes
  // ...
```

하지만 함수 종속성을 없애는 것이 베스트이므로 해당 함수를 useEffect로 옮긴다.

```tsx title="useCallback이 필요 없어진다"
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // highlight-start
    function createOptions() { // ✅ No need for useCallback or function dependencies!
      return {
        serverUrl: 'https://localhost:1234',
        roomId: roomId
      };
    }
   // highlight-end

    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // ✅ Only changes when roomId changes
  // ...

```

#### 5. 커스텀 훅 최적화

커스텀 훅을 만들어 쓰는 경우, 모든 함수를 useCallback으로 래핑하는 것이 좋다.

```tsx
function useRouter() {
  const { dispatch } = useContext(RouterStateContext);

  const navigate = useCallback(
    (url) => {
      dispatch({ type: 'navigate', url });
    },
    [dispatch]
  );

  const goBack = useCallback(() => {
    dispatch({ type: 'back' });
  }, [dispatch]);

  return {
    navigate,
    goBack,
  };
}
```

### 5. useContext

```tsx
const value = useContext(SomeContext);
```

컴포넌트의 최상위 수준에서 `useContext`를 호출하여 `context`를 읽고 구독함.

```tsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value='dark'>
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title='Welcome'>
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  // highlight-next-line
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  // highlight-next-line
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return <button className={className}>{children}</button>;
}
```

여기서 `ThemeContext`는 createContext로 생성한 컨텍스트임.
컨텍스트 자체는 정보를 보유하지 않으며 컴포넌트에서 제공하거나 읽을 수 있는 종류의 정보만 나타냄.

useContext는 호출 컴포넌트에 대한 컨텍스트 값을 반환함. 이 값은 호출 컴포넌트의 가장 가까운 `SomeContext.Provider`에 전달된 값임. 해당 Provider가 없는 경우 return 값은 해당 컨텍스트에 대해 createContext에 전달한 defaultValue임.

return 값은 항상 최신 상태이며, **값이 변경될 경우 해당 컨텍스트를 읽는 컴포넌트를 자동으로 다시 렌더링함.**

즉, 특정 컨텍스트를 사용하는 모든 자식을 자동으로 다시 렌더링한다. 이는 렌더링 최적화를 하기 힘들게 만든다.

```tsx title="useContext의 단점"
function ChildA = () => {
    const {valueA} = useContext(value);
    return <A></A>
}

function ChildB = () => {
    const {valueB} = useContext(value);
    return <B></B>
}
```

valueA 의 값이 바뀌게 되면, 전혀 관련없는 ChildB까지 재렌더링 된다...

#### 1. 여러 개의 컨텍스트

```tsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        <WelcomePanel />
        <label>
          <input
            type='checkbox'
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
            }}
          />
          Use dark mode
        </label>
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

function WelcomePanel({ children }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Panel title='Welcome'>
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  );
}

function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);
  return <p>You logged in as {currentUser.name}.</p>;
}

function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const canLogin = firstName !== '' && lastName !== '';
  return (
    <>
      <label>
        First name{': '}
        <input
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last name{': '}
        <input
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({
            name: firstName + ' ' + lastName,
          });
        }}
      >
        Log in
      </Button>
      {!canLogin && <i>Fill in both fields.</i>}
    </>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
```

#### 2.컨텍스트 재정의

다른 값을 사용하여 provider에서 해당 부분을 래핑하여 트리 부분의 컨텍스트를 재정의할 수 있음.

```tsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value='dark'>
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title='Welcome'>
      <Button>Sign up</Button>
      <Button>Log in</Button>
      // 여기서 Footer 부분만 Provider value를 따로 줄 수 있다.
      <ThemeContext.Provider value='light'>
        <Footer />
      </ThemeContext.Provider>
    </Panel>
  );
}

function Footer() {
  return (
    <footer>
      <Button>Settings</Button>
    </footer>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      {title && <h1>{title}</h1>}
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return <button className={className}>{children}</button>;
}
```

#### 3.함수 또는 개체를 컨텍스트로 전달하기

```tsx
import { useCallback, useMemo } from 'react';

function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback((response) => {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }, []);

  const contextValue = useMemo(
    () => ({
      currentUser,
      login,
    }),
    [currentUser, login]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      <Page />
    </AuthContext.Provider>
  );
}
```
