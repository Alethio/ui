/**
 * Splits a hash into three parts for partial rendering with ellipsis
 *
 * @internal
 *
 * @param hash
 * @param threshold minimum hash length for the split to occur
 * @param charsShown characters to show at the beginning and at the end
 *
 * @return an array with three string parts or false if the string doesn't meet the threshold for splitting
 */
export function splitLongHash(hash: string, threshold: number, charsShown: number): false | [string, string, string] {
    if (hash.length <= threshold || threshold < 2 * charsShown) {
        return false;
    }

    return [
        hash.substr(0, charsShown),
        hash.substr(charsShown, hash.length - 2 * charsShown),
        hash.substr(-charsShown)
    ];
}
