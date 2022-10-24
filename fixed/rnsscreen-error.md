---
title: 리액트 네이티브 RSScreen 에러
description: RNSScreen" was not found in the UIManager.
tags: [react-native]
date: '2022-10-19'
---

캐시를 지우거나 패키지 버전을 올려주세요.

<!--truncate-->

### 터미널

Invariant Violation: requireNativeComponent: "RNSScreen" was not found in the UIManager.

This error is located at:
in RNSScreen (at createAnimatedComponent.js:211)

### 원인

일반적으로 실행 중인 앱을 종료하지 않고 패키지를 추가했을 때, 혹은 git merge, fetch 등을 했을 때 발생한다.

### 해결

#### 1. 첫 번째 방법

`node-modules` 폴더를 다시 지운 후 `yarn install` 또는 `npm install`을 한다. 그 후 다시 실행시켜본다.

#### 2. 두 번째 방법

`npx react-native start --reset-cache` 로 캐시를 없애본다

#### 3. 세 번째 방법

```
cd android
./gradlew clean

```

로 안드로이드 캐시를 없애본다
이후 다시 실행시켜본다

#### 4. 이렇게 해도 안된다면 캐시문제가 아닙니다!

`"react-native-screens": "3.18.2"` 버전으로 업데이트 한다.

[링크](https://github.com/software-mansion/react-native-screens/issues/1614#issuecomment-1276245207)
