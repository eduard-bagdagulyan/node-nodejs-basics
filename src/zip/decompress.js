import { join } from 'path';
import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
    const archivePath = join('files', 'archive.txt.gz')
    const outputFilePath = join('files', 'fileToCompress.txt')

    const stream = createReadStream(archivePath)
    stream
        .pipe(createGunzip())
        .pipe(createWriteStream(outputFilePath))
        .on('finish', () => {
            console.log(`Decompressed Successfully!`)
        })
};

await decompress();
