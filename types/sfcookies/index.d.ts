/**
 * Create an cookie.
 * @param name Name of the cookie.
 * @param value Value of the cookie.
 * @param date Expiry date, defaults to none.
 */
export function bake_cookie(name: string, value: string, date?: Date): void;

/**
 * Get the value of an cookie.
 * @param name Name of the cookie.
 * @returns cookie value or empty array if nothing.
 */
export function read_cookie(name: string): string | unknown[];

/**
 * Delete an cookie.
 * @param name Name of the cookie.
 */
export function delete_cookie(name: string): void;
