import React from "react";
import { Field, GenericFieldHTMLAttributes, FieldProps } from "formik";
import { Input, IInputProps } from "../../control/Input";
import { ErrorIcon } from "../../icon/ErrorIcon";
import { StatusOkIcon } from "../../icon/StatusOkIcon";
import { ISvgIconProps } from "../../util/react/SvgIcon";
import styled from "../../styled-components";

const StatusOkIconWrapper = styled.div`
    color: ${props => props.theme.colors.base.status.success};
`;

export interface IInputFieldProps {
    name: string;
    type: string;
    alignRight?: boolean;
    LeftIcon?: React.ComponentType<ISvgIconProps>;
    hasValidationIcon?: boolean;
    validate?(value: string): string | Promise<string | void> | undefined;
    innerRef?(instance: HTMLInputElement): void;
}

export class InputField extends React.Component<
    IInputFieldProps & GenericFieldHTMLAttributes & React.HTMLAttributes<HTMLInputElement>
> {
    static defaultProps = {
        hasValidationIcon: true
    };
    render() {
        // We pick and discard some props in order to pass the rest to the inner Input
        // because formik doesn't expose them in the children callback
        let { validate: _, ref: __, hasValidationIcon, ...inputProps } = this.props;

        return <Field {...this.props}>
            {({ field, meta }: FieldProps<string>) => <Input
                {...field}
                {...inputProps as IInputProps}
                RightIcon={hasValidationIcon && meta.touched ? (
                    meta.error ? ErrorIcon : () => <StatusOkIconWrapper><StatusOkIcon /></StatusOkIconWrapper>
                ) : void 0}
            />}
        </Field>;
    }
}
