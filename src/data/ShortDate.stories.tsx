import React from "react";
import { storiesOf } from "@storybook/react";
import { ShortDate } from "./ShortDate";

storiesOf("data/" + ShortDate.name, module)
    .add("default", () => (
        <ShortDate locale="en-US" timestamp={Date.now() / 1000} />
    ));
