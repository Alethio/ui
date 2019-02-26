import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface ISidebarIconProps extends ISvgIconProps {

}

export class SidebarIcon extends React.Component<ISidebarIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <rect x="0" y="4" width="18" height="3.61" fill="currentColor" fillRule="nonzero" />
                <rect x="0" y="10.5" width="24" height="3.61" fill="currentColor" fillRule="nonzero" />
                <rect x="0" y="17" width="12" height="3.61" fill="currentColor" fillRule="nonzero" />
            </SvgIcon>
        );
    }
}
