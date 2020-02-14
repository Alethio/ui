import * as React from "react";
import styled from "styled-components";
import { ISvgIconProps } from "../util/react/SvgIcon";
import { InfoIcon } from "./InfoIcon";

export interface IErrorIconProps extends ISvgIconProps {
}

const ErrorIconRoot = styled.div`
    color: ${props => props.theme.colors.error};
`;

export class ErrorIcon extends React.PureComponent<IErrorIconProps> {
    render() {
        return (
            <ErrorIconRoot>
                <InfoIcon {...this.props} />
            </ErrorIconRoot>
        );
    }
}
