import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";
import { UIDConsumer } from "../uid/UIDConsumer";

interface IDefiIconProps extends ISvgIconProps {
}

export class DefiIcon extends React.PureComponent<IDefiIconProps> {
    render() {
        return <UIDConsumer>{id =>
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-24.000000, -24.000000)">
                        <rect fillRule="nonzero" x="0" y="0" width="72" height="72"></rect>
                        <g transform="translate(18.000000, 18.000000)">
                            <rect fillRule="nonzero" x="0" y="0" width="36" height="36"></rect>
                            <mask id={`icon_defi_${id}_mask`} fill="white">
                                { /* tslint:disable-next-line:max-line-length */ }
                                <path d="M10.488,10.0004 C9.378,10.0004 8.498,10.8904 8.498,12.0004 L8.498,12.0004 L8.488,24.0004 C8.488,25.1104 9.378,26.0004 10.488,26.0004 L10.488,26.0004 L26.488,26.0004 C27.599,26.0004 28.488,25.1104 28.488,24.0004 L28.488,24.0004 L28.488,12.0004 C28.488,10.8904 27.599,10.0004 26.488,10.0004 L26.488,10.0004 L10.488,10.0004 Z M24.902,15.0004 L26.401,15.0004 L26.402,16.2604 L26.402,17.3794 L26.402,18.6404 L26.402,19.7504 L26.408,21.0004 L24.902,21.0004 L24.902,15.0004 Z M20.489,15.0004 L24.488,15.0004 L24.488,16.2604 L21.988,16.2604 L21.988,17.3794 L24.488,17.3794 L24.488,18.6404 L21.988,18.6404 L21.988,19.7504 L21.996,21.0004 L20.489,21.0004 L20.489,15.0004 Z M15.989,15.0004 L19.988,15.0004 L19.988,16.2604 L17.488,16.2604 L17.488,17.3794 L19.988,17.3794 L19.988,18.6404 L17.488,18.6404 L17.488,19.7504 L19.988,19.7504 L19.988,21.0004 L15.989,21.0004 L15.989,15.0004 Z M10.488,15.0004 L13.988,15.0004 C14.838,15.0004 15.488,15.6504 15.488,16.5004 L15.488,16.5004 L15.488,19.0004 C15.488,20.0004 15.488,21.0004 14.488,21.0004 L14.488,21.0004 L10.488,21.0004 L10.488,15.0004 Z M11.988,19.5004 L13.988,19.5004 L13.988,16.5004 L11.988,16.5004 L11.988,19.5004 Z"></path>
                            </mask>
                            <polygon fill="currentColor" mask={`url(#icon_defi_${id}_mask)`}
                                points="3 32.0814 33 32.0814 33 6.0814 3 6.0814"></polygon>
                        </g>
                    </g>
                </g>
            </SvgIcon>
        }</UIDConsumer>;
    }
}
