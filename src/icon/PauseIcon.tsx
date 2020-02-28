import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IPauseIconProps extends ISvgIconProps {

}

export class PauseIcon extends React.Component<IPauseIconProps> {
    render() {
        return <SvgIcon {...this.props} viewBoxSize={512}>
            <path
                // tslint:disable-next-line:max-line-length
                d="m208 102c-1 0-1 0-2 0l0 0l-53 0c-6 0-11 5-11 11c0 0 0 0 0 0l0 0l0 286l0 0c0 0 0 0 0 0c0 6 5 11 11 11l55 0c6 0 11-5 11-11c0 0 0 0 0 0l0 0l0-286c0 0 0 0 0 0c0-6-5-11-11-11z m162 297l0-286c0 0 0 0 0 0c0-6-5-11-11-11c-1 0-1 0-2 0l0 0l-53 0c-6 0-11 5-11 11c0 0 0 0 0 0l0 0l0 286l0 0c0 0 0 0 0 0c0 6 5 11 11 11l55 0c6 0 11-5 11-11c0 0 0 0 0 0z"
                fill="currentColor"
            />
        </SvgIcon>;
    }
}
