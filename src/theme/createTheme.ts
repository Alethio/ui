import { ITheme, IThemeColors, IThemeSpacing, IThemeMediaQueries } from "./ITheme";
import { IPalette } from "./IPalette";

/*
 * We don't export a theme object directly to avoid importing it by accident without dependency injection
 */
export const createTheme: (palette: IPalette) => ITheme = (palette) => {
    let {
        BLUE, BLUE_A80, DARK_GREY, EXTRA_LIGHT_GREY, GREEN, GREY, LIGHT_GREY,
        MEDIUM_LIGHT_GREY, ORANGE, RED, WHITE
    } = palette;

    let colors: IThemeColors = {
        closeBtn: GREY,

        toolbarIcon: LIGHT_GREY,
        toolbarIconHover: DARK_GREY,
        toolbarAlethioIcon: LIGHT_GREY,
        toolbarAlethioIconHover: BLUE,

        sidebarBg: WHITE,
        sidebarBorder: LIGHT_GREY,
        sidebarPageTitle: LIGHT_GREY,
        mainContentBg: EXTRA_LIGHT_GREY,
        overlayBg: WHITE,
        overlayBorder: LIGHT_GREY,
        overlayToolbarBorder: MEDIUM_LIGHT_GREY,
        overlayText: DARK_GREY,
        copyIcon: BLUE,
        checkboxIcon: BLUE,
        checkboxLabel: DARK_GREY,
        radioIcon: BLUE,
        radioLabel: DARK_GREY,
        arrowLabelBg: GREEN,
        arrowLabelBgDisabled: LIGHT_GREY,
        arrowLabel: WHITE,
        label: GREY,
        gasPercentageBoxText: ORANGE,
        hexDataItem: GREY,
        selectBoxText: DARK_GREY,
        selectBoxTextDisabled: LIGHT_GREY,
        selectBoxBg: WHITE,
        selectBoxBubble: GREEN,
        selectBoxArrow: LIGHT_GREY,
        selectBoxBorder: LIGHT_GREY,
        gridHeaderHover: DARK_GREY,
        gridBorder: LIGHT_GREY,
        gridOddRowBg: WHITE,
        gridEvenRowBg: EXTRA_LIGHT_GREY,
        gridColumnSelector: BLUE,

        valueBox: {
            primary: {
                text: DARK_GREY,
                background: "transparent"
            },
            secondary: {
                text: GREY,
                background: "transparent"
            },
            highlight: {
                text: GREEN,
                background: WHITE
            },
            error: {
                text: RED,
                background: "transparent"
            },
            warn: {
                text: ORANGE,
                background: WHITE
            }
        },

        error: RED,
        rawDataBackground: LIGHT_GREY,
        rawDataText: DARK_GREY,
        spinnerStroke: BLUE,
        spinnerBackground: WHITE,
        spinnerBorder: LIGHT_GREY,
        accordionBg: WHITE,
        accordionBorder: LIGHT_GREY,
        expanderBg: WHITE,
        expanderLabel: DARK_GREY,
        expanderValue: BLUE,
        expanderIcon: GREY,
        expanderDisabled: LIGHT_GREY,
        expanderOpenBg: BLUE,
        expanderOpenLabel: WHITE,
        expanderOpenValue: LIGHT_GREY,
        expanderOpenIcon: LIGHT_GREY,
        msgCountInIcon: GREEN,
        msgCountOutIcon: RED,
        msgCountPendingIcon: ORANGE,
        buttonPrimaryBg: BLUE,
        buttonPrimaryBgActive: BLUE_A80,
        buttonPrimaryText: WHITE,
        buttonSecondaryBg: GREY,
        buttonSecondaryBgActive: BLUE,
        buttonSecondaryText: WHITE,
        typedValueBoxBg: EXTRA_LIGHT_GREY,
        typedValueBoxText: DARK_GREY,
        typedValueBoxTypeText: GREY,
        paginationBtnBg: EXTRA_LIGHT_GREY,
        paginationBtnText: GREY,
        paginationBtnBorder: LIGHT_GREY,
        paginationBtnHoverText: DARK_GREY,
        paginationCursorText: DARK_GREY,
        paginationBtnDisabledText: LIGHT_GREY,
        typedValueBoxBorder: MEDIUM_LIGHT_GREY,
        messageBoxPrimaryBg: WHITE,
        messageBoxPrimaryBorder: LIGHT_GREY,
        messageBoxPrimaryText: GREY,
        messageBoxSecondaryBg: EXTRA_LIGHT_GREY,
        messageBoxSecondaryBorder: LIGHT_GREY,
        messageBoxSecondaryText: GREY,

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

    return {
        colors,
        spacing,
        mediaQueries
    };
};
