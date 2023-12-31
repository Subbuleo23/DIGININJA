import * as AWS from "aws-sdk2-types";
import * as fs from "fs";
import * as S3Stream from "s3-download-stream";

// Documentation for "params":
// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property
const config = {
    client: new AWS.S3({}),
    concurrency: 6,
    chunkSize: "512KB",
    params: {
        Key: "key-name",
        Bucket: "bucket-name",
    },
};

S3Stream(config).pipe(fs.createWriteStream("/path/to/a/file"));
