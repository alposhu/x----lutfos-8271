/* Tiny zero-dependency static server for LOCAL testing only (npm run dev).
   It is not needed on Vercel/Netlify, which serve the files directly. */
const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".json": "application/json",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".gif": "image/gif",
  ".webp": "image/webp", ".svg": "image/svg+xml", ".ico": "image/x-icon",
  ".mp3": "audio/mpeg", ".wav": "audio/wav", ".ogg": "audio/ogg", ".m4a": "audio/mp4",
  ".ttf": "font/ttf", ".woff": "font/woff", ".woff2": "font/woff2",
};

http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath.endsWith("/")) urlPath += "index.html";
  const file = path.join(ROOT, path.normalize(urlPath));

  // Block path traversal and server internals
  if (!file.startsWith(ROOT) || /node_modules|server\.js$/.test(file)) {
    res.writeHead(403); return res.end("Forbidden");
  }

  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) { res.writeHead(404); return res.end("Not found"); }

    const type = TYPES[path.extname(file).toLowerCase()] || "application/octet-stream";
    const headers = { "Content-Type": type, "Cache-Control": "no-cache", "Accept-Ranges": "bytes" };

    // Range support (mobile browsers need it to play audio)
    const range = req.headers.range;
    if (range) {
      const [s, e] = range.replace(/bytes=/, "").split("-");
      const start = parseInt(s, 10) || 0;
      const end = e ? parseInt(e, 10) : stat.size - 1;
      res.writeHead(206, { ...headers, "Content-Range": `bytes ${start}-${end}/${stat.size}`, "Content-Length": end - start + 1 });
      return fs.createReadStream(file, { start, end }).pipe(res);
    }
    res.writeHead(200, { ...headers, "Content-Length": stat.size });
    fs.createReadStream(file).pipe(res);
  });
}).listen(PORT, "0.0.0.0", () => {
  console.log(`\n  Local:   http://localhost:${PORT}`);
  for (const list of Object.values(os.networkInterfaces()))
    for (const n of list) if (n.family === "IPv4" && !n.internal) console.log(`  Phone:   http://${n.address}:${PORT}   (same Wi-Fi)`);
  console.log("");
});
