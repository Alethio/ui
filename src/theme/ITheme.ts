import { IBoxColors } from "../layout/content/box/IBoxColors";
import { IBoxMetrics } from "../layout/content/box/IBoxMetrics";
import { ButtonColors } from "../control/Button";

type ValueBoxColors = "primary" | "primaryAlt" | "primaryInvert" | "secondary" | "secondaryInvert" |
    "highlight" | "error" | "warn";
type ValueBoxVariant = "small" | "normal" | "normalThin" | "smallThin" | "big";

export interface ITheme {
    colors: IThemeColors;
    spacing: IThemeSpacing;
    media: IThemeMediaQueries;
    font: IThemeFont;
}

export interface IThemeBaseColors {
    primary: {
        color: string;
        contrast: string;
    };
    secondary: {
        color: string;
        contrast: string;
    };
    disabled: string;
    status: {
        error: string;
        warn: string;
        success: string;
    };
    bg: {
        main: string;
        alt: string;
    };
    highlight: {
        color: string;
        contrast: string;
    };
    accent: {
        color: string;
        contrast: string;
    };
}

export interface IThemeColors {
    base: IThemeBaseColors;

    alethioLogo: string;
    toolbar: {
        icon: {
            normal: string;
            hover: string;
            active: string;
            activeHover: string;
        }
    };
    toolbarAlethioIcon: string;
    toolbarAlethioIconHover: string;

    sidebarBg: string;
    sidebarPageTitle: string;
    mainContentBg: string;

    overlayBg: string;
    overlayBorder: string;
    overlayToolbarBorder: string;
    overlayText: string;

    copyIcon: string;

    label: {
        default: string;
        strong: string;
        disabled: string;
    };

    gasPercentageBoxText: string;
    hexDataItem: string;

    selectBoxText: string;
    selectBoxTextDisabled: string;
    selectBoxBg: string;
    selectBoxBubble: string;
    selectBoxArrow: string;
    selectBoxBorder: string;
    closeBtn: string;

    gridHeaderHover: string;
    gridBorder: string;
    gridOddRowBg: string;
    gridEvenRowBg: string;
    gridColumnSelector: string;

    valueBox: Record<ValueBoxColors, IBoxColors>;
    error: string;

    rawDataBackground: string;
    rawDataText: string;

    spinnerStroke: string;
    spinnerBorder: string;
    spinnerBackground: string;

    expanderLabel: string;
    expanderValue: string;
    expanderBg: string;
    expanderIcon: string;
    expanderDisabled: string;
    expanderOpenLabel: string;
    expanderOpenValue: string;
    expanderOpenBg: string;
    expanderOpenIcon: string;

    accordionBg: string;
    accordionBorder: string;

    msgCountInIcon: string;
    msgCountOutIcon: string;
    msgCountPendingIcon: string;

    button: Record<ButtonColors, {
        normal: IBoxColors;
        hover: IBoxColors;
        disabled: IBoxColors;
    }>;

    input: IBoxColors & {
        activeBorder: string;
        placeholder: string;
    };

    menu: {
        background: string;
        item: {
            normal: IBoxColors;
            active: IBoxColors;
            disabled: IBoxColors;
        };
    };

    typedValueBoxBg: string;
    typedValueBoxText: string;
    typedValueBoxTypeText: string;
    typedValueBoxBorder: string;

    paginationBtnBorder: string;
    paginationBtnBg: string;
    paginationBtnText: string;
    paginationBtnHoverText: string;
    paginationCursorText: string;
    paginationBtnDisabledText: string;

    messageBoxPrimaryText: string;
    messageBoxPrimaryBg: string;
    messageBoxPrimaryBorder: string;
    messageBoxSecondaryText: string;
    messageBoxSecondaryBg: string;
    messageBoxSecondaryBorder: string;

    separator: string;

    link: string;
}

export interface IThemeSpacing {
    contentTop: number;
    contentBottom: number;
    sidebarWidth: number;
    valueBoxMetrics: Record<ValueBoxVariant, IBoxMetrics>;
    toolbarWidth: number;
    topbarHeight: number;
}

export interface IThemeMediaQueries {
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

export interface IThemeFont {
    weight: {
        thin: number,
        extralight: number,
        light: number,
        regular: number,
        medium: number,
        semibold: number,
        bold: number,
        extrabold: number,
        black: number
    };
}
