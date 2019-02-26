import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IGridViewIconProps extends ISvgIconProps {

}

export class GridViewIcon extends React.Component<IGridViewIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    <path d={
                        // tslint:disable-next-line:max-line-length
                        "M4,11 L11,11 L11,4 L4,4 L4,11 Z M4,20 L11,20 L11,13 L4,13 L4,20 Z M13,20 L20,20 L20,13 L13,13 L13,20 Z M13,4 L13,11 L20,11 L20,4 L13,4 Z"
                    } fill="currentColor" fillRule="nonzero"></path>
                </g>
            </SvgIcon>
        );
    }
}
