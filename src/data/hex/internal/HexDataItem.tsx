import * as React from "react";
import styled from "../../../styled-components";

interface IHexDataItemProps {
    value: string;
}

const HexDataItemRoot = styled<IHexDataItemProps, "div">("div")`
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    font-weight: 600;
    ${props => props.value === "00" ? "color: " + props.theme.colors.hexDataItem + ";" : undefined};
`;

/** @internal */
export class HexDataItem extends React.PureComponent<IHexDataItemProps> {
    render() {
        return (
            <HexDataItemRoot value={this.props.value}>{ this.props.value }</HexDataItemRoot>
        );
    }
}
