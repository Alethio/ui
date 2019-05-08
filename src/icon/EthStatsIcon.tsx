import * as React from "react";
import { SvgIconEncoded } from "../util/react/SvgIconEncoded";

// tslint:disable:max-line-length
let getIconSvg = (color?: string) => `
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M26.6664,10.6668 C23.7208,10.6668 21.3336,13.054 21.3336,16.0004 C21.3336,18.9452 23.7208,21.3332 26.6664,21.3332 C29.6128,21.3332 32,18.9452 32,16.0004 C32,13.054 29.6128,10.6668 26.6664,10.6668" fill="${color || "#273656"}"></path>
        <path d="M16,21.3336 C13.0544,21.3336 10.6664,18.9456 10.6664,16 C10.6664,13.0544 13.0544,10.6672 16,10.6672 C18.9456,10.6672 21.3336,8.2792 21.3336,5.3336 C21.3336,2.388 18.9456,0 16,0 C13.0544,0 10.6664,2.388 10.6664,5.3336 C10.6664,8.2792 8.2792,10.6672 5.3336,10.6672 C2.3872,10.6672 0,13.0544 0,16 C0,18.9456 2.3872,21.3336 5.3336,21.3336 C8.2792,21.3336 10.6664,23.7208 10.6664,26.6664 C10.6664,29.6128 13.0544,32 16,32 C18.9456,32 21.3336,29.6128 21.3336,26.6664 C21.3336,23.7208 18.9456,21.3336 16,21.3336" fill="${color || "#357CFF"}"></path>
    </g>
`;
// tslint:enable:max-line-length

export interface IEthStatsIconProps {
    /** Color override - makes icon monochrome */
    color?: string;
    size: number;
}

export class EthStatsIcon extends React.PureComponent<IEthStatsIconProps> {
    render() {
        return <SvgIconEncoded size={this.props.size} viewBoxSize={32}>{getIconSvg(this.props.color)}</SvgIconEncoded>;
    }
}
