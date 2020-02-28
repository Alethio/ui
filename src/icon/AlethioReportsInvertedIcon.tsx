import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IAlethioReportsInvertedIconProps extends ISvgIconProps {

}

export class AlethioReportsInvertedIcon extends React.Component<IAlethioReportsInvertedIconProps> {
    render() {
        return <SvgIcon {...this.props} viewBoxSize={512}>
            <g transform="translate(85, 85) scale(0.66)">
                <path
                    d="m192 512l128 0 0-512-128 0z m-192 0l128 0 0-256-128 0z m384-352l0 352 128 0 0-352z"
                    fill="currentColor"
                />
            </g>
        </SvgIcon>;
    }
}
