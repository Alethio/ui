import * as React from "react";
import { MessageBox, IMessageBoxColors } from "./MessageBox";
import { SpinnerRegular } from "./fx/SpinnerRegular";
import { DelayedRender } from "./util/react/DelayedRender";

export interface ILoadingBoxProps {
    colors?: IMessageBoxColors;
}

export class LoadingBox extends React.Component<ILoadingBoxProps> {
    render() {
        return (
            <DelayedRender delay={1}>
                <MessageBox Icon={SpinnerRegular} colors={this.props.colors}>{this.props.children}</MessageBox>
            </DelayedRender>
        );
    }
}
