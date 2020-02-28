import * as React from "react";
import { ISvgIconProps, SvgIcon } from "../util/react/SvgIcon";

export interface ITrashOutlineIconProps extends ISvgIconProps {

}

export class TrashOutlineIcon extends React.Component<ITrashOutlineIconProps> {
    render() {
        return <SvgIcon {...this.props} viewBoxSize={512}>
            <g transform="translate(64, 64) scale(0.75)">
                <path
                    // tslint:disable-next-line:max-line-length
                    d="m85 455c0 31 26 57 57 57l228 0c31 0 57-26 57-57l0-341-342 0z m57-284l228 0 0 284-228 0z m214-143l-29-28-142 0-29 28-99 0 0 57 398 0 0-57z"
                    fill="currentColor"
                />
            </g>
        </SvgIcon>;
    }
}
