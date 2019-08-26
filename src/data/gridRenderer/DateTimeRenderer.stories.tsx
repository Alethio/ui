import { storiesOf } from "@storybook/react";
import { DateTimeRenderer } from "./DateTimeRenderer";

storiesOf("data/gridRenderer/" + DateTimeRenderer.name, module)
    .add("default", () => (
        new DateTimeRenderer<{data: number}>("en-US", f => f.data).render({ data: Date.now() / 1000 })
    ));
