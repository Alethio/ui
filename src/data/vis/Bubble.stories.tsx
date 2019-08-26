import React from "react";
import { storiesOf } from "@storybook/react";
import { Bubble } from "./Bubble";

storiesOf("data/vis/" + Bubble.name, module)
    .addDecorator(storyFn => <div style={{ display: "flex", padding: 8 }}>{storyFn()}</div>)
    .add("default", () => [
        <Bubble size={5} wrapperSize={24} />,
        <Bubble size={50} wrapperSize={24} />,
        <Bubble size={100} wrapperSize={24} />
    ])
    .add("highlight", () => [
        <Bubble size={76} wrapperSize={24} highlightThreshold={75} highlightColor="red" />
    ]);
