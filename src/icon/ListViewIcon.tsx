import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IListViewIconProps extends ISvgIconProps {

}

export class ListViewIcon extends React.Component<IListViewIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    <path d={
                        // tslint:disable-next-line:max-line-length
                        "M11,17 L13,17 L13,7 L11,7 L11,17 Z M7,17 L9,17 L9,7 L7,7 L7,17 Z M15,7 L15,17 L17,17 L17,7 L15,7 Z"
                    } fill="currentColor" fillRule="nonzero"></path>
                </g>
            </SvgIcon>
        );
    }
}
