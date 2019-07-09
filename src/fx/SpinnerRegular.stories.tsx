import React from "react";
import { storiesOf } from "@storybook/react";
import { SpinnerRegular } from "./SpinnerRegular";

storiesOf("fx/" + SpinnerRegular.displayName, module)
    .add("default", () => (
        <SpinnerRegular />
    ))
    .add("bigger", () => (
        <SpinnerRegular size={48} />
    ));
