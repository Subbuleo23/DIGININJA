import { CheckoutOptions } from "./checkout-options";
import { Commit } from "./commit";
import { Index } from "./index";
import { MergeOptions } from "./merge-options";
import { Repository } from "./repository";

export interface RevertOptions {
    version?: number | undefined;
    mainline?: number | undefined;
    mergeOpts?: MergeOptions | undefined;
    checkoutOpts?: CheckoutOptions | undefined;
    [key: string]: any;
}

export class Revert {
    static revert(repo: Repository, commit: Commit, givenOpts?: RevertOptions): Promise<number>;
    /**
     * Reverts the given commit against the given "our" commit, producing an index that reflects the result of the revert.
     */
    static commit(
        repo: Repository,
        revertCommit: Commit,
        ourCommit: Commit,
        mainline: number,
        mergeOptions?: MergeOptions,
    ): Promise<Index>;
}
