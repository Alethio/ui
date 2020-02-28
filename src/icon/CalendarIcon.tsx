import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface ICalendarIconProps extends ISvgIconProps {

}

export class CalendarIcon extends React.Component<ICalendarIconProps> {
    render() {
        return <SvgIcon {...this.props}>
            <g transform="translate(1.8, 1.8) scale(0.85)">
                <path
                    // tslint:disable-next-line:max-line-length
                    d="M20,3 L19,3 L19,1 L17,1 L17,3 L7,3 L7,1 L5,1 L5,3 L4,3 C2.9,3 2,3.9 2,5 L2,21 C2,22.1 2.9,23 4,23 L20,23 C21.1,23 22,22.1 22,21 L22,5 C22,3.9 21.1,3 20,3 Z M20,21 L4,21 L4,10 L20,10 L20,21 Z M20,8 L4,8 L4,5 L20,5 L20,8 Z"
                    fill="currentColor"
                />
            </g>
        </SvgIcon>;
    }
}
