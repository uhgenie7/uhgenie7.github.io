---
title: 리액트 네이티브 Couldn't find a navigation object 에러
description: Couldn't find a navigation object. Is your component inside NavigationContainer?
tags: [react-native]
last_update:
  date: '2022-10-20'
---

NavigationContainer 를 분명 넣어주었고, 잘만 돌아가던 RN이 갑자기 에러를 뿜을 때.

<!--truncate-->

### 터미널

`Error: Couldn't find a navigation object. Is your component inside NavigationContainer?`

### 해결법

`@react-navigation/core` 로 import 해오는 hook이나 type이 있다면,
`@react-navigation/native`로 바꿔준다.

ex)

```
import { useFocusEffect } from '@react-navigation/core'; // xxxx
import { useFocusEffect } from '@react-navigation/native'; // oooo
```
