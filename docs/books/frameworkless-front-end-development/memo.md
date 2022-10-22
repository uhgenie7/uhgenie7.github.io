---
title: 02 frameworkless-front-end
description: 02 frameworkless-front-end memo
draft: true
last_update:
  date: '2022-10-22'
---

## 01 default

### 1. 결과

<iframe src="https://codesandbox.io/embed/trusting-flower-snq3b7?fontsize=14&hidenavigation=1&theme=dark"
  width='100%'
  height='400px'></iframe>

### 2. html

```html title="index.html"
<body>
  // highlight-next-line
  <section class="todoapp">
    <!-- todoapp: targetElement 으로 접근할 요소 -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus />
    </header>
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list"></ul>
    </section>
    <footer class="footer">
      <span class="todo-count">1 Item Left</span>
      <ul class="filters">
        <li>
          <a href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button class="clear-completed">Clear completed</button>
    </footer>
  </section>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>
      Created by
      <a href="http://twitter.com/thestrazz86">Francesco Strazzullo</a>
    </p>
    <p>Thanks to <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
  <script type="module" src="index.js"></script>
</body>
```

### 3. view.js

```js title="view.js"
const getTodoElement = (todo) => {
  const { text, completed } = todo;

  return `
  // highlight-next-line
  <li ${completed ? 'class="completed"' : ''}>
    <div class="view">
      <input 
        // highlight-next-line
        ${completed ? 'checked' : ''}
        class="toggle" 
        type="checkbox">
      <label>${text}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${text}">
  </li>`;
};
// completed 여부에 따라서 class를 다르게 부여하거나 <input type='checkbox'/>를 checked로 주고 있다.

const getTodoCount = (todos) => {
  const notCompleted = todos.filter((todo) => !todo.completed);

  const { length } = notCompleted;
  if (length === 1) {
    return '1 Item left';
  }

  return `${length} Items left`;
};
// filter메서드를 이용해 남은 할일 개수를 세고 있다.

export default (targetElement, state) => {
  const { currentFilter, todos } = state;
  // 들어오는 매개변수 state는 currentFilter, todos를 obj로 갖고 있다.

  const element = targetElement.cloneNode(true);
  // targetElement(todoapp)를 복사하여 복제본 DOM을 수정할 것이다.

  const list = element.querySelector('.todo-list');
  const counter = element.querySelector('.todo-count');
  const filters = element.querySelector('.filters');

  list.innerHTML = todos.map(getTodoElement).join('');
  // 복제된 list에 todos를 끼워넣는다.
  counter.textContent = getTodoCount(todos);
  // getTodoCount 함수의 return 값이 'string'이었음을 기억하자.
  //counter.textContent에 남은 todo의 개수를 끼워넣는다.

  Array.from(filters.querySelectorAll('li a')).forEach((a) => {
    if (a.textContent === currentFilter) {
      a.classList.add('selected');
    } else {
      a.classList.remove('selected');
    }
  });

  return element;
};
```

- cloneNode를 하고 수정을 가했으므로 실제 DOM에게는 아무런 영향이 없다.

:::note

Node.cloneNode()
<small>Node.cloneNode() 메서드는 이 메서드를 호출한 Node 의 복제된 Node를 반환합니다. cloneNode(true) 일 경우 자식 노드를 함께 복사합니다.</small>
:::

:::note

Node.textContent
<small>Node.textContent는 노드와 그 자손의 텍스트 콘텐츠를 표현합니다.
innerText는 해당 Element 내에서 사용자에게 '보여지는' 텍스트 값을 읽어오지만, textContent는 텍스트가 숨겨져 있더라도 해당 노드가 가지고 있는 텍스트 값을 모두 읽습니다.</small>
:::

### 4. 컨트롤러

```js title="index.js"
import getTodos from './getTodos.js';
// getTodos 파일은 fake 파일이다.
import view from './view.js';

const state = {
  todos: getTodos(),
  currentFilter: 'All',
};

const main = document.querySelector('.todoapp');

// highlight-next-line
window.requestAnimationFrame(() => {
  const newMain = view(main, state);
  main.replaceWith(newMain);
});
```

- 복제본 DOM을 실제 DOM과 연결하기 위해 컨트롤러가 필요하다.
- 그냥 연결하는 것이 아니라, `requestAnimationFrame`을 이용한다.

:::note
Element.replaceWith()
<small>replaceWith는 Element 부모의 자식 목록을 Node 또는 문자열 개체 집합으로 바꿉니다. 문자열 개체는 동등한 Text 노드로 삽입됩니다.</small>
:::

:::note
window.requestAnimationFrame()
<small>브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트하는 함수를 호출하게 합니다.</small>
:::

