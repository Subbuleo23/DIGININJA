import { ComponentType } from "react";

// prettier-ignore
export default function navigateRegions<T extends ComponentType<any>>(
    wrapped: T,
): T extends ComponentType<infer U> ? ComponentType<U>
    : never;
