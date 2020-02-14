import * as React from "react";
import { StackBarBubble } from "./internal/StackBarBubble";
import styled from "styled-components";

export interface IStackBarTooltipTextProps {
    bubbleColor: string;
}

const StackBarTooltipTextRoot = styled.div`
    > span {
        padding-left: 8px;
    }

    > span:first-child {
        padding-left: 0;
    }
`;

export class StackBarTooltipText extends React.Component<IStackBarTooltipTextProps> {
    render() {
        return (
            <StackBarTooltipTextRoot>
                <span>
                    <StackBarBubble color={this.props.bubbleColor} />
                </span>
                { this.props.children }
            </StackBarTooltipTextRoot>
        );
    }
}
