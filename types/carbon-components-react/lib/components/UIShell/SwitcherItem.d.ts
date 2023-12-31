import { FCReturn, ForwardRefProps, ReactAnchorAttr, RequiresChildrenProps } from "../../../typings/shared";
import { LinkProps } from "./Link";

export interface SwitcherItemPropsBase extends RequiresChildrenProps {
    className?: string | undefined;
    isSelected?: boolean | undefined;
}

export type SwitcherItemProps<E extends object = ReactAnchorAttr> =
    & Omit<LinkProps<E>, "tabIndex">
    & SwitcherItemPropsBase;

declare function SwitcherItem<E extends object = ReactAnchorAttr, R = HTMLElement>(
    props: ForwardRefProps<R, SwitcherItemProps<E>>,
): FCReturn;

export default SwitcherItem;
