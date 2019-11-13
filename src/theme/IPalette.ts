export interface IPalette {
    WHITE: string;
    RED: string;
    GREEN: string;
    BLUE: string;
    ORANGE: string;
    DAWN: string;
    DUSK: string;
    DARK: string;
    /* naming convention for HSL colors is COLOR + D/L (Dark/Light) + added lightness value)
    e.g. BLUE_D10 = blue - 10L, BLUE_L10 = BLUE + 10L) */
    GREEN_D5: string;
    BLUE_L5: string;
    BLUE_D5: string;
    DAWN_L5: string;
    DAWN_D5: string;
}
