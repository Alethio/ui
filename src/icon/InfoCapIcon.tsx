import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IInfoCapIconProps extends ISvgIconProps {

}

export class InfoCapIcon extends React.Component<IInfoCapIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-24.000000, -24.000000)">
                        <rect fillRule="nonzero" x="0" y="0" width="72" height="72"></rect>
                        <path
                            // tslint:disable-next-line:max-line-length
                            d="M47,36.46 L44.56,33.68 L44.9,30 L41.29,29.18 L39.4,26 L36,27.46 L32.6,26 L30.71,29.18 L27.1,29.99 L27.44,33.67 L25,36.46 L27.44,39.24 L27.1,42.93 L30.71,43.75 L32.6,46.93 L36,45.46 L39.4,46.92 L41.29,43.74 L44.9,42.92 L44.56,39.24 L47,36.46 L47,36.46 Z M37,41.46 L35,41.46 L35,39.46 L37,39.46 L37,41.46 L37,41.46 Z M37,37.46 L35,37.46 L35,31.46 L37,31.46 L37,37.46 L37,37.46 Z"
                            fill="currentColor"></path>
                    </g>
                </g>
            </SvgIcon>
        );
    }
}
