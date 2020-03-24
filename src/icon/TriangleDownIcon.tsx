import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface ITriangleDownIconProps extends ISvgIconProps {

}

export class TriangleDownIcon extends React.Component<ITriangleDownIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polygon points="7 10 12 15 17 10" fill="currentColor"></polygon>
                </g>
            </SvgIcon>
        );
    }
}
