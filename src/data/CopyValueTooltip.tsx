import * as React from "react";
import { Tooltip } from "../overlay/tooltip/Tooltip";
import styled from "styled-components";
import { CopyValueButton } from "../control/button/CopyValueButton";
import { IClipboard } from "./IClipboard";

const CopyValueButtonWrapper = styled.div`
    margin: 0 0 0 16px;
`;

export interface ICopyValueTooltipProps {
    value: string;
    clipboard?: IClipboard;
    children: React.ReactElement<{}>;
}

/** Wraps an element with a tooltip showing a predefined value that can be easily copied clipboard */
export class CopyValueTooltip extends React.Component<ICopyValueTooltipProps> {
    render() {
        return (
            <Tooltip content={
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div>{this.props.value}</div>
                    <CopyValueButtonWrapper>
                        <CopyValueButton
                            value={this.props.value}
                            clipboard={this.props.clipboard}
                        />
                    </CopyValueButtonWrapper>
                </div>
            }>
                { this.props.children }
            </Tooltip>
        );
    }
}
