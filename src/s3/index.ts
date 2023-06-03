import { AwsBucket } from "./interface/s3.interface";
import { S3Client } from '@aws-sdk/client-s3'
import { Upload } from "@aws-sdk/lib-storage";

const s3Client = new S3Client({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    },
    region: process.env.AWS_REGION || ''
});


export function UploadStream ({ Bucket, Key, size = 100 }: AwsBucket, body: Buffer) {
    const target = { Bucket, Key,  Body: body }
    const uploadS3 = new Upload({
        client: s3Client,
        queueSize: size,
        params: target
    }).on("httpUploadProgress", (progress) => {
        console.log('progress: upload file ', progress)
    })
    return uploadS3.done()
}

