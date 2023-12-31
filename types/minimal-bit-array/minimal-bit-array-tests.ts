import * as BitArray from "minimal-bit-array";

// @ts-expect-error
new BitArray("abc");
const bitArray: BitArray = new BitArray(123);
bitArray.get(12); // $ExpectType boolean
bitArray.set(34, true); // $ExpectType boolean
bitArray.set(34, "someTruthyValue");
const json: BitArray.BitArrayJSON = bitArray.toJSON();
const bitArrayClone: BitArray = BitArray.fromJSON(json);
