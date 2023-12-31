import * as React from "react";
import {
    Image,
    ImageBackground,
    ImageErrorEventData,
    ImageLoadEventData,
    ImageProgressEventDataIOS,
    ImageResizeMode,
    ImageSourcePropType,
    ImageStyle,
    ImageURISource,
    NativeSyntheticEvent,
    StyleProp,
} from "react-native";

export interface ResponsiveImageProps {
    /**
     * Image initial width
     */
    initWidth?: number | undefined;

    /**
     * Image initial height
     */
    initHeight?: number | undefined;

    /**
     * Style
     */
    style?: StyleProp<ImageStyle> | undefined;

    /**
     * Invoked on load error with {nativeEvent: {error}}
     */
    onError?: ((error: NativeSyntheticEvent<ImageErrorEventData>) => void) | undefined;

    /**
     * Invoked when load completes successfully
     * { source: { url, height, width } }.
     */
    onLoad?: ((event: NativeSyntheticEvent<ImageLoadEventData>) => void) | undefined;

    /**
     * Invoked when load either succeeds or fails
     */
    onLoadEnd?: (() => void) | undefined;

    /**
     * Invoked on load start
     */
    onLoadStart?: (() => void) | undefined;

    borderRadius?: number | undefined;

    /**
     * Invoked on download progress with {nativeEvent: {loaded, total}}
     */
    onProgress?: ((event: NativeSyntheticEvent<ImageProgressEventDataIOS>) => void) | undefined;

    /**
     * The image source (either a remote URL or a local file resource).
     *
     * This prop can also contain several remote URLs, specified together with their width and height and potentially with scale/other URI arguments.
     * The native side will then choose the best uri to display based on the measured size of the image container.
     * A cache property can be added to control how networked request interacts with the local cache.
     *
     * The currently supported formats are png, jpg, jpeg, bmp, gif, webp (Android only), psd (iOS only).
     */
    source: ImageSourcePropType;

    /**
     * Determines how to resize the image when the frame doesn't match the raw
     * image dimensions.
     *
     * 'cover': Scale the image uniformly (maintain the image's aspect ratio)
     * so that both dimensions (width and height) of the image will be equal
     * to or larger than the corresponding dimension of the view (minus padding).
     *
     * 'contain': Scale the image uniformly (maintain the image's aspect ratio)
     * so that both dimensions (width and height) of the image will be equal to
     * or less than the corresponding dimension of the view (minus padding).
     *
     * 'stretch': Scale width and height independently, This may change the
     * aspect ratio of the src.
     *
     * 'repeat': Repeat the image to cover the frame of the view.
     * The image will keep it's size and aspect ratio. (iOS only)
     *
     * 'center': Scale the image down so that it is completely visible,
     * if bigger than the area of the view.
     * The image will not be scaled up.
     */
    resizeMode?: ImageResizeMode | undefined;

    /**
     * A static image to display while downloading the final image off the network.
     */
    defaultSource?: ImageURISource | number | undefined;

    component?: Image | ImageBackground | undefined;
}

export default class ResponsiveImage extends React.Component<ResponsiveImageProps> {}
