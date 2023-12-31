import { timeout, TimeoutError } from "promise-timeout";

function acceptError(e: Error) {}

acceptError(new TimeoutError());

// @ts-expect-error
timeout();
// @ts-expect-error
timeout(new Promise(() => {}));

const top = (<T>(x?: T): T => x!)();
type Top = typeof top;
declare function expectPromiseTop(x: Promise<Top>): void;

expectPromiseTop(timeout(new Promise(() => {}), 1000));
