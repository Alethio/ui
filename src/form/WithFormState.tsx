import React from "react";
import { connect, FormikContext } from "formik";
import { IFormStatus } from "./IFormStatus";

interface IWithFormStateInnerProps<TFormValues, TStatus> extends FormikContext<TFormValues> {
    status?: TStatus;
}

interface IWithFormStateProps<TFormValues, TStatus> {
    component?: React.ComponentType<IWithFormStateInnerProps<TFormValues, TStatus>>;
    children?: React.ReactNode | ((props: IWithFormStateInnerProps<TFormValues, TStatus>) => React.ReactNode);
    render?(props: IWithFormStateInnerProps<TFormValues, TStatus>): React.ReactNode;
}

const $WithFormState: React.ComponentType<IWithFormStateProps<unknown, unknown> & { formik: FormikContext<unknown> }> =
({ formik, component: Component, render, children }) => {
    if (Component) {
        return <Component {...formik} />;
    }
    if (render) {
        return render(formik);
    }
    if (typeof children === "function") {
        return (children as any)(formik);
    }
    return children;
};

export const WithFormState = connect<IWithFormStateProps<unknown, unknown>, unknown>(
    $WithFormState
) as <TFormValues, TStatus extends IFormStatus = IFormStatus>(
    props: IWithFormStateProps<TFormValues, TStatus>
) => React.ReactElement<{}>;
