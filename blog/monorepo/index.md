---
title: Nx로 모노레포 도입하기
description: 모노레포를 도입하면서 기록합니다.
tags: [monorepo, 모노레포, nx]
date: '2022-11-25'
draft: true
---

현재 모노레포 PoC(Proof of Concept) 중이기 때문에 기록용으로 남겨둡니다.

<!--truncate-->

## 도입 배경

`배워야 할 게 산더미인데, 이런 새로운 기술은 왜 자꾸 생기는 거야`라는 한탄 아닌 한탄을 하지만 어느 순간, 이래서 이런 도구가, 기술이 생기는 거구나. 하는 지점이 매번 오는 것 같다. 모노레포도 그렇다.  
모노레포를 도입하게 되는 배경은 어느 곳이나 비슷한 것 같다.

우리팀의 경우는 `바퀴를 다시 발명하지 마라`라는 격언이 있듯 같은 일을 반복하고 싶지 않다는데에 출발했다. 새로운 프로젝트가 생길 때마다 레포지토리를 만들고 세팅하는데만 하루 이상을 쓴다. 템플릿을 쓰면 되지 않느냐는 말을 할 수도 있지만, 프레임워크가 달랐기 때문에 그럴 수 없었다.  
같은 프레임워크를 쓴다 하더라도 빠른 발전을 하고 있는 프론트엔드 특성 상, 그 사이에 버전이 상이해져 구 프로젝트에선 잘 돌아가던 코드가 새로운 프로젝트에서는 안 될 수도 있었다. (Next13과 Next12가 얼마나 많이 달라졌는지 생각해보면...)

시작은 이렇게도 단순했으나...

## 어떤 도구를 쓸까?

가장 고려해야 할 점은 하나였다. 우리 서비스는 React-native로 되어있었고 Web(Next, React)을 위한 프로젝트를 만들어야 했다. 그러니까 RN과 Web이 모노레포로 공유되어야 했는데 관련 레퍼런스를 찾기가 어려웠다. 대부분 Web으로만 이루어진 모노레포를 사용하고 있었고 RN + Web에 대한 자료가 거의 없었다. 있다고 하더라도 RN을 Web으로 보는 듯한 느낌의 자료만 있어서 Mobile 따로, Web 따로 모노레포를 가져가야 하는 게 아닌가, 모노레포에 대한 이해를 잘못하고 있는 건가라는 생각이 들었다.

일단 칼을 빼들었으니 시도는 해보기로 했다.

