---
title: 8월 프리온보딩 프론트엔드 챌린지
description: 8월 프리온보딩 프론트엔드 챌린지 수강 도중 애매하게 알고 있었거나 새로이 알게된 정보 정리
tags: [프리온보딩]
date: '2022-08-29'
---

8월 프리온보딩 프론트엔드 챌린지 수강 도중 애매하게 알고 있었거나 새로이 알게된 정보 정리합니다.

<!--truncate-->

## 타입스크립트

### 타입스크립트 공식 문서

#### 1. 타입 단언

- 타입스크립트가 스스로 추론하는 것이 베스트이지만, 때로는 타입스크립트보다 개발자가 어떤 값의 타입을 더 잘 아는 경우도 존재한다.
- 예를 들어 `document.getElementById`가 사용되는 경우, TypeScript는 이때 HTMLElement 중에 *무언가*가 반환된다는 것만을 알 수 있는 반면,
  개발자는 페이지 상에서 사용되는 ID로는 언제나 `HTMLCanvasElement`가 반환된다는 사실을 이미 알고 있을 수도 있다. 이럴 때 타입을 단언한다.
- `as` 를 사용한다.
- [타입단언](https://www.typescriptlang.org/ko/docs/handbook/2/everyday-types.html#%ED%83%80%EC%9E%85-%EB%8B%A8%EC%96%B8)

#### 2. Non-null assertion operator

```ts
function processEntity(e?: Entity) {
  validateEntity(e);
  let s = e!.name; // Assert that e is non-null and access name
}
```

- Null이 아닌 어설션 연산자
- 타입스크립트는 null, undefined 일 수도 있다고 판단하지만, 개발자는 해당 값이 null, undefined가 절대 나올 수 없다고 판단할 때 쓰인다.
- 접미에 `!`를 사용한다.
- [확정할당 연산자](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#definite-assignment-assertions)

- 정말로 확신할 수 있는 상황이 아니라면 권장되지 않는다.

#### 3. Definite Assignment Assertions

```ts
let x: number;
initialize();
// highlight-next-line
console.log(x + x);
//          ~   ~
// Error! Variable 'x' is used before being assigned.
function initialize() {
  x = 10;
}
```

```ts
// Notice the '!'
let x!: number;
initialize();
// No error!
console.log(x + x);
function initialize() {
  x = 10;
}
```

- 확정할당 연산자
- 타입스크립트가 변수에 값이 할당되었는지 감지할 수 없는 경우에도 **변수가 실제로 모든 의도와 목적에 할당되었음**을 타입스크립트에게 전달하기 위해 인스턴스 속성 및 변수 선언 뒤에 `!`를 배치할 수 있는 기능이다.
- [확정할당 연산자](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#definite-assignment-assertions)

### 타입스크립트 활용

#### 1. map 등 메서드를 사용할 때, number[]를 썼다면 number 관련 method가 추론된다.

```ts
const array = [1, 2, 3];
array.map(item => item. // 타입추론이 된다.)
```

- num 위에 커서를 올리면 타입추론이 되고 있는 것을 확인할 수 있다.
- [ts playground](https://www.typescriptlang.org/play?#code/MYewdgzgLgBAhgJwXAnjAvDA2gRgDQwBMBAzALoDcAUIsigHQC2cADgBQCWUApoxgHwwuvejAD0YmIAGFwKHjgFNnABh2AXcZiAcFsAnTfQCUQA)

#### 2. 리액트에서 타입스크립트를 어떻게 써야할 지 감이 안 잡혀요

- [리액트 TS Cheatsheet 참조](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup/)

#### 3. 라이브러리나 프레임워크를 사용할 때, 어떻게 추론해야 할 지 모르겠어요.

- `<button onClick={e=>{ }}/>` 등을 작성하고 `e`에 마우스를 가져다대서 타입을 알아내기
- 구글 검색
- react/index.d.ts 참조

#### 4. textarea와 input에서 onChange 이벤트를 사용할 때 | 를 사용하여 두 타입을 모두 명시하는 것이 좋을까, 두 타입의 부모 타입을 주는 게 좋을까?

- 이럴 때 제네릭을 사용하자

#### 5. 에러가 발생한다고 해서 그것이 꼭 에러객체라는 건 아니다.

```
throw 'h1' // Uncaught h1
throw new Error('h1') // Uncaught Error: h1
```

```ts
function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof Error) {
      // instanceof 연산자를 사용하면 객체가 특정 클래스에 속하는지 아닌지를 확인할 수 있습니다.
      console.log(err);
    } else {
      throw err;
    }
  }
}
```

## 자바스크립트

#### 1. 모듈 시스템이란?

- 모듈: 개발하는 애플리케이션의 크기가 커지면 언젠간 파일을 여러 개로 분리해야 하는 시점이 온다. 이때 분리된 파일 각각을 '모듈(module)'이라고 부른다.
- 모듈로 분리된 JS파일을 불러오는 방식을 정의한 것.

#### 2. 웹팩이란?

- 자바스크립트 모듈 번들러.
- 어플리케이션에 필요한 모든 모듈을 병합하고 압축해서 하나의 결과물(번들)을 생성해주는 도구.
- 웹팩에서의 모듈은 javascript 파일뿐만 아니라 애플리케이션을 구성하는 HTML, CSS, Javascript, Images, Font 등 많은 파일들을 모듈이라고 한다.

#### 3. IIFE란?

- Immediately Invoked Function Expression (즉시 실행되는 함수 표현식)
- 보편적으로 전역 스코프를 오염시키지 않기 위해 사용
- `(function () { console.log('Hello World') })(); // Hello World`

#### 4. 직렬화란?

- plain object
- 객체 => 문자열로 변환하며, 이를 직렬화(serialize)라고 한다.
- 통신할 때는 문자열로 직렬화하여 주고 받는 것이 안전하다.
- 객체 리터럴{}을 이용해서 만들 수 있다.
- `{key:value, key2:value, ...}`와 같은 형식으로 만든다.
- 키 값으로 관리되는 순서가 중요치 않는 데이터를 저장한다.
- 대표적으로 json 직렬화가 있다.
- JSON.stringfy(JSON형식의 객체)

#### 5. 불변성이란?

- 객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴
- 메모리 영역에서 값을 변경할 수 없다
- 리액트는 상태값을 업데이트 할 때 얕은 비교를 수행한다. 즉, 참조값만 비교하여 상태 변화를 감지한다.
  이런 이유로 배열이나 객체를 업데이트 할때 `setState([...state, newState])`, `setState({...state, [key]: value})` 이런식으로 배열이나 객체를 새로 생성해서 새로운 참조값을 만들어서 상태를 업데이트 해야한다.

#### 6. 순수함수란?

- 외부의 상태를 변경하지 않으면서 동일한 인자에 대해 항상 똑같은 값을 리턴하는 함수

```jsx
const App = () => {
  return <div>App</div>;
};
```

- **함수인가?** : 함수 컴포넌트는 어떻게 보면 그냥 '함수'이다.
- **목적은?** : view를 리턴한다.
- `(state, props) => UI` 는 state, props에 의해서만 UI가 영향을 받는다. 그 외, 다른 것이 들어와서(ex: fetch) UI가 바뀐다면 순수함수가 아니다.
- 리덕스는 이와 같이 순수함수를 기반으로 한다.

#### 7. 사이드이펙트란?

- 자바스크립트 관점에서 보면 사이드 이펙트는 (자바스크립트) 코드가 외부 세계에 영향을 주거나 받는 것이다.
  함수가 일관된 결과를 보장하지 못하거나, 함수 외부 어디든지 조금이라도 영향을 주는 경우 모두 사이드 이펙트를 갖는 것이라 할 수 있다.

```jsx
const App = () => {
  useEffect(() => {
    // fetch('') - 외부세계에 영향을 미치는 부수효과. 사이드 이펙트.
  }, []);

  return <div>App</div>;
};
```

- 이 함수의 목적은 `App`을 리턴하는 것이다.
- 위 코드를 동기적으로 실행한다면, useEffect가 끝날 때까지 렌더링이 멈추고 말 것이다. 그러면 함수의 목적을 잃게 된다.
- 그렇기 때문에 useEffec는 일단 렌더링이 다 된 뒤에 실행된다.

#### 8. useState의 첫 번째 인자에 함수를 넣는 이유

- 처음 한 번만 실행하기 위해서

## CS

#### 1. 엔드포인트란?

- 서비스를 이용할 때 사용하는 커뮤니케이션 채널의 한쪽 끝에 해당하는 URL
- get. post 등의 메서드로 엔드포인트가 끝나야 이상적이다.

#### 2. 로컬스토리지

- 로컬 스토리지는 동기적인 동작이다. 메인스레드가 정지된다.

#### 3. 캐시란?

- 자주 쓰는 데이터를 가까운 저장소에 두는 것
- `cache[request.url] ? cache[request.url] : cache[request.url] = request.url`
  - 서버야 캐시가 있니?
    - 응 있어 -> 그럼 캐시를 쓰자
    - 아니 없어 -> 캐시에 데이터 저장할게
- react-query에서 캐시키의 활용
  - a, b 컴포넌트에서 같은 캐시키를 갖고 있다면, b에서 바뀌면 a도 바뀐다.

## Reference

- [typescript](https://www.typescriptlang.org/ko)
