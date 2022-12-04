import { existsSync, cp } from 'fs';

const copy = async () => {
    const filesDirPath = 'files'
    const filesCopyDirPath = 'files_copy'

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
