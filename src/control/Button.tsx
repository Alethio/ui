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

type ButtonColors = "primary" | "secondary";

const colorSets: Record<ButtonColors, (hover: boolean) => IBoxColorsThunk<ITheme>> = {
    primary: (hover) => (theme) => ({
        background: hover ? theme.colors.buttonPrimaryBgActive : theme.colors.buttonPrimaryBg,
        text: theme.colors.buttonPrimaryText
    }),
    secondary: (hover) => (theme) => ({
        background: hover ? theme.colors.buttonSecondaryBgActive : theme.colors.buttonSecondaryBg,
        text: theme.colors.buttonSecondaryText
    })
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
                        colors={colorSets[colors!](!this.props.disabled ? hover : false)}
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
