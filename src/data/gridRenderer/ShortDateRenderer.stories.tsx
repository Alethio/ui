import { storiesOf } from "@storybook/react";
import { ShortDateRenderer } from "./ShortDateRenderer";

storiesOf("data/gridRenderer/" + ShortDateRenderer.name, module)
    .add("default", () => (
        new ShortDateRenderer<{data: number}>("en-US", f => f.data).render({ data: Date.now() / 1000})
    ));
