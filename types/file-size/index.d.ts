interface Options {
    fixed?: number | undefined;
    spacer?: string | undefined;
}

type Spec = "si" | "iec" | "jedec";

type Unit = "B" | "KB" | "MB" | "GB" | "TB" | "PB" | "EB" | "ZB" | "YB";

interface Bits {
    result: number;
    fixed: string;
}

interface Calculated {
    suffix: string;
    magnitude: number;
    result: number;
    fixed: string;
    bits: Bits;
}

interface Result {
    human(spec?: Spec): string;
    to(unit: Unit, spec?: Spec): string;
    calculate(spec?: Spec): Calculated;
}

declare function fileSize<T extends Options>(bytes: number, options?: T): Required<T> & Result;

export as namespace filesize;

export = fileSize;
