import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IAlethioReportsIconProps extends ISvgIconProps {
}

export class AlethioReportsIcon extends React.PureComponent<IAlethioReportsIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <path
                    fillRule="evenodd" clipRule="evenodd"
                    // tslint:disable-next-line:max-line-length
                    d="M21.3333 0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8 0 21.3333 0ZM8 18.6667H5.33333V9.33333H8V18.6667ZM13.3333 18.6667H10.6667V5.33333H13.3333V18.6667ZM18.6667 18.6667H16V13.3333H18.6667V18.6667Z"
                    fill="currentColor"
                />
            </SvgIcon>
        );
    }
}
