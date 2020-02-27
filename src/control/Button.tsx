import * as React from "react";
import styled, { css } from "../styled-components";
import { Box, IBoxProps } from "../layout/content/box/Box";
import { IBoxColorsThunk } from "../layout/content/box/IBoxColorsThunk";
import { HoverState } from "../util/react/HoverState";
import { ITheme } from "../theme/ITheme";
import { IBoxColors } from "../layout/content/box/IBoxColors";
import Color from "color";

interface IButtonRootProps {
    elevation?: Elevation;
    disabled?: boolean;
    rounded?: boolean;
    shadowColor(theme: ITheme): string | undefined;
}

const ButtonRoot = styled<IButtonRootProps, "button">("button")`
    ${props => !props.disabled ? css`
    cursor: pointer;
    ` : ``}
    user-select: none;
    text-transform: uppercase;

    ${props => props.elevation !== "none" ? css`
    box-shadow: ${props.elevation === "high" ? "0 8px 16px" : "0 4px 8px"}
        ${Color(props.shadowColor(props.theme) || "transparent").alpha(0.6).toString()}
    ` : ``};

    border-radius: ${props => props.rounded ? "100px" : `${props.theme.spacing.borderRadius.thin}px`};

    /* Override user-agent styles */
    background: none;
    border: none; /* Remove borders */
    outline: none;
    padding: 0px;
`;

const StyledBox = styled(Box)`
    border-radius: inherit;
    transition: background-color .2s ease-in-out, border-color .2s ease-in-out;
`;

export type ButtonColors = "primary" | "secondary" | "special";
type Elevation = "none" | "high" | "low";
type InteractionState = "normal" | "hover" | "disabled";
type GetColorSetFn = (colorVariants: ButtonColors, state: InteractionState)
    => IBoxColorsThunk<ITheme>;

const getColorSet: GetColorSetFn = (colorVariant, state) => (theme) => theme.colors.button[colorVariant][state];

const getColors = (colors: IBoxColors | IBoxColorsThunk<ITheme>, theme: ITheme) => {
    if (typeof colors === "function") {
        return colors(theme);
    }
    return colors;
};

const getState = (disabled: boolean, hover: boolean) => {
    if (disabled) {
        return "disabled";
    } else if (hover) {
        return "hover";
    } else {
        return "normal";
    }
};

const getInverted = (colors: ButtonColors, state: InteractionState, inverted: boolean) => {
    if (colors === "primary") {
        return state === "normal" && inverted;
    } else if (colors === "secondary") {
        return inverted;
    } else {
        return inverted;
    }
};

const invertColors: GetColorSetFn = (colorVariant, state) => (theme) => {
    const colors = theme.colors.button[colorVariant][state];
    return {
        text: colors.background!,
        background: colors.text,
        border: colors.background
    };
};

type IHtmlButtonProps = Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "autoFocus" | "name" | "type" | "value">;

export interface IButtonProps extends IHtmlButtonProps {
    Icon?: IBoxProps["Icon"];
    iconPlacement?: IBoxProps["iconPlacement"];
    colors?: ButtonColors;
    /** Only for primary button */
    elevation?: Elevation;
    /** Rounded 50% corners */
    rounded?: boolean;
    inverted?: boolean;
    children?: string;
    disabled?: boolean;
    onClick?(): void;
}

export class Button extends React.Component<IButtonProps> {
    static defaultProps: Pick<IButtonProps, "colors" | "elevation"> = {
        colors: "secondary",
        elevation: "none"
    };

    render() {
        let { Icon, iconPlacement, elevation, disabled, rounded,
            inverted, colors, autoFocus, name, type, value, children } = this.props;

        return (
            <HoverState>
                {(hover) => {
                    let state: InteractionState = getState(disabled!, hover);
                    let colorSet = getColorSet(colors!, state);
                    let isInverted = getInverted(colors!, state, inverted!);
                    let invertedColorSet = invertColors(colors!, state);
                    let shadowColor = (theme: ITheme) =>
                        colors === "primary" ? getColors(colorSet, theme).background : void 0;

                    return <ButtonRoot
                        onClick={!this.props.disabled ? this.props.onClick : void 0}
                        elevation={elevation}
                        shadowColor={shadowColor}
                        disabled={disabled}
                        rounded={rounded}
                        autoFocus={autoFocus}
                        name={name}
                        type={type}
                        value={value}
                    >
                        <StyledBox
                            Icon={Icon}
                            iconPlacement={iconPlacement ? iconPlacement : "left"}
                            colors={isInverted ? invertedColorSet : colorSet}
                            metrics={{
                                fontSize: 12,
                                lineHeight: 14,
                                fontWeight: 600,
                                height: 32,
                                iconSize: 24,
                                letterSpacing: .4,
                                textPaddingTop: 7,
                                textPaddingX: 16
                            }}
                        >{children}</StyledBox>
                    </ButtonRoot>;
                }
                }
            </HoverState>
        );
    }
}
