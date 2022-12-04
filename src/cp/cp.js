import { fork } from 'child_process'
import { resolve } from 'path'

const spawnChildProcess = async (args) => {
    const filePath = resolve('files', 'script.js')
    fork(filePath, args)
};

spawnChildProcess();
