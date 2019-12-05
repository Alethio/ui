import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IPlusIconProps extends ISvgIconProps {

}

export class PlusIcon extends React.Component<IPlusIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g>
                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                        <polygon fill="currentColor" fillRule="nonzero"
                            points="17 13 13 13 13 17 11 17 11 13 7 13 7 11 11 11 11 7 13 7 13 11 17 11">
                        </polygon>
                    </g>
                </g>
            </SvgIcon >
        );
    }
}
