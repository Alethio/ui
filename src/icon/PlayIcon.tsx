import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IPlayIconProps extends ISvgIconProps {

}

export class PlayIcon extends React.Component<IPlayIconProps> {
    render() {
        return <SvgIcon {...this.props} viewBoxSize={512}>
            <path
                // tslint:disable-next-line:max-line-length
                d="m394 256c0-4-2-8-6-10l-252-146c-2-1-4-2-7-2c-6 0-11 5-11 12c0 0 0 1 0 1l0 0l0 293l0 0c1 5 5 10 11 10c2 0 4-1 6-2l0 0l253-146l0 0c4-2 6-6 6-10z"
                fill="currentColor"
            />
        </SvgIcon>;
    }
}
