import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IKeyboardReturnIconProps extends ISvgIconProps {

}

export class KeyboardReturnIcon extends React.Component<IKeyboardReturnIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polygon
                        points="18 7 18 11 6.83 11 10.41 7.41 9 6 3 12 9 18 10.41 16.59 6.83 13 20 13 20 7"
                        fill="currentColor" fillRule="nonzero"
                    >
                    </polygon>
                </g>
            </SvgIcon>
        );
    }
}
