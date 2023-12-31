import { Object } from "./object";
import { Reference } from "./reference";
import { Repository } from "./repository";

export namespace Revparse {
    const enum MODE {
        SINGLE = 1,
        RANGE = 2,
        MERGE_BASE = 4,
    }
}

export class Revparse {
    static ext(objectOut: Object, referenceOut: Reference, repo: Repository, spec: string): number;
    static single(repo: Repository, spec: string): Promise<Object>;
}
