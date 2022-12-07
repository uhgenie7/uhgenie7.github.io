---
title: 12월 프리온보딩 프론트엔드 챌린지 - 모노레포 시스템
description: 12월 프리온보딩 프론트엔드 챌린지, 모노레포 시스템 중 yarn에 대해서 정리합니다.
tags: [프리온보딩, 모노레포, yarn, yarn-berry, 12월프리온보딩]
date: '2022-12-07'
---

12월 프리온보딩 프론트엔드 챌린지 수강 도중 애매하게 알고 있었거나 새로이 알게된 정보 정리합니다.

<!--truncate-->

## 모노레포 도입 케이스

### 1. B2C, B2B, admin를 하나로

- 멀티레포를 모노레포로 가져가며 같은 설정을 반복하고 싶지 않을 때 도입
- 단단히 하나로 되어있는 git 저장소를 볼 수 있다.

### 2. monolith -> Microservice로 전환

- 기존에는 한 패키지 안에 여러 개의 서비스가 있었음
- 이를 한 패키지에 하나의 서비스로 갖고 가겠다

예를 들어...

- 한 페이지 안에 menu가 몇 개 안 돼보이지만, 그 내부를 보면 수많은 서비스가 같이 있다.
- 하나의 거대한 빌딩을 보는 듯한 page folder 때문에 배포 시간도, 서비스 속도도, 트래픽도 점차 감당이 되지 않음.
- 라이브러리 하나가 몇 메가짜리인데, 한 페이지를 위해 거대한 라이브러리를 설치해버리면 다른 서비스에도 영향이 가고 맘.
- 그리하여 마이크로서비스를 택하게 된다.

### 즉, 모노레포란?

"여러 개의 개별 프로젝트를, 잘 정의된 관계를 통해서 하나의 Repo에 담은 것"
"Monorepo ≠ Monolith"

