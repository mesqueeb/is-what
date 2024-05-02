/**
 * Returns the object type of the given payload
 *
 * @param {any} payload
 * @returns {string}
 */
export function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
