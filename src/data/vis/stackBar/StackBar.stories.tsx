import React from "react";
import { storiesOf } from "@storybook/react";
import { StackBar } from "./StackBar";

storiesOf("data/vis/" + StackBar.displayName, module)
    .addDecorator(storyFn => <div style={{ width: 200, padding: 8 }}>{storyFn()}</div>)
    .add("default", () => (
        <StackBar items={[
            { color: "red", count: 2000, label: "Item 1", tooltip: <div>Item 1 tooltip</div>},
            { color: "green", count: 200, label: "Item 2", tooltip: <div>Item 2 tooltip</div>},
            { color: "blue", count: 4000, label: "Item 3", tooltip: <div>Item 3 tooltip</div>}
        ]} />
    ))
    .add("growing", () => (
        <StackBar defaultBarHeight={8} maxBarHeight={12} minBarHeight={4} items={[
            { color: "red", count: 2000, label: "Item 1", tooltip: <div>Item 1 tooltip</div>},
            { color: "green", count: 200, label: "Item 2", tooltip: <div>Item 2 tooltip</div>},
            { color: "blue", count: 4000, label: "Item 3", tooltip: <div>Item 3 tooltip</div>}
        ]} />
    ));
