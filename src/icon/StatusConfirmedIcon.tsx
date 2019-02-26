import * as React from "react";
import { StatusOkIcon, IStatusOkIconProps } from "./StatusOkIcon";

interface IStatusConfirmedIconProps extends IStatusOkIconProps {
}

export class StatusConfirmedIcon extends React.PureComponent<IStatusConfirmedIconProps> {
    render() {
        return (
            <StatusOkIcon {...this.props} />
        );
    }
}
