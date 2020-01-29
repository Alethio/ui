import { IBoxColors } from "../layout/content/box/IBoxColors";
import { IBoxMetrics } from "../layout/content/box/IBoxMetrics";
import { ButtonColors } from "../control/Button";
import { IMediaQueries } from "../layout/responsive/mediaQueries";

type ValueBoxColors = "primary" | "primaryAlt" | "primaryInvert" | "secondary" | "secondaryInvert" |
    "highlight" | "error" | "warn";
type ValueBoxVariant = "small" | "normal" | "normalThin" | "smallThin" | "big";

export interface ITheme {
    colors: IThemeColors;
    spacing: IThemeSpacing;
    /** Media queries for pure convenience. NB: These are not customizable! */
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

    select: {
        expander: {
            label: string;
            value: string;
            bg: string;
            border: string;
            Icon: string;
            disabled: string;
            openLabel: string;
            openValue: string;
            openBg: string;
            openIcon: string;
        }
    };

    accordion: {
        expander: {
            label: string;
            value: string;
            bg: string;
            border: string;
            Icon: string;
            disabled: string;
            openLabel: string;
            openValue: string;
            openBg: string;
            openIcon: string;
        }
    };

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
            hover: IBoxColors;
            disabled: IBoxColors;
            selected: IBoxColors;
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
    valueBoxMetrics: Record<ValueBoxVariant, IBoxMetrics>;
    toolbarWidth: number;
    topbarHeight: number;

    expander: {
        fontSize: number;
        fontWeight: number;
        lineHeight: number;
        letterSpacing: string;
    };
}

export interface IThemeMediaQueries extends IMediaQueries {

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
