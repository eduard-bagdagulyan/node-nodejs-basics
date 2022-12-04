import { join } from 'path';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
    const initialFilePath = join('files', 'fileToCompress.txt')
    const compressedFilePath = join('files', 'archive.txt.gz')

    const stream = createReadStream(initialFilePath)
    stream
        .pipe(createGzip())
        .pipe(createWriteStream(compressedFilePath))
        .on('finish', () => {
            console.log(`Compressed Successfully!`)
        })
};

await compress();
