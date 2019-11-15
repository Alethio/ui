import { ITheme, IThemeColors, IThemeSpacing, IThemeMediaQueries, IThemeBaseColors, IThemeFont } from "./ITheme";
import { IPalette } from "./IPalette";

/*
 * We don't export a theme object directly to avoid importing it by accident without dependency injection
 */
export const createTheme: (palette: IPalette) => ITheme = (palette) => {
    let {
        BLUE, BLUE_L5, DARK, DAWN_L2, GREEN, DUSK, DAWN_D5,
        DAWN, ORANGE, RED, WHITE
    } = palette;

    let base: IThemeBaseColors = {
        primary: {
            color: DARK,
            contrast: WHITE
        },
        secondary: {
            color: DUSK,
            contrast: WHITE
        },
        disabled: DAWN_D5,
        status: {
            error: RED,
            warn: ORANGE,
            success: GREEN
        },
        bg: {
            main: DAWN_L2,
            alt: WHITE
        },
        highlight: {
            color: GREEN,
            contrast: WHITE
        },
        accent: {
            color: BLUE,
            contrast: WHITE
        }
    };

    let colors: IThemeColors = {
        base,

        alethioLogo: BLUE,
        label: {
            default: base.secondary.color,
            strong: base.primary.color,
            disabled: base.disabled
        },

        closeBtn: DUSK,

        toolbar: {
            icon: {
                normal: DAWN_D5,
                hover: DARK,
                active: BLUE,
                activeHover: BLUE_L5
            }
        },
        toolbarAlethioIcon: DAWN_D5,
        toolbarAlethioIconHover: BLUE,

        sidebarBg: WHITE,
        sidebarBorder: DAWN_D5,
        sidebarPageTitle: DAWN_D5,
        mainContentBg: DAWN_L2,
        overlayBg: WHITE,
        overlayBorder: DAWN_D5,
        overlayToolbarBorder: DAWN,
        overlayText: DARK,
        copyIcon: BLUE,
        gasPercentageBoxText: ORANGE,
        hexDataItem: DUSK,
        selectBoxText: DARK,
        selectBoxTextDisabled: DAWN_D5,
        selectBoxBg: WHITE,
        selectBoxBubble: GREEN,
        selectBoxArrow: DAWN_D5,
        selectBoxBorder: DAWN_D5,
        gridHeaderHover: DARK,
        gridBorder: DAWN_D5,
        gridOddRowBg: WHITE,
        gridEvenRowBg: DAWN_L2,
        gridColumnSelector: BLUE,

        valueBox: {
            primary: {
                text: base.primary.color,
                background: "transparent"
            },
            primaryAlt: {
                text: base.primary.color,
                background: base.bg.main
            },
            primaryInvert: {
                text: base.primary.contrast,
                background: base.primary.color
            },
            secondary: {
                text: base.secondary.color,
                background: "transparent"
            },
            secondaryInvert: {
                text: base.secondary.contrast,
                background: base.secondary.color
            },
            highlight: {
                text: base.highlight.color,
                background: base.highlight.contrast
            },
            error: {
                text: base.status.error,
                background: "transparent"
            },
            warn: {
                text: base.status.warn,
                background: WHITE
            }
        },

        error: RED,
        rawDataBackground: DAWN_D5,
        rawDataText: DARK,
        spinnerStroke: BLUE,
        spinnerBackground: WHITE,
        spinnerBorder: DAWN_D5,
        accordionBg: WHITE,
        accordionBorder: DAWN_D5,
        expanderBg: WHITE,
        expanderLabel: DARK,
        expanderValue: BLUE,
        expanderIcon: DUSK,
        expanderDisabled: DAWN_D5,
        expanderOpenBg: BLUE,
        expanderOpenLabel: WHITE,
        expanderOpenValue: DAWN_D5,
        expanderOpenIcon: DAWN_D5,
        msgCountInIcon: GREEN,
        msgCountOutIcon: RED,
        msgCountPendingIcon: ORANGE,

        button: {
            primary: {
                normal: {
                    text: WHITE,
                    background: BLUE
                },
                hover: {
                    text: WHITE,
                    background: BLUE_L5
                },
                disabled: {
                    text: DAWN_D5,
                    background: DUSK
                }
            },
            secondary: {
                normal: {
                    text: BLUE,
                    background: WHITE,
                    border: BLUE
                },
                hover: {
                    text: BLUE_L5,
                    background: WHITE,
                    border: BLUE_L5
                },
                disabled: {
                    text: DAWN_D5,
                    background: WHITE,
                    border: DAWN_D5
                }
            },
            special1: {
                normal: {
                    text: WHITE,
                    background: DUSK
                },
                hover: {
                    text: WHITE,
                    background: BLUE
                },
                disabled: {
                    text: WHITE,
                    background: DAWN_D5
                }
            },
            special2: {
                normal: {
                    text: BLUE,
                    background: "transparent"
                },
                hover: {
                    text: WHITE,
                    background: BLUE
                },
                disabled: {
                    text: DAWN_D5,
                    background: "transparent"
                }
            }
        },

        input: {
            text: base.primary.color,
            background: WHITE,
            border: DAWN_D5,
            activeBorder: base.accent.color,
            placeholder: DAWN_D5
        },

        menu: {
            background: WHITE,
            item: {
                normal: {
                    text: base.primary.color
                },
                active: {
                    text: base.primary.color,
                    background: DAWN_L2
                },
                disabled: {
                    text: base.disabled
                }
            }
        },

        typedValueBoxBg: DAWN_L2,
        typedValueBoxText: DARK,
        typedValueBoxTypeText: DUSK,
        paginationBtnBg: DAWN_L2,
        paginationBtnText: DUSK,
        paginationBtnBorder: DAWN_D5,
        paginationBtnHoverText: DARK,
        paginationCursorText: DARK,
        paginationBtnDisabledText: DAWN_D5,
        typedValueBoxBorder: DAWN,
        messageBoxPrimaryBg: WHITE,
        messageBoxPrimaryBorder: DAWN_D5,
        messageBoxPrimaryText: DUSK,
        messageBoxSecondaryBg: DAWN_L2,
        messageBoxSecondaryBorder: DAWN_D5,
        messageBoxSecondaryText: DUSK,
        separator: DAWN_D5,

        link: BLUE
    };

    let spacing: IThemeSpacing = {
        valueBoxMetrics: {
            big: {
                height: 36,
                textPaddingTop: 4,
                textPaddingX: 8,
                fontSize: 20,
                iconSize: 24,
                lineHeight: 24,
                fontWeight: 500,
                letterSpacing: "normal"
            },
            normal: {
                height: 28,
                textPaddingTop: 0,
                textPaddingX: 8,
                fontSize: 20,
                iconSize: 24,
                lineHeight: 24,
                fontWeight: 500,
                letterSpacing: "normal"
            },
            normalThin: {
                height: 28,
                textPaddingTop: 0,
                textPaddingX: 8,
                fontSize: 20,
                iconSize: 24,
                lineHeight: 24,
                fontWeight: 400,
                letterSpacing: "normal"
            },
            small: {
                height: 20,
                textPaddingTop: 0,
                textPaddingX: 8,
                fontSize: 14,
                iconSize: 18,
                lineHeight: 17,
                fontWeight: 600,
                letterSpacing: "1px"
            },
            smallThin: {
                height: 20,
                textPaddingTop: 0,
                textPaddingX: 8,
                fontSize: 14,
                iconSize: 18,
                lineHeight: 17,
                fontWeight: 500,
                letterSpacing: "1px"
            }
        },
        contentTop: 48,
        contentBottom: 72,
        sidebarWidth: 241,
        toolbarWidth: 72,
        topbarHeight: 64
    };
    let mediaQueries: IThemeMediaQueries = {
        breakPoints: {
            lessThan620px: "screen and (max-width: 620px)",
            smallerThanStandardView: "screen and (max-width: 780px)",
            smallerThanFullView: "screen and (max-width: 920px)"
        }
    };
    let font: IThemeFont = {
        weight: {
            thin: 100,
            extralight: 200,
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
        }
    };

    return {
        colors,
        spacing,
        mediaQueries,
        font
    };
};
