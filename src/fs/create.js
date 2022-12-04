import { writeFile } from 'fs'
import { join } from 'path'

const create = async () => {
    const filePath = join('files', 'fresh.txt')
    const data = 'I am fresh and young'

    writeFile(filePath, data, {flag: 'wx'}, (err) => {
        if (err && err.code === 'EEXIST') throw new Error('FS operation failed');
        console.log('Created Successfully!');
    });
};

await create();
