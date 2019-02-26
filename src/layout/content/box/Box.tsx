import styled, { css } from "../../../styled-components";
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
`;

interface IContentRootProps {
    fullWidth?: boolean;
    paddingTop?: number;
}

const ContentRoot = styled<IContentRootProps, "div">("div")`
    padding-top: ${props => props.paddingTop}px;
    white-space: nowrap;

    ${props => props.fullWidth ? css`
    width: 100%;
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
        let iconSpacing = Math.max(0, (props.metrics.height - props.metrics.iconSize) / 2 - BORDER_WIDTH);
        let iconIsLeft = props.iconPlacement === "left";
        let hasText = (props as any).children !== void 0;

        return css`
            ${ iconIsLeft ? css`
                padding-left: ${iconSpacing}px;
                    ${!hasText ? css`
                    padding-right: ${iconSpacing}px;
                    ` : ``}
                ` : css`
                padding-right: ${iconSpacing}px;
                    ${!hasText ? css`
                    padding-left: ${iconSpacing}px;
                    ` : ``}
            `}

            & ${IconRoot} {
                margin-top: ${iconSpacing}px;

                ${hasText ? css`
                    ${iconIsLeft ? css`
                        margin-right: 8px;
                        ` : css`
                        margin-left: 8px;`
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
    background-color: ${props => (
        getColors(props.colors, props.theme).background ||
        "transparent"
    )};
    color: ${props => getColors(props.colors, props.theme).text};
`;
