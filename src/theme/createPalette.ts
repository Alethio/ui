import { IPalette } from "./IPalette";

/*
 * We don't export a palette object directly to avoid importing it by accident without dependency injection
 */
export const createPalette = () => {
    let palette: IPalette = {
        EXTRA_LIGHT_GREY: "#F7F8FA",
        MEDIUM_LIGHT_GREY: "#D9E4EF",
        LIGHT_GREY: "#D0DEF2",
        GREY: "#99A7C2",
        DARK_GREY: "#273656",
        BLUE: "#356EFF",
        LIGHT_BLUE: "#4898FF", // this is manually computed by blending BLUE,alpha 1 with LIGHT_GREY, alpha 0.15
        BLUE_A80: "rgba(53, 110, 255, 0.8)",
        GREEN: "#20D8A4",
        RED: "#F65555",
        ORANGE: "#FF9F1C",
        WHITE: "#FFFFFF"
    };

    return palette;
};
