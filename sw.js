/* 한경아카데미 공간운영 허브 — 안내판 홈 화면 앱(전체화면 실행) 설치용 최소 서비스 워커.
   캐시하지 않습니다. 모든 요청은 항상 네트워크로 그대로 전달되므로
   허브를 고쳐 올리면 태블릿에서도 바로 새 화면이 보입니다. */
self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function () {
  /* no-op: 브라우저가 평소처럼 네트워크에서 받아오게 둡니다. */
});
