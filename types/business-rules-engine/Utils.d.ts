declare namespace Utils {
    class StringFce {
        static format(s: string, args: any): string;
    }
    class NumberFce {
        static GetNegDigits(value: string): number;
    }
}
declare module "node-utils" {
    export = Utils;
}
