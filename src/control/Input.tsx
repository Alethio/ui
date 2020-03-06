import styled from "../styled-components";
import React from "react";
import { InputBase, HEIGHT } from "./InputBase";
import { ISvgIconProps } from "../util/react/SvgIcon";

const ICON_SPACING = (HEIGHT - 24) / 2;

const InputContainer = styled.div`
    position: relative;
    width: 100%;
`;

const RightIconContainer = styled.div`
    pointer-events: none;
    position: absolute;
    top: ${ICON_SPACING}px;
    right: ${ICON_SPACING}px;
    color: ${props => props.theme.colors.input.placeholder};
`;

const LeftIconContainer = styled.div`
    pointer-events: none;
    position: absolute;
    top: ${ICON_SPACING}px;
    left: 16px;
    color: ${props => props.theme.colors.input.placeholder};
`;

const StyledInputBase = styled(InputBase)<{ hasLeftIcon: boolean; hasRightIcon: boolean; }>`
    padding-left: ${props => 16 + (props.hasLeftIcon ? 24 + 8 : 0) + "px"};
    padding-right: ${props => props.hasRightIcon ? "36px" : "16px" };
`;

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    LeftIcon?: React.ComponentType<ISvgIconProps>;
    RightIcon?: React.ComponentType<ISvgIconProps>;
    /** Align text to right (useful for numbers) */
    alignRight?: boolean;
    innerRef?(instance: HTMLInputElement): void;
}

export class Input extends React.Component<IInputProps> {
    render() {
        let { LeftIcon, RightIcon, ...inputProps } = this.props;

        return <InputContainer>
            { LeftIcon && <LeftIconContainer><LeftIcon /></LeftIconContainer> }
            <StyledInputBase
                {...inputProps as React.HTMLAttributes<HTMLInputElement>}
                hasLeftIcon={!!LeftIcon}
                hasRightIcon={!!RightIcon}
            />
            { RightIcon && <RightIconContainer><RightIcon /></RightIconContainer> }
        </InputContainer>;
    }
}
