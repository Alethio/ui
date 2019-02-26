import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface ICloseSmallIconProps extends ISvgIconProps {
}

export class CloseSmallIcon extends React.Component<ICloseSmallIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    <polygon fill="currentColor" fillRule="nonzero"
                        // tslint:disable-next-line:max-line-length
                        points="14.8284271 16.2426407 12 13.4142136 9.17157288 16.2426407 7.75735931 14.8284271 10.5857864 12 7.75735931 9.17157288 9.17157288 7.75735931 12 10.5857864 14.8284271 7.75735931 16.2426407 9.17157288 13.4142136 12 16.2426407 14.8284271"
                    ></polygon>
                </g>
            </SvgIcon>
        );
    }
}
