---
title: Block scoped variables
description: 블록 스코프를 갖는 변수들에 대해 알아봅시다.
tags: [let, const, variables, 상수, 변수, object-freeze, deep-copy]
last_update:
  date: '2022-11-07'
---

:::note
이 내용은 [Javascript ES6+ 제대로 알아보기 - 정재남님](https://www.inflearn.com/course/ecmascript-6-flow)의 강의를 듣고 새로이 알게된 지식을 정리했습니다.
:::

## let

```js
let a = 1;

function f() {
  console.log(a, b, c); // a: 1 같은 스코프에서 a가 없으므로 외부를 찾는다, b는 호이스팅되나 tdz에 걸린다. c는 아예 없으므로 에러가 난다.
  let b = 2;
  console.log(a, b, c); // c에서 에러
  if (true) {
    let c = 3;
    console.log(a, b, c); // 1, 2, 3 다 나옴
  }
  console.log(a, b, c); // 1, 2, c: error
}

f(); // 실행 컨텍스트가 열리면서 a, b, c를 출력하라고 한다.
```

```js
var funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs.forEach(function (f) {
  f();
});

// (10) 10
```

- 실행 컨텍스트는 함수가 실행될 때 열린다.
- 실행할 때 비로소 변수를 호이스팅하고 this를 바인딩하고 자신에게 없는 변수를 외부에서 찾는다
- funcs를 실행했을 때, i++는 이미 반복문이 끝난 상태, 즉 10이 된 상태다
- 0~9가 되게 하려면 각각의 포문 안에서 i를 funcs에게 넘겨줘야 한다.

```js
let funcs = [];

// highlight-next-line
for (let i = 0; i < 10; i++) {
  // es6, for문 자체가 블록스코프. 각각의 i마다 별도로 생성된다.
  funcs.push(function () {
    console.log(i);
  });
}

funcs.forEach(function (f) {
  f();
});
```

## const

`const`는 constant variable 의 약자이다. 상수 변수라니. 모순을 갖고 있는 것 같다.  
어떤 값은 처음부터 상수였던 것이 아니고, 선언하고 `상수`라고 지정해주는 순간이 상수라고 할 수 있다.

```js title="재할당이 안 되는 const"
const A = 10;
A = 10;
// Uncaught TypeError: Assignment to constant variable.
```

이러한 특징 때문에 `const`는 선언과 할당을 따로 할 수 없다.

```js title="선언만 하는 건 불가능"
const B;
// Uncaught SyntaxError: Missing initializer in const declaration
```

다음 값을 예측해보자.

```js
let a = { a: 1 };
const b = a;

// highlight-next-line
b = 10;
// Uncaught TypeError: Assignment to constant variable.

a = 20;

// highlight-next-line
a;
// 20

// highlight-next-line
b;
// {a: 1}
```

- 숫자들은 메모리 어딘가에 존재한다. `변수 a`가 `20`으로 재할당되었다고 하더라도, `b`가 `{ a: 1 }`의 주소를 참조하고 있으므로 b의 값은 변하지 않는다.

### const에 참조형 데이터를 할당할 경우

참조형 데이터의 내부에 있는 프로퍼티는 상수가 아니다!

```js
const OBJ = {
  prop1: 1,
  prop2: 2,
};
OBJ.prop1 = 3;

const ARR = [0, 1, 2];
ARR.push(3);
```

프로퍼티까지 상수로 만들고 싶다면, ES5의 [Object.freeze()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze), [Object.defineProperty()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 를 사용하자

#### Object.defineProperty()

> Object.defineProperty() 정적 메서드는 객체에 새로운 속성을 직접 정의하거나 이미 존재하는 속성을 수정한 후, 해당 객체를 반환합니다.

```js title="Object.defineProperty()"
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false,
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42
```

#### Object.freeze()

> Object.freeze() 메서드는 객체를 동결합니다. 동결된 객체는 더 이상 변경될 수 없습니다. 즉, 동결된 객체는 새로운 속성을 추가하거나 존재하는 속성을 제거하는 것을 방지하며 존재하는 속성의 불변성, 설정 가능성(configurability), 작성 가능성이 변경되는 것을 방지하고, 존재하는 속성의 값이 변경되는 것도 방지합니다. 또한, 동결 객체는 그 프로토타입이 변경되는것도 방지합니다. freeze()는 전달된 동일한 객체를 반환합니다.

```js title="Object.freeze()"
const obj = {
  prop: 42,
  prop2: [1, 2, 3],
};

Object.freeze(obj);

obj.prop = 33;
// ES5 문법이므로 에러는 나지 않지만, 콘솔로 확인해보면 바뀌지 않는 것을 확인할 수 있다.

console.log(obj.prop);
// expected output: 42
```

그러나 내부에 있는 배열은 참조형이므로 바꿀 수 있다.

```js title="Object.freeze()"
const obj = {
  prop: 42,
  prop2: [1, 2, 3],
};

Object.freeze(obj);
obj.prop2[1] = 20;

console.log(obj);

// prop:42
// prop2:(3) [1, 20, 3]
```

이럴 때 내부의 배열까지 얼려야 한다.

```js title="Object.freeze()"
const obj = {
  prop: 42,
  prop2: [1, 2, 3],
};

Object.freeze(obj);
Object.freeze(obj.prop2);
obj.prop2[1] = 20;

console.log(obj);

// prop:42
// prop2:(3) [1, 2, 3]
```

- Obj 내부의 프로퍼티를 순회하며, 참조형이라면, Obj를 얼리며 재귀 형식으로 반복해서 얼린다.
- 이를 DeepFreezing라고 한다.

### 얕은복사

- 객체의 프로퍼티들을 depth 1단계까지만 복사.
- 대표적으로 `Object.assign(target, ...sources)` 가 있다.
  - target : 목표 객체. 출처 객체의 속성을 복사해 반영한 후 반환할 객체입니다.
  - sources : 출처 객체. 목표 객체에 반영하고자 하는 속성들을 갖고 있는 객체들입니다.

```js title="Object.assign"
var a = {
  a: 1,
  b: [1, 2, 3],
  c: { d: 1, e: 2 },
};

console.log(a.b);
// [1, 2, 3]

var b = Object.assign({}, a);
// a를 얕은 복사하여 b에 할당

b;
// {a: 1, b: Array(3), c: {…}}
// a: 1
// b: (3) [1, 2, 3]
// c: {d: 1, e: 2}

b.b[1] = 20;

console.log(a.b);
// [1, 20, 3]
```

- `b.b[1]`의 값을 재할당하였는데, `a.b[1]`도 바뀌어있다.
- 그저 같은 배열을 참조하고 있는 것 뿐.
- 프로퍼티가 가리키고 있는 메모리를 복사한 것이다.

```js title="프로퍼티까지 복사하자."
var a = {
  a: 1,
  b: [1, 2, 3],
  c: { d: 1, e: 2 },
};

console.log(a.b);
// [1, 2, 3]

var b = Object.assign({}, a);
// highlight-next-line
b.b = Object.assign([], a.b);

b;
// {a: 1, b: Array(3), c: {…}}
// a: 1
// b: (3) [1, 2, 3]
// c: {d: 1, e: 2}
// 언뜻 봐서는 달라진 게 없어보이지만...

b.b[1] = 20;

console.log(a.b);
// [1, 20, 3]

// highlight-next-line
console.log(b.b);
// [1, 20, 3]
```

### 깊은복사

- 객체의 프로퍼티들을 모든 depth에 대해서 복사.
- immutable(불변)하다.

### 반복문 내부에서의 const

```js
var obj = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
};

for (const prop in obj) {
  console.log(prop);
}

// prop1
// prop2
// prop3
```

- for in문은 예외.
- for문의 괄호 안에 있는 것도 블록스코프의 영역이다.

```js
let keys = Object.keys(obj);
for (
  let i = 0;
  i < keys.length;
  i++ // highlight-start
) {
  const prop = obj[keys[i]];
  console.log(prop);
}
// highlight-end
```

언뜻 보아서는 `const prop`에 재할당을 할 수 없을 것처럼 보이지만, 반복문을 돌면서 블록스코프가 항상 새로 만들어진다.

```js
{
  const prop = obj[keys[1]];
  console.log(prop);
}
{
  const prop = obj[keys[2]];
  console.log(prop);
}
{
  const prop = obj[keys[3]];
  console.log(prop);
}
```

단 이런 식으로는 안 된다.

```js
for (const i = 0; i < 5; i++) {
  console.log(i);
}
```
