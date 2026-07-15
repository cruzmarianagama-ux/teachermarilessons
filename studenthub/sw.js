// Service worker mínimo — necessário para o navegador considerar o site "instalável".
// Não faz cache agressivo por enquanto: sempre busca a versão mais recente da rede.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
