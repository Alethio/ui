import * as React from "react";
import styled from "../styled-components";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IMsgCountOutSmallIconProps extends ISvgIconProps {

}

const MsgCountOutSmallIconRoot = styled.div`
    color: ${props => props.theme.colors.msgCountOutIcon};
`;

export class MsgCountOutSmallIcon extends React.Component<IMsgCountOutSmallIconProps> {
    render() {
        return (
            <MsgCountOutSmallIconRoot>
                <SvgIcon {...this.props}>
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                        <path d={
                            // tslint:disable-next-line:max-line-length
                            "M8,6 L10,6 C11.1,6 12,6.91 12,8.01 L8,7.99 L8,16 L12,16.01 C12,17.11 11.1,18 10,18 L8,18 C6.9,18 6,17.11 6,16.01 L6,8.01 C6,6.9 6.9,6 8,6 Z M13,16 L18,12 L13,8 L13,11 L10,11 L10,13 L13,13 L13,16 Z"
                        } fill="currentColor" fillRule="nonzero"
                        transform={
                            "translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) "
                        }></path>
                    </g>
                </SvgIcon>
            </MsgCountOutSmallIconRoot>
        );
    }
}
