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
                    d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"
                    fill="currentColor"
                />
            </SvgIcon>
        );
    }
}
