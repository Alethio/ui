import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { Form, IFormProps } from "./Form";
import { FormItem } from "./FormItem";
import { InputField } from "./field/InputField";
import { FieldError } from "./FieldError";
import { Label } from "./Label";
import { FormStatus } from "./FormStatus";
import { SubmitButton } from "./SubmitButton";
import { sleep } from "@puzzl/core/lib/async/sleep";
import { TextareaField } from "./field/TextareaField";
import { CheckboxField } from "./field/CheckboxField";
import { RadioField } from "./field/RadioField";
import { SelectField } from "./field/SelectField";
import { Option } from "../control/Option";

const RootContainer = styled.div`
    background: ${props => props.theme.colors.base.bg.main};
    width: 500px;
    padding: 16px;
`;

enum FormField {
    Email = "email",
    Message = "message",
    Check1 = "check1",
    Check2 = "check2",
    Radio = "radio",
    Select = "select"
}

interface IFormValues {
    [FormField.Email]: string;
    [FormField.Message]: string;
    [FormField.Check1]: boolean;
    [FormField.Check2]: boolean;
    [FormField.Radio]: string;
    [FormField.Select]: string;
}

storiesOf("form", module)
    .addParameters({
        info: {
            propTablesExclude: [RootContainer, FormItem, InputField, Label]
        }
    })
    .addDecorator(storyFn => <RootContainer>{storyFn()}</RootContainer>)
    .add("default", () => (
        <Form<IFormValues>
            initialValues={{
                [FormField.Email]: "",
                [FormField.Message]: "",
                [FormField.Check1]: true,
                [FormField.Check2]: false,
                [FormField.Radio]: "option2",
                [FormField.Select]: "1"
            }}
            onSubmit={handleSubmit}
            validateOnChange={false}
        >
            <FormItem>
                <Label htmlFor={FormField.Select}>Title</Label>
                <SelectField id={FormField.Select} name={FormField.Select} fullWidth={true}
                    placeholder={"Title"}>
                    <Option value="1">Mr.</Option>
                    <Option value="2">Ms.</Option>
                </SelectField>
                <FieldError name={FormField.Select} />
            </FormItem>
            <FormItem>
                <Label htmlFor={FormField.Email}>E-Mail</Label>
                <InputField type="email" id={FormField.Email} name={FormField.Email} required
                    validate={validateEmail}
                    placeholder="Enter your E-mail address"
                />
                <FieldError name={FormField.Email} />
            </FormItem>
            <FormItem>
                <Label htmlFor={FormField.Message}>Message</Label>
                <TextareaField id={FormField.Message} name={FormField.Message} required
                    placeholder="Enter a short message"
                />
                <FieldError name={FormField.Message} />
            </FormItem>
            <FormItem>
                <CheckboxField name={FormField.Check1}>Pre-checked</CheckboxField>
                <CheckboxField name={FormField.Check2}>Default unchecked</CheckboxField>
            </FormItem>
            <FormItem>
                <RadioField name={FormField.Radio} value="option1">Option 1</RadioField>
                <RadioField name={FormField.Radio} value="option2">Option 2</RadioField>
                <RadioField name={FormField.Radio} value="option3">Option 3</RadioField>
            </FormItem>
            <FormStatus />
            <div style={{ display: "flex" }}>
                <SubmitButton>Submit</SubmitButton>
            </div>
        </Form>
    ));

const validateEmail = (value: string) => {
    let error;
    if (!value) {
        error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = "Invalid email address";
    }
    return error;
};

const handleSubmit: IFormProps<IFormValues>["onSubmit"] = async (values, actions) => {
    await sleep(3000);
    actions.resetForm();
    actions.setStatus({
        success: true,
        message: "Submitted values: " + JSON.stringify(values)
    });
    actions.setSubmitting(false);
};
