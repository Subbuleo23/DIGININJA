import * as React from "react";
import { RequiresChildrenProps, SideNavSizingProps } from "../../../typings/shared";

export interface SideNavItemProps extends RequiresChildrenProps, SideNavSizingProps {
    className?: string | undefined;
}

declare const SideNavItem: React.FC<SideNavItemProps>;

export default SideNavItem;
