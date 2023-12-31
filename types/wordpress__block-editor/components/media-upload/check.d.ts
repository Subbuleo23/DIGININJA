import { ComponentType, ReactNode } from "react";

declare namespace MediaUploadCheck {
    interface Props {
        children: ReactNode;
        fallback?: ReactNode | undefined;
    }
}
declare const MediaUploadCheck: ComponentType<MediaUploadCheck.Props>;

export default MediaUploadCheck;
