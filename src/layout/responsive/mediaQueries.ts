import { breakpoints } from "./breakpoints";

let { xsMax, sMax, mMax, lMax, xlMax } = breakpoints;

export interface IMediaQueries {
    /** Mobiles - XS (<600px) */
    xs: string;

    /** Tablets - S and below (<840px) */
    sAndBelow: string;
    /** Tablets - S (>=600px, <840px) */
    sExact: string;
    /** Tablets - S and above (>=600px) */
    sAndAbove: string;

    /** Tablets - M and below (<1024px) */
    mAndBelow: string;
    /** Tablets - M (>=840px, <1024px) */
    mExact: string;
    /** Tablets - M and above (>=840px) */
    mAndAbove: string;

    /** Desktop - L and below (<1440px) */
    lAndBelow: string;
    /** Desktop - L (>=1024px, <1440px) */
    lExact: string;
    /** Desktop - L and above (>=1024px) */
    lAndAbove: string;

    /** Desktop - XL and below (<1920px) */
    xlAndBelow: string;
    /** Desktop - XL (>=1440px, <1920px) */
    xlExact: string;
    /** Desktop - XL and above (>=1440px) */
    xlAndAbove: string;

    /** Desktop - 4K+ */
    xxl: string;
}

export const mediaQueries: IMediaQueries = {
    xs: `screen and (max-width: ${xsMax - 1}px)`,

    sAndBelow: `screen and (max-width: ${sMax - 1}px)`,
    sExact: `screen and (min-width: ${xsMax}px) and (max-width: ${sMax - 1}px)`,
    sAndAbove: `screen and (min-width: ${xsMax}px)`,

    mAndBelow: `screen and (max-width: ${mMax - 1}px)`,
    mExact: `screen and (min-width: ${sMax}px) and (max-width: ${mMax - 1}px)`,
    mAndAbove: `screen and (min-width: ${sMax}px)`,

    lAndBelow: `screen and (max-width: ${lMax - 1}px)`,
    lExact: `screen and (min-width: ${mMax}px) and (max-width: ${lMax - 1}px)`,
    lAndAbove: `screen and (min-width: ${mMax}px)`,

    xlAndBelow: `screen and (max-width: ${xlMax - 1}px)`,
    xlExact: `screen and (min-width: ${lMax}px) and (max-width: ${xlMax - 1}px)`,
    xlAndAbove: `screen and (min-width: ${lMax}px)`,

    xxl: `screen and (min-width: ${xlMax}px)`
};
