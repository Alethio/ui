import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IEmptyIconProps extends ISvgIconProps {

}

export class EmptyIcon extends React.Component<IEmptyIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g>
                        <g>
                            <rect x="0" y="0" width="24" height="24"></rect>
                        </g>
                    </g>
                </g>
            </SvgIcon>
        );
    }
}
