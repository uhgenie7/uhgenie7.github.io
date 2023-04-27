---
title: vscode 엔터가 안 될 때.
description: 강제 종료로 인한 vscode 엔터 먹통.
tags: [vscode, enter]
date: '2023-04-27'
---

mac을 강제종료 한 후, vscode를 다시 켰을 때 엔터가 되지 않는 상황이 발생함
ctrl + Enter 를 하면 엔터가 되긴 하지만 근본적인 해결이 안 되고 있음.

## 해결법

vscode 확장 프로그램과 연관이 있을 확률이 높기 때문에 문제되는 확장 프로그램을 제거하고 다시 설치하기를 권장한다.

나는 `vscode-styled-components` 가 문제였음.
