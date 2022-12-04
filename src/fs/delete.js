import { unlink } from 'fs';
import { join } from 'path';

const remove = async () => {
    const fileToRemovePath = join('files', 'fileToRemove.txt')

    unlink(fileToRemovePath, (err) => {
        if (err) throw new Error('FS operation failed')
        console.log('Removed Successfully!')
    })
};

await remove();
