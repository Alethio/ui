import styled from "styled-components";
import { ITheme } from "../../theme/ITheme";

export type MediaQueryThunk = string | ((theme: ITheme) => string);

export interface IResponsiveContainerProps {
    /** Media query for which the container is visible (e.g. `screen and (max-width: 600px)`) */
    mediaQuery: MediaQueryThunk;
    /** Show or hide the element based on given media query (default = show) */
    behavior?: "show" | "hide";
}

/**
 * Component that allows showing/hiding content based on viewport size
 *
 * Example:
 * ```ts
 * <ResponsiveContainer mediaQuery={theme => theme.media.sAndAbove}>
 *     <div>This will be hidden on "xs" size devices</div>
 * </ResponsiveContainer>
 * ```
 */
export const ResponsiveContainer = styled.div<IResponsiveContainerProps>`
    display: ${props => props.behavior === "hide" ? "block" : "none" };

    @media ${({ mediaQuery: q, theme }) => typeof q === "function" ? q(theme) : q } {
        display: ${props => props.behavior === "hide" ? "none" : "block" };
    }
`;
