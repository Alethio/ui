import React from "react";
import { Checkbox } from "../../control/Checkbox";
import { Field } from "formik";

export interface ICheckboxFieldProps {
    name: string;
    required?: boolean;
    disabled?: boolean;
}

export class CheckboxField extends React.Component<ICheckboxFieldProps> {
    render() {
        let { children, ...props } = this.props;

        return <Field type="checkbox" {...props} as={Checkbox}>{children}</Field>;
    }
}
