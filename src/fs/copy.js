import { existsSync, cp } from 'fs';
import { resolve } from 'path';

const copy = async () => {
    const filesDirPath = resolve('files')
    const filesCopyDirPath = resolve('files_copy')

    if (existsSync(filesDirPath) && !existsSync(filesCopyDirPath)) {
        cp(filesDirPath, filesCopyDirPath, {recursive: true}, (err) => {
            if (err) throw new Error('FS operation failed')
            console.log('Copied Successfully!')
        })
    } else {
        throw new Error('FS operation failed')
    }
};

copy();
