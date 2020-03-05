import { FormikContextType } from "formik";
export interface IFormContextType<TFormValues, TStatus> extends FormikContextType<TFormValues> {
    status?: TStatus;
}
