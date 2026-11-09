// Service worker mínimo: exigido pelo Chrome para instalar o app.
// Não guarda cópia em cache: sempre busca a versão atual na internet.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
