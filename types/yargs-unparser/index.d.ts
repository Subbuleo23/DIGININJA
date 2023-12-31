declare namespace yargsUnparser {
    type Argv = string[];
    interface Arguments {
        _: string[];
        [argName: string]: any;
    }

    interface UnparserOptions {
        alias?: Record<string, string[]> | undefined;
        default?: Record<string, string> | undefined;
        command?: string | undefined;
    }

    interface Unparser {
        (args: Arguments, opts?: UnparserOptions): Argv;
    }
}

declare var yargsUnparser: yargsUnparser.Unparser;
export = yargsUnparser;
