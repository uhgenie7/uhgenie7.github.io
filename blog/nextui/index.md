---
title: nextui를 추천하지 않는 이유
description: star가 적은 라이브러리는 쓰지 말자
tags: [nextui, nextjs, ssr]
date: '2023-02-06'
---

nextui 라이브러리를 추천하지 않는 이유를 블로깅합니다.

<!--truncate-->

## 사용 이유

지금으로부터 2달 전의 이야기입니다.

새 프로젝트가 시작되고, UI 라이브러리를 찾고 있었습니다. 프로젝트에 사용된 프레임워크는 NextJs였는데, SSR과 궁합이 잘 맞는 라이브러리를 찾고 있었죠. 그 중 하나가 nextui였습니다.
nextui는 UI가 예쁘고 기능이 꽤 많아보였습니다. Nextjs에서 사용하는 방법도 친절히 문서화 되어있었고, 필요한 컴포넌트도 어느정도 갖춘 것 같아보였죠.

라이브러리는 Vercel과 상관없다고 고지되어 있었지만, NextJs와 호환되고 있다고 자신있게 쓰여있었기 때문에 사용하게 되었습니다.

## 문제점

### 1. NextJs와 호환 안 됨

NextJs와 호환되길 바라며 선택한 라이브러리지만 웬 걸, 쉽게 되지 않았습니다.

터미널에 찍히는 `When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client` 경고는 아직도 해결하지 못했습니다.

`_document`를 설정하고, `_app`도 설정해주었는데도 해당 경고는 지긋지긋하게 쫓아왔습니다.

SSR 에러이니만큼 clinet단의 에러도 뜹니다.

`Warning: Prop 'htmlFor' did not match. Server: 'react-aria2115635203-1' Client: 'react-aria4584457529-3'`

최근에 나온 `Nextjs13`과의 호환은 더더욱 안 됩니다.

### 2. styled-component와 호환 안 됨

세밀한 부분은 styled-component로, 컴포넌트는 nextui로 디자인하려고 했습니다.  
styled-component를 nextjs에서 사용하기 위해선 styled-component를 next.config.js의 컴파일러에 등록하면 되는데, 이렇게 하는 순간 nextui의 디자인 오버로드가 먹통이 됩니다.

그 이유를 찾아다니느라 애썼는데, nextui는 Stitches 기반 라이브러리입니다. Stitches는 styled-component와 호환되지 않습니다.

:::note
[css prop not working with utils and variables](https://github.com/stitchesjs/stitches/issues/1013#issuecomment-1147137112)
:::

즉, nextui를 사용하기 위해선 styled-component를 걷어내야 하는 상황인 겁니다. 오로지 Stitches를 사용해야 합니다.

### 3. 그래서 Stitches만 쓰면 되지 않나?

Stitches의 업데이트가 22.04.25 일 이후로 없습니다. 더이상 유지보수가 안 된다는 이야기입니다. nextui의 엔진이 Stitches를 사용하고 있는 이상, 본질적인 문제는 nextui가 해결할 수 없을 것입니다.

### 4. 너무 엄격한 컴포넌트

몇몇 컴포넌트들은 너무 엄격해서, 수정해서 사용하는 게 어렵습니다. 예를 들어, Table의 경우는

```tsx
<Table>
  <Table.Header>
    <Table.Column>NAME</Table.Column>
  </Table.Header>
  <Table.Body>
    <Table.Row key='1'>
      <Table.Cell>Tony Reichert</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

같은 구조를 갖고 있는데, 이 구조를 변형하려고 하면 에러를 뿜습니다.

즉, 기능적인 커스텀은 절대 불가합니다.
css 오버라이딩도 css prop이 존재하는 컴포넌트만 가능해서, 세밀한 디자인을 변경하려면 부모 컴포넌트로부터 자식선택자를 찾아 커스텀해야합니다.

:::note
[css props가 없는 table header](https://nextui.org/docs/components/table#table.header-props)
:::

사용하면 할수록 개인이 만들어 놓은 컴포넌트를 어쩔 수 없이 따르며 사용하고 있다는 기분을 느끼게 됩니다.
'우리가 이렇게 만들었으니 이렇게 써.' 라는 느낌이 강해요.

### 5. 활발하지 않은 커뮤니티

nextui의 별점은 9.1k 입니다. issue 창은 기능요청과 버그로 가득차있지만, 피드백이 빠르지 않습니다. 인기있는 라이브러리가 아니다보니 이슈 해결도 어렵습니다.

## 결론

nextui의 치명적인 문제가 너무 많았고, 결국 nextui를 점진적으로 걷어내기 위해 준비하고 있습니다.
현업에서 nextui를 쓰는 건 비추천드리며, 토이 프로젝트에 사용하면 좋을 것 같지만, 더 좋은 라이브러리를 쓴다면 디버깅할 시간을 더 아낄 수 있을 것 같습니다.

애초에 이러한 라이브러리를 쓰는 이유가 시간을 절약하기 위해서인데, 디버깅하는 시간이 많아지면 쓸 이유가 없습니다.

이러한 문제를 nextui도 인지했는지, 23.02.06일에 nextui의 css 엔진을 tailwindcss로 바꾼다고 발표했습니다.

- [NextUI - Next move (v2)](https://github.com/nextui-org/nextui/discussions/1035)

하지만 이는 오래 걸릴 것이고 개발자도 그 사실을 알고 있습니다.

어느정도 안정된 다음에 nextui를 사용하는 게 좋아보입니다.
