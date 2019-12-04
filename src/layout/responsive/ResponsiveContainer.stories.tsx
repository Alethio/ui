import React from "react";
import { storiesOf } from "@storybook/react";
import { ResponsiveContainer } from "./ResponsiveContainer";

storiesOf("layout/responsive/" + ResponsiveContainer.displayName, module)
    .add("default", () => (
        <ResponsiveContainer mediaQuery={theme => theme.media.sAndAbove}>
            Content hidden on low res
        </ResponsiveContainer>
    ));
