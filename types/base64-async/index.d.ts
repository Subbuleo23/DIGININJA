/// <reference types="node" />

export = base64Async;

declare function base64Async(input: Buffer, options?: base64Async.Options): Promise<string>;
declare function base64Async(input: string, options?: base64Async.Options): Promise<Buffer>;

declare namespace base64Async {
    function encode(input: Buffer, options?: Options): Promise<string>;
    function decode(input: string, options?: Options): Promise<Buffer>;

    interface Options {
        chunkSize?: number | undefined;
    }
}
