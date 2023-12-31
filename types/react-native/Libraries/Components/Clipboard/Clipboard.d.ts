export interface ClipboardStatic {
    getString(): Promise<string>;
    setString(content: string): void;
}

/**
 * Clipboard has been extracted from react-native core and will be removed in a future release.
 * It can now be installed and imported from `@react-native-community/clipboard` instead of 'react-native'.
 * @see https://github.com/react-native-community/clipboard
 * @deprecated
 */
export const Clipboard: ClipboardStatic;
/**
 * Clipboard has been extracted from react-native core and will be removed in a future release.
 * It can now be installed and imported from `@react-native-community/clipboard` instead of 'react-native'.
 * @see https://github.com/react-native-community/clipboard
 * @deprecated
 */
export type Clipboard = ClipboardStatic;
