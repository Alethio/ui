import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IArrowBackwardIconProps extends ISvgIconProps {

}

export class ArrowBackwardIcon extends React.Component<IArrowBackwardIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(12, 12) rotate(180) translate(-12, -12)">
                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                        <polygon fill="currentColor" fillRule="nonzero" opacity="0.900000036" points={
                            "12 4 10.59 5.41 16.17 11 4 11 4 13 16.17 13 10.59 18.59 12 20 20 12"
                        }></polygon>
                    </g>
                </g>
            </SvgIcon>
        );
    }
}
