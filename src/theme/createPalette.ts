import { IPalette } from "./IPalette";
import Color from "color";

const WHITE_COLOR = Color("#FFFFFF");
const RED_COLOR = Color("#F65555");
const GREEN_COLOR = Color("#20D8A4");
const BLUE_COLOR = Color("#356EFF");
const ORANGE_COLOR = Color("#FF9F1C");

const DARK_COLOR = Color("#273656");
const DUSK_COLOR = Color("#99A7C2");
const DAWN_COLOR = Color("#E6ECF5");

/*
 * We don't export a palette object directly to avoid importing it by accident without dependency injection
 */
export const createPalette = () => {
    let palette: IPalette = {

        WHITE: WHITE_COLOR.hex(),
        RED: RED_COLOR.hex(),
        GREEN: GREEN_COLOR.hex(),
        BLUE: BLUE_COLOR.hex(),
        ORANGE: ORANGE_COLOR.hex(),
        DARK: DARK_COLOR.hex(),
        DUSK: DUSK_COLOR.hex(),
        DAWN: DAWN_COLOR.hex(),

        GREEN_D5: GREEN_COLOR.lightness(GREEN_COLOR.lightness() - 5).hex(),
        BLUE_L5: BLUE_COLOR.lightness(BLUE_COLOR.lightness() + 5).hex(),
        BLUE_D5: BLUE_COLOR.lightness(BLUE_COLOR.lightness() - 5).hex(),
        DAWN_L5: DAWN_COLOR.lightness(DAWN_COLOR.lightness() + 5).hex(),
        DAWN_D5: DAWN_COLOR.lightness(DAWN_COLOR.lightness() - 5).hex()
    };

    return palette;
};
