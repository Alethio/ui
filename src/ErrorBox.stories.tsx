import React from "react";
import { storiesOf } from "@storybook/react";
import { ErrorBox } from "./ErrorBox";
import styled from "./styled-components";

const PrimaryWrapper = styled.div`
    position: relative;
    height: 100vh;
    background-color: ${props => props.theme.colors.base.bg.main};
`;

const AltWrapper = styled.div`
    position: relative;
    height: 100vh;
    background-color: ${props => props.theme.colors.base.bg.alt};
`;

storiesOf(ErrorBox.name, module)
    .addParameters({
        info: {
            inline: false
        }
    })
    .add("default (primary colors)", () => (
        <PrimaryWrapper>
            <ErrorBox>This is an error message</ErrorBox>
        </PrimaryWrapper>
    ))
    .add("secondary colors", () => (
        <AltWrapper>
            <ErrorBox colors="secondary">This is an error message</ErrorBox>
        </AltWrapper>
    ));
