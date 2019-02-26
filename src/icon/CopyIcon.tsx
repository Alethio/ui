import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface ICopyIconProps extends ISvgIconProps {
}

export class CopyIcon extends React.Component<ICopyIconProps> {
    render() {
        return (
            <SvgIcon>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                        <path d={
                            // tslint:disable-next-line:max-line-length
                            "M15,4 L6,4 C4.9,4 4,4.9 4,6 L4,14 L6,14 L6,6 L15,6 L15,4 Z M18,8 L10,8 C8.9,8 8,8.9 8,10 L8,18 C8,19.1 8.9,20 10,20 L18,20 C19.1,20 20,19.1 20,18 L20,10 C20,8.9 19.1,8 18,8 Z M18,18 L10,18 L10,10 L18,10 L18,18 Z"
                        } fill="currentColor" fillRule="nonzero"></path>
                </g>
            </SvgIcon>
        );
    }
}
