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
import { TextareaField } from "./field/TextareaField";
import { CheckboxField } from "./field/CheckboxField";
import { RadioField } from "./field/RadioField";
import { SelectField } from "./field/SelectField";
import { Option } from "../control/Option";
import { useFormContext } from "./useFormContext";
import { Button } from "../control/Button";

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
    Select = "select",
    CheckboxArray = "checkArray"
}

interface IFormValues {
    [FormField.Email]: string;
    [FormField.Message]: string;
    [FormField.Check1]: boolean;
    [FormField.Check2]: boolean;
    [FormField.Radio]: string;
    [FormField.Select]: string;
    [FormField.CheckboxArray]: string[];
}

const AutoFillButton: React.FC = () => {
    let formContext = useFormContext<IFormValues, unknown>();
    const handleClick = () => {
        formContext.setFieldValue(FormField.Email, "john@doe.com");
        // setTimeout because value is not updated synchronously (https://github.com/jaredpalmer/formik/issues/2266)
        setTimeout(() => formContext.setFieldTouched(FormField.Email));
    };
    return <Button colors="primary" onClick={handleClick} type="button">Auto-fill email</Button>;
};

const validateCheckArray = (v: string[]) => {
    if (!v.length) {
        return "You must select at least one option";
    }
    return void 0;
};

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
                [FormField.Select]: "",
                [FormField.CheckboxArray]: []
            }}
            onSubmit={handleSubmit}
            validateOnChange={false}
            validate={values => {
                if (!values.select) {
                    return { select: "Please select a value" };
                }

                return {};
            }}
        >
            <FormItem>
                <AutoFillButton />
            </FormItem>
            <FormItem>
                <Label>Title</Label>
                <SelectField name={FormField.Select} fullWidth={true}
                    placeholder={"Please select an option..."}>
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
                    innerRef={ref => {
                        // Just to test that innerRef works
                        setTimeout(() => ref && ref.focus(), 1000);
                    }}
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
            <FormItem>
                <CheckboxField name={FormField.CheckboxArray} value="check1" validate={validateCheckArray}>
                    Check array 1
                </CheckboxField>
                <CheckboxField name={FormField.CheckboxArray} value="check2" validate={validateCheckArray}>
                    Check array 2
                </CheckboxField>
                <FieldError name={FormField.CheckboxArray} />
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
