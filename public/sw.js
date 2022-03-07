self.addEventListener("install", (event) => {
  console.log("Service Worker Installed", event);
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated", event);
  return self.clients.claim();
});
