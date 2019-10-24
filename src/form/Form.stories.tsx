import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "../styled-components";
import { Form, IFormProps } from "./Form";
import { FormItem } from "./FormItem";
import { InputField } from "./field/InputField";
import { FieldError } from "./FieldError";
import { Label } from "./Label";
import { FormStatus } from "./FormStatus";
import { SubmitButton } from "./SubmitButton";
import { sleep } from "@puzzl/core/lib/async/sleep";

const RootContainer = styled.div`
    height: 300px;
    width: 500px;
    margin: 16px;
`;

enum FormField {
    Email = "email"
}

interface IFormValues {
    [FormField.Email]: string;
}

storiesOf("form/" + Form.name, module)
    .addParameters({
        info: {
            propTablesExclude: [RootContainer, FormItem, InputField, Label]
        }
    })
    .addDecorator(storyFn => <RootContainer>{storyFn()}</RootContainer>)
    .add("default", () => (
        <Form<IFormValues>
            initialValues={{
                [FormField.Email]: ""
            }}
            onSubmit={handleSubmit}
        >
            <FormItem>
                <Label htmlFor={FormField.Email}>E-Mail</Label>
                <InputField type="email" id={FormField.Email} name={FormField.Email} required />
                <FieldError name={FormField.Email} />
            </FormItem>
            <FormStatus />
            <div style={{ display: "flex" }}>
                <SubmitButton>Submit</SubmitButton>
            </div>
        </Form>
    ));

const handleSubmit: IFormProps<IFormValues>["onSubmit"] = async (values, actions) => {
    await sleep(3000);
    actions.resetForm();
    actions.setStatus({
        success: true,
        message: "Submitted values: " + JSON.stringify(values)
    });
    actions.setSubmitting(false);
};
