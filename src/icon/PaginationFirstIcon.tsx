import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IPaginationFirstIconProps extends ISvgIconProps {

}

export class PaginationFirstIcon extends React.Component<IPaginationFirstIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g fill="currentColor" fillRule="nonzero"
                            transform="translate(12, 12) rotate(180) translate(-12, -12)">
                        <path
                            // tslint:disable-next-line:max-line-length
                            d="M5.59,7.41 L10.18,12 L5.59,16.59 L7,18 L13,12 L7,6 L5.59,7.41 Z M16,6 L18,6 L18,18 L16,18 L16,6 Z"
                        ></path>
                    </g>
                </g>
            </SvgIcon>
        );
    }
}
