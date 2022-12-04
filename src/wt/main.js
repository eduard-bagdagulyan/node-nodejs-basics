import { Worker } from 'worker_threads'
import path from 'path';
import os from 'os'

const performCalculations = async () => {
    const workerFilePath = path.resolve('worker.js')
    const availableCores = os.cpus()
    const result = []

    availableCores.forEach((value, index) => {
        result.push(new Promise((resolve, reject) => {
            const worker = new Worker(workerFilePath, {workerData: 10 + index})
            worker.on('message', data => resolve({data, status: 'resolved'}))
            worker.on('error', () => reject({data: null, status: 'error'}))
        }))
    })

    console.log(await Promise.all(result));
};

await performCalculations();
