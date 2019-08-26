import * as React from "react";
import styled from "./styled-components";
import { ISvgIconProps } from "./util/react/SvgIcon";
import { IBoxColorsThunk } from "./layout/content/box/IBoxColorsThunk";
import { ITheme } from "./theme/ITheme";

const colorSets: Record<IMessageBoxColors, IBoxColorsThunk<ITheme>> = {
    primary: (theme) => ({
        background: theme.colors.messageBoxPrimaryBg,
        text: theme.colors.messageBoxPrimaryText,
        border: theme.colors.messageBoxPrimaryBorder
    }),
    secondary: (theme) => ({
        background: theme.colors.messageBoxSecondaryBg,
        text: theme.colors.messageBoxSecondaryText,
        border: theme.colors.messageBoxSecondaryBorder
    })
};

const MessageBoxRoot = styled<IMessageBoxRootProps, "div">("div")`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.colors(props.theme).background};
    color: ${props => props.colors(props.theme).text};
    border: 1px solid ${props => props.colors(props.theme).border};
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.04);
    box-sizing: border-box;
    width: 480px;
    max-width: 100%;
    padding: 48px;
    text-align: center;
`;

const MessageBoxIcon = styled.div`
    display: inline-block;
`;

const MessageBoxText = styled.div`
    margin-top: 20px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
`;

export type IMessageBoxColors = "primary" | "secondary";

interface IMessageBoxRootProps {
    colors: IBoxColorsThunk<ITheme>;
}

export interface IMessageBoxProps {
    Icon: React.ComponentType<ISvgIconProps>;
    colors?: IMessageBoxColors;
}

/** Shows a centered, floating message box with an icon and text */
export class MessageBox extends React.Component<IMessageBoxProps> {
    static defaultProps: Pick<IMessageBoxProps, "colors"> = {
        colors: "primary"
    };

    render() {
        let { Icon, colors } = this.props;

        return (
            <MessageBoxRoot colors={colorSets[colors!]}>
                <MessageBoxIcon>
                    <Icon size={48} />
                </MessageBoxIcon>
                <MessageBoxText>{this.props.children}</MessageBoxText>
            </MessageBoxRoot>
        );
    }
}
