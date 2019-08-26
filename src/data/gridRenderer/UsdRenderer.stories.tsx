import { storiesOf } from "@storybook/react";
import { UsdRenderer } from "./UsdRenderer";

storiesOf("data/gridRenderer/" + UsdRenderer.name, module)
    .add("default", () => (
        new UsdRenderer<{data: number}>("en-US", f => f.data).render({ data: 123456789})
    ));
