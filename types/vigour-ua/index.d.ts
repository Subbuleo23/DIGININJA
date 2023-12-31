declare namespace ua {
    interface UserAgent {
        [value: string]: string | number;
        browser: string;
        prefix: string;
        version: number;
    }
}

/**
 * Returns an object representing the user agent including data such as browser, device and platform
 * @param _ua the raw user agent string to be converted
 * @param obj object to be merged to the output result
 * @returns object representing your user agent
 */
declare function ua(_ua: string): ua.UserAgent;
/**
 * Returns an object representing the user agent including data such as browser, device and platform
 * @param _ua the raw user agent string to be converted
 * @returns object representing your user agent
 */
declare function ua<T extends object>(_ua: string, obj: T): ua.UserAgent & T;

export = ua;
