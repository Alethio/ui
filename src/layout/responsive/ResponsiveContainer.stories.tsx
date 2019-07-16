import React from "react";
import { storiesOf } from "@storybook/react";
import { ResponsiveContainer } from "./ResponsiveContainer";

storiesOf("layout/responsive/" + ResponsiveContainer.displayName, module)
    .add("default", () => (
        <ResponsiveContainer behavior="hide" forScreenWidth={{ lowerThan: 600 }} >
            Content hidden on low res
        </ResponsiveContainer>
    ));
