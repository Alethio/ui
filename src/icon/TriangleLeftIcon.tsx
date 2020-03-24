import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface ITriangleLeftIconProps extends ISvgIconProps {

}

export class TriangleLeftIcon extends React.Component<ITriangleLeftIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(12, 12) rotate(90) translate(-12, -12)">
                        <polygon points="7 10 12 15 17 10" fill="currentColor"></polygon>
                    </g>
                </g>
            </SvgIcon>
        );
    }
}
