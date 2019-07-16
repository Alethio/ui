import { storiesOf } from "@storybook/react";
import { HashRenderer } from "./HashRenderer";

storiesOf("data/gridRenderer/" + HashRenderer.name, module)
    .add("default", () => (
        new HashRenderer<{data: string}>(f => f.data).render({ data: "0xffeeddccbbaabbccddeeff" })
    ));
