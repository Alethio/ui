import * as React from "react";
import styled from "styled-components";
import { splitLongHash } from "../util/internal/hash";

const HiddenHashPartWrapper = styled.span`
    &:before {
        content: " ... ";
    }
`;

const HiddenHashPart = styled.strong`
    display: inline-block;
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
    font-size: 0;
`;

export interface IHashProps {
    children: string;
    /** Apply ellipsis (...) when hash exceeds a given length (see ellipsisThreshold) */
    useEllipsis?: boolean;
    /** How many characters should the string have at least for the ellipsis to be applied (minimum 12) */
    ellipsisThreshold?: number;
    /** How many characters to show from the beginning or end of the hash when ellipsis is applied */
    ellipsisChars?: number;
}

/**
 * Render a hash with ellipsis, but still make it possible to highlight it with the browser's "Find in page" feature
 */
export class Hash extends React.PureComponent<IHashProps> {
    static defaultProps: Pick<IHashProps, "ellipsisThreshold" | "ellipsisChars" | "useEllipsis"> = {
        ellipsisThreshold: 20,
        ellipsisChars: 6,
        useEllipsis: true
    };

    render() {
        let { children } = this.props;

        let hash = "0x" + children.replace(/^0x/, "");
        let chars = this.props.ellipsisChars!;

        let hashParts = splitLongHash(hash, this.props.ellipsisThreshold!, chars);

        return <span onCopy={this.handleCopy}>{
            !this.props.useEllipsis || !hashParts ?
                hash :
                <>
                {hashParts[0]}
                <HiddenHashPartWrapper>
                    <HiddenHashPart>{hashParts[1]}</HiddenHashPart>
                </HiddenHashPartWrapper>
                {hashParts[2]}
                </>
        }</span>;
    }

    private handleCopy: React.ClipboardEventHandler<{}> = (e) => {
        e.preventDefault();
        e.clipboardData.setData("text/plain", "0x" + this.props.children);
    }
}
