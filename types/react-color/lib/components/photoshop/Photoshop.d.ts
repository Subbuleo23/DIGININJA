import { Component, CSSProperties } from "react";
import { Classes } from "reactcss";
import { ColorChangeHandler, ColorPickerProps } from "../../..";

export interface PhotoshopPickerStylesProps {
    picker: CSSProperties;
    head: CSSProperties;
    body: CSSProperties;
    saturation: CSSProperties;
    hue: CSSProperties;
    controls: CSSProperties;
    top: CSSProperties;
    previews: CSSProperties;
    actions: CSSProperties;
}

export interface PhotoshopPickerProps extends ColorPickerProps<PhotoshopPicker> {
    header?: string | undefined;
    styles?: Partial<Classes<PhotoshopPickerStylesProps>> | undefined;
    onAccept?: ColorChangeHandler | undefined;
    onCancel?: ColorChangeHandler | undefined;
}

export default class PhotoshopPicker extends Component<PhotoshopPickerProps> {}
