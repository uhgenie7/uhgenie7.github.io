---
title: 3월 프리온보딩 프론트엔드 챌린지
description: 3월 프리온보딩 프론트엔드 챌린지 수강 도중 애매하게 알고 있었거나 새로이 알게된 정보 정리
tags: [프리온보딩]
date: '2023-03-08'
draft: true
---

2023년 3월 프리온보딩 프론트엔드 챌린지 수강 도중 애매하게 알고 있었거나 새로이 알게된 정보 정리합니다.

<!--truncate-->

## 1차 과제에서 알게 된 것

### FormData API

[도움되는 아티클](https://dev.to/kuvambhardwaj/i-was-creating-forms-the-wrong-way-all-along-in-reactjs-hl3)

- 여기서 유효성 검사는 [pattern 속성](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern)을 추천 한다.

<iframe
  width='100%'
  height='400px'
  src='https://codesandbox.io/embed/formdata-forked-5ebfsh?fontsize=14&hidenavigation=1&theme=dark'></iframe>

:::note

FormData에 속하는 필드는 아래와 같은 메서드로 수정할 수 있습니다.

formData.append(name, value) – name과 value를 가진 폼 필드를 추가

formData.append(name, blob, fileName) – `<input type="file">`형태의 필드를 추가.
세 번째 인수 fileName은 (필드 이름이 아니고) 사용자가 해당 이름을 가진 파일을 폼에 추가한 것처럼 설정해줌

formData.delete(name) – name에 해당하는 필드를 삭제

formData.get(name) – name에 해당하는 필드의 값을 가져옴

formData.has(name) – name에 해당하는 필드가 있으면 true를, 그렇지 않으면 false를 반환

[출처](https://ko.javascript.info/formdata): 모던 JavaScript

:::

🐣: form + input 조합 같은 경우 useState, useRef를 쓰는 경우가 많은데, new FormData로 쓸 때의 이점이 있나요?

🦊: 우선 `useState`는 input의 onChange가 일어날 때마다 리렌더링 된다. 이를 막기 위해 디바운스를 주든지 부가기능을 붙여야 한다. `useRef`는 `FormData API`와 성능적으로 큰 차이가 없지만 FormData를 썼을 때 좀 더 가볍게 처리할 수 있다. 또 코드의 가독성도 생긴다. (시멘틱해지기 때문에)

---

🐣: formData를 콘솔에 찍어보니 `FormData{append: ƒ append(), delete: ƒ delete(), get: ƒ get(), getAll: ƒ getAll(), has: ƒ has()…}`가 뜨는 반면, formData.get을 하면 안의 값이 정상적으로 나옵니다. 브라우저 콘솔에서 FormData{} 아래의 값을 확인하는 방법이 있을까요?

🦊: 브라우저 콘솔로 확인하기 어려울 것이다. [FormData.entries()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries)로 확인하시길.

---

## Q&A

🐣: `_secret`처럼 변수명에 언더스코어를 붙이는 의미(네이밍 컨벤션)가 무엇인가요?

🦊: 사실 언더스코어는 시스템, 혹은 객체지향 프로그래밍, 클래스를 만들 때 주로 쓰인다. \_를 붙인다는 것은 스코프 안에서 private하게 쓰겠다는 의미이다. 즉, 비밀스러운 변수.

[더 참고하고 싶다면 읽어보자](https://mingrammer.com/underscore-in-python/)

---

🐣: 보다 일찍 return 을 해줘버리는 걸 뭐라고 하나요?

🦊: ealry return 이라고 한다. 말 그대로 return을 빨리해서 뒷 코드의 구조를 단순하게 만들어준다. 이렇게 하면 else를 제거할 수 있다.

---

### 그밖의 메모

meta 태그의 og 는 open graph의 약어로, 어떤 HTML 문서의 메타정보를 쉽게 표시하기 위해 메타정보에 해당하는 다양한 요소들에 대해 사람들이 통일해서 쓸 수 있도록 정의한 프로토콜이다.
