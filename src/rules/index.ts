import path from "path";
import fs, {promises as fsPromise} from "fs";
import { WriteMergeFile } from './interface/writeMergeFile.interface'


export async function WriteMergeFile({ pathDirectory, nameFileFinal }: WriteMergeFile): Promise<string> {

    return new Promise(async(resolve, reject) => {

        const files = await fsPromise.readdir(pathDirectory)
        const pathFinal = path.join(__dirname, '../../', nameFileFinal)

        await fsPromise.writeFile(pathFinal, '')

        const createStreamFile = fs.createWriteStream(pathFinal)

        createStreamFile.on('close', () => resolve(pathFinal))
        createStreamFile.on('error', (err: Error) => reject(err))


        for (const file of files) {
            const dirPath = path.join(__dirname, '../../', 'files/', file)
            const data = fs.readFileSync(dirPath, 'utf-8');
            createStreamFile.write(data);
        }

        createStreamFile.end();
    })
}
