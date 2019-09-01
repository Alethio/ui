import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IHamburgerSkinnyIconProps extends ISvgIconProps {

}

export class HamburgerSkinnyIcon extends React.Component<IHamburgerSkinnyIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g fill="#99A7C2">
                            <polygon points="4 15.2727273 20 15.2727273 20 14 4 14"></polygon>
                            <polygon points="4 12.2727273 20 12.2727273 20 11 4 11"></polygon>
                            <polygon points="4 8 4 9.27272727 20 9.27272727 20 8"></polygon>
                        </g>
                    </g>
            </SvgIcon>
        );
    }
}
