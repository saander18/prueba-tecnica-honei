const { parentPort, workerData } = require('worker_threads');
const { sumArray } = require('./utils/sumarray');

const batchSum = sumArray(workerData.batch);
console.log(`Batch sum: ${batchSum}`);
parentPort.postMessage(batchSum);
