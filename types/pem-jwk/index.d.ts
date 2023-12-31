export interface RSA_JWK {
    kty: string;
    n: string;
    e: string;
    d?: string | undefined;
    p?: string | undefined;
    q?: string | undefined;
    dp?: string | undefined;
    dq?: string | undefined;
    qi?: string | undefined;
}

export interface Extras {
    [key: string]: Extras | string | boolean | number;
}

export type JWK<T extends Extras> = RSA_JWK & T;

export function pem2jwk<T extends Extras>(rsa_pem: string, extras?: T): JWK<T>;
export function jwk2pem(rsa_jwk: RSA_JWK): string;
