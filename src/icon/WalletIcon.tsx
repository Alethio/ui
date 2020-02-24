import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IWalletIconProps extends ISvgIconProps {

}

export class WalletIcon extends React.PureComponent<IWalletIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    { /* tslint:disable-next-line:max-line-length */ }
                    <path d="M21,18 L21,19 C21,20.1 20.1,21 19,21 L5,21 C3.89,21 3,20.1 3,19 L3,5 C3,3.9 3.89,3 5,3 L19,3 C20.1,3 21,3.9 21,5 L21,6 L12,6 C10.89,6 10,6.9 10,8 L10,16 C10,17.1 10.89,18 12,18 L21,18 Z M12,16 L22,16 L22,8 L12,8 L12,16 Z M16,13.5 C15.17,13.5 14.5,12.83 14.5,12 C14.5,11.17 15.17,10.5 16,10.5 C16.83,10.5 17.5,11.17 17.5,12 C17.5,12.83 16.83,13.5 16,13.5 Z"
                        fill="currentColor"></path>
                </g>
            </SvgIcon>
        );
    }
}
