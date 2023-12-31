/// <reference types="jquery" />

interface JQueryStatic {
    /**
     * Parse the current page URL
     */
    url(): purl.Url;

    /**
     * Pass in a URI as a string and parse that
     *
     * @param someUrl the url to be parsed
     */
    url(someUrl: string): purl.Url;
}

interface JQuery {
    /**
     * extract the URL from the selected element and parse that - will work on any element with a `src`, `href` or `action` attribute.
     */
    url(): purl.Url;
}
