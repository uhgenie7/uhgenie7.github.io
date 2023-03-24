---
title: 깃허브 푸시 시, IDENTIFICATION 경고가 뜰 때
description: 'WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!'
tags: [rsa-ssh]
date: '2023-03-24'
---

```bash
git push origin main

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the RSA key sent by the remote host is
SHA256:~
Please contact your system administrator.

Add correct host key in /Users/niege/.ssh/known_hosts to get rid of this message.
Offending RSA key in /Users/niege/.ssh/known_hosts:2

RSA host key for github.com has changed and you have requested strict checking.
Host key verification failed.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

1. 이전 키를 제거한다.

```bash
ssh-keygen -R github.com
```

:::note 터미널

```bash
ssh-keygen -R github.com
# Host github.com found: line 2
/Users/niege/.ssh/known_hosts updated.
Original contents retained as /Users/niege/.ssh/known_hosts.old
```

:::

2. 새 RSA SSH 공개키 항목을 추가한다.

```bash
ssh-keygen -R github.com
curl -L https://api.github.com/meta | jq -r '.ssh_keys | .[]' | sed -e 's/^/github.com /' >> ~/.ssh/known_hosts
```

이때 'zsh: command not found: jq' 라고 뜬다면, jq를 따로 설치해주어야 한다.

```bash
brew install jq
```

3. 다시 푸시해본다.

```
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Are you sure you want to continue connecting (yes/no)? yes
```

## 참조

[RSA SSH 호스트 키를 업데이트했습니다.](https://github.blog/2023-03-23-we-updated-our-rsa-ssh-host-key/)
