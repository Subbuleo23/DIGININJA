import { ComponentType, HTMLProps } from "react";

import BaseControl from "../base-control";
import Dashicon from "../dashicon";

declare namespace RangeControl {
    interface Props
        extends Omit<HTMLProps<HTMLInputElement>, keyof BaseControl.ControlProps | "onChange">, BaseControl.ControlProps
    {
        /**
         * If this property is added, a `DashIcon` component will be rendered
         * after the slider with the `icon` equal to `afterIcon`.
         */
        afterIcon?: Dashicon.Icon | undefined;
        /**
         * If this property is `true`, a button to reset the the slider is
         * rendered.
         */
        allowReset?: boolean | undefined;
        /**
         * If this property is added, a `DashIcon` component will be rendered
         * before the slider with the `icon` equal to `beforeIcon`.
         */
        beforeIcon?: Dashicon.Icon | undefined;
        /**
         * If no `value` exists this prop contains the slider starting position.
         */
        initialPosition?: number | undefined;
        /**
         * The maximum value accepted. If higher values are inserted `onChange`
         * will not be called and the value gets reverted when blur event
         * fires.
         */
        max?: number | undefined;
        /**
         * The minimum value accepted. If smaller values are inserted
         * `onChange` will not be called and the value gets reverted when blur
         * event fires.
         */
        min?: number | undefined;
        /**
         * The current value of the range slider.
         */
        value: number;
        /**
         * A function that receives the new value. If `allowReset` is `true`,
         * when `onChange` is called without any parameter passed it should
         * reset the value.
         */
        onChange(value?: number): void;
    }
}
declare const RangeControl: ComponentType<RangeControl.Props>;

export default RangeControl;
