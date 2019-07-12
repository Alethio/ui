import React from "react";
import { storiesOf } from "@storybook/react";
import { Popover } from "./Popover";
import styled from "../styled-components";

const Container = styled.div`
    display: flex;
    width: 300px;
    height: 200px;
    align-items: center;
    justify-content: center;
    border: 1px grey solid;
`;

const AnchorWrapper = styled.div`
    border: 1px red solid;
`;

storiesOf("overlay/" + Popover.name, module)
    .addDecorator(s => <Container>{s()}</Container>)
    .add("default", () => (
        <Popover
            content={"Popover element content"}
            visible
            borderColor="green"
        >
            <AnchorWrapper>Anchor element</AnchorWrapper>
        </Popover>
    ));
