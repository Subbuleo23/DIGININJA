export type ImageResizeMode =
    | "cover"
    | "contain"
    | "stretch"
    | "repeat"
    | "center";

/**
 * @see ImageResizeMode.js
 */
export interface ImageResizeModeStatic {
    /**
     * contain - The image will be resized such that it will be completely
     * visible, contained within the frame of the View.
     */
    contain: ImageResizeMode;
    /**
     * cover - The image will be resized such that the entire area of the view
     * is covered by the image, potentially clipping parts of the image.
     */
    cover: ImageResizeMode;
    /**
     * stretch - The image will be stretched to fill the entire frame of the
     * view without clipping.  This may change the aspect ratio of the image,
     * distoring it.  Only supported on iOS.
     */
    stretch: ImageResizeMode;
    /**
     * center - The image will be scaled down such that it is completely visible,
     * if bigger than the area of the view.
     * The image will not be scaled up.
     */
    center: ImageResizeMode;

    /**
     * repeat - The image will be repeated to cover the frame of the View. The
     * image will keep it's size and aspect ratio.
     */
    repeat: ImageResizeMode;
}
