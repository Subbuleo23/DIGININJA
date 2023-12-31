import Element, { Node } from "./Element";

export default function createElement(
    name: string,
    attrs?: string | { [attrName: string]: any },
    ...children: Node[]
): Element;
