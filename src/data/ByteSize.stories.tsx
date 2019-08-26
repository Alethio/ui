import React from "react";
import { storiesOf } from "@storybook/react";
import { ByteSize } from "./ByteSize";

storiesOf("data/" + ByteSize.name, module)
    .add("default", () => (
        <ByteSize format="%d bytes" locale="en-US">{125346}</ByteSize>
    ));
