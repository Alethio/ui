import * as React from "react";
import { Spinner } from "./Spinner";

export interface ISpinnerLiteProps {
    size?: number;
}

/** A spinner variant with a light footprint that omits borders */
export class SpinnerLite extends React.Component<ISpinnerLiteProps> {
    static defaultProps = {
        size: 24
    };

    render() {
        return (
            <Spinner size={this.props.size!} borderColor="transparent" />
        );
    }
}
