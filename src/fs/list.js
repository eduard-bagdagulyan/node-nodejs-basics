import { readdir } from 'fs'
import { resolve } from 'path';

const list = async () => {
    const folderPath = resolve('files')

    readdir(folderPath, (err, files) => {
        if (err) throw new Error('FS operation failed')
        console.log(files)
    })
};

await list();
