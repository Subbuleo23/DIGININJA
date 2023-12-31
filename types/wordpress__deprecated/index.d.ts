export interface DeprecatedOptions {
    /**
     * Feature to use instead.
     */
    alternative?: string | undefined;
    /**
     * Additional message to help transition away from the deprecated feature.
     */
    hint?: string | undefined;
    /**
     * Link to documentation.
     */
    link?: string | undefined;
    /**
     * Plugin name if it's a plugin feature.
     */
    plugin?: string | undefined;
    /**
     * Version in which the feature will be removed.
     */
    version?: string | undefined;
}

/**
 * Object map tracking messages which have been logged, for use in ensuring a message is only logged once.
 */
export const logged: Record<string, boolean | undefined>;

/**
 * Logs a message to notify developers about a deprecated feature.
 *
 * @param feature             Name of the deprecated feature.
 * @param [options]           Additional options.
 *
 * @example
 * ```js
 * import deprecated from '@wordpress/deprecated';
 *
 * deprecated( 'Eating meat', {
 *     version: 'the future',
 *     alternative: 'vegetables',
 *     plugin: 'the earth',
 *     hint: 'You may find it beneficial to transition gradually.',
 * } );
 *
 * // Logs: 'Eating meat is deprecated and will be removed from the earth in the future. Please use vegetables instead. Note: You may find it beneficial to transition gradually.'
 * ```
 */
declare function deprecated(feature: string, options?: DeprecatedOptions): void;

export default deprecated;
