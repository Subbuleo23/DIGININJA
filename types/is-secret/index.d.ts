/**
 * A distributed maintained collection of patterns that indicate that something probably is secret.
 * This is useful if you want to filter sensitive values in a data set.
 * This module uses a very simple algorithm that will not catch everything. Use at your own risk.
 */

/**
 * Validates the given string against a list of key names known to typically indicate secret data.
 * Returns `true` if the string is considered secret. Otherwise `false`.
 */
export function key(str: string): boolean;

/**
 * Validates the given string against a list of patterns that indicates secret data.
 * Returns `true` if the string is considered secret. Otherwise `false`.
 */
export function value(str: string): boolean;
