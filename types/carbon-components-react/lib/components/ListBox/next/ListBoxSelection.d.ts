import * as React from "react";
import { ReactButtonAttr } from "../../../../typings/shared";
import { ListBoxSelectionProps } from "../ListBoxSelection";

type ExcludedButtonPropKeys = "aria-label" | "className" | "onClick" | "onKeyDown" | "tabIndex" | "title" | "type";
export interface ListBoxSelectionNextProps
    extends ListBoxSelectionProps, Omit<ReactButtonAttr, ExcludedButtonPropKeys>
{}

declare const ListBoxSelection: React.FC<ListBoxSelectionNextProps>;

export default ListBoxSelection;
