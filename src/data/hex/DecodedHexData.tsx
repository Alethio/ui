import * as React from "react";
import styled from "../../styled-components";
import { TooltipRegular } from "../../overlay/tooltip/TooltipRegular";
import { IconButton } from "../../control/IconButton";
import { IClipboard } from "../IClipboard";
import { hexToString } from "../../util/internal/hex";
import { StringData } from "../StringData";
import { CopyIcon } from "../../icon/CopyIcon";
import { Clipboard } from "@puzzl/browser/lib/Clipboard";

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
                        <IconButton
                            Icon={CopyIcon}
                            color={theme => theme.colors.copyIcon}
                            onClick={this.copyExtraData}
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
    private copyExtraData = () => {
        let clipboard = this.props.clipboard || new Clipboard(document);
        clipboard.copy("0x" + this.props.data.replace(/^0x/, ""));
    }
}
