import * as React from "react";
import styled from "styled-components";
import { HexDataItem } from "./HexDataItem";

const HexDataContentRoot = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

interface IHexDataContentProps {
    data: string;
}

/** @internal */
export class HexDataContent extends React.PureComponent<IHexDataContentProps> {
    render() {
        return (
            <HexDataContentRoot>
                {this.props.data
                    .match(/.{2}/g)!
                    .map((v, idx) => <HexDataItem key={idx} value={v} />)}
            </HexDataContentRoot>
        );
    }
}
