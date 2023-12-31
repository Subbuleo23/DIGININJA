import { EventEmitter } from "events";
import FilesystemBackend, { FSBackend } from "./cache-backend-fs";
import { QueueItem } from "./queue";

export default class Cache extends EventEmitter {
    datastore: FSBackend;
    constructor(cacheLoadParameter: string[], cacheBackend: () => void);

    setCacheData(queueObject: QueueItem, data: any, callback?: () => void): void;
    getCacheData(queueObject: QueueItem, callback?: (error?: Error, data?: any) => void): void;
    saveCache(): void;
}

export { Cache, FilesystemBackend };
