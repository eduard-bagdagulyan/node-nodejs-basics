import { resolve } from 'path'
import { existsSync, rename as renameFile } from 'fs';

const rename = async () => {
    const wrongFilePath = resolve('files', 'wrongFilename.txt')
    const properFilePath = resolve('files', 'properFilename.md')

    if (existsSync(wrongFilePath) && !existsSync(properFilePath)) {
        renameFile(wrongFilePath, properFilePath, (err) => {
            if (err) throw new Error('Fs operation failed')
            console.log('Renamed Successfully')
        })
    } else {
        throw new Error('Fs operation failed')
    }
};

await rename();
