---
title: 2022-11-04 이후 리액트 네이티브 안드로이드 빌드 에러
description: Execution failed for task ‘:app:checkDebugAarMetadata’.
tags: [react-native]
date: '2022-11-07'
---

2022-11-4일에 일어난 안드로이드 빌드 에러.
RN 종속성 문제이므로 핫픽스를 적용하세요.

<!--truncate-->

멀쩡히 잘 되던 앱이 2022-11-4 이후 갑자기 빌드에 페일이 났다면 종속성 문제일 가능성이 높습니다.

### 터미널

```bash
execution failed for task ':app:checkdebugaarmetadata'. > multiple task action failures occurred:
```

### 해결방법

- [READ ME](https://github.com/facebook/react-native/issues/35210)

우리가 사용하고 있던 RN 버전은 "0.67.2" 버전으로 0.67.5 버전으로 hotfix를 해야했다.

```bash title="RN 업그레이드"
 yarn upgrade react-native@v0.67.5
```

```bash title="gradlew 캐시 삭제"
./gradlew clean
```

이후 다시 build 하면 된다.
