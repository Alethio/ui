import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IAlethioApiIconProps extends ISvgIconProps {
}

export class AlethioApiIcon extends React.PureComponent<IAlethioApiIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    <path d={
                        // tslint:disable-next-line:max-line-length
                        "M22,12 C22,17.52 17.52,22 12,22 C6.48,22 2,17.52 2,12 C2,6.48 6.48,2 12,2 C17.52,2 22,6.48 22,12 Z M15,6.5 L15,9 L11,9 L11,11 L15,11 L15,13.5 L18.5,10 L15,6.5 Z M9,17.5 L9,15 L13,15 L13,13 L9,13 L9,10.5 L5.5,14 L9,17.5 Z"
                     } fill="currentColor" fillRule="nonzero"></path>
                </g>
            </SvgIcon>
        );
    }
}
