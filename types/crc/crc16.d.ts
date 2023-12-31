import type { CRCBufferSource } from ".";
export type { CRCBufferSource };

export const model: "crc-16";
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crc16(buf: CRCBufferSource, previous?: number): number;
declare namespace crc16 {
    export { crc16 as unsigned, model, signed };
    export type { CRCBufferSource };
}

export default crc16;
