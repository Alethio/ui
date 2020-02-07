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
                        "M11,9 L13,9 L13,7 L11,7 L11,9 Z M11,13 L13,13 L13,11 L11,11 L11,13 Z M11,17 L13,17 L13,15 L11,15 L11,17 Z M7,9 L9,9 L9,7 L7,7 L7,9 Z M7,13 L9,13 L9,11 L7,11 L7,13 Z M7,17 L9,17 L9,15 L7,15 L7,17 Z M15,7 L15,9 L17,9 L17,7 L15,7 Z M15,11 L15,13 L17,13 L17,11 L15,11 Z M15,15 L15,17 L17,17 L17,15 L15,15 Z"
                    } fill="currentColor" fillRule="nonzero"></path>
                </g>
            </SvgIcon>
        );
    }
}
