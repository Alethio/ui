import React from "react";
import { storiesOf } from "@storybook/react";
import { ModalSelectBox } from "./ModalSelectBox";

storiesOf("control/" + ModalSelectBox.name, module)
    .addDecorator(storyFn => <div style={{ width: 300, padding: 8 }}>{storyFn()}</div>)
    .add("default", () => (
        <ModalSelectBox onClose={() => { /* noop */}}></ModalSelectBox>
    ));
