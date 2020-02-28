import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IEditIconProps extends ISvgIconProps {

}

export class EditIcon extends React.Component<IEditIconProps> {
    render() {
        return <SvgIcon {...this.props} viewBoxSize={512}>
            <g transform="translate(64, 64) scale(0.75)">
                <path
                    // tslint:disable-next-line:max-line-length
                    d="m0 405l0 107 107 0 314-315-106-106z m504-290c11-11 11-29 0-40l-67-67c-11-11-29-11-40 0l-52 52 107 107z"
                    fill="currentColor"
                />
            </g>
        </SvgIcon>;
    }
}
