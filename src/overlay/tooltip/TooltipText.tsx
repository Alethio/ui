import * as React from "react";
import styled from "../../styled-components";

interface ITooltipTextProps {
    textColor?: string;
}

const TooltipTextRoot = styled<ITooltipTextProps, "div">("div")`
    font-size: 16px;
    line-height: 32px;
    font-weight: 500;
    letter-spacing: normal;

    color: ${props => (
        props.textColor ?
        props.textColor :
        "black"
    )};
`;

export class TooltipText extends React.Component<ITooltipTextProps> {
    render() {
        return <TooltipTextRoot textColor={this.props.textColor}>{this.props.children}</TooltipTextRoot>;
    }
}
