import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface ICogIconProps extends ISvgIconProps {

}

export class CogIcon extends React.Component<ICogIconProps> {
    render() {
        return <SvgIcon {...this.props} viewBoxSize={512}>
            <g transform="translate(64, 64) scale(0.75)">
                <path
                    // tslint:disable-next-line:max-line-length
                    d="m446 281c1-8 2-16 2-25 0-9-1-17-2-25l54-42c5-4 6-11 3-17l-51-88c-3-6-10-8-16-6l-63 26c-14-11-28-19-44-25l-9-68c-1-6-6-11-13-11l-102 0c-7 0-12 5-13 11l-9 68c-16 6-30 15-44 25l-63-26c-6-2-13 0-16 6l-51 88c-4 6-2 13 3 17l54 42c-1 8-2 17-2 25 0 8 1 17 2 25l-54 42c-5 4-6 11-3 17l51 88c3 6 10 8 16 6l63-26c14 11 28 19 44 25l9 68c1 6 6 11 13 11l102 0c7 0 12-5 13-11l9-68c16-6 30-15 44-25l63 26c6 2 13 0 16-6l51-88c3-6 2-13-3-17z m-190 65c-49 0-90-41-90-90 0-49 41-90 90-90 49 0 90 41 90 90 0 49-41 90-90 90z"
                    fill="currentColor"
                />
            </g>
        </SvgIcon>;
    }
}
