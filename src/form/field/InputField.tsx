import React from "react";
import { Field, GenericFieldHTMLAttributes, FieldProps } from "formik";
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

const InputContainer = styled.div`
    position: relative;
`;

const IconContainer = styled.div`
    pointer-events: none;
    position: absolute;
    top: 6px;
    right: 6px;
    color: ${props => props.theme.colors.base.status.success};
`;

const StyledInput = styled(Input)`
    padding-right: 36px;
`;

export class InputField extends React.Component<
    IInputFieldProps & GenericFieldHTMLAttributes & React.HTMLAttributes<HTMLInputElement>
> {
    render() {
        // We pick and discard some props in order to pass the rest to the inner Input
        // because formik doesn't expose them in the children callback
        let { validate: _, innerRef, ref: __, ...inputProps } = this.props;

        return <Field {...this.props}>
            {({ field, meta }: FieldProps<string>) => {
                return <InputContainer>
                    <StyledInput ref={innerRef} {...field} {...inputProps as React.HTMLAttributes<HTMLInputElement>} />
                    {meta.touched && (meta.error
                        ? <IconContainer><ErrorIcon /></IconContainer>
                        : <IconContainer><StatusOkIcon /></IconContainer>
                    )}
                </InputContainer>;
            }}
        </Field>;
    }
}
