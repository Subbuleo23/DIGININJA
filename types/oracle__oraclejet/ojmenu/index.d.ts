import {
    baseComponent,
    baseComponentEventMap,
    baseComponentSettableProperties,
    JetElementCustomEvent,
    JetSetPropertyType,
} from "..";
export interface ojMenu extends baseComponent<ojMenuSettableProperties> {
    disabled: boolean;
    openOptions: ojMenu.OpenOptions;
    translations: {
        ariaFocusSkipLink?: string | undefined;
        labelCancel?: string | undefined;
    };
    onDisabledChanged: ((event: JetElementCustomEvent<ojMenu["disabled"]>) => any) | null;
    onOpenOptionsChanged: ((event: JetElementCustomEvent<ojMenu["openOptions"]>) => any) | null;
    onOjAction: ((event: ojMenu.ojAction) => any) | null;
    onOjAnimateEnd: ((event: ojMenu.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojMenu.ojAnimateStart) => any) | null;
    onOjBeforeOpen: ((event: ojMenu.ojBeforeOpen) => any) | null;
    onOjClose: ((event: ojMenu.ojClose) => any) | null;
    onOjOpen: ((event: ojMenu.ojOpen) => any) | null;
    addEventListener<T extends keyof ojMenuEventMap>(
        type: T,
        listener: (this: HTMLElement, ev: ojMenuEventMap[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojMenuSettableProperties>(property: T): ojMenu[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojMenuSettableProperties>(property: T, value: ojMenuSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojMenuSettableProperties>): void;
    setProperties(properties: ojMenuSettablePropertiesLenient): void;
    open(event?: object, openOptions?: ojMenu.OpenOptions): void;
    refresh(): void;
}
export namespace ojMenu {
    interface ojAction extends
        CustomEvent<{
            [propName: string]: any;
        }>
    {
    }
    interface ojAnimateEnd extends
        CustomEvent<{
            element: Element;
            action: "open" | "close";
            [propName: string]: any;
        }>
    {
    }
    interface ojAnimateStart extends
        CustomEvent<{
            action: "open" | "close";
            element: Element;
            endCallback: () => void;
            [propName: string]: any;
        }>
    {
    }
    interface ojBeforeOpen extends
        CustomEvent<{
            openOptions: OpenOptions;
            [propName: string]: any;
        }>
    {
    }
    interface ojClose extends
        CustomEvent<{
            event: Event;
            [propName: string]: any;
        }>
    {
    }
    interface ojOpen extends
        CustomEvent<{
            event: Event;
            [propName: string]: any;
        }>
    {
    }
    // tslint:disable-next-line interface-over-type-literal
    type OpenOptions = {
        display?: string | undefined;
        initialFocus?: string | undefined;
        launcher?: string | Element | undefined;
        position?: Position | undefined;
    };
    // tslint:disable-next-line interface-over-type-literal
    type Position = {
        my?: PositionAlign | undefined;
        at?: PositionAlign | undefined;
        offset?: PositionPoint | undefined;
        of?: string | PositionPoint | undefined;
        collision?: "flip" | "fit" | "flipfit" | "flipcenter" | "none" | undefined;
    };
    // tslint:disable-next-line interface-over-type-literal
    type PositionAlign = {
        vertical?: "top" | "bottom" | "center" | undefined;
        horizontal?: "start" | "end" | "left" | "center" | "bottom" | undefined;
    };
    // tslint:disable-next-line interface-over-type-literal
    type PositionPoint = {
        x?: number | undefined;
        y?: number | undefined;
    };
}
export interface ojMenuEventMap extends baseComponentEventMap<ojMenuSettableProperties> {
    "ojAction": ojMenu.ojAction;
    "ojAnimateEnd": ojMenu.ojAnimateEnd;
    "ojAnimateStart": ojMenu.ojAnimateStart;
    "ojBeforeOpen": ojMenu.ojBeforeOpen;
    "ojClose": ojMenu.ojClose;
    "ojOpen": ojMenu.ojOpen;
    "disabledChanged": JetElementCustomEvent<ojMenu["disabled"]>;
    "openOptionsChanged": JetElementCustomEvent<ojMenu["openOptions"]>;
}
export interface ojMenuSettableProperties extends baseComponentSettableProperties {
    disabled: boolean;
    openOptions: ojMenu.OpenOptions;
    translations: {
        ariaFocusSkipLink?: string | undefined;
        labelCancel?: string | undefined;
    };
}
export interface ojMenuSettablePropertiesLenient extends Partial<ojMenuSettableProperties> {
    [key: string]: any;
}
