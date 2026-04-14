#!/usr/bin/env node

/**
 * Mason Preview Server
 * Lightweight static file server for previewing Mason-generated pages.
 * Serves files from the _preview/ directory on an available port.
 *
 * Usage: node scripts/preview-server.js
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PREVIEW_DIR = path.join(process.cwd(), '_preview');
const PREFERRED_PORT = 4242;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.pdf': 'application/pdf',
};

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
}

function serveFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 — File not found</h1><p>Mason preview server is running, but this file was not found.</p>');
      return;
    }
    res.writeHead(200, { 'Content-Type': getMimeType(filePath) });
    res.end(data);
  });
}

function handleRequest(req, res) {
  let urlPath = req.url.split('?')[0]; // strip query strings

  // Default to index.html
  if (urlPath === '/') {
    urlPath = '/index.html';
  }

  const filePath = path.join(PREVIEW_DIR, urlPath);

  // Security: prevent path traversal outside _preview/
  const resolvedPath = path.resolve(filePath);
  const resolvedBase = path.resolve(PREVIEW_DIR);
  if (!resolvedPath.startsWith(resolvedBase)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  // If path is a directory, try index.html inside it
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    serveFile(res, path.join(filePath, 'index.html'));
    return;
  }

  serveFile(res, filePath);
}

function findAvailablePort(startPort, callback) {
  const server = http.createServer();
  server.listen(startPort, '127.0.0.1', () => {
    const port = server.address().port;
    server.close(() => callback(port));
  });
  server.on('error', () => {
    findAvailablePort(startPort + 1, callback);
  });
}

// Ensure _preview/ exists
if (!fs.existsSync(PREVIEW_DIR)) {
  fs.mkdirSync(PREVIEW_DIR, { recursive: true });
  // Create a placeholder index.html so the server has something to show
  fs.writeFileSync(
    path.join(PREVIEW_DIR, 'index.html'),
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mason Preview</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 600px; margin: 4rem auto; padding: 0 1rem; color: #333; }
    h1 { font-size: 1.5rem; }
    p { color: #666; }
    code { background: #f0f0f0; padding: 0.2em 0.4em; border-radius: 3px; font-size: 0.9em; }
  </style>
</head>
<body>
  <h1>Mason Preview Server</h1>
  <p>The preview server is running. Run <code>/mason:build</code> to generate pages — they'll appear here automatically.</p>
</body>
</html>`
  );
}

findAvailablePort(PREFERRED_PORT, (port) => {
  const server = http.createServer(handleRequest);
  server.listen(port, '127.0.0.1', () => {
    console.log(`\nMason preview server running at http://localhost:${port}`);
    console.log(`Serving files from: ${PREVIEW_DIR}`);
    console.log('\nPress Ctrl+C to stop.\n');
  });
});
