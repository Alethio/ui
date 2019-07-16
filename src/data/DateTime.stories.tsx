import React from "react";
import { storiesOf } from "@storybook/react";
import { DateTime } from "./DateTime";

storiesOf("data/" + DateTime.name, module)
    .add("default", () => (
        <DateTime locale="en-US" timestamp={Date.now() / 1000} />
    ));
