import * as React from "react";
import styled, { css } from "../../styled-components";
import { ArrowDownIcon } from "../../icon/ArrowDownIcon";

const ExpanderIconRoot = styled<IExpanderIconProps, "span">("span")`
    color: ${props => props.expanded ? props.theme.colors.expanderOpenIcon : props.theme.colors.expanderIcon};
    padding-top: 1px;
`;

const Icon = styled<IExpanderIconProps, "div">("div")`
    transition: transform .2s ease-in-out;
    ${props => props.expanded ? css`
    transform: rotate(-180deg);
    ` : ``}
`;

interface IExpanderIconProps {
    expanded: boolean;
}

export class ExpanderIcon extends React.PureComponent<IExpanderIconProps> {
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
