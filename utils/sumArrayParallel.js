const { Worker } = require('worker_threads');

function sumArrayInParallel (numbers, batchSize) {
    return new Promise((resolve, reject) => {
        const numBatches = Math.ceil(numbers.length / batchSize);
        let completedBatches = 0;
        let totalSum = 0;

        for (let i = 0; i < numBatches; i++) {
            const start = i * batchSize;
            const end = start + batchSize;
            const batch = numbers.slice(start, end);

            const worker = new Worker('./worker.js', {
                workerData: { batch }
            });

            worker.on('message', (batchSum) => {
                console.log(`Summing up batch ${i + 1}...`);
                totalSum += batchSum;
                completedBatches++;
                if (completedBatches === numBatches) {
                    resolve(totalSum);
                }
            });

            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject(new Error(`Worker stopped with code ${code}`));
                }
            });
        }
    });
}

module.exports = {
    sumArrayInParallel
};