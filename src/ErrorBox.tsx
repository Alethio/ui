import * as React from "react";
import { ErrorIcon } from "./icon/ErrorIcon";
import { MessageBox, IMessageBoxColors } from "./MessageBox";

export interface IErrorBoxProps {
    colors?: IMessageBoxColors;
}

export class ErrorBox extends React.Component<IErrorBoxProps> {
    render() {
        return (
            <MessageBox Icon={ErrorIcon} colors={this.props.colors}>{this.props.children}</MessageBox>
        );
    }
}
