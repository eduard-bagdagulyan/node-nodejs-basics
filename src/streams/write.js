import { createWriteStream } from 'fs';
import { resolve } from 'path';

const write = async () => {
    const filePath = resolve('files', 'fileToWrite.txt')
    const file = createWriteStream(filePath)
    process.stdin.resume()
    process.stdin.pipe(file)
};

await write();
