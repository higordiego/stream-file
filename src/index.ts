import 'dotenv/config'
import fs from "fs";
import * as path from 'path';
import { UploadStream } from "./s3";
import { WriteMergeFile } from "./rules";

(async() => {
        const bucket = process.env.AWS_BUCKET_S3 || ''
        const nameFileFinal ="file_final.txt"
        const pathDirectory = path.join(__dirname, '../', 'files');

        const fileContent = await WriteMergeFile({ pathDirectory, nameFileFinal })

        const bufferFile = fs.readFileSync(fileContent)
        const result = await UploadStream({ Bucket: bucket,  Key: nameFileFinal }, bufferFile);
        console.log('result', { result })
})()