조사해보니 모노레포 툴이 생각보다 많았다. 툴 설명이 있는 웹사이트까지 있었다. [링크](https://monorepo.tools/). 팀 내에서 어떤 것으로 할 지 이야기 중에 있는데 세 가지로 좁혀졌다.

- yarn1
  - 큰 기능 없이 그저 공통 요소만 공유하고 싶었기 때문에 yarn workspace 만 쓰는 방향
- Nx
  - 향후 고도화 할 때 yarn1의 지원미흡이 발목을 잡을 수 있지 않을까하여 모노레포를 위한 빌드 시스템을 선택
  - RN 가이드 지원
- Turborepo
  - vercel이 밀고 있고 빠르다는 장점

팀 내에서 각자 빌드해보고 도입해보기로 했는데, 처음에 yarn1이 생각만큼 잘 되지 않아서 (모듈을 못 찾는 에러가 가장 많았다.) Nx로 다시 시작해보았는데 희망이 보일 듯 말 듯 했다.

## Nx?

### why Nx?

1. yarn1의 무차별적인 에러로 Nx로 재구축
2. 한때 Lerna가 유명했었던 것 같은데 [Lerna를 nrwl가 인수했다고 한다.](https://github.com/lerna/lerna/issues/3121) Nx가 지원하는 기능은 굉장히 많은데 한때 유명했던 Lerna까지 인수했다니 그러면 모노레포 도구로써 뭔가 더 낫지 않을까?라는 생각으로 Nx를 긍정적으로 살펴보았다.
3. 무엇보다 RN에 대한 문서가 있어서 Nx를 채택했다. 찾아본 사람은 알겠지만 RN + Web 모노레포 예시 대부분이 RN Expo를 기본으로 가져가고 있다. `터보레포`의 경우도 RN Expo를 예제 템플릿으로 내놓았다.사내에서는 RN Cli를 쓰고 있었기 때문에 도움이 전혀 되지 않았다. Nx는 RN Cli 문서까지 내놓고 있어서 긍정적으로 보았다. (그 외 다른 App도 많다!)

### Nx의 컨셉

Nx에서는 통합 저장소와 패키지 기반 저장소 컨셉으로 나뉘는데, `패키지 기반 저장소`는 유연성과 채택 용이성에 중점을, `통합 저장소`는 효율성과 유지 관리 용이성에 중점을 둔다고 한다. 일반적인 모노레포툴은 패키지 기반 저장소로부터 시작하는 것 같다.

패키지 기반 저장소는 package.json와 node_modules가 중첩되어있고 일반적으로 각 프로젝트에 대해 서로 다른 종속성 세트가 있지만 통합 저장소는 루트에 정의된 모든 속성이 있다.

어떤 것을 선택해야 할 지부터가 가장 혼란스러웠는데, 확장성을 생각한다면 통합 저장소를 추천하고 있어서 통합 저장소로 선택해보기로 했다.

통합 저장소를 사용하며 가장 헷깔렸던 것 중에 하나가 `두 프로젝트 간 공통 요소가 없으면 어떻게 처리하는가? `였다. 왜냐하면 프로젝트 내부에는 `package.json`이 없기 때문이다.

Nx는 `libs`라는 폴더 아래에 공통 요소를 묶어둘 수 있는데, 단일 요소를 처리하는 방법에 대해서는 설명되어 있지 않아서 혼란스러웠다. 이에 대해 알아보다가 깃허브 이슈를 마주했다.

[school-ui는 다른 앱에서 공유하지 않는데 왜 libs 디렉토리에 넣어야 할까요?](https://github.com/nrwl/nx-examples/issues/50)

> 그것은 우리의 의도가 아닙니다. `libs`에서 공통/공유를 가질 수 있지만 `특정 앱 사용 또는 특정 기능을 위한 라이브러리`를 가질 수도 있습니다. 대규모 팀과 함께 작업하는 경우 이 조직은 사람들이 독립적으로 작업할 수 있도록 도와줍니다. 또한 기능/앱 특정 라이브러리에서 모듈을 지연 로드할 수 있습니다. 영향을 받는 또 다른 이점은 테스트 및 영향을 받는 빌드입니다. 각 기능에 대해 더 작은 라이브러리가 있는 경우 하나의 라이브러리에서 변경이 발생할 때마다 테스트하거나 다시 빌드할 필요가 없습니다. 내가 당신의 질문에 대답하기를 바랍니다.

즉, 꼭 공통요소만 `libs`에 넣는 것이 아니라, 단일요소도 `libs`에 넣고 사용하라는 것 같다.

이에 대한 `libs`에 대한 폴더 구조 설명이 있다.

[Code Organization & Naming Conventions](https://nx.dev/more-concepts/monorepo-nx-enterprise#code-organization-&-naming-conventions)

그래서 Nx는 app보다, libs 폴더 구조를 더 잘 짜야하고 구축을 잘 해야한다고 한다. (또 그만큼 복잡하다.)

## 두 프로젝트를 조화롭게 사용하기 with Nx

### 1. Nx React-native

공식문서에서 친절하게 잘 알려주고 있다.
[React-native with Nx](https://nx.dev/recipes/other/react-native)

### 2. Nx React-native Migrating

1번의 경우, RN이나 React 등 라이브러리들이 최신 버전으로 빌드되기 때문에 기존 RN을 모노레포로 가져와 마이그레이션 할 때 버전을 유의깊게 보고 가져와야 에러가 나지 않는다.

### 3. Nx NextJs

공식문서에서 친절하게 잘 알려주고 있다.
[Next with Nx](https://nx.dev/packages/next)

### 4. React-native 기반 컴포넌트를 NextJs에 붙이기

:::danger
설정해주지 않으면 다음과 같은 터미널 에러를 마주하게 된다.

```bash
> import typeof AccessibilityInfo from './Libraries/Components/AccessibilityInfo/AccessibilityInfo';
```

:::

1. 이렇게 하려면 `react-native-web` 을 써야된다. 컴포넌트를 Web에 붙이기 위함이다.
   앞서 말했듯이, 이러한 라이브러리들은 root에 설치하면 된다.

```bash title="npm"
npm install --save react-native-web
npm install --save-dev babel-plugin-react-native-web
```

```bash title="yarn"
yarn add react-native-web
yarn add --dev babel-plugin-react-native-web
```

2. NextJs 프로젝트 내의 `.babelrc` 에 다음 코드를 붙인다.
   파일이 없다면 만들어주자.

```bash
{
    "presets": [
      [
        "@nrwl/next/babel",
        {
          "runtime": "automatic",
          "useBuiltIns": "usage"
        }
      ]
    ],
    "plugins": [["react-native-web", { "commonjs": true }]]
}
```

3. \_document.tsx에 다음 코드를 붙여준다.

```tsx
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
// highlight-next-line
import { AppRegistry } from 'react-native';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    // highlight-next-line
    AppRegistry.registerComponent('main', () => Main);
    const originalRenderPage = ctx.renderPage;

    const sheet = new ServerStyleSheet();

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        enhanceComponent: (Component) => Component,
      });

    const intialProps = await Document.getInitialProps(ctx);
    const styles = sheet.getStyleElement();

    return { ...intialProps, styles };
  }

  render() {
    return (
      <Html>
        <Head>{this.props.styles}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

## Nx로 개발하는데 도움되는 커맨드들

### 1. 글로벌로 Nx 설치하기

```bash title="mac의 경우"
sudo npm install -g nx
```

### 2. 의존성 그래프로 확인하기

```bash
nx graph
```

### 3. Nx Console 설치하기

[Nx Console](https://nx.dev/recipes/nx-console/console-generate-command)

## Reference

### 동영상

- [일백개 패키지 모노레포 우아하게 운영하기](https://youtu.be/Ix9gxqKOatY)
  - yarn berry + lerna 조합
  - Library Only Monorepo + Service Monorepo 조합
- [모노레포\_마이크로 아키텍처를 지향하며](https://youtu.be/CsbBuE_MF2U)
  - Turborepo
- [How to use React Native with Nx in monorepo](https://youtu.be/_VtGcJmf14E)
  - Nx

### 블로그

- [모던 프론트엔드 프로젝트 구성 기법 - 모노레포 개념 편](https://d2.naver.com/helloworld/0923884)
- [모던 프론트엔드 프로젝트 구성 기법 - 모노레포 도구 편](https://d2.naver.com/helloworld/7553804)
- [팀워크 향상을 위한 모노레포(Monorepo) 시스템 구축](https://blog.mathpresso.com/%ED%8C%80%EC%9B%8C%ED%81%AC-%ED%96%A5%EC%83%81%EC%9D%84-%EC%9C%84%ED%95%9C-%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-monorepo-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EA%B5%AC%EC%B6%95-3ae1b0112f1b)
- [모노레포의 문학적 의의](https://yeoulcoding.me/298)
- [프론트엔드 프로젝트 최신화 - 1편 : Yarn berry](https://channel.io/ko/blog/frontend_yarnberry)
- [프론트엔드 프로젝트 최신화 - 2편 : 모노레포](https://channel.io/ko/blog/monorepo-in-operation)
- [카카오 어드민 UI 컴포넌트를 모노레포로 개발하여 얻은 것들](https://tech.kakao.com/2020/12/03/frontend-growth-03/)
