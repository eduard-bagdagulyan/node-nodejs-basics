import { unlink } from 'fs';
import { resolve } from 'path';

const remove = async () => {
    const fileToRemovePath = resolve('files', 'fileToRemove.txt')

    unlink(fileToRemovePath, (err) => {
        if (err) throw new Error('FS operation failed')
        console.log('Removed Successfully!')
    })
};

await remove();
