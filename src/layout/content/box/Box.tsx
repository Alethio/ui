import styled, { css } from "styled-components";
import * as React from "react";
import { ITheme } from "../../../theme/ITheme";
import { IBoxColors } from "./IBoxColors";
import { IBoxColorsThunk } from "./IBoxColorsThunk";
import { IBoxMetrics } from "./IBoxMetrics";

export interface IBoxProps {
    className?: string;
    metrics: IBoxMetrics;
    colors: IBoxColors | IBoxColorsThunk<ITheme>;
    Icon?: React.ComponentClass<IIconProps> | React.StatelessComponent<IIconProps>;
    iconPlacement?: "left" | "right";
    fullWidth?: boolean;
}

interface IIconProps {
    size?: number;
}

const IconRoot = styled.div`
    display: block;
    /* Let the parent element handle mouse events (
        because SVG is special and causes problems when used in menu layer with document click outside detection
    ) */
    pointer-events: none;
`;

interface IContentRootProps {
    fullWidth?: boolean;
    paddingTop?: number;
}

const ContentRoot = styled.div<IContentRootProps>`
    padding-top: ${props => props.paddingTop}px;
    white-space: nowrap;

    ${props => props.fullWidth ? css`
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    ` : ``}
`;

const $Box: React.StatelessComponent<IBoxProps> = ({
    children, className, Icon, iconPlacement, metrics, fullWidth
}) => {
    let icon = Icon ?
        <IconRoot>
            <Icon size={metrics.iconSize} />
        </IconRoot>
        : null;
    let iconIsLeft = iconPlacement === "left";

    return <div className={className}>
        { iconIsLeft && icon }
        { children !== void 0 ?
        <ContentRoot fullWidth={fullWidth} paddingTop={metrics.textPaddingTop}>{children}</ContentRoot>
        : null }
        { !iconIsLeft && icon }
    </div>;
};

const getColors = (colors: IBoxColors | IBoxColorsThunk<ITheme>, theme: ITheme) => {
    if (typeof colors === "function") {
        return colors(theme);
    }
    return colors;
};

const BORDER_WIDTH = 1;

/**
 * Base component for displaying textual data aligned to the layout virtual grid.
 * Ensures proper spacing and text metrics and allows for an optional icon.
 *
 * Use this only if you need some custom metrics, otherwise use ValueBox which provides sensible defaults.
 */
export const Box = styled($Box)`
    display: flex;
    font-size: ${props => props.metrics.fontSize}px;
    line-height: ${props => props.metrics.lineHeight}px;
    height: ${props => props.metrics.height}px;

    ${props => props.fullWidth ? css`
    width: 100%;
    ` : ``}

    padding: 0 ${props => props.metrics.textPaddingX - BORDER_WIDTH}px;

    ${props => {
        if (!props.Icon) {
            return;
        }
        let hasText = (props as any).children !== void 0;
        let iconTextSpacing = Math.floor(props.metrics.textPaddingX / 2);
        let iconMarginY = Math.max(0, (props.metrics.height - props.metrics.iconSize) / 2 - BORDER_WIDTH);
        let iconMarginX = hasText ? iconTextSpacing : iconMarginY;
        let iconIsLeft = props.iconPlacement === "left";

        return css`
            ${ iconIsLeft ? css`
                padding-left: ${iconMarginX}px;
                    ${!hasText ? css`
                    padding-right: ${iconMarginX}px;
                    ` : ``}
                ` : css`
                padding-right: ${iconMarginX}px;
                    ${!hasText ? css`
                    padding-left: ${iconMarginX}px;
                    ` : ``}
            `}

            & ${IconRoot} {
                margin-top: ${iconMarginY}px;

                ${hasText ? css`
                    ${iconIsLeft ? css`
                        margin-right: ${iconTextSpacing}px;
                        ` : css`
                        margin-left: ${iconTextSpacing}px;`
                    }
                ` : ``}
            }
        `;
    }}

    font-weight: ${props => props.metrics.fontWeight};
    letter-spacing: ${props => props.metrics.letterSpacing};
    box-sizing: border-box;
    vertical-align: middle;

    border: ${BORDER_WIDTH}px solid ${props => (
        getColors(props.colors, props.theme).border ||
        getColors(props.colors, props.theme).background ||
        "transparent"
    )};
    border-radius: ${props => props.theme.spacing.borderRadius.thin}px;
    background-color: ${props => (
        getColors(props.colors, props.theme).background || "transparent"
    )};
    color: ${props => getColors(props.colors, props.theme).text};
`;
