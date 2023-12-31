/**
 * Returns a debounced version of `fn` with optional calling context `ctx`.
 *
 * `fn` must be a function which returns a promise.
 *
 * If `debounced` is called and no other call is currently pending,
 * `fn` will be called and its promise returned.
 *
 * Otherwise - if another call is pending - the original promise will be returned.
 */
declare function debounce<A extends readonly any[], R extends PromiseLike<any>, T = undefined>(
    fn: (this: T, ...args: A) => R,
    ctx?: T,
): (...args: A) => R;

export = debounce;
