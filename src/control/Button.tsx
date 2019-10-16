import * as React from "react";
import styled, { css } from "../styled-components";
import { Box, IBoxProps } from "../layout/content/box/Box";
import { IBoxColorsThunk } from "../layout/content/box/IBoxColorsThunk";
import { HoverState } from "../util/react/HoverState";
import { ITheme } from "../theme/ITheme";

interface IButtonRootProps {
    floating?: boolean;
    disabled?: boolean;
}

const ButtonRoot = styled<IButtonRootProps, "div">("div")`
    cursor: pointer;
    text-transform: uppercase;
    ${props => props.floating ? css`
    box-shadow: 0 8px 16px rgba(167, 181, 209, 0.6);
    ` : ``}
    ${props => props.disabled ? css`
    opacity: 0.75;
    ` : void 0}
`;

const StyledBox = styled(Box)`
    border-radius: 4px;
    transition: background-color .2s ease-in-out, border-color .2s ease-in-out;
`;

type ButtonColors = "primary" | "secondary" | "special1" | "special2";

const colorSets: Record<ButtonColors, (hover: boolean, disabled?: boolean) => IBoxColorsThunk<ITheme>> = {
    primary: (hover, disabled) => (theme) => {
        let background = hover ? theme.colors.buttonPrimaryBgActive : theme.colors.buttonPrimaryBg;
        return {
            background: disabled ? theme.colors.base.secondary.color : background,
            text: disabled ? theme.colors.base.disabled : theme.colors.buttonPrimaryText
        };
    },
    secondary: (hover, disabled) => (theme) => {
        let border = hover ? theme.colors.buttonSecondaryBorderActive : theme.colors.buttonSecondaryBorder;
        return {
            background: hover ? theme.colors.buttonSecondaryBgActive : theme.colors.buttonSecondaryBg,
            text: disabled ? theme.colors.base.disabled : theme.colors.buttonSecondaryText,
            border: disabled ? theme.colors.base.secondary.color : border
        };
    },
    special1: (hover) => (theme) => {
        return {
            background: hover ? theme.colors.buttonPrimaryBg : theme.colors.base.primary.contrast,
            text: hover ? theme.colors.base.primary.contrast : theme.colors.buttonPrimaryBg
        };
    },
    special2: (hover) => (theme) => {
        return {
            background: hover ? theme.colors.buttonPrimaryBg : theme.colors.base.secondary.color,
            text: theme.colors.base.primary.contrast
        };
    }
};

export interface IButtonProps {
    Icon?: IBoxProps["Icon"];
    iconPlacement?: IBoxProps["iconPlacement"];
    colors?: ButtonColors;
    floating?: boolean;
    children?: string;
    disabled?: boolean;
    onClick?(): void;
}

export class Button extends React.Component<IButtonProps> {
    static defaultProps: Pick<IButtonProps, "colors"> = {
        colors: "secondary"
    };

    render() {
        let { Icon, iconPlacement, floating, disabled, colors, children} = this.props;
        return (
            <HoverState>
                {(hover) =>
                <ButtonRoot
                    onClick={!this.props.disabled ? this.props.onClick : void 0}
                    floating={floating}
                    disabled={disabled}
                >
                    <StyledBox
                        Icon={Icon}
                        iconPlacement={iconPlacement ? iconPlacement : "left"}
                        colors={colorSets[colors!](!this.props.disabled ? hover : false, this.props.disabled)}
                        metrics={{
                            fontSize: 12,
                            lineHeight: 14,
                            fontWeight: 700,
                            height: 36,
                            iconSize: 24,
                            letterSpacing: .4,
                            textPaddingTop: 9,
                            textPaddingX: 16
                        }}
                    >{children}</StyledBox>
                </ButtonRoot>
                }
            </HoverState>
        );
    }
}
