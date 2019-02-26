import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IBubbleChartIconProps extends ISvgIconProps {

}

export class BubbleChartIcon extends React.Component<IBubbleChartIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    <path d={
                        // tslint:disable-next-line:max-line-length
                        "M9.51409906,12.1898011 L11.0143042,11.1511975 C10.6231374,10.4563201 10.4,9.65421832 10.4,8.8 C10.4,6.1490332 12.5490332,4 15.2,4 C17.8509668,4 20,6.1490332 20,8.8 C20,11.4509668 17.8509668,13.6 15.2,13.6 C13.7624961,13.6 12.4725817,12.9680938 11.5928808,11.9669051 L10.0839172,13.0115723 C10.2864748,13.4315377 10.4,13.9025112 10.4,14.4 C10.4,14.7130478 10.3550482,15.0155966 10.2712473,15.3015436 L13.2639161,16.7191235 C13.6307884,16.2796301 14.1827386,16 14.8,16 C15.9045695,16 16.8,16.8954305 16.8,18 C16.8,19.1045695 15.9045695,20 14.8,20 C13.6954305,20 12.8,19.1045695 12.8,18 C12.8,17.8710246 12.8122084,17.7449006 12.8355327,17.6227206 L9.84267751,16.2050524 C9.26626712,17.0473192 8.29767632,17.6 7.2,17.6 C5.4326888,17.6 4,16.1673112 4,14.4 C4,12.6326888 5.4326888,11.2 7.2,11.2 C8.11008185,11.2 8.93142974,11.5799152 9.51409906,12.1898011 Z"
                    } fill="currentColor" fillRule="nonzero"></path>
                </g>
            </SvgIcon>
        );
    }
}
