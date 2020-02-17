import React from "react";
import { storiesOf } from "@storybook/react";
import { Radio } from "./Radio";
import { Button } from "./Button";
import styled from "styled-components";

const RadioContainer = styled.div`
    display: flex;
    padding: 8px;

    & > * {
        margin-left: 8px;
    }
`;

storiesOf("control/" + Radio.name, module)
    .addParameters({
        info: {
            propTablesExclude: [RadioContainer]
        }
    })
    .addDecorator(storyFn => <RadioContainer>{storyFn()}</RadioContainer>)

    .add("default", () => (
        <Radio id="myRadio" name="myRadio" value="someValue"></Radio>
    ))
    .add("checked", () => (
        <Radio id="myRadio" name="myRadio" value="someValue" checked></Radio>
    ))
    .add("label", () => (
        <Radio name="myRadio" value="someValue">Item label<br />with long description</Radio>
    ))
    .add("disabled", () => [
        <Radio name="myRadio" value="someValue" disabled>Disabled<br />second line</Radio>,
        <Radio name="myRadio" value="someValue" checked disabled>Checked<br />and disabled</Radio>
    ])
    .add("group", () => ([
        <form onSubmit={(e) => {
            e.preventDefault();
            alert("Selected " + new FormData(e.target as HTMLFormElement).get("myRadio"));
        }}>
            <Radio name="myRadio" value="first">First item<br />With description</Radio>
            <Radio name="myRadio" value="second" checked>Second item<br />Extra line</Radio>
            <Radio name="myRadio" value="third" disabled>Third item</Radio>
            <br />
            <Button type="submit" colors="primary">Submit</Button>
        </form>
    ]));
