import React from "react";
import { storiesOf } from "@storybook/react";
import { SpinnerLite } from "./SpinnerLite";

storiesOf("fx/" + SpinnerLite.name, module)
    .add("default", () => (
        <SpinnerLite />
    ))
    .add("bigger", () => (
        <SpinnerLite size={48} />
    ));
