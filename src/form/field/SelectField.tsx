import React from "react";
import { Select, ISelectProps } from "../../control/Select";
import { CustomField } from "./CustomField";

export interface ISelectFieldProps extends Omit<ISelectProps, "value" | "onSelect"> {
    name: string;
    validate?(value: string): string | Promise<string | void> | undefined;
}

export class SelectField extends React.Component<ISelectFieldProps> {
    render() {
        // We pick and discard some props in order to pass the rest to the inner Select
        // because formik doesn't expose them in the children callback
        let { validate, name, ...selectProps } = this.props;

        return <CustomField name={name} validate={validate}>
                {({ value: currentValue, onChange, onBlur }) => {
                    return <Select
                        {...selectProps}
                        value={currentValue}
                        onSelect={value => {
                            onChange(value);
                            onBlur();
                        }}
                    />;
                }}
            </CustomField>;
    }
}
