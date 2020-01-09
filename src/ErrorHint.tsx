import * as React from "react";
import { Tooltip } from "./overlay/tooltip/Tooltip";
import { ErrorIcon, IErrorIconProps } from "./icon/ErrorIcon";

interface IErrorHintProps extends IErrorIconProps {
}

/** Shows an error icon with an error message as a tooltip */
export class ErrorHint extends React.Component<IErrorHintProps> {
    render() {
        let { children, ...props } = this.props;

        return (
            <Tooltip content={children}>
                <ErrorIcon {...props} />
            </Tooltip>
        );
    }
}
