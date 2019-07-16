import React from "react";
import { storiesOf } from "@storybook/react";
import { Layer } from "./Layer";

storiesOf("overlay/" + Layer.displayName, module)
    .addParameters({
        info: {
            inline: false
        }
    })
    .add("default", () => (
        <Layer>
            <div style={{ width: 500, height: 200}}>
                Content
            </div>
        </Layer>
    ));
