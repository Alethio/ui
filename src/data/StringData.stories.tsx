import React from "react";
import { storiesOf } from "@storybook/react";
import { StringData } from "./StringData";

storiesOf("data/" + StringData.name, module)
    .add("default", () => (
        <StringData>abcdefghijklmnop</StringData>
    ));
