declare namespace domurl {
    type QueryString<T> = T;
}

declare class Url<T> {
    constructor(url?: string);
    query: domurl.QueryString<T>;
    protocol: string;
    user: string;
    pass: string;
    host: string;
    port: string;
    path: string;
    hash: string;
    href: string;
    toString: () => string;
    encode: (s: string) => string;
    decode: (s: string) => string;
    isAbsolute: () => boolean;
    paths: (paths?: [string]) => [string];
    isEmptyQuery: () => boolean;
    queryLength: () => number;
    clearQuery: () => Url<{}>;
}

export = Url;
