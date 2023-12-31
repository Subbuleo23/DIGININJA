import { Linter } from "eslint";
import { Node } from "unist";

export interface RangeMap {
    js: number;
    md: number;
}

export interface Block extends Node {
    baseIndentText: string;
    comments: string[];
    rangeMap: RangeMap[];
}

export const configs: {
    recommended: Linter.Config;
};

export const processors: {
    markdown: Linter.Processor<Linter.ProcessorFile>;
};
