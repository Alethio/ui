import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "../styled-components";
import { Select } from "./Select";
import { GithubIcon } from "../icon/GithubIcon";

const SelectContainer = styled.div`
    display: flex;
    padding: 8px;

    & > * {
        margin-left: 8px;
    }
`;

const options1 = [
    {
        value: "one",
        text: "option 1"
    },
    {
        value: "two",
        text: "option 2"
    },
    {
        value: "three",
        text: "option 3",
        Icon: GithubIcon
    },
    {
        value: "",
        text: "disabled",
        disabled: true
    }
];

storiesOf("control/" + Select.name, module)
    .addParameters({
        info: {
            propTablesExclude: [SelectContainer]
        }
    })
    .addDecorator(storyFn => <SelectContainer>{storyFn()}</SelectContainer>)
    .add("default", () => (
        [
            <Select options={options1} />,
            <Select options={options1} default={options1[1]} />,
            <Select options={options1} label="Custom label" />,
            <Select options={options1} fullWidth label="Full width" />
        ]
    ));
