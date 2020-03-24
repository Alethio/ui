import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface ITriangleUpIconProps extends ISvgIconProps {

}

export class TriangleUpIcon extends React.Component<ITriangleUpIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(12, 12) scale(1, -1) translate(-12, -12)">
                        <polygon points="7 10 12 15 17 10" fill="currentColor"></polygon>
                    </g>
                </g>
            </SvgIcon>
        );
    }
}
