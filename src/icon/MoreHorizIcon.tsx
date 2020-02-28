import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IMoreHorizIconProps extends ISvgIconProps {

}

export class MoreHorizIcon extends React.Component<IMoreHorizIconProps> {
    render() {
        return <SvgIcon {...this.props} viewBoxSize={512}>
            <g transform="translate(60, 60) scale(0.8)">
                <path
                    // tslint:disable-next-line:max-line-length
                    d="m77 200c16 0 29 5 40 16c11 11 16 24 16 40c0 15-5 28-16 39c-11 12-24 17-40 17c-16 0-29-5-40-17c-11-11-17-24-17-39c0-16 6-29 17-40c11-11 24-16 40-16m179 0c16 0 29 5 40 16c11 11 16 24 16 40c0 15-5 28-17 39c-11 12-24 17-39 17c-15 0-28-5-39-17c-12-11-17-24-17-39c0-16 5-29 16-40c11-11 24-16 40-16m179 0c16 0 29 5 40 16c11 11 17 24 17 40c0 15-6 28-17 39c-11 12-24 17-40 17c-15 0-29-5-40-17c-11-11-16-24-16-39c0-16 5-29 16-40c11-11 25-16 40-16"
                    fill="currentColor"
                />
            </g>
        </SvgIcon>;
    }
}
