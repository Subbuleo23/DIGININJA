export type Listener = (...args: any[]) => void;

export class Timeout {
    after: number;
    close: () => void;
    listener: Listener;
    ref: () => void;
    start: () => void;
    unref: () => void;
    unreffed: boolean;

    constructor(listener: Listener, ms: number);
}

export type Interval = Timeout;

export function clearInterval(timer: Interval): void;

export function clearTimeout(timer: Timeout): void;

export function setInterval(listener: Listener, ms: number): Interval;

export function setTimeout(listener: Listener, ms: number): Timeout;
