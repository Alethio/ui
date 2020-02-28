import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface IArrowUpRightInvertedIconProps extends ISvgIconProps {

}

export class ArrowUpRightInvertedIcon extends React.Component<IArrowUpRightInvertedIconProps> {
    render() {
        return <SvgIcon {...this.props} viewBoxSize={512}>
            <path
                // tslint:disable-next-line:max-line-length
                d="m402 265l0-137c0-5-2-9-5-13-4-3-8-5-13-5l-137 0c-8 0-14 3-17 11-3 8-2 14 4 20l41 41-152 153c-4 3-6 7-6 12 0 5 2 10 6 13l29 29c3 4 8 6 13 6 5 0 9-2 12-6l153-152 41 41c4 4 8 5 13 5 2 0 5 0 7-1 8-3 11-9 11-17z m73-146l0 274c0 23-8 42-24 58-16 16-35 24-58 24l-274 0c-23 0-42-8-58-24-16-16-24-35-24-58l0-274c0-23 8-42 24-58 16-16 35-24 58-24l274 0c23 0 42 8 58 24 16 16 24 35 24 58z"
                fill="currentColor"
            />
        </SvgIcon>;
    }
}
