---
title: 메트릭
description: 성능 및 사용자 경험 측정
tags: [metrics, 성능, 메트릭]
last_update:
  date: '2022-10-21T10:00'
---

🐣: 사용자 경험을 위해 성능을 개선해서 웹 페이지가 빠르게 로딩되게 해봤습니다.  
🦊: 얼마나 빠르게 됐나요?  
🐣: 체감상... 빨라졌습니다.  
🦊: ......그렇군요. 하지만 데이터가 너무 느리게 나오는데요?  
🐣: 하지만 최초 로드는 빨랐죠.  
🦊: ......;

<!--truncate-->

## 메트릭(성능 지표)의 정의

성능은 상대적이기 때문에 정확하고 정량적으로 측정 가능한 객관적인 기준으로 성능을 이야기하는 것이 중요하며 이러한 기준을 `메트릭`이라고 한다.

## 메트릭의 유형

일반적으로 웹 성능은 `load` 이벤트로 측정되곤 하지만 최초 페이지가 로드되었으나 컨텐츠는 로드되지 않을 때가 있기 때문에, 사용자가 성능을 인식하는 방식과 관련하여 구글은 메트릭을 다음과 같은 유형으로 나누었다.

<table>
  <tr>
    <th>인지 로드 속도</th>
    <td>얼마나 빠르게 페이지가 모든 시각적 요소를 화면에 로드하고 렌더링할 수 있는지 확인합니다.</td>
  </tr>
  <tr>
    <th>로드 응답성</th>
    <td>구성 요소가 사용자 상호 작용에 빠르게 응답하기 위해 페이지에서 필요한 'JavaScript 코드를 얼마나 빠르게 로드하고 실행'할 수 있는지를 확인합니다.</td>
  </tr>
  <tr>
    <th>런타임 응답성</th>
    <td>페이지 로드 후 페이지가 '사용자 상호 작용에 얼마나 빨리 응답'할 수 있는지 확인합니다.</td>
  </tr>
  <tr>
    <th>시각적 안정성</th>
    <td>페이지의 요소가 사용자가 예상하지 못한 방식으로 이동해 잠재적으로 상호 작용을 방해하는지를 확인합니다 (CLS) </td>
  </tr>
  <tr>
    <th>원활함</th>
    <td>전환 및 애니메이션이 일관된 프레임 속도로 렌더링되고 다음 상태로 유동적으로 흐르는지 확인합니다.</td>
  </tr>
</table>

이처럼 다양한 방면으로 성능을 인식 및 측정할 수 있기 때문에, 하나의 메트릭만으로는 모든 성능을 측정할 수 없다.

## 다양한 메트릭

\*은 2020년 `Core Web Vitals`에 포함된 지표

<table>
  <tr>
    <th>TTFB</th>
    <td>Time to First Byte - 링크 클릭과 해당 사이트의 '첫 바이트'를 받기까지의 시간</td>
  </tr>
  <tr>
    <th>FP</th>
    <td>First Paint - 사용자가 어떤 컨텐츠를 보게 되거나 화면에 약간의 픽셀이 그려지기까지의 시간</td>
  </tr>
  <tr>
    <th>FCP</th>
    <td>First Contentful Paint - 페이지 컨텐츠의 '일부'가 화면에 렌더링될 때 까지의 시간</td>
  </tr>
  <tr>
    <th>LCP*</th>
    <td>Largest Contentful Paint - 메인페이지의 컨텐츠가 보여지기까지의 시간. 뷰포트 내에 큰 이미지나 텍스트가 보여짐을 의미</td>
  </tr>
  <tr>
    <th>TTI</th>
    <td>Time to Interactive - 페이지에 '상호작용'이 가능해지기까지의 시간</td>
  </tr>
  <tr>
    <th>TBT</th>
    <td>Total Blocking Time - FCP부터 TTI까지의 시간</td>
  </tr>
    <tr>
    <th>FID*</th>
    <td>First Input Delay - 처음으로 상호 작용할 때부터 해당 상호 작용에 대한 응답으로 브라우저가 실제로 이벤트 핸들러 처리를 시작하기까지의 시간</td>
  </tr>
  <tr>
    <th>CLS*</th>
    <td>Cumulative layout shift - 예기치 않은 레이아웃 이동의 누적 점수를 측정</td>
  </tr>
</table>

## Reference

- [web.dev의 메트릭](https://web.dev/user-centric-performance-metrics/)
- [web.dev의 vitals](https://web.dev/vitals/)
