import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IStatusOkIconProps extends ISvgIconProps {
}

export class StatusOkIcon extends React.PureComponent<IStatusOkIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(0.000000, 1.000000)">
                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                        <polygon fill="currentColor" fillRule="nonzero" points={
                            "10 14.17 5.83 10 4.41 11.41 10 17 20 7 18.59 5.59"
                        }></polygon>
                    </g>
                </g>
            </SvgIcon>
        );
    }
}
