// 최소 서비스 워커 스크립트 (PWA 앱 설치 조건 충족용)
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // 기본 네트워크 요청 처리
});
