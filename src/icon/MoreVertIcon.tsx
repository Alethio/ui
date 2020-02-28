import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IMoreVertIconProps extends ISvgIconProps {

}

// tslint:disable:max-line-length
export class MoreVertIcon extends React.Component<IMoreVertIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <circle fill="currentColor" cx="12" cy="6" r="2"/>
                <circle fill="currentColor" cx="12" cy="12" r="2"/>
                <circle fill="currentColor" cx="12" cy="18" r="2"/>
            </SvgIcon>
        );
    }
}
