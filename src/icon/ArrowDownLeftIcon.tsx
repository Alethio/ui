import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IArrowDownLeftIconProps extends ISvgIconProps {

}

export class ArrowDownLeftIcon extends React.Component<IArrowDownLeftIconProps> {
    render() {
        return <SvgIcon {...this.props} viewBoxSize={512}>
            <g transform="rotate(45, 256, 256)">
                <g transform="translate(90, 90) scale(0.65)">
                    <path d="m224 0l0 352l-96 0l128 160l128-160l-96 0l0-352z" fill="currentColor" />
                </g>
            </g>
        </SvgIcon>;
    }
}
