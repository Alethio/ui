import React from "react";
import { Field, FieldAttributes } from "formik";
import { Select, ISelectProps } from "../../control/Select";

export interface ISelectFieldProps extends ISelectProps {
    id: string;
    name: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    validate?(value: string): string | Promise<string | void> | undefined;
    innerRef?(instance: any): void;
}

export class SelectField extends React.Component<ISelectFieldProps> {
    render() {
        let { ...props } = this.props;

        return <Field {...props}>
                {({ field, form }: FieldAttributes<any>) => {
                    return <Select {...props} {...field}
                        onSelect={(value: string) => form.setFieldValue(field.name, value)}
                    />;
                }}
            </Field>;
    }
}
