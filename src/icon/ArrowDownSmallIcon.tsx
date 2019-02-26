import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IArrowDownSmallIconProps extends ISvgIconProps {

}

export class ArrowDownSmallIcon extends React.Component<IArrowDownSmallIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g fill="currentColor">
                        <polygon points="12 12.17 8.83 9 7.42 10.41 12 15 16.59 10.41 15.17 9"></polygon>
                    </g>
                </g>
            </SvgIcon>
        );
    }
}
