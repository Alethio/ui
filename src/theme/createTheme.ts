import { ITheme, IThemeColors, IThemeSpacing, IThemeBaseColors, IThemeFont } from "./ITheme";
import { IPalette } from "./IPalette";
import { mediaQueries } from "../layout/responsive/mediaQueries";

/*
 * We don't export a theme object directly to avoid importing it by accident without dependency injection
 */
export const createTheme: (palette: IPalette) => ITheme = (palette) => {
    let {
        BLUE, BLUE_L5, DARK, DAWN_L5, GREEN, DUSK, DAWN_D5,
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
            main: DAWN_L5,
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
            item: {
                disabled: DAWN_D5,
                normal: DUSK,
                hover: DARK,
                active: BLUE,
                activeHover: BLUE_L5
            }
        },
        toolbarAlethioIcon: DAWN_D5,
        toolbarAlethioIconHover: BLUE,
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
        gridEvenRowBg: DAWN_L5,
        gridColumnSelector: BLUE,

        valueBox: {
            primary: {
                text: base.primary.color,
                background: base.bg.alt
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
                background: base.bg.alt
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

        select: {
            expander: {
                label: DARK,
                value: BLUE,
                bg: WHITE,
                border: DAWN_D5,
                icon: DUSK,
                iconBg: DAWN_L5,
                disabled: DAWN_D5,
                openLabel: DARK,
                openValue: DAWN_D5,
                openBg: WHITE,
                openIcon: WHITE,
                openIconBg: DUSK
            }
        },

        accordion: {
            expander: {
                label: DARK,
                value: BLUE,
                bg: WHITE,
                border: DAWN_D5,
                icon: DUSK,
                iconBg: DAWN_L5,
                disabled: DAWN_D5,
                openLabel: WHITE,
                openValue: DAWN_D5,
                openBorder: BLUE,
                openBg: BLUE,
                openIcon: WHITE,
                openIconBg: BLUE
            }
        },

        accordionBorder: DAWN_D5,
        accordionBg: WHITE,

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
                    text: DAWN_L5,
                    background: base.disabled
                }
            },
            primaryInverted: {
                normal: {
                    text: BLUE,
                    background: WHITE
                },
                hover: {
                    text: WHITE,
                    background: BLUE_L5
                },
                disabled: {
                    text: DAWN_L5,
                    background: base.disabled
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
            secondaryInverted: {
                normal: {
                    text: WHITE,
                    background: BLUE,
                    border: WHITE
                },
                hover: {
                    text: DAWN,
                    background: BLUE,
                    border: DAWN
                },
                disabled: {
                    text: DUSK,
                    background: BLUE,
                    border: DUSK
                }
            },
            special: {
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
                hover: {
                    text: base.primary.color,
                    background: DAWN_L5
                },
                selected: {
                    text: base.accent.color
                },
                disabled: {
                    text: base.disabled
                }
            }
        },

        typedValueBoxBg: DAWN_L5,
        typedValueBoxText: DARK,
        typedValueBoxTypeText: DUSK,
        paginationBtnBg: DAWN_L5,
        paginationBtnText: DUSK,
        paginationBtnBorder: DAWN_D5,
        paginationBtnHoverText: DARK,
        paginationCursorText: DARK,
        paginationBtnDisabledText: DAWN_D5,
        typedValueBoxBorder: DAWN,
        messageBoxPrimaryBg: WHITE,
        messageBoxPrimaryBorder: DAWN_D5,
        messageBoxPrimaryText: DUSK,
        messageBoxSecondaryBg: DAWN_L5,
        messageBoxSecondaryBorder: DAWN_D5,
        messageBoxSecondaryText: DUSK,
        separator: DAWN_D5,

        link: BLUE
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

    let spacing: IThemeSpacing = {
        valueBoxMetrics: {
            normal: {
                height: 32,
                textPaddingTop: 2,
                textPaddingX: 16,
                fontSize: 18,
                iconSize: 24,
                lineHeight: 22,
                fontWeight: 400,
                letterSpacing: "normal"
            },
            small: {
                height: 32,
                textPaddingTop: 8,
                textPaddingX: 16,
                fontSize: 12,
                iconSize: 18,
                lineHeight: 14,
                fontWeight: 600,
                letterSpacing: "normal"
            }
        },
        toolbarWidth: 72,
        topbarHeight: 72,
        borderRadius: {
            normal: 8,
            thin: 4
        },

        expander: {
            fontSize: 18,
            fontWeight: font.weight.regular,
            letterSpacing: "normal",
            lineHeight: 22
        }
    };

    return {
        colors,
        spacing,
        media: mediaQueries,
        font
    };
};
