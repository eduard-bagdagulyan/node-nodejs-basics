import { fork } from 'child_process'
import { join, resolve } from 'path'

const spawnChildProcess = async (args) => {
    const filePath = resolve(join('files', 'script.js'))
    fork(filePath, args)
};

spawnChildProcess();
