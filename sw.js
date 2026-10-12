// Bei jeder neuen Version die Nummer erhöhen, damit Geräte die App neu laden.
const CACHE='gelenkwerk-v3';
const SHELL=['./','index.html','config.js','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{ const r=e.request, u=new URL(r.url);
  if(r.method!=='GET') return;
  const own=u.origin===location.origin, font=/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);
  if(!own&&!font) return;
  // Erst Netz (damit Updates ankommen), ohne Netz aus dem Cache
  e.respondWith((own?fetch(r.url,{cache:'no-cache'}):fetch(r)).then(res=>{ if(res.ok||res.type==='opaque'){ const cp=res.clone(); caches.open(CACHE).then(c=>c.put(r,cp)); } return res; }).catch(()=>caches.match(r).then(m=>m||caches.match('index.html')))); });
