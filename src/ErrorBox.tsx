import React from "react";
import { ErrorIcon } from "./icon/ErrorIcon";
import { MessageBox, IMessageBoxColors } from "./MessageBox";

export interface IErrorBoxProps {
    colors?: IMessageBoxColors;
}

/**
 * Displays an error message in a centered, floating message box
 */
export class ErrorBox extends React.Component<IErrorBoxProps> {
    render() {
        return (
            <MessageBox Icon={ErrorIcon} colors={this.props.colors}>{this.props.children}</MessageBox>
        );
    }
}
