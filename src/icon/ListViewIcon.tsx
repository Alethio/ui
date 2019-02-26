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
                        "M4,20 L8,20 L8,4 L4,4 L4,20 Z M10,4 L10,20 L14,20 L14,4 L10,4 Z M16,4 L16,20 L20,20 L20,4 L16,4 Z"
                    } fill="currentColor" fillRule="nonzero"></path>
                </g>
            </SvgIcon>
        );
    }
}
