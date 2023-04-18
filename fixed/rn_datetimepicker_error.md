---
title: react-native-community/datetimepicker 빌드 에러
description: Module parse failed Unexpected token
tags: [react-native, react-native-community/datetimepicker]
date: '2023-04-18'
---

react-native-community/datetimepicker 관련 에러

<!--truncate-->

## 에러

에러가 났던 버전

```
"@react-native-community/datetimepicker": "6.1.2",
```

스토리북을 webview로 띄워서 보고 있는데, 어느 날 빌드 에러가 발생함.

```bash
ERROR in ./node_modules/@react-native-community/datetimepicker/src/DateTimePickerAndroid.js 17:12
Module parse failed: Unexpected token (17:12)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| import invariant from 'invariant';
|
> import type {DateTimePickerEvent, AndroidNativeProps} from './types';
| import {
|   getOpenPicker,
 @ ./node_modules/@react-native-community/datetimepicker/src/index.js 2:0-62 2:0-62
 @ ./src/components/atoms/DatePicker/index.tsx
 @ ./src/components/atoms/DatePicker/DatePicker.stories.tsx
 @ ./src/components sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.tsx)$
 @ ./generated-stories-entry.js
 @ multi ./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js ./node_modules/@storybook/core-client/dist/esm/globals/globals.js (webpack)-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined ./storybook-init-framework-entry.js ./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js ./storybook-web/preview.js-generated-config-entry.js ./generated-stories-entry.js
```

## 해결

react-native-community/datetimepicker 버전을 업그레이드 한다.

```
"@react-native-community/datetimepicker": "6.1.4",
```

## 참조 이슈

- [Picker error when building with expo](https://github.com/react-native-datetimepicker/datetimepicker/issues/610)
