import * as React from "react";
import styled from "../../styled-components";
import { TooltipRegular } from "../../overlay/tooltip/TooltipRegular";
import { IClipboard } from "../IClipboard";
import { hexToString } from "../../util/internal/hex";
import { StringData } from "../StringData";
import { CopyValueButton } from "../../control/button/CopyValueButton";
import { Hash } from "../Hash";

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
                    <Hash ellipsisThreshold={70}>{"0x" + data.replace(/^0x/, "")}</Hash>
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
