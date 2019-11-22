import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IHamburgerIconProps extends ISvgIconProps {

}

// tslint:disable: max-line-length
export class HamburgerIcon extends React.Component<IHamburgerIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
                    <g transform="translate(4.000000, 9.000000)">
                        <path d="M0,7.27272727 L16,7.27272727 L16,6 L0,6 L0,7.27272727 L0,7.27272727 Z M0,4.27272727 L16,4.27272727 L16,3 L0,3 L0,4.27272727 L0,4.27272727 Z M0,0 L0,1.27272727 L16,1.27272727 L16,0 L0,0 L0,0 Z">
                        </path>
                    </g>
                </g>
            </SvgIcon>
        );
    }
}
