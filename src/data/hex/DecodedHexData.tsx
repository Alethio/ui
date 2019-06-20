import * as React from "react";
import styled from "../../styled-components";
import { TooltipRegular } from "../../overlay/tooltip/TooltipRegular";
import { IClipboard } from "../IClipboard";
import { hexToString } from "../../util/internal/hex";
import { StringData } from "../StringData";
import { CopyValueButton } from "../../control/button/CopyValueButton";

const CopyButtonWrapper = styled.div`
    margin: 0 8px 0 16px;
`;

interface IDecodedHexDataProps {
    data: string;
    clipboard?: IClipboard;
}
export class DecodedHexData extends React.PureComponent<IDecodedHexDataProps> {
    render() {
        let { data } = this.props;
        return (
            <TooltipRegular content={
                <div style={{display: "flex", alignItems: "center"}}>
                    <div>{"0x" + data.replace(/^0x/, "")}</div>
                    <CopyButtonWrapper>
                        <CopyValueButton
                            value={"0x" + this.props.data.replace(/^0x/, "")}
                            clipboard={this.props.clipboard}
                        />
                    </CopyButtonWrapper>
                </div>
            }>
                <StringData>
                    { hexToString(data) }
                </StringData>
            </TooltipRegular>
        );
    }
}
