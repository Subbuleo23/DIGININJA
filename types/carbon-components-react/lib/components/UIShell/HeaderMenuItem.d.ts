import { FCReturn, ForwardRefProps, ReactAnchorAttr, RequiresChildrenProps } from "../../../typings/shared";
import { LinkProps } from "./Link";

type ExcludedAttributes = "children" | "ref" | "tabIndex";

export interface HeaderMenuItemPropsBase extends RequiresChildrenProps {
    isCurrentPage?: boolean | undefined;
}

export type HeaderMenuItemProps<E extends object = ReactAnchorAttr> =
    & Omit<LinkProps<E>, ExcludedAttributes>
    & HeaderMenuItemPropsBase;

declare function HeaderMenuItem<E extends object = ReactAnchorAttr, R = HTMLElement>(
    props: ForwardRefProps<R, HeaderMenuItemProps<E>>,
): FCReturn;

export default HeaderMenuItem;
