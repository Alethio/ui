import React from "react";
import { storiesOf } from "@storybook/react";
import { LoadingBox } from "./LoadingBox";
import styled from "styled-components";

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

storiesOf(LoadingBox.name, module)
    .addParameters({
        info: {
            inline: false
        }
    })
    .add("default (primary colors)", () => (
        <PrimaryWrapper>
            <LoadingBox>It's doing something...</LoadingBox>
        </PrimaryWrapper>
    ))
    .add("secondary colors", () => (
        <AltWrapper>
            <LoadingBox colors="secondary">It's doing something...</LoadingBox>
        </AltWrapper>
    ));
