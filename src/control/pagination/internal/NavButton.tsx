import * as React from "react";
import styled, { css } from "styled-components";

const BUTTON_SIZE = 36;
const ICON_SIZE = 24;
const BORDER_WIDTH = 1;

const NavButtonRoot = styled.div<INavButtonProps>`
    cursor: ${props => !props.disabled ? "pointer" : "default"};
    padding: ${(BUTTON_SIZE - ICON_SIZE - 2 * BORDER_WIDTH) / 2}px;
    border-radius: ${props => props.theme.spacing.borderRadius.thin}px;
    border: ${BORDER_WIDTH}px solid ${props => props.theme.colors.paginationBtnBorder};
    color: ${props => props.disabled ?
        props.theme.colors.paginationBtnDisabledText :
        props.theme.colors.paginationBtnText};
    background-color: ${props => props.theme.colors.paginationBtnBg};
    outline: 0;

    ${props => !props.disabled ? css`
    &:hover {
        color: ${props.theme.colors.paginationBtnHoverText};
    }
    ` : ``};
`;

interface IIconProps {
    size?: number;
}

/** @internal */
export interface INavButtonProps {
    Icon: React.ComponentClass<IIconProps> | React.StatelessComponent<IIconProps>;
    disabled?: boolean;
    onClick?(): void;
}

/** @internal */
export class NavButton extends React.Component<INavButtonProps> {
    render() {
        let { onClick, Icon, disabled } = this.props;

        return (
            <NavButtonRoot onClick={!disabled ? onClick : void 0} Icon={Icon} disabled={disabled}>
                <Icon />
            </NavButtonRoot>
        );
    }
}
