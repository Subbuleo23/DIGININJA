/**
 * Converts supplied object to a string and safely handles buffers by converting them to a base64 string.
 *
 * @param o - Object to convert.
 * @returns - JSON string.
 */
export function stringify(o: any): string;
/**
 * Converts JSON string back to an object. Converts base64 encoded buffers back to buffers
 *
 * @param s - String to convert back to object.
 * @returns - Object.
 */
export function parse(s: string): any;
