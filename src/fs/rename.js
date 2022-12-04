import { join } from 'path'
import { existsSync, rename as renameFile } from 'fs';

const rename = async () => {
    const wrongFilePath = join('files', 'wrongFilename.txt')
    const properFilePath = join('files', 'properFilename.md')

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
