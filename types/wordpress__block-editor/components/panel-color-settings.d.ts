import { ColorPalette, PanelBody } from "@wordpress/components";
import { ComponentType } from "react";

declare namespace PanelColorSettings {
    type ColorSetting =
        & Partial<ColorPalette.Props>
        & Pick<ColorPalette.Props, "onChange" | "value">
        & { label: string };
    interface Props extends Omit<PanelBody.Props, "children"> {
        colorSettings: ColorSetting[];
        disableCustomColors?: boolean | undefined;
    }
}
declare const PanelColorSettings: ComponentType<PanelColorSettings.Props>;

export default PanelColorSettings;
