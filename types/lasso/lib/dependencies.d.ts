/// <reference types="node" />

import { EventEmitter } from "events";
import LassoContext from "./LassoContext";

export type Callback = (err: Error | null, result?: any) => any;

export interface Bundle {
    name: string;
    dependencies: Array<DependencyConfig | string>;
}

export interface DependencyConfig {
    type?: string | undefined;
    attributes?: {
        integrity: string;
        crossorigin: string;
    } | undefined;
    inline?: string | undefined;
    slot?: string | undefined;
    "css-slot"?: string | undefined;
    "js-slot"?: string | undefined;
    url?: string | undefined;
    path?: string | undefined;
    external?: boolean | undefined;
    "if-flag"?: string | undefined;
    "if-not-flag"?: string | undefined;
    if?: string | undefined;
    from?: string | undefined;
    to?: string | undefined;
    require?: string | undefined;
    "require-run"?: string | undefined;
    dependencies?: Array<DependencyConfig | string> | undefined;
}

export interface Dependency extends EventEmitter, DependencyConfig {
    _packageDependency?: boolean | undefined;
    contentType?: string | undefined;
    properties?: { [key: string]: string } | undefined;

    (dependencyConfig: DependencyConfig, dirname: string, filename?: string): Dependency;
    calculateKey(lassoContext: LassoContext, callback: Callback): any;
    doCalculateKey(lassoContext: LassoContext, callback: Callback): any;
    calculateKeyFromProps(): string;
    createPackageManifest(manifest?: any, dirname?: string, filename?: string): any;
    createReadStream(lassoContext: LassoContext): any;
    doGetLastModified(lassoContext: any, callback: Callback): any;
    getContentType(): any;
    getDefaultBundleName(pageBundleName?: string, lassoContext?: LassoContext): string;
    getDir(): string | null;
    getFileLastModified(path: string, callback: Callback): any;
    getJavaScriptSlot(): any;
    getKey(): any;
    getLastModified(lassoContext: LassoContext, callback: Callback): any;
    getPackageManifest(lassoContext: LassoContext, callback: Callback): any;
    getParentManifestDir(): string;
    getParentManifestPath(): string;
    getPropsKey(): any;
    getReadCacheKey(): any;
    getSlot(): any;
    getSourceFile(): any;
    getStyleSheetSlot(): any;
    hasContent(): boolean;
    hasModifiedFingerprint(): boolean;
    init(lassoContext: LassoContext, callback: Callback): any;
    doInit(lassoContext: LassoContext, callback: Callback): void;
    inspect(): any;
    isCompiled(): boolean;
    isExternalResource(): boolean;
    isInPlaceDeploymentAllowed(): boolean;
    isJavaScript(): boolean;
    isPackageDependency(): boolean;
    isPageBundleOnlyDependency(): boolean;
    isStyleSheet(): boolean;
    onAddToAsyncPageBundle(bundle: Bundle, lassoContext: LassoContext): void;
    onAddToPageBundle(bundle: Bundle, lassoContext: LassoContext): void;
    read(context: any, callback: Callback): any;
    resolvePath(path: string, from?: string): string;
    set(props: any): void;
    shouldCache(lassoContext: LassoContext): boolean;
}

export interface DependencyRegistry {
    registeredTypes: any;
    extensions: any;
    requireExtensions: any;
    requireExtensionNames: any;

    addNormalizer(normalizerFunc: any): any;
    createDependency(config: any, dirname: string, filename?: string): any;
    createRequireHandler(path: string, lassoContext: LassoContext, userOptions: any): any;
    createResourceTransformType(transformFunc: any): any;
    getRequireExtensionNames(): any;
    getRequireHandler(path: string, lassoContext: LassoContext): any;
    getType(type: string): any;
    normalizeDependencies(dependencies: any[], dirname: string, filename: string, callback: Callback): any;
    registerDefaults(): void;
    registerExtension(extension: string, type: string): void;
    registerJavaScriptType(type: string, mixins: any): void;
    registerPackageType(type: string, mixins: any): void;
    registerRequireExtension(ext: string, options: any): void;
    registerRequireType(type: string, options: any): void;
    registerStyleSheetType(type: string, mixins: any): void;
    registerType(type: string, mixins: any): void;
    typeForPath(path: string): string;
}

export function createRegistry(): DependencyRegistry;

export function isRegistry(o: any): boolean;

export function isDependency(d: any): boolean;
