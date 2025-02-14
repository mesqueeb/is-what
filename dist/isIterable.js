/** Returns whether the payload is an iterable (regular or async) */
export function isIterable(payload) {
    if (typeof Symbol === 'undefined' || typeof Symbol.iterator === 'undefined') {
        return false;
    }
    if (payload == null)
        return false;
    // Strings are iterable, even though they're primitives.
    if (typeof payload === 'string')
        return true;
    // For objects, arrays and functions, check if Symbol.iterator is a function.
    return ((typeof payload === 'object' || typeof payload === 'function') &&
        typeof payload[Symbol.iterator] === 'function');
}
