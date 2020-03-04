import * as React from "react";
import styled, { css } from "../../styled-components";
import { ArrowDownIcon } from "../../icon/ArrowDownIcon";

const ExpanderIconRoot = styled<IExpanderIconProps, "div">("div")`
    display: inline-block;
    color: ${props => props.color};
    padding: 2px 8px 2px 8px;
    background-color: ${props => props.backgroundColor};
    border: 1px solid ${props => props.backgroundColor};
    border-radius: 0 2px 2px 0;
    transition: background-color .2s ease-in-out, border-color .2s ease-in-out;
`;

const Icon = styled<IExpanderIconProps, "div">("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform .2s ease-in-out;
    ${props => props.expanded ? css`
    transform: rotate(-180deg);
    ` : ``}
`;

interface IExpanderIconProps {
    expanded: boolean;
    color: string;
    backgroundColor: string;
}

export class ExpanderBaseIcon extends React.PureComponent<IExpanderIconProps> {
    render() {
        return (
            <ExpanderIconRoot {...this.props}>
                <Icon {...this.props}>
                    <ArrowDownIcon />
                </Icon>
            </ExpanderIconRoot>
        );
    }
}
