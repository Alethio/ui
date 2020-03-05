import React from "react";
import { connect, FormikContextType } from "formik";
import { IFormStatus } from "./IFormStatus";
import { IFormContextType } from "./IFormContextType";

export interface IWithFormStateProps<TFormValues, TStatus> {
    component?: React.ComponentType<IFormContextType<TFormValues, TStatus>>;
    children?: React.ReactNode | ((props: IFormContextType<TFormValues, TStatus>) => React.ReactNode);
    render?(props: IFormContextType<TFormValues, TStatus>): React.ReactNode;
}

const $WithFormState: React.ComponentType<
    IWithFormStateProps<unknown, unknown> & { formik: FormikContextType<unknown> }
> = ({ formik, component: Component, render, children }) => {
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
