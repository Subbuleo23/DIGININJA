import { Action, applyMiddleware, createStore } from "redux";
import { createLoader, createMiddleware, reducer } from "redux-storage";
import filter from "redux-storage-decorator-filter";
import createEngine from "redux-storage-engine-localstorage";
import createReactNativeAsyncStorageEngine from "redux-storage-engine-reactnativeasyncstorage";
import reduxStorageImmutableMerger from "redux-storage-merger-immutablejs";

interface TestState {
    a: number;
    b: string;
    c: string;
}

function rootReducer(state: TestState, action: Action): TestState {
    return state;
}

const enhancedReducer = reducer(rootReducer, reduxStorageImmutableMerger);

const storageEngine = filter(createEngine("test"), ["a", "b"], ["c"]);

const initialStateLoader = createLoader(storageEngine);

const storageMiddleware = createMiddleware(storageEngine, [], []);

const store = applyMiddleware(storageMiddleware)(createStore)(enhancedReducer);

initialStateLoader(store).then(() => {
    // render app
});

// Test for React Native Async Storage engine
const storageEngineReactNative = createReactNativeAsyncStorageEngine("test");
const storageMiddlewareReactNative = createMiddleware(storageEngine);
const storeReactNative = applyMiddleware(storageMiddlewareReactNative)(createStore)(enhancedReducer);
initialStateLoader(storeReactNative).then(() => {
    // render app
});
