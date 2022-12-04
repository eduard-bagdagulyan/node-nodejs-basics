import { readFile } from 'fs'
import { join } from 'path'

const read = async () => {
    const fileToReadPath = join('files', 'fileToRead.txt')

    readFile(fileToReadPath, {encoding: 'utf-8'}, (err, data) => {
        if (err) throw new Error('FS operation failed')
        console.log(data)
    })
};

await read();
