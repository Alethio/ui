import { IBoxColors } from "./IBoxColors";

export interface IBoxColorsThunk<TTheme> {
    (theme: TTheme): IBoxColors;
}
