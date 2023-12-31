import pull = require("..");

/**
 * Create a stream that outputs 0 ... `max`. By default, `max` = `Infinity`.
 */
declare function count(max?: number): pull.Source<number>;
export = count;
