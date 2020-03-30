import { Field, GenericFieldHTMLAttributes } from "formik";
import React from "react";
import { Textarea } from "../../control/Textarea";

export interface ITextareaFieldProps {
    id?: string;
    name: string;
    validate?(value: string): string | Promise<string | void> | undefined;
    innerRef?(instance: HTMLTextAreaElement): void;
}

export class TextareaField extends React.Component<
    ITextareaFieldProps & GenericFieldHTMLAttributes & React.HTMLAttributes<HTMLTextAreaElement>
> {
    render() {
        let { ...props } = this.props;

        return <Field type="text" {...props} as={Textarea} />;
    }
}
