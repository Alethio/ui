import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IAlethioMonitoringIconProps extends ISvgIconProps {
}

export class AlethioMonitoringIcon extends React.PureComponent<IAlethioMonitoringIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polygon points="0 1 24 1 24 25 0 25"></polygon>
                    <path d={
                        // tslint:disable-next-line:max-line-length
                        "M12,5.5 C6.54545455,5.5 1.88727273,8.61 0,13 C1.88727273,17.39 6.54545455,20.5 12,20.5 C17.4545455,20.5 22.1127273,17.39 24,13 C22.1127273,8.61 17.4545455,5.5 12,5.5 Z M12,19 C8.688,19 6,16.312 6,13 C6,9.688 8.688,7 12,7 C15.312,7 18,9.688 18,13 C18,16.312 15.312,19 12,19 Z M12,16 C13.6568542,16 15,14.6568542 15,13 C15,11.3431458 13.6568542,10 12,10 C10.3431458,10 9,11.3431458 9,13 C9,14.6568542 10.3431458,16 12,16 Z"
                    } fill="currentColor" fillRule="nonzero"></path>
                </g>
            </SvgIcon>
        );
    }
}
