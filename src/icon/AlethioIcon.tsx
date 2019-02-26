import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IAlethioIconProps extends ISvgIconProps {
}

export class AlethioIcon extends React.PureComponent<IAlethioIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path fill="currentColor"
                        // tslint:disable-next-line:max-line-length
                        d="M21.25,16.44h0a5,5,0,0,1-3.16-2L15.27,8.92a5.15,5.15,0,0,1-.14-3.74h0a3.31,3.31,0,1,0-4,2.34h0a5,5,0,0,1,3.13,2L17.07,15a5.2,5.2,0,0,1,.14,3.74h0a3.3,3.3,0,1,0,4-2.34Z"
                    />
                    <path fill="currentColor"
                        // tslint:disable-next-line:max-line-length
                        d="M7.8,11.63l-2,2.83a5,5,0,0,1-3.17,2h0A3.31,3.31,0,1,0,6.7,18.78h0A5.15,5.15,0,0,1,6.84,15l1.49-3.1A.31.31,0,0,0,7.8,11.63Z"
                    />
                </g>
            </SvgIcon>
        );
    }
}
