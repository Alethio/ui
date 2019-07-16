import React from "react";
import { storiesOf } from "@storybook/react";
import { OptionalDataRenderer } from "./OptionalDataRenderer";
import { NumberRenderer } from "./NumberRenderer";

storiesOf("data/gridRenderer/" + OptionalDataRenderer.name, module)
    .addDecorator(storyFn => <div style={{ width: 300 }}>{storyFn()}</div>)
    .add("default", () => <div>
        {new OptionalDataRenderer<{ data: number | undefined }, { data: number }>(
            new NumberRenderer<{data: number}>("en-US", f => f.data),
            f => f.data !== void 0
        ).render({ data: Date.now() }) }
        </div>
    )
    .add("condition false", () => <div>
        {new OptionalDataRenderer<{ data: number | undefined }, { data: number }>(
            new NumberRenderer<{data: number}>("en-US", f => f.data),
            f => f.data !== void 0
        ).render({ data: void 0 }) }
        </div>
    );
