# 안내판 태블릿 설치 안내 (갤럭시탭 · 강의실 5대)

강의실 밖에 거는 태블릿에서 **주소창 없이 꽉 찬 화면**으로 안내판을 띄우는 방법입니다.
태블릿마다 한 번만 해 두면, 그다음부터는 홈 화면 아이콘을 누르는 것만으로 전체화면으로 열립니다.

## 1. 강의실별 주소

| 화면 | 주소 |
| --- | --- |
| 로비 | https://0ceanview9782-art.github.io/hankyung-venue-hub/index-2.html?display=lobby |
| 글로벌 | https://0ceanview9782-art.github.io/hankyung-venue-hub/index-2.html?display=global |
| 위즈덤 | https://0ceanview9782-art.github.io/hankyung-venue-hub/index-2.html?display=wisdom |
| 패션 | https://0ceanview9782-art.github.io/hankyung-venue-hub/index-2.html?display=fashion |
| 트렌드 | https://0ceanview9782-art.github.io/hankyung-venue-hub/index-2.html?display=trend |

## 2. 태블릿에서 (30초)

1. Chrome 주소창에 그 강의실 주소를 입력해 엽니다.
2. 오른쪽 위 **⋮** → **홈 화면에 추가** → 이름이 `글로벌 안내판` 처럼 맞는지 확인 → **추가**.

홈 화면에 생긴 아이콘을 누르면 주소창·탭 없이 전체화면으로 바로 열립니다.
(설치하지 않고 쓰는 경우에는 화면 오른쪽 아래 **⛶ 전체화면** 버튼을 한 번 누르면 됩니다.
전체화면이 되면 그 버튼은 저절로 사라져 안내판을 가리지 않습니다.)

## 3. 함께 해 두면 좋은 것

- **화면 꺼짐**: 태블릿 `설정 > 디스플레이 > 화면 자동 꺼짐`을 가장 길게(또는 `사용 안 함`)로.
  안내판 화면은 켜져 있는 동안 화면 꺼짐 방지(wake lock)를 자동으로 요청합니다.
- **가로 고정**: 설치된 안내판 앱은 가로 화면으로 열립니다.
- **이미 홈 화면에 있는데 또 추가하려 하면**: 그 태블릿은 이미 설치된 상태입니다.
- **새로 고침**: 안내판은 10초마다 스스로 최신 일정으로 바뀝니다. 따로 새로고침하지 않아도 됩니다.

## 참고 (관리자용)

- 앱 이름·시작 주소는 `manifest-{lobby|global|wisdom|fashion|trend}.json` 에서 정합니다.
- `index-2.html`은 `?display=` 값을 보고 그 강의실의 manifest를 자동으로 골라 끼웁니다.
- `sw.js`는 홈 화면 앱 설치 조건(서비스 워커)만 채우는 최소 파일이며, **아무것도 캐시하지 않습니다.**
