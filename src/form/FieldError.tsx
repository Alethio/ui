import * as React from "react";
import { ErrorMessage } from "formik";
import styled from "../styled-components";

/** @internal */
export const $StatusError = styled.p`
    margin: 0;
    color: ${props => props.theme.colors.base.status.error};
`;

export interface IFieldErrorProps {
    name: string;
    className?: string;
}

export class FieldError extends React.Component<IFieldErrorProps> {
    render() {
        let { name, className } = this.props;
        return (
            <ErrorMessage name={name} className={className} component={$StatusError} />
        );
    }
}
