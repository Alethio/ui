import { IPalette } from "./IPalette";

/*
 * We don't export a palette object directly to avoid importing it by accident without dependency injection
 */
export const createPalette = () => {
    let palette: IPalette = {
        EXTRA_LIGHT_GREY: "#F7F8FA",
        MEDIUM_LIGHT_GREY: "#D9E4EF",
        LIGHT_GREY: "#D0DEF2",
        GREY: "#A7B5D1",
        DARK_GREY: "#273656",
        BLUE: "#357CFF",
        BLUE_A80: "rgba(53, 124, 255, 0.8)",
        GREEN: "#48E2A2",
        RED: "#F65555",
        ORANGE: "#FF9F1C",
        WHITE: "#FFFFFF"
    };

    return palette;
};
