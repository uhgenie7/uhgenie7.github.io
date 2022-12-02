---
title: scrollbar-gutter
description: scrollbar-gutter 로 스크롤바 여백 예약하기
tags: [css, scrollbar-gutter]
last_update:
  date: '2022-12-02'
---

## scrollbar-gutter

### 어떨 때 사용할까?

`scrollbar-gutter`속성을 사용하면 스크롤 막대를 위한 공간을 예약하여 원치 않는 레이아웃 변경을 방지한다.

예를 들어, 어떤 `aside` 태그 아래로 두어 개의 컨텐츠만 있다고 하자. 지금 당장은 overflow가 일어나지 않아 scroll이 필요없지만 추후 그 이상의 컨텐츠가 늘어 `overflow: scroll`가 되어야 한다.
미리 `overflow: scroll`을 해두면 스크롤이 필요하지 않을 때에도 스크롤바를 보아야 하고, JS로 처리하기엔 공수가 든다.

이럴 때 사용하는 속성이 `scrollbar-gutter`이다.

### 브라우저의 인식

`scrollbar-gutter` 요소는 `내부 border edge`와 `외부 padding edge` 사이의 공간에 스크롤 막대를 표시한다. 스크롤바가 없을 시에는 padding의 확장으로 paint 된다.

브라우저는 `classic scrollbars` 또는 `overlay scrollbars`가 사용되는지 여부를 결정한다.

- 클래식 스크롤바는 여백에 배치되어 있을 때 항상 공간을 소비한다.
- 오버레이 스크롤바는 여백이 아닌 콘텐츠 위에 배치되며 일반적으로 부분적으로 투명하다.

### Syntax

```css
/* Initial value */
scrollbar-gutter: auto;

/* "stable" keyword, with optional modifier */
scrollbar-gutter: stable;
scrollbar-gutter: stable both-edges;

/* Global values */
scrollbar-gutter: inherit;
scrollbar-gutter: initial;
scrollbar-gutter: revert;
scrollbar-gutter: revert-layer;
scrollbar-gutter: unset;
```

### value

#### `auto`

초기 값. `overflow: scroll` 일 경우나 `overflow: auto`이고 box가 overflow 되었을 때 클래식 스크롤바는 gutter를 만든다. 오버레이 스크롤바는 공간을 차지하지 않음.

#### `stable`

클래식 스크롤바를 사용할 때, `overflow: auto, scroll, hidden`, box가 overflow 되지 않았을 때도 gutter가 나타난다. 오버레이 스크롤바를 사용하는 경우 gutter가 표시되지 않음.

#### `both-edges`

gutter가 box의 인라인 시작/끝 가장자리 중 하나에 있는 경우 반대쪽 가장자리에도 있음.

### overflow와 상호작용

스크롤바 여백을 위한 공간이 예약되는 상황은 다음과 같다.

- overflow: scroll
- overflow: auto
  - scrollbar-gutter: stable
  - scrollbar-gutter: auto
- overflow: hidden
  - scrollbar-gutter: stable

### example

```css
overflow-x: hidden;
scrollbar-gutter: stable;
```

## Reference

- [Explainer for the “scrollbar-gutter” CSS property.](https://github.com/felipeerias/scrollbar-gutter-explainer)
