import React from "react";
import { storiesOf } from "@storybook/react";
import { MessageBox } from "./MessageBox";
import { InfoIcon } from "./icon/InfoIcon";
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

storiesOf(MessageBox.name, module)
    .addParameters({
        info: {
            inline: false
        }
    })
    .add("default (primary colors)", () => (
        <PrimaryWrapper>
            <MessageBox Icon={InfoIcon}>Some useful info</MessageBox>
        </PrimaryWrapper>
    ))
    .add("secondary colors", () => (
        <AltWrapper>
            <MessageBox Icon={InfoIcon} colors="secondary">Some useful info</MessageBox>
        </AltWrapper>
    ));
