---
title: TBD 브랜치 전략
description: trunk-based-development 전략에 대해 알아보자
tags: [git, TBD, trunk-based-development, 브랜치 전략]
last_update:
  date: '2022-12-12'
---

## 0. 들어가기 전에

:::note
<strong>깃 브랜치 전략</strong>

깃 브랜치 전략이란 여러 개발자가 하나의 저장소를 사용하는 환경에서 저장소를 효과적으로 활용하기 위한 work-flow다.
:::

깃 브랜치 전략에는 여러 가지 방법론이 있다.

1. `git flow`: 중심이 되는 `master`, `develop` 브랜치에 `feature`, `release`, `hotfix` 보조 브랜치를 병합한 뒤 보조 브랜치를 삭제하는 전략을 갖고 있는 전략
2. `github flow`: 1개의 `master`브랜치와 PR 방식을 활용한 전략

그리고 새로이 떠오르는 브랜치 전략이 있다.

## 1. Trunk-Based-Development이란

`Trunk-Based-Development`은 개발자가 핵심 `Trunk` 또는 `main branch`에 대한 작고 빈번한 업데이트를 병합하는 버전 제어 관리 방법이다. 작은 커밋으로 수명이 짧은 분기를 만드는 것이 핵심이다.
코드베이스 복잡성과 팀 규모가 커짐에 따라 TBD는 프로덕션 릴리스 흐름을 유지하는 데 도움이 된다.

## 2. Gitflow vs TBD

주요 차이점은 범위이다.

`Gitflow`는 수명이 긴 feature branches와 여러 기본 분기를 사용하는 브랜치 전략인데 일반적으로 여러 개발자가 관여하며 며칠, 심지어 몇 주가 소요된다. 때문에 이 전략은 개발자가 feature branches를 만들고 기능이 완료될 때까지 main trunk branch에 병합할 수 없다. 이러한 수명이 긴 feature branches는 main trunk branch에 병합을 시도하는 순간 충돌할 확률이 높고 그만큼 위험이 높기 때문에 병합하려면 더 많은 협업이 필요하다.

