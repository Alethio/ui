import * as React from "react";
import styled, { css } from "../styled-components";
import { Box, IBoxProps } from "../layout/content/box/Box";
import { IBoxColorsThunk } from "../layout/content/box/IBoxColorsThunk";
import { HoverState } from "../util/react/HoverState";
import { ITheme } from "../theme/ITheme";
import { IBoxColors } from "../layout/content/box/IBoxColors";
import Color from "color";

interface IButtonRootProps {
    elevationType?: ElevationType;
    disabled?: boolean;
    rounded?: boolean;
    buttonColors?: ButtonColors;
    colors: IBoxColors | IBoxColorsThunk<ITheme>;
}

const ButtonRoot = styled<IButtonRootProps, "button">("button")`
    ${props => !props.disabled ? css`
    cursor: pointer;
    ` : ``}
    user-select: none;
    text-transform: uppercase;

    ${props => (props.elevationType === "floating" && props.buttonColors === "primary") ? css`
    box-shadow: ${`0 8px 16px ${Color(getColors(props.colors, props.theme).background || "transparent").alpha(0.6)}`};
    ` : ``}
    ${props => (props.elevationType === "embossed" && props.buttonColors === "primary") ? css`
    box-shadow: ${`0 4px 8px ${Color(getColors(props.colors, props.theme).background || "transparent").alpha(0.6)}`};
    ` : ``}

    border-radius: ${props => props.rounded ? "100px" : "4px" };

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
type ElevationType = "floating" | "embossed";
type InteractionState = "normal" | "hover" | "disabled";
type GetColorSetFn = (colorVariants: ButtonColors, state: InteractionState) => IBoxColorsThunk<ITheme>;

const getColorSet: GetColorSetFn = (colorVariant, state) => (theme) => theme.colors.button[colorVariant][state];

type IHtmlButtonProps = Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "autoFocus" | "name" | "type" | "value">;

export interface IButtonProps extends IHtmlButtonProps {
    Icon?: IBoxProps["Icon"];
    iconPlacement?: IBoxProps["iconPlacement"];
    colors?: ButtonColors;
    elevationType?: ElevationType;
    /** Rounded 50% corners */
    rounded?: boolean;
    inverted?: boolean;
    children?: string;
    disabled?: boolean;
    onClick?(): void;
}

export class Button extends React.Component<IButtonProps> {
    static defaultProps: Pick<IButtonProps, "colors"> = {
        colors: "secondary"
    };

    render() {
        let { Icon, iconPlacement, elevationType, disabled, rounded,
            inverted, colors, autoFocus, name, type, value, children } = this.props;
        return (
            <HoverState>
                {(hover) =>
                <ButtonRoot
                    onClick={!this.props.disabled ? this.props.onClick : void 0}
                    elevationType={elevationType}
                    buttonColors={colors}
                    colors={getColorSet(colors!, !disabled ? hover ? "hover" : "normal" : "disabled")}
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
                        colors={getColorSet(colors!, !disabled ? hover ? "hover" : "normal" : "disabled")}
                        inverted={inverted}
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
                </ButtonRoot>
                }
            </HoverState>
        );
    }
}

const getColors = (colors: IBoxColors | IBoxColorsThunk<ITheme>, theme: ITheme) => {
    if (typeof colors === "function") {
        return colors(theme);
    }
    return colors;
};
