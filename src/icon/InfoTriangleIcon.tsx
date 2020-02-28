import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IInfoTriangleIconProps extends ISvgIconProps {

}

export class InfoTriangleIcon extends React.Component<IInfoTriangleIconProps> {
    render() {
        return <SvgIcon {...this.props} viewBoxSize={512}>
            <path
                // tslint:disable-next-line:max-line-length
                d="m499 447c4 6 4 12 0 18c-3 5-8 8-15 8c0 0-457 0-457 0c-6 0-11-3-14-8c-4-6-4-12-1-18c0 0 228-400 228-400c3-6 8-9 16-9c7 0 12 3 15 9c0 0 228 400 228 400m-215-25c0 0 0-51 0-51c0 0-56 0-56 0c0 0 0 51 0 51c0 0 56 0 56 0m0-89c0 0 0-154 0-154c0 0-56 0-56 0c0 0 0 154 0 154c0 0 56 0 56 0"
                fill="currentColor"
            />
        </SvgIcon>;
    }
}
