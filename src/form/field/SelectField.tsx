import React from "react";
import { Field, FieldProps } from "formik";
import { Select, ISelectProps } from "../../control/Select";

export interface ISelectFieldProps extends ISelectProps {
    id?: string;
    name: string;
    value?: string;
    disabled?: boolean;
    validate?(value: string): string | Promise<string | void> | undefined;
}

export class SelectField extends React.Component<ISelectFieldProps> {
    render() {
        // We pick and discard some props in order to pass the rest to the inner Input
        // because formik doesn't expose them in the children callback
        let { validate: _, ...inputProps } = this.props;

        return <Field {...this.props}>
                {({ field }: FieldProps<any>) => {
                    return <Select {...inputProps} {...field}
                        onSelect={(value: string) => {
                            const fakeEvent = { target: { name: field.name, value }};
                            field.onChange(fakeEvent);
                            setTimeout(() => field.onBlur(fakeEvent));
                        }}
                    />;
                }}
            </Field>;
    }
}
