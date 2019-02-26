import * as React from "react";
import { ValueBox, IValueBoxProps } from "../../layout/content/box/ValueBox";
import { Hash } from "../Hash";
import { IClipboard } from "../IClipboard";
import { CopyValueTooltip } from "../CopyValueTooltip";

export interface IHashValueBoxProps {
    children: string;
    variant?: IValueBoxProps["variant"];
    colors?: IValueBoxProps["colors"];
    Icon?: IValueBoxProps["Icon"];
    noTooltip?: boolean;
    clipboard?: IClipboard;
}

export class HashValueBox extends React.Component<IHashValueBoxProps> {
    render() {
        let { children, clipboard } = this.props;

        let box = <ValueBox
            variant={this.props.variant}
            colors={this.props.colors}
            Icon={this.props.Icon}
        >
            <Hash>{ children }</Hash>
        </ValueBox>;

        if (this.props.noTooltip || !clipboard) {
            return box;
        }

        return (
            <CopyValueTooltip value={"0x" + children.replace(/^0x/, "")} clipboard={clipboard}>
                { box }
            </CopyValueTooltip>
        );
    }
}
