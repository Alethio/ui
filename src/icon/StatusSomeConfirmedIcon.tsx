import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";
import { UIDConsumer } from "../uid/UIDConsumer";

interface IStatusSomeConfirmedIconProps extends ISvgIconProps {
}

export class StatusSomeConfirmedIcon extends React.PureComponent<IStatusSomeConfirmedIconProps> {
    render() {
        return <UIDConsumer>{ id =>
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <mask id={`icon_status_some_confirmed_${id}_mask`} fill="white">
                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    </mask>
                    <path d={
                        // tslint:disable-next-line:max-line-length
                        "M12,19.5 C11.1715729,19.5 10.5,18.8284271 10.5,18 C10.5,17.1715729 11.1715729,16.5 12,16.5 C12.8284271,16.5 13.5,17.1715729 13.5,18 C13.5,18.8284271 12.8284271,19.5 12,19.5 Z M17,19.5 C16.1715729,19.5 15.5,18.8284271 15.5,18 C15.5,17.1715729 16.1715729,16.5 17,16.5 C17.8284271,16.5 18.5,17.1715729 18.5,18 C18.5,18.8284271 17.8284271,19.5 17,19.5 Z M7,19.5 C6.17157288,19.5 5.5,18.8284271 5.5,18 C5.5,17.1715729 6.17157288,16.5 7,16.5 C7.82842712,16.5 8.5,17.1715729 8.5,18 C8.5,18.8284271 7.82842712,19.5 7,19.5 Z"
                    } fill="currentColor" opacity="0.900000036" mask={`url(#icon_status_some_confirmed_${id}_mask)`} />
                    <polygon fill="currentColor" fillRule="nonzero"
                        mask={`url(#icon_status_some_confirmed_${id}_mask)`} points={
                        "10.3 13.1 6 8.8 7.4 7.4 10.3 10.3 16.6 4 18 5.4"
                        }
                    ></polygon>
                </g>
            </SvgIcon>
        }</UIDConsumer>;
    }
}
