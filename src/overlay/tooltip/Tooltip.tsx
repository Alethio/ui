import * as React from "react";
import { TooltipBase, ITooltipProps } from "./TooltipBase";
import styled from "../../styled-components";
import { TooltipText } from "./TooltipText";

const TooltipContent = styled.div`
    padding: 4px 16px;
`;

/**
 * Tooltip wrapper with a sane styling defaults
 */
export class Tooltip extends React.Component<ITooltipProps> {
    static defaultProps = {
        offset: 8
    };

    render() {
        let { content, children, ...other } = this.props;
        return (
            <TooltipBase {...other} content={
                <TooltipContent>
                    <TooltipText>{content}</TooltipText>
                </TooltipContent>
            }>{children}</TooltipBase>
        );
    }
}
