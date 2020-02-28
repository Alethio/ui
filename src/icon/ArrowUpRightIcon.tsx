import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IArrowUpRightIconProps extends ISvgIconProps {

}

export class ArrowUpRightIcon extends React.Component<IArrowUpRightIconProps> {
    render() {
        return <SvgIcon {...this.props} viewBoxSize={512}>
            <g transform="rotate(45, 256, 256)">
                <g transform="translate(90, 90) scale(0.65)">
                    <path d="m256 0l-128 160l96 0l0 352l64 0l0-352l96 0z" fill="currentColor" />
                </g>
            </g>
        </SvgIcon>;
    }
}
