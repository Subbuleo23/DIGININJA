declare namespace solve {
    class Puzzle {
        columnHints: number[][];
        height: number;
        rowHints: number[][];
        snapshot: number[];
        width: number;
        readonly isFinished: boolean;
        readonly isSolved: boolean;
        readonly svg: string;

        constructor(data: string | Input);

        import(puzzle: Puzzle): void;
        toJSON(): Required<Input>;
    }

    interface Result {
        puzzle: Puzzle;
        status: State;
    }

    interface Input {
        columns: number[][];
        content?: State[] | undefined;
        rows: number[][];
    }

    type State = 0 | 1 | -1;
}

declare function solve(filename: string): solve.Result;

export = solve;
