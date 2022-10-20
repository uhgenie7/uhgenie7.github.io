---
title: 리액트 네이티브 빌드 에러
description: INSTALL_FAILED_VERSION_DOWNGRADE
tags: [react-native]
last_update:
  date: '2022-10-19'
---

기존에 설치된 앱이 있다면 삭제 후 재빌드하자.

<!--truncate-->

### 터미널

```bash
BUILD FAILED in 37s

error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup.
Error: Command failed: ./gradlew app:installDebug -PreactNativeDevServerPort=8081
Unable to install /Users/project/android/app/build/outputs/apk/debug/app-debug.apk
com.android.ddmlib.InstallException: INSTALL_FAILED_VERSION_DOWNGRADE
```

### 해결방법

기존에 설치된 앱이 있다면 삭제 후 재빌드하자.