[읽어보면 좋은 아티클](https://news.hada.io/topic?id=6061)

## yarn

yarn을 사용하여 모노레포를 구축하는 방법은 두 가지가 있다. `yarn1`, `yarn berry`가 그것이다.
yarn1을 사용하여 모노레포를 구축하는 경우는 별로 없고, yarn berry로 가는 경우가 많은 듯 하다.

### yarn1

[yarn classic](https://classic.yarnpkg.com/en/docs/workspaces#toc-how-to-use-it)

#### 1. root package.json

두 줄의 코드가 yarn1의 모노레포 핵심이다.

```json title="package.json"
{
  "private": true,
  "workspaces": ["packages/*"]
}
```

#### 2. packages 폴더 하위에 workspace 생성하기

```bash
mkdir packages
mkdir ./packages/common
mkdir ./packages/server
```

##### 1) common

이제 공통 모듈을 만들어 볼 것이다.

1. packages/common/package.json 생성

```json title="./packages/common/package.json"
{
  "name": "@study/common",
  "version": "1.0.0", // 버전 명시 해주자
  "main": "index.js", // main을 꼭 적어주자
  "license": "MIT"
}
```

:::note 질문
<strong>package name에 @를 같이 넣어주는 이유가 궁금해요 컨벤션일까요?</strong>

이는 관습입니다. 패키지 네임이 겹치는 일이 있을 수도 있기 때문에 @를 씁니다. 보통 회사이름을 앞에 쓰거나 본인의 id를 씁니다.
:::

2. packages/common/index.js 생성

```js
module.exports = () => {
  console.log('hello from common');
};
```

##### 2) server

서버 프로젝트에서 common 모듈을 쓰기 위해 기초 세팅을 해준다.

1. packages/server/package.json 생성

```json title="./packages/server/package.json"
{
  "name": "@study/server",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "node index.js"
  },
  "license": "MIT"
}
```

2. packages/server/index.js 생성

```js title="packages/server/index.js"
// server 프로젝트 안에서 common 모듈을 가져다 쓸 수 있도록 한다. 아직 의존하기 전이므로 모듈을 찾을 수 없을 것이다.
const foo = require('@study/common');

console.log('hello from server');

foo();
```

`common` 폴더는 공통으로 가져갈 요소이고, 이제 `server`가 `common` 프로젝트에 의존하게 만들 것이다.

#### 3. server 가 common 에 의존하게 하기

```bash title="yarn1은 버전을 뒤에 붙여주어야 한다."
yarn workspace @study/server add @study/common@1.0.0
```

1. packages/server/package.json

```json title="./packages/server/package.json"
{
  "name": "@study/server",
  "version": "1.0.0",
  "main": "index.js",
  // highlight-start
  "dependencies": {
    "@study/common": "1.0.0"
  },
  // highlight-end
  "scripts": {
    "dev": "node index.js"
  },
  "license": "MIT"
}
```

```bash title="root에서 실행해보기"
yarn workspace @study/server dev
```

### yarn berry

#### 1. yarn을 yarn berry로 전환하기

```bash
// yarn 버전 확인
yarn -v  // 1.22.17

// yarn 버전 변경
yarn set version berry
// 또는
yarn set version stable

// yarn 버전 확인
yarn -v // 3.3.0


// project 폴더 생성
mkdir yarn-berry-workspace
cd yarn-berry-workspace
```

#### 2. yarn workspace 패키기 만들기

```bash
// packages 디렉토리 만들기 / 루트 초기화
yarn init -w
```

#### 3. root package.json파일 수정

```json title="package.json"
{
  "name": "yarn-berry-workspace-test",
  "packageManager": "yarn@3.3.0",
  "private": true,
  "workspaces": ["apps/*", "packages/*"]
}
```

- apps : service 모음
- packages: 참조용. 공통 ui, 공통 함수 등… 모듈을 모아두는 곳.

#### 4. apps 폴더에 create next-app 프로젝트 추가

1. next project 설치

```bash
// 1. create-next-app 프로젝트 생성
cd apps
yarn create next-app
```

2. nextjs 프로젝트에서 package.json name 수정하기

```json title="apps/wanted/package.json"
{
  "name": "@wanted/web",
  "version": "1.0.0",
  "main": "index.js"
  // ...
}
```

3. pnp.cjs에서 정보를 갱신해줘야 하므로 root에서 상태를 갱신해준다.

```bash
cd ..
yarn

yarn workspace @wanted/web run dev
```

:::tip
최대한 루트 경로에서 터미널을 입력해라.

- 의존성들을 루트에서 통합으로 관리하기 위함
- 프로젝트 내부에서 yarn 실행 시, 의도치 않은 동작이 발생할 수 있음.

:::

4. 공통으로 가져갈 libs 모듈 생성

- packages/libs 생성

```
cd packages/libs

yarn init
```

```json title="packages/libs/package.json"
{
  "name": "@wanted/libs",
  // version과 main을 명시
  // highlight-start
  "version": "1.0.0",
  "main": "./src/index.ts",
  // highlight-end
  "packageManager": "yarn@3.3.0"
}
```

```js title="packages/libs/src/index.ts"
export const sayHello = () => {
  return 'hello from lib';
};
```

이제 libs 에 타입스크립트를 추가하고 nextjs에서 libs(TS)를 의존하게 할 것이다.

```bash title="root에서"
// lib에 ts 추가
yarn workspace @wanted/libs add typescript -D

// next web project에서 libs 의존(추가)
yarn workspace @wanted/web add @wanted/libs
```

```json title="packages/libs/package.json"
{
  "name": "@wanted/lib",
  "version": "1.0.0",
  "private": true,
  "main": "./src/index.ts",
  "dependencies": {
    "typescript": "^4.9.3"
  }
}
```

```json title="packages/libs/tsconfig.json"
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "node",
    "target": "ESNext",
    "lib": ["ESNext"],
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "baseUrl": "./src",
    "noEmit": false,
    "incremental": true,
    "resolveJsonModule": true,
    "paths": {}
  },
  "exclude": ["**/node_modules", "**/.*/", "./dist", "./coverage"],
  "include": ["**/*.ts", "**/*.js", "**/.cjs", "**/*.mjs", "**/*.json"]
}
```

```json title="apps/wanted/package.json"
{
  "name": "@wanted/web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@emotion/react": "^11.10.5",
    "@types/node": "18.11.9",
    "@types/react": "18.0.25",
    "@types/react-dom": "18.0.9",
    // highlight-start
    "@wanted/libs": "workspace:^",
    // highlight-end
    "eslint": "8.28.0",
    "eslint-config-next": "13.0.4",
    "next": "13.0.4",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "typescript": "4.9.3"
  }
}
```

:::tip
project는 모듈이 아니므로 main이 없다.
:::

#### 5. ts error 바로 잡기

`./apps/wanted/pages/index.tsx`에서 ts error가 나기 시작한다.
yarn berry는 npm과 모듈을 불러오는 방식이 다르기 때문.

```bash
yarn add -D typescript
yarn dlx @yarnpkg/sdks vscode
```

#### 6. yarn PnP 사용을 위한 vscode extension 설치: arcanis.vscode-zipfs

arcanis.vscode-zipfs 설치 후, 다음 커맨드 추가

```json title=".vscode/extensions.json"
{
  "recommendations": ["arcanis.vscode-zipfs"]
}
```

- 이후 vscode 우측 하단에 allow 대화상자가 뜨면 허용

안 뜬다면 아래처럼 해본다.

1. yarn dlx @yarnpkg/sdks vscode
2. TypeScript file 아무거나 하나 열어본다.
3. ctrl+shift+p
4. "Select TypeScript Version" 선택
5. "Use Workspace Version"

#### 7. apps/wanted/pages/index.tsx 파일에서 @wanted/libs 모듈 사용해보기

```tsx title="apps/wanted/pages/index.tsx"
import {sayHello} from '@wanted/libs';

export default function Home() {
  return (
    {sayHello()}
  )
}
```

```bash
yarn workspace @wanted/web run dev
```

## Q&A

🐣: 모노레포를 구축할 때 yarn workspace + lerna 조합을 많이 쓰던데, yarn workspace만으로도 모노레포 구축이 충분한지 궁금합니다.  
🦊: 충분히 가능하다. 러나는 고수준의 툴임. 라이브러리 폴더를 수정하고 커밋했을 때, 추가적으로 내부 패키지지만 npm에 publish 할 수 있다. 그러면 수정사항에 따라서 버전 정보가 중요하다. 러나는 이런 것을 자동화해준다.

---

🐣: 멀티레포로 만들었던 프로젝트를 모노레포로 마이그레이션 한다고 할 때, 기존의 레포를 모노레포로 전환하는식으로 진행하나요? 아니면 새로운 모노레포 프로젝트에 기존 코드들을 가져오는 방식으로 진행되나요?  
🦊: 양쪽 다 고려해볼 수 있다. 코드의 히스토리가 중요하다면 기존 레포에서 다른 레포로 이동할때 히스토리를 같이 가져갈 수 있는 git 명령어가 있다. 개인적으로 안정적인 건 후자인 것 같다.

:::note
--mirror를 사용하면 저장소의 소스와 커밋 히스토리까지 복사할 수 있다.
커밋 히스토리도 복사하기에, 이동 후에도 코드의 과거 작업을 추적할 수 있다.

```
git clone --mirror https:://github.com/username/move-test-one
cd move-test-one.git
git remote set-url --push origin https:://github.com/username/new-test-one
git push --mirror
```

[출처](https://mong-blog.tistory.com/entry/Git-%EC%A0%80%EC%9E%A5%EC%86%8C%EB%A5%BC-%EB%8B%A4%EB%A5%B8-%EC%A0%80%EC%9E%A5%EC%86%8C%EB%A1%9C-%ED%86%B5%ED%95%A9%ED%95%98%EB%8A%94-2%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95git-history-%EC%9C%A0%EC%A7%80)
:::

---

🐣: 백엔드가 js 쪽 프레임워크를 선택한다했을 때 백엔드까지 모노레포로 같이 관리하는게 좋을지 백엔드는 따로 분리시키는게 좋을지도 궁금합니다!  
🦊: 같이 있는게 좋다고 본다. api 응답 모델들이 DTO도 있을 것임. 모노레포로 share하면 좋을 거 같다.

---

🐣: @wanted/web만 clone 받았을 때에도 @wanted/lib 참조가 가능한가요?  
🦊: 불가능하다. 한쪽만 받을 수 없음.

---

🐣: cache된 패키지들이 다 gitignore 안되고 있는데, 이것들을 원격 저장소에 올리는 편이 좋은가요? (yarn-berry 사용시에 이렇게도 한다고 들어본 것 같아서 의도된건가 싶어서요)
🦊: 취향의 영역. 즉, 올려도 되고 안 올려도 된다. `.cache`를 같이 저장소에 올리면 zero-install 이 된다. 이렇게 하면 의존성을 설치 안 해도 프로젝트가 돌아간다.  
[토스 링크를 참조](https://toss.tech/article/node-modules-and-yarn-berry)해보시라.

---

🐣: yarn1을 쓸일이 없다고 하셨는데 왜 그런가요? 저희 회사에서는 pnp를 지원하지 않는 패키지가 여럿 있고, 큰 기능이 필요없고 컴포넌트나 기능만 공통으로 가져가기 위해 yarn1을 사용하려고 했었는데요, yarn berry로 시작하는 이유가 있으실까요. 단지 yarn berry가 yarn 1보다 더 지원하는 기능이 많아서인가요?  
🦊: yarn berry 에서도 pnp 사용하지 않고 쓸 수 있음. `nodelinker`라는 게 있음. `.yarnnrc.yml`파일에 `nodeLinker: node-modules`를 추가하면 가능. 이는 pnp 모드를 사용하지 않겠다라는 뜻이다.  
[참조](https://yarnpkg.com/getting-started/migration)

---

🐣: yarn berry 로 바뀌었을 때 생기는 `yarnrc.yml` 파일에서 yarnPath: `.yarn/releases/yarn-3.3.0.cjs` 가 어떤 것을 의미하는지 궁금합니다!  
🦊: yarn은 전역적으로 설치되는데, yarn을 설치 안 해도 쓰겠다는 것. 제로인스톨과 같은 개념이다.

---

🐣: package를 내부 서비스에서 import 할 때 꼭 index에서 export 해준 것만 import할 수 있을까요? 폴더구조가 깊어지면 일일이 export 해주기가 까다로울 것 같아서요  
🦊: 엔트리 인덱스를 잡아주고 써야 편리하다. (안하면 더러워짐)

---

🐣: root 패키지에 workspace로 추가되어있는 packages의 하위 폴더를 만들때, 특별한 커맨드로 만들어줘야하나요?

- package.json 파일이 자동생성 안되길래 궁금해요.
- 하위 폴더에서 직접 yarn init 해주는건지..?

🦊: package.json을 수동으로 만들어줘야 한다. 즉, 하위 폴더에서 직접 yarn init 해주어야 한다.

---

🐣: yarn1에서 설치된 라이브러리 내부를 볼 때 node_modules안에서 보고 수정할 수 있는데 yarn berry에서는 어디서 확인하고 수정할 수 있을까요??  
🦊: pnp는 이렇게 수정하는 것이 안된다.

---

🐣: 모노레포의 packages 를 github의 submodule 로 관리하는 것도 괜찮은지 궁금합니다  
🦊: 서브모듈로 내보내서 써라. 러나처럼…
