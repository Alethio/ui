import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface ITableIconProps extends ISvgIconProps {

}

export class TableIcon extends React.Component<ITableIconProps> {
    render() {
        return (
            <SvgIcon {...this.props} viewBoxSize={512}>
                <g transform="translate(64, 64) scale(0.75)">
                    {/* tslint:disable-next-line:max-line-length */}
                    <path fill="currentColor" d="m0 0l0 512 512 0 0-512z m228 455l-171 0 0-171 171 0z m0-227l-171 0 0-171 171 0z m227 227l-171 0 0-171 171 0z m0-227l-171 0 0-171 171 0z"/>
                </g>
            </SvgIcon>
        );
    }
}