## 02 리팩토링

1. 함수가 너무 많은 일을 하고 있다.

   - 여러 DOM 요소를 조작하는 함수가 단 하나뿐이다. 이는 상황을 아주 쉽게 복잡하게 만들 수 있다.

2. 동일한 작업임에도 여러 방법으로 수행 중이다.
   - DOM을 수정할 때 문자열로 처리하거나 내부 text만 변경하거나 classList로 관리하는 등 여러 방법을 사용하고 있다.

### 결과

<iframe src="https://codesandbox.io/embed/restless-thunder-p89ydl?fontsize=14&hidenavigation=1&theme=dark"
  width='100%'
  height='400px'
   ></iframe>

## 03. 데이터 속성을 이용하여 Component 기반의 애플리케이션을 작성하기

- Component 기반의 애플리케이션을 작성하려면 구성 요소 간의 상호작용에 **선언적 방식**을 사용해야 한다.
- [데이터 속성](https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/Use_data_attributes)을 이용해 사용하는 컴포넌트를 정의한다.

### 1. 결과

<iframe src="https://codesandbox.io/embed/inspiring-lake-o6rov5?fontsize=14&hidenavigation=1&theme=dark"
  width='100%'
  height='400px'></iframe>

### 2. html

```html title="index.html"
<html>
  <!-- 생략 -->
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all"> Mark all as complete </label>
        // highlight-next-line
        <ul class="todo-list" data-component="todos"></ul>
      </section>
      <footer class="footer">
        // highlight-next-line
        <span class="todo-count" data-component="counter"> 1 Item Left </span>
        // highlight-next-line
        <ul class="filters" data-component="filters">
          <li>
            <a href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button class="clear-completed">Clear completed</button>
      </footer>
    </section>
  </body>
</html>
```

- data-component 속성을 사용하여 component의 name을 정의해주었다.

### 3. registry.js

```js title="registry.js"
const registry = {};

const renderWrapper = (component) => {
  return (targetElement, state) => {
    const element = component(targetElement, state);

    const childComponents = element.querySelectorAll('[data-component]');

    Array.from(childComponents).forEach((target) => {
      const name = target.dataset.component;

      const child = registry[name];
      if (!child) {
        return;
      }

      target.replaceWith(child(target, state));
    });

    return element;
  };
};
// [data-component]를 토대로 원본 컴포넌트를 가져와 동일한 구성의 새로운 컴포넌트를 반환한다.
// 요소가 발견되면 자식 컴포넌트를 동일한 함수로 랩핑하여 호출한다.

const add = (name, component) => {
  registry[name] = renderWrapper(component);
};
// 레지스트리에 컴포넌트를 추가하기 위해 컴포넌트를 랩핑
// renderWrapper를 registry에 추가

const renderRoot = (root, state) => {
  const cloneComponent = (root) => {
    return root.cloneNode(true);
  };

  return renderWrapper(cloneComponent)(root, state);
};
// 최초 DOM 요소에서 렌더링을 시작하려면 root를 렌더링하는 메서드가 있어야 한다.
// 이렇게 만든 것을 renderRoot로 내보내서, index.js에서 한 번에 처리한다.

export default {
  add,
  renderRoot,
};
```

- component 기반 렌더링 엔진의 핵심 메커니즘.
- `add`와 `renderRoot`는 컴포넌트 레지스트리의 공용 인터페이스다.

### 4. index.js

```js title="index.js"
import getTodos from './getTodos.js';
import todosView from './view/todos.js';
import counterView from './view/counter.js';
import filtersView from './view/filters.js';

// highlight-next-line
import registry from './registry.js';

// highlight-start
registry.add('todos', todosView);
registry.add('counter', counterView);
registry.add('filters', filtersView);
// highlight-end
// 레지스트리에 컴포넌트 추가
// 두 번째 매개변수는 renderWrapper가 처리한다.

const state = {
  todos: getTodos(),
  currentFilter: 'All',
};

window.requestAnimationFrame(() => {
  const main = document.querySelector('.todoapp');
  // highlight-next-line
  const newMain = registry.renderRoot(main, state);
  main.replaceWith(newMain);
});
```

- 앞서 만든 `registry`를 이용하여 컨트롤러에서 합쳐주고 있다.

## Reference

- [cloneNode](https://developer.mozilla.org/ko/docs/Web/API/Node/cloneNode)
- [textContent](https://developer.mozilla.org/ko/docs/Web/API/Node/textContent)
- [replaceWith](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceWith)
- [requestAnimationFrame](https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame)
- [데이터 속성](https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/Use_data_attributes)
