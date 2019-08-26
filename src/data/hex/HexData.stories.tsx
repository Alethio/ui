import React from "react";
import { storiesOf } from "@storybook/react";
import { HexData } from "./HexData";

storiesOf("data/hex/" + HexData.name, module)
    .addDecorator(storyFn => <div style={{ display: "flex"}}>{storyFn()}</div>)
    .add("default", () => (
        <HexData data={"0x6465636f6465646465636f6465646465636f6465646465636f646564"} />
    ));
