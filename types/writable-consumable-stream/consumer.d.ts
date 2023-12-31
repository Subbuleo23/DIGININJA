import ConsumableStream = require("consumable-stream");

import WritableConsumableStream = require(".");

declare class Consumer<T> implements ConsumableStream.Consumer<T> {
    id: number;
    stream: WritableConsumableStream<T>;
    currentNode: Consumer.Node<T>;
    timeout: number;

    constructor(stream: WritableConsumableStream<T>, id: number, startNode: Consumer.Node<T>, timeout: number);

    getStats(): Consumer.ConsumerStats;

    releaseBackpressure(packet: any): void;
    getBackpressure(): number;

    write(packet: any): void;

    kill(value?: any): void;

    next(): Promise<IteratorResult<T>>;
    return(): {};

    [Symbol.asyncIterator](): AsyncIterator<T>;
}

export = Consumer;

declare namespace Consumer {
    interface ConsumerStats {
        id: number;
        backpressure: number;
        timeout?: number | undefined;
    }

    interface Node<T> {
        next: Node<T> | null;
        data: {
            value: T;
            done: boolean;
        };
    }
}
