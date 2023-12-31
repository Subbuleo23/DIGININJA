import type { CRCBufferSource } from ".";
export type { CRCBufferSource };

export const model: "ccitt";
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crc17ccitt(buf: CRCBufferSource, previous?: number): number;
declare namespace crc17ccitt {
    export { crc17ccitt as unsigned, model, signed };
    export type { CRCBufferSource };
}

export default crc17ccitt;
