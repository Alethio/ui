import * as React from "react";
import styled from "../styled-components";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IMsgCountInIconProps extends ISvgIconProps {

}

const MsgCountInIconRoot = styled.div`
    color: ${props => props.theme.colors.msgCountInIcon};
`;

export class MsgCountInIcon extends React.Component<IMsgCountInIconProps> {
    render() {
        return (
            <MsgCountInIconRoot>
                <SvgIcon {...this.props}>
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path
                            d={
                                "M19,3 L15,3 C13.9,3 13,3.9 13,5 L13,7.99 L15,7.99 L15,4.98 L19,4.98 L19,19 " +
                                "L15,19 L15,15.99 L13,15.99 L13,19 C13,20.1 13.9,21 15,21 L19,21 " +
                                "C20.1,21 21,20.1 21,19 L21,5 C21,3.89 20.1,3 19,3 Z M10,15.99 L15,11.99 " +
                                "L10,7.99 L10,10.99 L3,10.99 L3,12.99 L10,12.99 L10,15.99 Z"
                            }
                            fill="currentColor" fillRule="nonzero"
                            transform={
                                "translate(12.000000, 12.000000) rotate(-270.000000) " +
                                "translate(-12.000000, -12.000000) "
                            }
                        ></path>
                    </g>
                </SvgIcon>
            </MsgCountInIconRoot>
        );
    }
}
