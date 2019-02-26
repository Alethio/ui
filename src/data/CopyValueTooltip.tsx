import * as React from "react";
import { TooltipRegular } from "../overlay/tooltip/TooltipRegular";
import styled from "../styled-components";
import { CopyValueButton } from "../control/button/CopyValueButton";
import { IClipboard } from "./IClipboard";

const CopyValueButtonWrapper = styled.div`
    margin: 0 0 0 16px;
`;

export interface ICopyValueTooltipProps {
    value: string;
    clipboard: IClipboard;
    children: React.ReactElement<{}>;
}

export class CopyValueTooltip extends React.Component<ICopyValueTooltipProps> {
    render() {
        return (
            <TooltipRegular content={
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
            </TooltipRegular>
        );
    }
}
