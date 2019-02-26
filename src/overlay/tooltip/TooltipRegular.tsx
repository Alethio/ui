import * as React from "react";
import { Tooltip, ITooltipProps } from "./Tooltip";
import styled from "../../styled-components";
import { TooltipText } from "./TooltipText";

const TooltipContent = styled.div`
    padding: 4px 16px;
`;

export class TooltipRegular extends React.Component<ITooltipProps> {
    static defaultProps = {
        offset: 8
    };

    render() {
        let { content, children, ...other } = this.props;
        return (
            <Tooltip {...other} content={
                <TooltipContent>
                    <TooltipText>{content}</TooltipText>
                </TooltipContent>
            }>{children}</Tooltip>
        );
    }
}
