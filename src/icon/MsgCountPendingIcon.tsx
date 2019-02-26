import * as React from "react";
import styled from "../styled-components";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IMsgCountPendingIconProps extends ISvgIconProps {

}

const MsgCountPendingIconRoot = styled.div`
    color: ${props => props.theme.colors.msgCountPendingIcon};
`;

export class MsgCountPendingIcon extends React.Component<IMsgCountPendingIconProps> {
    render() {
        return (
            <MsgCountPendingIconRoot>
                <SvgIcon {...this.props}>
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path
                            d={
                                "M12,6 C11.1715729,6 10.5,5.32842712 10.5,4.5 C10.5,3.67157288 11.1715729,3 12,3 " +
                                "C12.8284271,3 13.5,3.67157288 13.5,4.5 C13.5,5.32842712 12.8284271,6 12,6 Z " +
                                "M17,6  C16.1715729,6 15.5,5.32842712 15.5,4.5 C15.5,3.67157288 16.1715729,3 17,3 " +
                                "C17.8284271,3 18.5,3.67157288 18.5,4.5 C18.5,5.32842712 17.8284271,6 17,6 Z " +
                                "M7,6 C6.17157288,6 5.5,5.32842712 5.5,4.5 C5.5,3.67157288 6.17157288,3 7,3 " +
                                "C7.82842712,3 8.5,3.67157288 8.5,4.5 C8.5,5.32842712 7.82842712,6 7,6 Z " +
                                "M3,19 L3,15 C3,13.9 3.91,13 5.01,13 L8,13 L8,15 L4.99,15 L4.99,19 L19,19 L19,15 " +
                                "L16,15 L16,13 L19.01,13 C20.11,13 21,13.9 21,15 L21,19 C21,20.1 20.11,21 19.01,21 " +
                                "L5.01,21 C3.9,21 3,20.1 3,19 Z"
                            }
                            fill="currentColor" fillRule="nonzero"
                        ></path>
                    </g>
                </SvgIcon>
            </MsgCountPendingIconRoot>
        );
    }
}
