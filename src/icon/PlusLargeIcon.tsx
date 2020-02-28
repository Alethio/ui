import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IPlusLargeIconProps extends ISvgIconProps {

}

export class PlusLargeIcon extends React.Component<IPlusLargeIconProps> {
    render() {
        return <SvgIcon {...this.props}>
            <polygon points="19 13 13 13 13 19 11 19 11 13 5 13 5 11 11 11 11 5 13 5 13 11 19 11"
                fill="currentColor"
            />
        </SvgIcon>;
    }
}
