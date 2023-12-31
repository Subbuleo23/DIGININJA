import { PageFlip } from "../PageFlip";
import { Render } from "../Render/Render";
import { PageCollection } from "./PageCollection";
/**
 * Сlass representing a collection of pages as HTML Element
 */
export class HTMLPageCollection extends PageCollection {
    private readonly element;
    private readonly pagesElement;
    constructor(app: PageFlip, render: Render, element: HTMLElement, items: NodeListOf<HTMLElement> | HTMLElement[]);
    load(): void;
}
