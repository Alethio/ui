import React from "react";
import { Radio } from "../../control/Radio";
import { Field } from "formik";

export interface IRadioFieldProps {
    id?: string;
    name: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    validate?(value: string): string | Promise<string | void> | undefined;
}

export class RadioField extends React.Component<IRadioFieldProps> {
    render() {
        let { children, ...props } = this.props;

        return <Field type="radio" {...props} as={Radio}>{children}</Field>;
    }
}
