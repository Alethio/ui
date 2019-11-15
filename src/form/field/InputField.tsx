import React from "react";
import { Field, GenericFieldHTMLAttributes, FieldAttributes } from "formik";
import styled from "../../styled-components";
import { Input } from "../../control/Input";
import { ErrorIcon } from "../../icon/ErrorIcon";
import { StatusOkIcon } from "../../icon/StatusOkIcon";

export interface IInputFieldProps {
    name: string;
    type: string;
    validate?(value: string): string | Promise<string | void> | undefined;
    innerRef?(instance: any): void;
}

const FieldContainer = styled.div`
    position: relative;
`;

const IconContainer = styled.div`
    pointer-events: none;
    position: absolute;
    top: 6px;
    right: 6px;
    color: ${props => props.theme.colors.base.status.success};
`;

export class InputField extends React.Component<
    IInputFieldProps & GenericFieldHTMLAttributes & React.HTMLAttributes<HTMLInputElement>
    > {
    render() {
        let { ...props } = this.props;

        return <Field {...props} style={{ paddingRight: 36 }} >
            {({ field, form }: FieldAttributes<any>) => {
                return <FieldContainer>
                    <Input {...field} />
                    {(form.touched.email) && (form.errors.email ? <IconContainer><ErrorIcon /></IconContainer>
                        : <IconContainer><StatusOkIcon /></IconContainer>
                    )}
                </FieldContainer>;
            }}
        </Field>;
    }
}
