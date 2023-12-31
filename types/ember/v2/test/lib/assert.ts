/** Static assertion that `value` has type `T` */
// Disable tslint here b/c the generic is used to let us do a type coercion and
// validate that coercion works for the type value "passed into" the function.
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export declare function assertType<T>(value: T): void;
