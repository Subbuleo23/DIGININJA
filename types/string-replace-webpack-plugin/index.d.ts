import { Plugin, RuleSetUse } from "webpack";

export = StringReplacePlugin;

declare class StringReplacePlugin extends Plugin {
    static replace(
        options: StringReplacePlugin.Options,
        /**
         * loaders to follow the replacement
         */
        nextLoaders?: string,
    ): RuleSetUse;
    static replace(
        /**
         * loaders to apply prior to the replacement
         */
        prevLoaders: string,
        options: StringReplacePlugin.Options,
        /**
         * loaders to follow the replacement
         */
        nextLoaders?: string,
    ): RuleSetUse;
}

declare namespace StringReplacePlugin {
    interface Options {
        replacements: ReplacementItem[];
    }

    interface ReplacementItem {
        /**
         * a regex to match against the file contents
         */
        pattern: RegExp;
        /**
         * an ECMAScript string replacement function
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter
         */
        replacement: (substring: string, ...args: any[]) => string;
    }
}
