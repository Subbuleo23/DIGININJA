import * as R from "ramda";

(() => {
    const xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
    R.find(R.propEq(2, "a"))(xs); // => {a: 2}
    R.find(R.propEq(4, "a"))(xs); // => undefined
});

(() => {
    const findNumber = R.find(R.is(Number));

    const unknownArray: unknown[] = [];
    let number: number | undefined;
    let string: string | undefined;

    number = R.find(R.is(Number), unknownArray);
    number = findNumber(unknownArray);
    // @ts-expect-error
    string = R.find(R.is(Number), unknownArray);
    // @ts-expect-error
    string = findNumber(unknownArray);
});
