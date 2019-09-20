/*
 * Wrapper for styled-components library
 *
 * This serves two purpuses:
 * 1. reduce the footprint of the library so we can replace/upgrade it easier
 * 2. ensure Theme type safety (see https://www.styled-components.com/docs/api#define-a-theme-interface)
 */
// tslint:disable-next-line:import-blacklist
import * as styledComponents from "styled-components";

import { ITheme } from "./theme/ITheme";

// Helper type operators
type KeyofBase = keyof any;
type Diff<T extends KeyofBase, U extends KeyofBase> = ({ [P in T]: P } & { [P in U]: never })[T];
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
type WithOptionalTheme<P extends { theme?: T }, T> = Omit<P, "theme"> & {
  theme?: T
};

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  withTheme
} = styledComponents as {
    default: styledComponents.ThemedBaseStyledInterface<ITheme>;
    css: styledComponents.ThemedCssFunction<ITheme>;
    ThemeProvider: import("react").ComponentClass<styledComponents.ThemeProviderProps<ITheme>, any>;
    injectGlobal(strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]): void;
    keyframes(strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]): string;
    withTheme<P extends { theme?: ITheme; }>(component: import("react").ComponentType<P>):
      import("react").ComponentClass<WithOptionalTheme<P, ITheme>, any>;
};

export { css, injectGlobal, keyframes, ThemeProvider, withTheme };
// tslint:disable-next-line:no-default-export
export default styled;
