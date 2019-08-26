import React from "react";
import { storiesOf } from "@storybook/react";
import { Spinner } from "./Spinner";

storiesOf("fx/" + Spinner.name, module)
    .add("default", () => (
        <Spinner></Spinner>
    ))
    .add("bigger", () => (
        <Spinner size={48} />
    ));
