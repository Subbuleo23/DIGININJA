// See docs https://codemirror.net/doc/manual.html#addon_match-highlighter

import "../../";

declare module "../../" {
    interface HighlightSelectionMatches {
        /**
         * Minimum amount of selected characters that triggers a highlight (default 2).
         */
        minChars?: number | undefined;

        /**
         * The style to be used to highlight the matches (default "matchhighlight", which will correspond to CSS class cm-matchhighlight).
         */
        style?: string | undefined;

        /**
         * Controls whether whitespace is trimmed from the selection.
         */
        trim?: boolean | undefined;

        /**
         * Can be set to true or to a regexp matching the characters that make up a word.
         */
        showToken?: boolean | RegExp | undefined;

        /**
         * Used to specify how much time to wait, in milliseconds, before highlighting the matches (default is 100).
         */
        delay?: number | undefined;

        /**
         * If wordsOnly is enabled, the matches will be highlighted only if the selected text is a word.
         */
        wordsOnly?: boolean | undefined;

        /**
         * If annotateScrollbar is enabled, the occurences will be highlighted on the scrollbar via the matchesonscrollbar addon.
         */
        annotateScrollbar?: boolean | undefined;
    }

    interface EditorConfiguration {
        /**
         * Adds a highlightSelectionMatches option that can be enabled to highlight all instances of a currently selected word.
         * When enabled, it causes the current word to be highlighted when nothing is selected (defaults to off).
         */
        highlightSelectionMatches?: HighlightSelectionMatches | boolean | undefined;
    }
}
