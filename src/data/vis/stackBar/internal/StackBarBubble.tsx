import * as React from "react";
import styled from "../../../../styled-components";

export interface IStackBarBubbleProps {
    color: string;
    className?: string;
}

class $StackBarBubble extends React.Component<IStackBarBubbleProps> {
    render() {
        return (
            <div className={this.props.className}></div>
        );
    }
}

const SIZE = 8;

/** @internal */
export const StackBarBubble = styled($StackBarBubble)`
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: ${SIZE / 2}px;
    margin-top: -${SIZE / 2}px;
    background-color: ${props => props.color};
    vertical-align: middle;
    display: inline-block;
`;
