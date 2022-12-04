import { createWriteStream } from "fs";
import { join } from "path";

const write = async () => {
    const filePath = join('files', 'fileToWrite.txt')
    const file = createWriteStream(filePath)
    process.stdin.resume()
    process.stdin.pipe(file)
};

await write();
