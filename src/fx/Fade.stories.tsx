import React from "react";
import { storiesOf } from "@storybook/react";
import { Fade } from "./Fade";

storiesOf("fx/" + Fade.name, module)
    .add("default", () => (
        <Fade duration={5}>Fading</Fade>
    ));
