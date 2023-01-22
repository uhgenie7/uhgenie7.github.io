---
title: eslint 알고 쓰기
description: eslint로 협업해보자
tags: [eslint]
date: '2023-01-22'
---

eslint는 코드에서 문제를 찾아 고쳐주는 정적 코드 분석 도구다. CRA를 하면 자동으로 eslint를 만들어주지만, 협업 할 때 컨벤션을 위해서 룰을 알고 추가하거나 수정할 필요가 있다.

eslint에 대해 알고 규칙을 지켜보자.

<!--truncate-->

## 기본 설정

하나의 예를 가져와보았다.

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    'no-restricted-exports': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
```

### root

Monorepo처럼 같이 하나의 코드 저장소에 여러 개의 프로젝트가 공존하는 경우 설정한다.
ESLint는 현재 린트(lint) 대상의 파일이 위치한 폴더 안에 설정 파일이 있는지 우선적으로 확인해보고 없으면 그 상위 폴더를 한 단계 씩 거슬러 올라가면서 설정 파일을 찾게되는데 root 옵션이 true로 설정되어 있는 설정 파일을 만나면 더 이상 상위 폴더로 올라가지 않는다.

```json title=".eslintrc.json"
{
  "root": true
}
```

```json title="packages/project-a/.eslintrc.json"
{
  "root": false
}
```

이러한 경우가 아니라면 보통은 root를 설정하지 않아도 된다.

### env

자바스크립트가 어떤 환경에서 작동하는지에 대해 eslint에 environment 정보를 주는 것

- [공식문서 environment 정보](https://eslint.org/docs/latest/use/configure/language-options#specifying-environments)

보통 아래처럼 가져간다.

```
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
```

- node 환경: node: true
- 웹 환경: browser: true, es6: true

:::note
module.export를 하려고 할 때 module 에 붉은 밑줄이 생기며 `module is not defined`라는 오류가 발생한다면, `node: true` 옵션을 넣어주면 된다.
:::

### plugins, rules

이 옵션들로 추가적인 규칙을 사용할 수 있다.
보통 plugins 하나를 등록해서는 안 되고, `plugins + rules` 조합이나 `extends` 단독 조합을 같이 쓴다.

예를 들어 `eslint-plugin-react`를 다운받고 다음처럼 설정할 수 있다.

```json title=".eslintrc.json"
{
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
}
```

react를 plugins에 등록했다면, react 관련 `rules`를 쓸 수 있는 상태가 된 것. `plugins`만 달랑 등록한다면 팥 없는 붕어빵이나 다름없으니 `rules`를 등록하도록 하자.

### extends

그러나 어떤 rules가 있는 줄 알고 모두 등록할까? 하나하나 찾아서 다운로드 받고 등록하는 것도 일이 되기 때문에 세계적인 기업들이 공개해놓은 설정을 그대로 가져와서 base 하는 방법이 있다.

```json title=".eslintrc.json"
{
  "extends": ["airbnb", "plugin:react/recommended"]
}
```

Airbnb의 `eslint-config-airbnb`를 사용하면 `rules`를 등록할 필요 없이 단 한 줄로 airbnb eslint를 사용할 수 있다.

:::note
확장이 가능한 ESLint 설정은 npm 패키지 이름이 `eslint-config-`로 시작하며 extends 옵션에 명시할 때는 `eslint-config-`부분을 생략해도 된다.
:::

airbnb의 eslint는 몹시 괜찮지만, 꽤 엄격한 편이라 규칙을 재커스텀하고 싶을 때가 있다. 이럴 때 `rules`로 extends의 옵션을 덮어씌운다.

```json title=".eslintrc.json"
{
  "extends": ["airbnb", "plugin:react/recommended"],
  "rules": {
    "no-console": "error"
  }
}
```

### settings

일부 ESLint 플러그인은 추가적인 설정이 가능한데 이런 경우에는 설정 파일의 settings 옵션을 사용한다.

```json title=".eslintrc.json"
{
  "settings": {
    "import/resolver": {
      "typescript": {
        "project": "./tsconfig.json"
      }
    },
    "react": {
      "version": "detect"
    }
  }
}
```

- `import/resolver` 는 `eslint-plugin-import`의 경로 설정 옵션이다.

### parser

코드를 분석하기 위한 파서. 보통 js 워크스페이스에서는 `@babel/eslint-parser`를, ts 워크스페이스에서는 `@typescript-eslint/parser`를 사용한다.

### parserOptions

ESLint 사용을 위해 지원하려는 Javascript 언어 옵션을 지정한다.

- ecmaVersion: 사용할 ECMAScript 버전을 설정
- sourceType: parser의 export 형태를 설정
- ecmaFeatures: ECMAScript의 언어 확장 기능을 설정
  - globalReturn: 전역 스코프의 사용 여부 (node, commonjs 환경에서 최상위 스코프는 module)
  - impliedStric: strict mode 사용 여부
  - jsx: ECMScript 규격의 JSX 사용 여부

```json title=".eslintrc.json"
{
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  }
}
```

### ignorePatterns

ESLint 를 적용하지 않을 폴더나 파일을 명시하는 옵션이다.

기본적으로 node_modules 폴더나 .로 시작하는 설정 파일은 무시한다.

```json title=".eslintrc.json"
{
  "ignorePatterns": ["public", "@types"]
}
```

:::note
`.eslintignore`파일로도 무시할 수 있다
:::

### overrides

일부 파일에 대해서만 다른 설정을 적용해줘야 할 때 사용.

```json title=".eslintrc.json"
{
  "overrides": [
    {
      "files": ["**/__tests__/**/*", "**/*.{spec,test}.*"],
      "env": {
        "jest/globals": true
      },
      "plugins": ["jest", "testing-library"],
      "extends": [
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react"
      ]
    },
    {
      "extends": ["plugin:cypress/recommended"],
      "files": ["cypress/**/*.ts"],
      "rules": {}
    },
    {
      "files": ["*.ts", "*.tsx"],
      "extends": [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      "rules": {}
    }
  ]
}
```

## 자주 설치하는 eslint 라이브러리들

- eslint-config-airbnb: Airbnb의 eslint 스타일 가이드
- eslint-plugin-import: ES2015+의 import/export 구문을 지원
- eslint-plugin-react: 리액트 지원
- eslint-plugin-jsx-a11y: 접근성 지원
- eslint-plugin-react-hooks: 리액트 hooks 지원
- eslint-config-prettier: ESLint의 포맷팅을 비활성화 시킨다.
- eslint-plugin-prettier: 포맷팅 규칙을 Prettier를 사용해서 추가시킨다.
- eslint-import-resolver-typescript
- eslint-plugin-cypress
- eslint-plugin-jest
- eslint-plugin-testing-library
- eslint-plugin-simple-import-sort : import 패키지를 알파벳 순서대로 Sorting 하고, 절대경로로 import 된 그룹과 상대경로로 import 된 그룹을 자동으로 분리시킴
- eslint-plugin-unused-imports : import한 패키지를 실제로 사용하지 않았을 때 해당 패키지의 import 구문을 자동으로 제거.

## 명령어

1. 기초 설정: `npx eslint --init`

- 문법에만 사용
- 문법 + 문제 찾기
- 문법 + 문제 찾기 + 스타일까지 강제로 적용

2. 자동 fix: `npx eslint --fix`

   [eslint 공식문서](https://eslint.org/docs/latest/rules/)에서 렌치 모양이 있으면 자동 fix 해준다.

## 유용한 도구

[eslint demo](https://eslint.org/play/)

## 참조

- [eslint rule](https://eslint.org/docs/latest/rules/)
- [ESLint 상세 설정 가이드](https://www.daleseo.com/eslint-config/)
