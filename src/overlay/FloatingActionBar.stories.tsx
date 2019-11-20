import React from "react";
import { storiesOf } from "@storybook/react";
import { FloatingActionBar } from "./FloatingActionBar";
import { Button } from "../control/Button";

storiesOf("overlay/" + FloatingActionBar.name, module)
    .addParameters({
        info: {
            propTablesExclude: [Button]
        }
    })
    .addDecorator(s => <div style={{ width: 500, height: 200, position: "relative", border: "1px red solid" }}>
        {s()}</div>)
    .add("default", () => (
        <FloatingActionBar>
            <Button elevationType="floating" colors="primary">Click me1</Button>
            <Button elevationType="floating">Click me2</Button>
        </FloatingActionBar>
    ));
