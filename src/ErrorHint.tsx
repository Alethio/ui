import * as React from "react";
import { TooltipRegular } from "./overlay/tooltip/TooltipRegular";
import { ErrorIcon, IErrorIconProps } from "./icon/ErrorIcon";

interface IErrorHintProps extends IErrorIconProps {
}

export class ErrorHint extends React.Component<IErrorHintProps> {
    render() {
        let { children, ...props } = this.props;

        return (
            <TooltipRegular content={children}>
                <ErrorIcon {...props} />
            </TooltipRegular>
        );
    }
}
