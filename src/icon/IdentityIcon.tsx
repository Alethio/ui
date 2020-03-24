import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IIdentityIconProps extends ISvgIconProps {

}

export class IdentityIcon extends React.Component<IIdentityIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path
                        // tslint:disable-next-line:max-line-length
                        d="M12,5.9 C13.16,5.9 14.1,6.84 14.1,8 C14.1,9.16 13.16,10.1 12,10.1 C10.84,10.1 9.9,9.16 9.9,8 C9.9,6.84 10.84,5.9 12,5.9 L12,5.9 Z M12,14.9 C14.97,14.9 18.1,16.36 18.1,17 L18.1,18.1 L5.9,18.1 L5.9,17 C5.9,16.36 9.03,14.9 12,14.9 L12,14.9 Z M12,4 C9.79,4 8,5.79 8,8 C8,10.21 9.79,12 12,12 C14.21,12 16,10.21 16,8 C16,5.79 14.21,4 12,4 L12,4 Z M12,13 C9.33,13 4,14.34 4,17 L4,20 L20,20 L20,17 C20,14.34 14.67,13 12,13 L12,13 Z"
                        fill="currentColor"></path>
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                </g>
            </SvgIcon>
        );
    }
}
