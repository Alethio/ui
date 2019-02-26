import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IArrowDownIconProps extends ISvgIconProps {

}

export class ArrowDownIcon extends React.Component<IArrowDownIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    <polygon fill="currentColor" fillRule="nonzero" points={
                        "16.59 8.59 12 13.17 7.41 8.59 6 10 12 16 18 10"
                    }></polygon>
                </g>
            </SvgIcon>
        );
    }
}
