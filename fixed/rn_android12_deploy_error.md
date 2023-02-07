---
title: Google Play의 대상 API 수준 요구사항 충족하기
description: react-native 기반 앱을 Google Play 프로덕션 모드에 등록하려고 할 때 안드로이드 11을 쓰고 있다면 반려된다
tags: [react-native, google-play, android12]
date: '2023-02-07'
---

2023년 1월 이후, 앱을 버전 업데이트 한 뒤 구글 플레이에 등록하려고 하면 API 수준 요구사항을 충족해달라는 붉은 글씨가 뜹니다.

몇 가지 설정을 더한 뒤 앱을 구글 플레이에 업로드 해봅시다.

<!--truncate-->

:::note Environment Info:

```
npmPackages:
    react-native: "0.67.5"
```

:::

[구글이 안내하는 문서](https://developer.android.com/google/play/requirements/target-sdk?hl=ko)를 보면, 신규 앱은 Android 12(API 수준 31) 이상을 타겟팅해야 한다고 안내하고 있습니다.

### 1. android/build.gradle 버전 수정

compileSdkVersion와 targetSdkVersion를 각각 31로 업데이트 합니다.

```bash title="android/build.gradle"
buildscript {
    // ...
        compileSdkVersion = 31
        targetSdkVersion = 31
    // ...
}
```

### 2. android/app/build.gradle 코드 추가

```bash title="android/app/build.gradle"
dependencies {
    // ...
    implementation 'androidx.work:work-runtime:2.7.1'
    // ...
}
```

### 3. android/app/src/main/AndroidManifest.xml 코드 수정

```bash title="android/app/src/main/AndroidManifest.xml"
      <activity
        // ...
        android:exported="true"
        >
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
```

## 참조

- [Google Play의 대상 API 수준 요구사항 충족하기](https://developer.android.com/google/play/requirements/target-sdk?hl=ko)
- [더 안전한 구성요소 내보내기](https://developer.android.com/about/versions/12/behavior-changes-12?hl=ko#exported)
