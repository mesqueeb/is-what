/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other
 * prototypes)
 *
 * @param {any} payload
 * @returns {payload is { [K in any]: never }}
 */
export declare function isEmptyObject(payload: any): payload is {
    [K in any]: never;
};
