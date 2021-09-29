const express = require("express");
const { join } = require("path");
const { createReadStream } = require("fs");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/service-worker.js", (req, res) => {
    res.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    res.set("Content-Type", "application/javascript");

    let filePath = join(__dirname, ".next", "static", "service-worker.js");

    if (dev) {
      filePath = join(__dirname, ".next", "service-worker.js");
    }
    createReadStream(filePath).pipe(res);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.info(`> Ready on http://localhost:${port}`);
  });
});
