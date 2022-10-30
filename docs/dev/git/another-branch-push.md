---
title: 현재 작업한 브랜치를 다른 브랜치에 커밋하기
description: 다른 브랜치에서 작업하고 있었을 때 다른 브랜치에 push 하기
tags: [github, branch]
date: '2022-10-30'
---

## 언제 쓰이나요?

나는 `develop` 브랜치에 개발을 하면서 `deploy` 하려는 것만 `master` 브랜치에 올리는 편이다.

열심히 개발하고 커밋하려고 하니 지금껏 `master` 브랜치에서 작업하고 있었다는 것을 깨달았다.

그대로 push 했다간 홈페이지에 작업이 덜 된 내용이 업데이트 되는 상황

작업한 내용을 다른 브랜치에 올려보자.

## 사용법

### 1. `git stash` 사용하기

```bash
git stash
```

현재 브랜치에서 변경 이력을 전부 롤백한다.
해당 변경 이력은 임시적으로 저장된다.

### 2. `git checkout <커밋할 브랜치>`

```bash
git checkout <커밋할 브랜치>
```

나의 경우는 develop 이니까 `git checkout develop`이 되겠다.
이때 새로 생성한 파일은 롤백되지 않는 것이 정상이다.

### 3. `git stash pop`

```bash
git stash pop
```

롤백했던 커밋을 해당 브랜치에 반영한다.

### 4. conflict

충돌이 났다면 해결하고 push 한다.
