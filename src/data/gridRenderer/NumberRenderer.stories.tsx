import { storiesOf } from "@storybook/react";
import { NumberRenderer } from "./NumberRenderer";

storiesOf("data/gridRenderer/" + NumberRenderer.name, module)
    .add("default", () => (
        new NumberRenderer<{data: number}>("en-US", f => f.data).render({ data: 1234567890 })
    ));
