import React from "react";
import { storiesOf } from "@storybook/react";
import { UsdValue } from "./UsdValue";

storiesOf("data/" + UsdValue.name, module)
    .addDecorator(storyFn => <div style={{ display: "flex" }}>{storyFn()}</div>)
    .add("default", () => (
        <UsdValue locale="en-US" value={1234.56} />
    ));
