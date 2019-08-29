import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IDexWatchIconProps extends ISvgIconProps {
}

export class DexWatchIcon extends React.Component<IDexWatchIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <path
                    /* tslint:disable-next-line:max-line-length */
                    d="M23.1,1.8c-2.5,2.1-3,5.3-1.8,8c1.9,4.4,0.5,9.5-3.2,12.6c-2,1.6-5.1,1.9-7.3,0.6c0,0-0.1,0-0.2-0.1c0.7-0.3,1.4-0.4,2-0.7
	c4.1-2,4.9-7.4,1.6-10.6c-1.9-1.9-2.6-4.2-1.8-6.8c0.8-2.5,2.6-4.1,5.3-4.5c1.9-0.3,3.6,0.1,5.1,1.3c0.1,0,0.1,0.1,0.2,0.1
    C23.1,1.7,23.1,1.7,23.1,1.8z"
                    fill="currentColor"
                />
                <path
                    /* tslint:disable-next-line:max-line-length */
                    d="M4,23.7c1.9-1.3,3-3.1,2.9-5.5c0-2.7-1.3-4.7-3.7-6c-1.7-0.9-2.6-2.5-2.4-4.5C1.1,6.1,2.4,4.6,4,4.1c1.5-0.4,2.8-0.1,4,0.8
    c6.3,5,5.3,14.9-1.9,18.5c-0.6,0.3-1.4,0.4-2.1,0.6C4.1,23.8,4,23.8,4,23.7z"
                    fill="currentColor"
                />
            </SvgIcon>
        );
    }
}
