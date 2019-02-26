import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IPaginationLastIconProps extends ISvgIconProps {

}

export class PaginationLastIcon extends React.Component<IPaginationLastIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-436.000000, -6.000000)" fill="currentColor" fillRule="nonzero">
                        <g transform="translate(304.000000, 0.000000)">
                            <g transform="translate(124.000000, 0.000000)">
                                <g transform="translate(8.000000, 6.000000)">
                                    <path
                                        // tslint:disable-next-line:max-line-length
                                        d="M5.59,7.41 L10.18,12 L5.59,16.59 L7,18 L13,12 L7,6 L5.59,7.41 Z M16,6 L18,6 L18,18 L16,18 L16,6 Z"
                                    ></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </SvgIcon>
        );
    }
}
