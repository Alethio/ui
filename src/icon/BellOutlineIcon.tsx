import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IBellOutlineIconProps extends ISvgIconProps {

}

export class BellOutlineIcon extends React.Component<IBellOutlineIconProps> {
    render() {
        return <SvgIcon {...this.props}>
            <path
                // tslint:disable-next-line:max-line-length
                d="M12,22 C13.1,22 14,21.1 14,20 L10,20 C10,21.1 10.9,22 12,22 L12,22 Z M18,16 L18,11 C18,7.93 16.37,5.36 13.5,4.68 L13.5,4 C13.5,3.17 12.83,2.5 12,2.5 C11.17,2.5 10.5,3.17 10.5,4 L10.5,4.68 C7.64,5.36 6,7.92 6,11 L6,16 L4,18 L4,19 L20,19 L20,18 L18,16 L18,16 Z M16,17 L8,17 L8,11 C8,8.52 9.51,6.5 12,6.5 C14.49,6.5 16,8.52 16,11 L16,17 L16,17 Z"
                fill="currentColor"
            />
        </SvgIcon>;
    }
}
