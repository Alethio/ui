import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IChatBubbleIconProps extends ISvgIconProps {

}

export class ChatBubbleIcon extends React.Component<IChatBubbleIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-24.000000, -24.000000)">
                        <rect fillRule="nonzero" x="0" y="0" width="72" height="72"></rect>
                        <g transform="translate(24.000000, 24.000000)">
                            <path
                                // tslint:disable-next-line:max-line-length
                                d="M20,2 L4,2 C2.9,2 2.01,2.9 2.01,4 L2,22 L6,18 L20,18 C21.1,18 22,17.1 22,16 L22,4 C22,2.9 21.1,2 20,2 L20,2 Z M9,11 L7,11 L7,9 L9,9 L9,11 L9,11 Z M13,11 L11,11 L11,9 L13,9 L13,11 L13,11 Z M17,11 L15,11 L15,9 L17,9 L17,11 L17,11 Z"
                                fill="currentColor"></path>
                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                        </g>
                    </g>
                </g>
            </SvgIcon>
        );
    }
}
