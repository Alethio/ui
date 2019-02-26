import * as React from "react";
import styled, { withTheme } from "../styled-components";
import { ITheme } from "../theme/ITheme";

interface IIconProps {
    size?: number;
    color?: string;
}

interface IColorThunk {
    (theme: ITheme): string;
}

export interface IIconButtonProps {
    Icon: React.ComponentClass<IIconProps> | React.StatelessComponent<IIconProps>;
    color?: string | IColorThunk;
    iconSize?: number;
    className?: string;
    theme: ITheme;
    onClick?(): void;
}

interface IIconButtonRootProps {
    buttonColor: string | undefined;
    className?: string;
    onClick?(): void;
}

const IconButtonRoot = styled<IIconButtonRootProps, "button">("button")`
    display: block;
    background-color: transparent;
    border: none; /* Remove borders */
    color: ${({buttonColor, theme}) => buttonColor};
    cursor: pointer;
    outline: none;
    padding: 0px;
`;

class $IconButton extends React.Component<IIconButtonProps> {
    render() {
        let Icon = this.props.Icon;
        let theme = this.props.theme;
        let iconSize = this.props.iconSize;

        let color = typeof this.props.color === "function" ? this.props.color(theme) : this.props.color;

        return (
            <IconButtonRoot onClick={this.props.onClick}
                className={this.props.className}
                buttonColor={color}
            >
                <Icon color={color} size={iconSize} />
            </IconButtonRoot>
        );
    }
}

export const IconButton = withTheme($IconButton);
