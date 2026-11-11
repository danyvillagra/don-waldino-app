/* Don Waldino – Service Worker
   - La app (index.html) se busca SIEMPRE primero en internet: así cada cambio subido a GitHub se ve enseguida.
   - Si no hay señal, se abre la última versión guardada.
   - Las ventas NO pasan por acá: se guardan en el celular y las sube la sincronización con la planilla. */
const CACHE = "dw-app-v1";
const PRECACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];
const CDN_HOSTS = ["cdn.tailwindcss.com", "unpkg.com"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;                      // la sincronización (POST) va directo
  const url = new URL(req.url);

  // Programa e imágenes propias: primero internet, si falla la copia guardada
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || (req.mode === "navigate" ? caches.match("./index.html") : undefined)))
    );
    return;
  }

  // Librerías de diseño (Tailwind, íconos): copia guardada y se actualiza en segundo plano
  if (CDN_HOSTS.includes(url.hostname)) {
    e.respondWith(
      caches.match(req).then((cached) => {
        const net = fetch(req).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); return res; }).catch(() => cached);
        return cached || net;
      })
    );
  }
  // Todo lo demás (Google Apps Script, etc.) no se toca
});
