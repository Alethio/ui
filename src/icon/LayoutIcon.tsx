import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface ILayoutIconProps extends ISvgIconProps {

}

export class LayoutIcon extends React.Component<ILayoutIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path
                        // tslint:disable-next-line:max-line-length
                        d="M20,4 L4,4 C2.9,4 2.01,4.9 2.01,6 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 C22,4.9 21.1,4 20,4 L20,4 Z M15,18 L4,18 L4,14 L15,14 L15,18 L15,18 Z M15,13 L4,13 L4,9 L15,9 L15,13 L15,13 Z M20,18 L16,18 L16,9 L20,9 L20,18 L20,18 Z"
                        fill="currentColor"></path>
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                </g>
            </SvgIcon>
        );
    }
}
