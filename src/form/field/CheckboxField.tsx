import React from "react";
import { Checkbox } from "../../control/Checkbox";
import { Field } from "formik";

export interface ICheckboxFieldProps {
    id?: string;
    name: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    /**
     * @param value in case of checkbox field array (multiple checkboxes with same `name`) this is a string array
     */
    validate?(value: string | string[]): string | Promise<string | void> | undefined;
}

export class CheckboxField extends React.Component<ICheckboxFieldProps> {
    render() {
        let { children, ...props } = this.props;

        return <Field type="checkbox" {...props} as={Checkbox}>{children}</Field>;
    }
}
