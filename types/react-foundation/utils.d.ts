import * as PropTypes from "prop-types";
import {
    Breakpoints,
    ExtendedBreakpoints,
    FloatTypes,
    HorizontalAlignments,
    SpaceControls,
    VerticalAlignments,
} from "./enums";
export interface ClassNameProps {
    noDefaultClassName?: string | undefined;
    className?: string | undefined;
}
/**
 * Property types for general properties.
 */
export declare const GeneralPropTypes: {
    showFor: PropTypes.Requireable<any>;
    showOnlyFor: PropTypes.Requireable<any>;
    hideFor: PropTypes.Requireable<any>;
    hideOnlyFor: PropTypes.Requireable<any>;
    isHidden: PropTypes.Requireable<any>;
    isInvisible: PropTypes.Requireable<any>;
    showForLandscape: PropTypes.Requireable<any>;
    showForPortrait: PropTypes.Requireable<any>;
    showForSr: PropTypes.Requireable<any>;
    showOnFocus: PropTypes.Requireable<any>;
    isClearfix: PropTypes.Requireable<any>;
    float: PropTypes.Requireable<any>;
};
export interface GeneralPropTypes extends ClassNameProps {
    showFor?: Breakpoints | undefined;
    showOnlyFor?: Breakpoints | undefined;
    hideFor?: "medium" | "large" | undefined;
    hideOnlyFor?: Breakpoints | undefined;
    isHidden?: boolean | undefined;
    isInvisible?: boolean | undefined;
    showForLandscape?: boolean | undefined;
    showForPortrait?: boolean | undefined;
    showForSr?: boolean | undefined;
    showOnFocus?: boolean | undefined;
    isClearfix?: boolean | undefined;
    float?: FloatTypes | undefined;
}
/**
 * Creates class names from the given arguments.
 */
export declare function createClassName(...args: any[]): string;
/**
 * Parses the general class names from the given properties.
 */
export declare function generalClassNames(props: GeneralPropTypes): {
    "show-for-medium": boolean;
    "show-for-large": boolean;
    "show-for-small-only": boolean;
    "show-for-medium-only": boolean;
    "show-for-large-only": boolean;
    "hide-for-medium": boolean;
    "hide-for-large": boolean;
    "hide-for-small-only": boolean;
    "hide-for-medium-only": boolean;
    "hide-for-large-only": boolean;
    "hide": boolean | undefined;
    "invisible": boolean | undefined;
    "show-for-landscape": boolean | undefined;
    "show-for-portrait": boolean | undefined;
    "show-for-sr": boolean | undefined;
    "show-on-focus": boolean | undefined;
    "clearfix": boolean | undefined;
    "float-left": boolean;
    "float-center": boolean;
    "float-right": boolean;
};
/**
 * Returns the keys for the given object.
 * This method is used for getting the keys for prop types.
 */
export declare function objectKeys(object: object): string[];
/**
 * Returns the values for the given object.
 * This method is used for getting the values for enumerables.
 */
export declare function objectValues(object: object): any[];
/**
 * Removes properties from the given object.
 * This method is used for removing valid attributes from component props prior to rendering.
 */
export declare function removeProps(object: object, remove: string[]): object;
/**
 * Returns whether or not the given value is defined.
 */
export declare function isDefined(value: any): boolean;
/**
 * Adds a breakpoint to a class if breakpoint is specified.
 */
export declare function addBreakpoint(prop: string, size: string): string;
/**
 * Sets direction for grid and gutters (horizontal or vertical).
 */
export declare function setDirection(isVertical?: boolean, gutters?: string | null): string;
/**
 * Property types for flexbox utilities.
 */
export declare const FlexboxPropTypes: {
    alignX: PropTypes.Requireable<any>;
    alignY: PropTypes.Requireable<any>;
    selfAlignX: PropTypes.Requireable<any>;
    selfAlignY: PropTypes.Requireable<any>;
    centerAlign: PropTypes.Requireable<any>;
    flexContainer: PropTypes.Requireable<any>;
    flexDirRow: PropTypes.Requireable<any>;
    flexDirRowRev: PropTypes.Requireable<any>;
    flexDirCol: PropTypes.Requireable<any>;
    flexDirColRev: PropTypes.Requireable<any>;
    flexChild: PropTypes.Requireable<any>;
    flexOrder: PropTypes.Requireable<any>;
    flexOrderSmall: PropTypes.Requireable<any>;
    flexOrderMedium: PropTypes.Requireable<any>;
    flexOrderLarge: PropTypes.Requireable<any>;
};
export interface FlexboxPropTypes extends GeneralPropTypes {
    alignX?: HorizontalAlignments | undefined;
    alignY?: VerticalAlignments | undefined;
    selfAlignX?: HorizontalAlignments | undefined;
    selfAlignY?: VerticalAlignments | undefined;
    centerAlign?: boolean | undefined;
    flexContainer?: boolean | undefined;
    flexDirRow?: ExtendedBreakpoints | undefined;
    flexDirRowRev?: ExtendedBreakpoints | undefined;
    flexDirCol?: ExtendedBreakpoints | undefined;
    flexDirColRev?: ExtendedBreakpoints | undefined;
    flexChild?: SpaceControls | undefined;
    flexOrder?: number | undefined;
    flexOrderSmall?: number | undefined;
    flexOrderMedium?: number | undefined;
    flexOrderLarge?: number | undefined;
}
/**
 * Parses the flexbox class names from the given properties.
 */
export declare function flexboxClassNames(props: FlexboxPropTypes): {
    [name: string]: boolean | undefined;
};
