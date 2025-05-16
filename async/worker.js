import { parentPort, workerData } from "worker_threads";

const n = workerData;

// Simulate heavy computation
for (let i = 0; i <= n; i++) {
  // Periodically send progress every 1% increment
  for (let j = 0; j < n; j++) {
    if (i % (n / 100) === 0) {
      parentPort.postMessage({ progress: (i / n) * 100 });
    }
  }
}

// Send done signal when finished
parentPort.postMessage({ done: true });
