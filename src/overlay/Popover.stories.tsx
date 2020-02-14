import React from "react";
import { storiesOf } from "@storybook/react";
import { Popover } from "./Popover";
import styled from "styled-components";
import { Menu } from "../control/menu/Menu";
import { MenuItem } from "../control/menu/MenuItem";

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
    .addParameters({
        info: {
            propTablesExclude: [AnchorWrapper, Container]
        }
    })
    .addDecorator(s => <Container>{s()}</Container>)
    .add("default", () => (
        <Popover
            content={<Menu><MenuItem>Item 1</MenuItem><MenuItem>Item 2</MenuItem></Menu>}
            visible
        >
            <AnchorWrapper>Anchor element</AnchorWrapper>
        </Popover>
    ));