앞서 말했듯, `Gitflow`에는 개발, 핫픽스, 기능 및 릴리스를 위한 별도의 브랜치가 있다. 이러한 브랜치 간에 커밋을 병합하기 위한 다양한 전략이 있는데, 저글링하고 관리해야 할 지점이 더 많기 때문에 추가 계획 세션과 팀의 검토가 필요한 더 복잡한 경우가 많다.
![일반적인 브랜치전략](https://cloud.google.com/static/architecture/devops/images/devops-tech-trunk-based-development-typical-non-trunk-timeline.svg)

반면 `TBD`는 개발자가 코드를 `Trunk` 또는 `main branch`에 직접 푸시한다. 출시 분기에서 변경된 사항은 가능한 빨리 트렁크에 다시 병합해야 한다. `TBD`의 주요 이점은 개발 라인을 줄이고 소규모 병합을 빈번하게 수행하여 이벤트를 병합하는 데 따른 복잡성을 감소시키고 코드를 최신 상태로 유지할 수 있게 한다.

![TBD](https://cloud.google.com/static/architecture/devops/images/devops-tech-trunk-based-development-typical-trunk-timeline.svg)

## 3. TBD + CI

이때 main branch는 항상 안정적이고 문제없이 배포할 준비가 되어 있다고 가정한다. 즉, CI(지속적인 통합)를 위한 필수 사례이다. 지속적 통합(CI)은 TBD와 시스템의 상시 작동을 유지하기 위해 트렁크로 커밋 후 자동으로 신속하게 실행되는 일련의 테스트를 유지관리하는 작업의 결합이다.

지속적 통합의 주요 특징은 소규모 코드 배치를 자주 통합하여 긴 통합 및 안정화 단계를 없애는 것이며, 이렇게 하면 개발자는 수행 중인 작업에 대해 의사소통할 수 있고 통합 시 다른 개발자와 테스터에게 상당한 작업을 유발할 수 있는 대규모 병합을 피할 수 있다.

1. 새 코드가 트렁크에 병합되면 자동화된 통합 및 코드 적용 범위 테스트가 실행되어 코드 품질을 검증.
2. TBD의 빠르고 작은 커밋은 코드 검토를 보다 효율적인 프로세스로 만든다. 소규모로 분기되기 때문에 작은 변경 사항을 빠르게 확인하고 검토할 수 있다.
3. 팀은 main branch에 병합을 자주 수행해야 한다. 트렁크 기반 개발은 트렁크 분기를 "녹색"으로 유지하기 위해 노력해야하고, 즉, 모든 커밋에서 배포할 준비가 되어 있어야 한다.

## 4. 실천법

1. main(또는 trunk) 브랜치 하나만 운영한다. 신규 기능을 main에 바로 커밋한다.

2. main 브랜치에 코드가 머지되었다면, main 브랜치에 대해 CI/CD 한다. 문제가 없다면, main 브랜치의 코드가 그 즉시 운영 환경에 배포된다.

## 5. 도입 전 검토해볼만한 문제

### 1. 소규모 배치로 개발해야 한다.

- 코드 검토 절차가 매우 복잡한 경우, 많은 변경사항을 일괄로 처리하게 된다. 이렇게 하면 대규모 검토를 미루게 되므로 소규모 배치로 개발해야 한다.

### 2. 동기식 코드 검토를 수행한다.

- 개발자가 코드를 커밋할 준비가 되면 다른 팀원에게 코드를 즉시 검토하도록 요청해야 한다. 병합이 지연될수록 병합 충돌 및 관련 문제가 발생할 가능성이 높다. 동기식 검토를 구현하려면 다른 작업보다 서로의 코드를 우선적으로 검토하도록 하는 팀의 합의가 있어야 한다.

### 3. 포괄적인 자동 테스트를 구현한다.

- 포괄적이고 유의미한 자동화된 단위 테스트 모음이 있어야 하고 커밋 전에 실행되어야 한다. 예를 들어 모든 테스트를 통과했을 때 pull 요청 병합만 허용하도록 분기를 보호하는 것을 말한다.

## 6. Feature flag (Feature toggle)

테스트를 거쳤다고 해도 예상치 못한 문제가 발생하게 된다. 운영 환경에 코드를 배포하면 관련 기능이 사용자에게 보이게 되는데, TBD는 이러한 리스크를 갖고 있다.

이때 Feature flag를 사용하면 배포와 출시를 분리하여 기능의 전체 수명 주기를 관리할 수 있다.
배포한 기능을 바로 사용자에게 보여주지 않고 지정한 인원만 접근하게 하여 운영 환경에서 테스트 하는 것이다.

### Feature flag란?

- 소스 코드에서 여러 기능 분기를 유지 관리하는 대안을 제공합니다. 코드 내의 조건은 런타임 동안 기능을 활성화하거나 비활성화합니다. 애자일 설정에서 토글은 프로덕션에서 일부 또는 모든 사용자에 대해 온디맨드로 기능을 켜는 데 사용됩니다. - 위키백과
- 기능을 전환하고 숨기거나 비활성화하거나 활성화할 수 있습니다. 어떤 기능이 더 좋은지 알아보기 위해 사용자에게 다양한 기능 변형을 공개할 수도 있습니다. - [atlassian](https://www.atlassian.com/continuous-delivery/principles/feature-flags)

```ts title="featureFlags.ts"
const featureFlags = {
  hellowordnewfeature: false,
};

export function getFeatureFlag(key) {
  return featureFlags[key] || false;
}
```

```ts title="helloword.ts"
//return feature based on the feature flag
import { getFeatureFlag } from './featureFlags';

const createHelloWord = () => {
  if (getFeatureFlag('hellowordnewfeature')) {
    return createNewHelloWord();
  }

  return createOldHelloWorld();
};
```

새 기능은 `hellowordnewfeature` 플래그를 기반으로 반환되고, 플래그가 "true"이면 새 기능 `createNewHelloWord`이 반환되고 그렇지 않으면 이전 기능 `createOldHelloWorld`이 반환된다.
즉, Feature flag는 본질적으로 "if 문"일 뿐이다.

## Reference

- [트렁크 기반 개발](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development)
- [트렁크 기반 개발 2](https://cloud.google.com/architecture/devops/devops-tech-trunk-based-development)
- [feature-flags](https://www.atlassian.com/continuous-delivery/principles/feature-flags)
- [feature-flags2](https://docs-kr.hackle.io/docs/feature-flags)
