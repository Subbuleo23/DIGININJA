import {
    ContainsKeysResults,
    DataProvider,
    FetchByKeysParameters,
    FetchByKeysResults,
    FetchByOffsetParameters,
    FetchByOffsetResults,
    FetchListParameters,
    FetchListResult,
} from "../ojdataprovider";
import { Collection } from "../ojmodel";
declare class CollectionDataProvider<K, D> implements DataProvider<K, D> {
    constructor(collection: Collection);
    addEventListener(eventType: string, listener: EventListener): void;
    containsKeys(params: FetchByKeysParameters<K>): Promise<ContainsKeysResults<K>>;
    dispatchEvent(evt: Event): boolean;
    fetchByKeys(params: FetchByKeysParameters<K>): Promise<FetchByKeysResults<K, D>>;
    fetchByOffset(params: FetchByOffsetParameters<D>): Promise<FetchByOffsetResults<K, D>>;
    fetchFirst(params?: FetchListParameters<D>): AsyncIterable<FetchListResult<K, D>>;
    getCapability(capabilityName?: string): any;
    getTotalSize(): Promise<number>;
    isEmpty(): "yes" | "no" | "unknown";
    removeEventListener(eventType: string, listener: EventListener): void;
}
export = CollectionDataProvider;
