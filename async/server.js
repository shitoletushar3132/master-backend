import http from "http";
import path from "path";
import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer((req, res) => {
  // Set headers to enable chunked response
  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Transfer-Encoding": "chunked",
  });

  // Send initial message
  res.write("Starting heavy computation...\n");

  const n = 10000;

  const worker = new Worker(path.join(__dirname, "worker.js"), {
    workerData: n,
  });

  let responseClosed = false;

  worker.on("message", (msg) => {
    if (msg.progress !== undefined) {
      // Send progress updates to client
      res.write(`Progress: ${msg.progress.toFixed(2)}%\n`);
    }

    if (msg.done) {
      if (!responseClosed) {
        res.end("Computation complete!\n");
        responseClosed = true;
      }
    }
  });

  worker.on("error", (err) => {
    console.error(err);
    if (!responseClosed) {
      res.writeHead(500);
      res.end("Server error\n");
      responseClosed = true;
    }
  });

  worker.on("exit", (code) => {
    if (code !== 0) {
      console.error(`Worker stopped with exit code ${code}`);
      if (!responseClosed) {
        res.end("Worker stopped unexpectedly\n");
        responseClosed = true;
      }
    }
  });

  // If client disconnects, terminate worker to save resources
  req.on("close", () => {
    if (!responseClosed) {
      worker.terminate();
      responseClosed = true;
    }
  });
});

server.listen(3000, () =>
  console.log("Server started on http://localhost:3000")
);
