import * as React from "react";
import { ReactAnchorAttr, ReactAttr } from "../../../typings/shared";

export interface ButtonSkeletonProps extends ReactAttr {
    href?: ReactAnchorAttr["href"] | undefined;
    size?: "default" | "field" | "lg" | "md" | "sm" | "small" | "xl" | "2xl" | undefined;
    small?: boolean | undefined;
}

declare const ButtonSkeleton: React.FC<ButtonSkeletonProps>;

export default ButtonSkeleton;
