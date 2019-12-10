import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "../styled-components";
import { Select } from "./Select";
import { GithubIcon } from "../icon/GithubIcon";
import { Option } from "./Option";

const SelectContainer = styled.div`
    display: flex;
    padding: 8px;

    & > * {
        margin-left: 8px;
    }
`;

storiesOf("control/" + Select.name, module)
    .addParameters({
        info: {
            propTablesExclude: [SelectContainer]
        }
    })
    .addDecorator(storyFn => <SelectContainer>{storyFn()}</SelectContainer>)
    .add("default", () => (
        [
            <Select label="No Options" />,
            <Select label="Options" value="3">
                <Option value="1">Option 1</Option>
                <Option value="2" selected>Option 2</Option>
                <Option value="3" Icon={GithubIcon}>Option 3</Option>
            </Select>,
            <Select label="One Option" fullWidth>
                <Option value="1">Option 1</Option>
            </Select>
        ]
    ));
