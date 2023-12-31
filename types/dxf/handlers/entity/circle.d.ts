import { Point3D } from "../../Common";
import { Property } from "../../Information";
import { CommonEntityData } from "./common";

export const TYPE: string;

export type CircleEntityData =
    & {
        r?: number;
    }
    & Partial<Point3D>
    & Partial<CommonEntityData>;

export function process(value: Property): CircleEntityData;

export default CircleEntityData;
