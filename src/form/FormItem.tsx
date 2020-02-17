import styled from "styled-components";
import { Label } from "./Label";
import { $StatusError } from "./FieldError";

/** Wrapper for a form field with a vertical layout, having an optional label, the field and the field error message */
export const FormItem = styled.div`
    margin: 16px 0;

    ${Label} {
        margin-bottom: 8px;
        display: block;
    }

    ${$StatusError} {
        margin-top: 6px;
    }
`;
