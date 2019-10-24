import { Field, GenericFieldHTMLAttributes } from "formik";
import React from "react";
import { Input } from "../../control/Input";

export interface IInputFieldProps {
    name: string;
    type: string;
    validate?(value: string): string | Promise<string | void> | undefined;
    innerRef?(instance: any): void;
}

export class InputField extends React.Component<
    IInputFieldProps & GenericFieldHTMLAttributes & React.HTMLAttributes<HTMLInputElement>
> {
    render() {
        let { ...props } = this.props;

        return <Field {...props} as={Input} />;
    }
}
