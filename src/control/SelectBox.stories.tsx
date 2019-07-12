import React from "react";
import { storiesOf } from "@storybook/react";
import { SelectBox } from "./SelectBox";
import { Button } from "./Button";

storiesOf("control/" + SelectBox.name, module)
    .addParameters({
        info: {
            propTablesExclude: [Button]
        }
    })
    .addDecorator(storyFn => <div style={{ display: "flex"}}>{storyFn()}</div>)
    .add("default", () => (
        <SelectBox render={({ requestClose }) => <div>
            Box content
        </div>}>
            <Button>Open SelectBox</Button>
        </SelectBox>
    ))
    .add("offset", () => (
        <SelectBox offset={{ left: 20, top: 10 }} render={({ requestClose }) => <div>
            Box content
        </div>}>
            <Button>Open SelectBox</Button>
        </SelectBox>
    ))
    .add("disabled", () => (
        <SelectBox disabled render={({ requestClose }) => <div>
            Box content
        </div>}>
            <Button>Open SelectBox</Button>
        </SelectBox>
    ));
