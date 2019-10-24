import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";
import { UIDConsumer } from "../uid/UIDConsumer";

interface IStatusNotConfirmedIconProps extends ISvgIconProps {
}

export class StatusNotConfirmedIcon extends React.PureComponent<IStatusNotConfirmedIconProps> {
    render() {
        return <UIDConsumer>{id =>
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <mask id={"icon_status_not_confirmed_" + id + "_mask"} fill="white">
                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    </mask>
                    <path d={
                        // tslint:disable-next-line:max-line-length
                        "M12,13.5 C11.1715729,13.5 10.5,12.8284271 10.5,12 C10.5,11.1715729 11.1715729,10.5 12,10.5 C12.8284271,10.5 13.5,11.1715729 13.5,12 C13.5,12.8284271 12.8284271,13.5 12,13.5 Z M17,13.5 C16.1715729,13.5 15.5,12.8284271 15.5,12 C15.5,11.1715729 16.1715729,10.5 17,10.5 C17.8284271,10.5 18.5,11.1715729 18.5,12 C18.5,12.8284271 17.8284271,13.5 17,13.5 Z M7,13.5 C6.17157288,13.5 5.5,12.8284271 5.5,12 C5.5,11.1715729 6.17157288,10.5 7,10.5 C7.82842712,10.5 8.5,11.1715729 8.5,12 C8.5,12.8284271 7.82842712,13.5 7,13.5 Z"
                    } fill="currentColor" opacity="0.900000036" mask={`url(#icon_status_not_confirmed_${id}_mask)`} />
                </g>
            </SvgIcon>
        }</UIDConsumer>;
    }
}
