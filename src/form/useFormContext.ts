import { useFormikContext } from "formik";
import { IFormContextType } from "./IFormContextType";

export const useFormContext = useFormikContext as <TFormValues, TStatus>() => IFormContextType<TFormValues, TStatus>;
