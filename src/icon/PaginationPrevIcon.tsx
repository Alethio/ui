import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IPaginationPrevIconProps extends ISvgIconProps {

}

export class PaginationPrevIcon extends React.Component<IPaginationPrevIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-6.000000, -6.000000)" fill="currentColor" fillRule="nonzero">
                        <g
                            // tslint:disable-next-line:max-line-length
                            transform="translate(18.000000, 18.000000) rotate(-270.000000) translate(-18.000000, -18.000000) translate(6.000000, 6.000000)"
                        >
                            <polygon points="16.59 8.59 12 13.17 7.41 8.59 6 10 12 16 18 10"></polygon>
                        </g>
                    </g>
                </g>
            </SvgIcon>
        );
    }
}
