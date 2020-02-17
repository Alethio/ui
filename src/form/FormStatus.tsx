import styled from "styled-components";
import React from "react";
import { WithFormState } from "./WithFormState";

interface IFormStatusProps {
    success: boolean;
}

const $FormStatus = styled.p<IFormStatusProps>`
    color: ${props => !props.success ? props.theme.colors.base.status.error : void 0};
`;

export const FormStatus: React.ComponentType<{}> = () => <WithFormState<unknown>>
    { ({ status }) => {
        if (!status || !status.message) {
            return null;
        }
        return <$FormStatus success={status.success}>{status.message}</$FormStatus>;
    }}
</WithFormState>;
