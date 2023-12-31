import { IncomingMessage, ServerResponse } from "http";
import { Callback } from "./common/callback";

declare function anyBody(req: IncomingMessage, cb: Callback<unknown>): void;
declare function anyBody(req: IncomingMessage, res: ServerResponse, cb: Callback<unknown>): void;
declare function anyBody(req: IncomingMessage, res: ServerResponse, opts: {
    limit?: number | undefined;
    encoding?: BufferEncoding | undefined;
    reviver?: ((...args: unknown[]) => unknown) | undefined;
    JSON?: {
        parse: (
            queryString: string,
            reviver: (...args: unknown[]) => unknown,
            cb: (err: Error, result: unknown) => void,
        ) => void;
    } | undefined;
    querystring: {
        parse: (queryString: string, cb: (err: Error, result: unknown) => void) => void;
    };
}, cb: Callback<unknown>): void;

export = anyBody;
