import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { join } from 'path';

const calculateHash = async () => {
    const filePath = join('files', 'fileToCalculateHashFor.txt')
    const fd = createReadStream(filePath)
    const hash = createHash('sha256')
    hash.setEncoding('hex')

    fd.on('end', function() {
        hash.end();
        console.log(hash.read());
    });

    fd.pipe(hash);
};

await calculateHash();
