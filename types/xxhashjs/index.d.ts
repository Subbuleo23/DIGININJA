/// <reference types="node" />

export as namespace XXH;

// Ideally we would have a type definition for the "cuint" package.
// The following interface `UINT` is to resolve the bare minimum.
export interface UINT {
    toNumber(): number;
    toString(radix?: number): string;
}

export interface HashObject {
    init(seed: number): this;
    update(data: string | ArrayBuffer | Buffer): this;
    digest(): UINT;
}

export interface HashInterface {
    (seed?: number): HashObject;
    (data: string | ArrayBuffer | Buffer, seed: number): UINT;
}

export const h32: HashInterface;
export const h64: HashInterface;
