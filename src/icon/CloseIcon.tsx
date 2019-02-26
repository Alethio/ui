import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface ICloseIconProps extends ISvgIconProps {
}

export class CloseIcon extends React.Component<ICloseIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    <polygon fill="currentColor" fillRule="nonzero"
                        // tslint:disable-next-line:max-line-length
                        points="19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12"
                    ></polygon>
                </g>
            </SvgIcon>
        );
    }
}
