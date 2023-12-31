import { Component } from "@wordpress/element";
import { ComponentClass, ComponentType } from "react";

export interface HFOComponent<P = {}, S = any> extends ComponentClass<P, S> {
    new(props: P, context?: any): Component<P, S> & {
        handleFocusOutside(): void;
    };
}

// prettier-ignore
export default function withFocusOutside<T extends HFOComponent<any>>(
    wrapped: T,
): T extends HFOComponent<infer U> ? ComponentType<U>
    : never;
