import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IContractIconProps extends ISvgIconProps {
}

export class ContractIcon extends React.Component<IContractIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    <path d={
                        // tslint:disable-next-line:max-line-length
                        "M12,4 L14,6 L16,6 C17.1,6 18,6.9 18,8 L18,18 C18,19.1 17.1,20 16,20 L8,20 C6.9,20 6,19.1 6,18 L6.01,6 C6.01,4.9 6.9,4 8,4 L12,4 Z M8,16 L8,17 L16,17 L16,16 L8,16 Z M8,13 L8,14 L16,14 L16,13 L8,13 Z M8,10 L8,11 L16,11 L16,10 L8,10 Z"
                    } fill="currentColor" fillRule="nonzero"></path>
                </g>
            </SvgIcon>
        );
    }
}
