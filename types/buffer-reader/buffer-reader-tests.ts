import BufferReader from "buffer-reader";

const buffer = new Buffer(1000);
const reader = new BufferReader(buffer);
reader.append(new Buffer(1));
reader.tell();
reader.seek(1);
reader.move(2);
reader.restAll();
reader.nextBuffer(2);
reader.nextString(5);
reader.nextString(5, "utf8");
reader.nextStringZero();
reader.nextStringZero("utf8");
reader.nextInt8();
reader.nextUInt8();
reader.nextInt16LE();
reader.nextUInt16LE();
reader.nextInt16BE();
reader.nextUInt16BE();
reader.nextInt32LE();
reader.nextUInt32LE();
reader.nextInt32BE();
reader.nextUInt32BE();
reader.nextFloatLE();
reader.nextFloatBE();
reader.nextDouble32LE();
reader.nextDouble32BE();
