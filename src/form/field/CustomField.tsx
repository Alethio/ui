import React from "react";
import { Field, FieldProps } from "formik";

export interface ICustomFieldInnerProps<T> {
    name: string;
    value: T;
    /** Triggers the change handler (updates state, runs validator when the form's validateOnChange = true) */
    onChange(value: T): void;
    /** Triggers the blur handler (marks the field as touched, runs validator when the form's validateOnBlur = true) */
    onBlur(): void;
}

export interface ICustomFieldProps<T> {
    name: string;
    /** validator function; returns undefined if valid, or an error message otherwise */
    validate?(value: T): string | Promise<string | void> | undefined;
    children(innerProps: ICustomFieldInnerProps<T>): React.ReactElement<{}>;
}

/**
 * Wrapper for Formik Field class
 *
 * Simplifies Field API
 * - no longer mixes Field props with inner component props
 * - allows passing values directly to onChange handler, instead of providing an event object
 *
 * Also see https://jaredpalmer.com/formik/docs/api/field
 *
 * Usage:
 * ```ts
 * <CustomField name="myFieldName" validate={v => {}}>
 * {({ name, value, onChange, onBlur }) => {
 *     return <MyCustomSelect
 *         name={name}
 *         value={value}
 *         onSelect={value => {
 *             onChange(value);
 *             onBlur();
 *         }}
 *     >
 *         <Option value="1">Option 1</Option>
 *     </MyCustomSelect>
 * }}
 * </CustomField>
 * ```
 *
 * NB: Make sure to pass all render props down to the child component!
 * - onChange is used to update the value (and run validation if validateOnChange = true)
 * - onBlur is used to set the field as touched (and run validation if validateOnBlur = true)
 */
export class CustomField<T = string> extends React.Component<ICustomFieldProps<T>> {
    render() {
        let { name, validate, children } = this.props;

        return <Field name={name} validate={validate}>
            {({ field }: FieldProps<T>) => {
                return children({
                    name: field.name,
                    value: field.value,
                    onChange: (value: T) => {
                        // Unfortunately formik only supports passing an event object, so we have to fake it
                        // See https://github.com/jaredpalmer/formik/issues/1667
                        // See https://github.com/jaredpalmer/formik/issues/1674
                        const fakeEvent = { target: { name: field.name, value }};
                        field.onChange(fakeEvent);
                    },
                    onBlur: () => {
                        const fakeEvent = { target: { name: field.name }};
                        // Need to wrap in a setTimeout, because onChange handler is not synchronous
                        // and we end up running validation on blur with an obsolete value
                        setTimeout(() => field.onBlur(fakeEvent));
                    }
                });
            }}
        </Field>;
    }
}
