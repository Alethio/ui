import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface ILogoutIconProps extends ISvgIconProps {

}

export class LogoutIcon extends React.Component<ILogoutIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <path fill="none" d="M0,0h24v24H0V0z"/>
                <path
                    fill="currentColor"
                    d={ "M6.8,13h9.7v-2H6.8l2.6-2.6L8,7l-5,5l5,5l1.4-1.4L6.8,13z M19,3H5C3.9,3,3,3.9," +
                        "3,5v4h2V5h14v14H5v-4H3v4c0,1.1,0.9,2,2,2h14 c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z" }
                />
            </SvgIcon>
        );
    }
}
