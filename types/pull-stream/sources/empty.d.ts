import pull = require("..");

/**
 * Create a stream with no contents (it just ends immediately).
 */
declare function empty(): pull.Source<never>;
export = empty;
