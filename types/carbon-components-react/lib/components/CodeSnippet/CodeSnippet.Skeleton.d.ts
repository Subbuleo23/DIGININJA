import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface CodeSnippetSkeletonProps extends Omit<ReactDivAttr, "children"> {
    type?: "multi" | "single" | undefined;
}

declare const CodeSnippetSkeleton: React.FC<CodeSnippetSkeletonProps>;

export default CodeSnippetSkeleton;
