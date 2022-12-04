import { createReadStream } from 'fs';
import { resolve } from 'path';

const read = async () => {
    const filePath = resolve('files', 'fileToRead.txt')
    createReadStream(filePath).pipe(process.stdout)
};

await read();
