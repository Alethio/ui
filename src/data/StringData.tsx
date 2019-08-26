import * as React from "react";
import styled from "../styled-components";

const StringDataRoot = styled.div`
    padding: 14px 0;
    white-space: pre;
`;

const StringDataLine = styled.div`
    padding: 2px 8px;
    margin: 8px 0;
    background: ${props => props.theme.colors.rawDataBackground};
    color: ${props => props.theme.colors.rawDataText};
    width: fit-content;
    font-family: "Roboto Mono", monospace;
    font-size: 14px;
    line-height: 16px;

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }

    &:empty {
        display: none;
    }
`;

export interface IStringDataProps {
    children: string;
}

/** Renders a multi-line string */
export class StringData extends React.Component<IStringDataProps> {
    render() {
        return (
            <StringDataRoot>{ this.props.children.split(/\r?\n/).map((line, idx) => (
                <StringDataLine key={idx}>{ line }</StringDataLine>
            )) }</StringDataRoot>
        );
    }
}
