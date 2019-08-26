import React from "react";
import { storiesOf } from "@storybook/react";
import { DecodedHexData } from "./DecodedHexData";

storiesOf("data/hex/" + DecodedHexData.name, module)
    .addDecorator(storyFn => <div style={{ display: "flex"}}>{storyFn()}</div>)
    .add("default", () => (
        <DecodedHexData data={"0x6465636f646564"} />
    ));
