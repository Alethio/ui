import React from "react";
import { Radio } from "../../control/Radio";
import { Field } from "formik";

export interface IRadioFieldProps {
    name: string;
    required?: boolean;
    disabled?: boolean;
}

export class RadioField extends React.Component<IRadioFieldProps> {
    render() {
        let { children, ...props } = this.props;

        return <Field type="radio" {...props} as={Radio}>{children}</Field>;
    }
}
