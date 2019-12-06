import { useMemo } from "react";
import { useViewportSize, IViewportSize } from "./useViewportSize";
import { IMediaQueries, mediaQueries } from "./mediaQueries";

export type IMediaChecks = Record<keyof IMediaQueries, boolean>;

/**
 * React hook that runs the library-predefined media queries against the current viewport size, resulting in
 * a map of matching vs non-matching queries.
 *
 * Example:
 * ```ts
 * let [ is, actual ] = useMediaCheck();
 * if (is.sAndAbove) {
 *     console.log(actual.width); // actual viewport width
 *     // return some element etc.
 * }
 * ```
 */
export const useMediaCheck = (): [IMediaChecks, IViewportSize] => {
    let viewportSize = useViewportSize();
    let mediaChecks = useMemo(runMediaChecks, [viewportSize.width]);

    return [ mediaChecks, viewportSize ];
};

const runMediaChecks = () => {
    let result = {} as IMediaChecks;
    (Object.keys(mediaQueries) as (keyof IMediaQueries)[]).forEach(mediaType => {
        let mediaQuery = mediaQueries[mediaType];
        let match = window.matchMedia(mediaQuery).matches;
        result[mediaType] = match;
    });
    return result;
};
