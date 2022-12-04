import { createReadStream } from 'fs';
import { join } from 'path';

const read = async () => {
    const filePath = join('files', 'fileToRead.txt')
    createReadStream(filePath).pipe(process.stdout)
};

await read();
