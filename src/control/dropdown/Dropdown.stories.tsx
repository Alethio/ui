import React from "react";
import { storiesOf } from "@storybook/react";
import { Menu } from "../menu/Menu";
import styled from "../../styled-components";
import { MenuItem } from "../menu/MenuItem";
import { Dropdown } from "./Dropdown";
import { ExpanderSelect } from "../expander/ExpanderSelect";

const RootContainer = styled.div`
    display: flex;
    background: lightgray;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 100px;
`;

interface IItem {
    id: string;
}

storiesOf("control/" + Dropdown.name, module)
    .addParameters({
        info: {
            propTablesExclude: [RootContainer]
        }
    })
    .addDecorator(storyFn => <RootContainer>{storyFn()}</RootContainer>)
    .add("default", () => (
        <Dropdown<IItem> renderMenu={(onSelectItem) =>
            <Menu>
                <MenuItem onClick={() => onSelectItem({ id: "1"})}>Item 1</MenuItem>
                <MenuItem onClick={() => onSelectItem({ id: "2"})}>Item 2</MenuItem>
                <MenuItem disabled onClick={() => onSelectItem({ id: "3"})}>Item 3</MenuItem>
            </Menu>
        } onSelect={item => alert("Selected item " + item.id)}>
            { ({requestToggle, isOpen}) => <ExpanderSelect open={isOpen} onClick={requestToggle} label="Click me" /> }
        </Dropdown>
    ));
