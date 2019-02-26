import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IArrowBackDottedIconProps extends ISvgIconProps {

}

export class ArrowBackDottedIcon extends React.Component<IArrowBackDottedIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-2.000000, -2.000000)">
                        <g transform={
                            "translate(14.000000, 14.000000) scale(-1, 1) " +
                            "translate(-14.000000, -14.000000) translate(2.000000, 2.000000)"
                        }>
                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                            <path d={
                                "M16,4 L24,12 L16,20 L14.59,18.59 L20.17,13 L12,13 L12,11 L20.17,11 " +
                                "L14.59,5.41 L16,4 Z M8,11 L10,11 L10,13 L8,13 L8,11 Z M4,11 L6,11 " +
                                "L6,13 L4,13 L4,11 Z M0,11 L2,11 L2,13 L0,13 L0,11 Z"
                            } fill="currentColor" fillRule="nonzero"></path>
                        </g>
                    </g>
                </g>
            </SvgIcon>
        );
    }
}
