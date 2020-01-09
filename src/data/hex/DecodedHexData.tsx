import * as React from "react";
import styled from "../../styled-components";
import { Tooltip } from "../../overlay/tooltip/Tooltip";
import { IClipboard } from "../IClipboard";
import { hexToString } from "../../util/internal/hex";
import { StringData } from "../StringData";
import { CopyValueButton } from "../../control/button/CopyValueButton";
import { Hash } from "../Hash";

const CopyButtonWrapper = styled.div`
    margin: 0 8px 0 16px;
`;

interface IDecodedHexDataProps {
    /* 0x string representation of the input hex data */
    data: string;
    clipboard?: IClipboard;
}

/** Decodes input hex data (0x string representation) and shows the decoded string */
export class DecodedHexData extends React.PureComponent<IDecodedHexDataProps> {
    render() {
        let { data } = this.props;
        return (
            <Tooltip content={
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
            </Tooltip>
        );
    }
}
