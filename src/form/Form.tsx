import React from "react";
import { Formik, Form as FormikForm, FormikErrors, FormikTouched } from "formik";
import { IFormStatus } from "./IFormStatus";

export interface IFormHelpers<TFormValues, TStatus extends IFormStatus = IFormStatus> {
    setStatus(status?: TStatus): void;
    setErrors(errors: FormikErrors<TFormValues>): void;
    setSubmitting(isSubmitting: boolean): void;
    setTouched(touched: FormikTouched<TFormValues>): void;
    setValues(values: TFormValues): void;
    setFieldValue(field: keyof TFormValues & string, value: any, shouldValidate?: boolean): void;
    setFieldError(field: keyof TFormValues & string, message: string): void;
    setFieldTouched(field: keyof TFormValues & string, isTouched?: boolean, shouldValidate?: boolean): void;
    resetForm(): void;
}

export interface IFormProps<TFormValues, TStatus extends IFormStatus = IFormStatus> {
    children?: React.ReactNode;
    initialValues: TFormValues;
    initialStatus?: TStatus;
    initialErrors?: FormikErrors<TFormValues>;
    initialTouched?: FormikTouched<TFormValues>;
    validateOnChange?: boolean;
    validateOnBlur?: boolean;
    isInitialValid?: boolean;
    enableReinitialize?: boolean;
    onReset?(values: TFormValues, formikHelpers: IFormHelpers<TFormValues, TStatus>): void;
    onSubmit(values: TFormValues, formikHelpers: IFormHelpers<TFormValues, TStatus>): void;
    validate?(values: TFormValues): void | object | Promise<FormikErrors<TFormValues>>;
}

/**
 * Form wrapper. Uses [Formik](https://jaredpalmer.com/formik/docs/api/formik), with a simpler API.
 *
 * e.g.
 * ```ts
 * enum FieldName {
 *     User = "username",
 *     Password = "password"
 * }
 * interface IFormValues {
 *     [FieldName.User]: string;
 *     [FieldName.Password]: string;
 * }
 * <Form<IFormValues> initialValues={{ [FieldName.User]: "", [FieldName.Password]: ""}} onSubmit={(values, actions) => {
 *     console.log(values);
 *     actions.setSubmitting(false);
 * }}>
 *     <InputField type="text" name={FieldName.User} />
 *     <InputField type="password" name={FieldName.Password} />
 *     <button type="submit">Submit</button>
 * </Form>
 * ```
 */
export class Form<TFormValues, TStatus extends IFormStatus = IFormStatus>
extends React.Component<IFormProps<TFormValues, TStatus>> {
    render() {
        let { children, ...props } = this.props;
        return <Formik {...props}>
            <FormikForm>
                { children }
            </FormikForm>
        </Formik>;
    }
}
