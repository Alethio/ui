import React from "react";
import { storiesOf } from "@storybook/react";
import { TimeElapsedBox } from "./TimeElapsedBox";

storiesOf("data/box/" + TimeElapsedBox.name, module)
    .addDecorator(storyFn => <div style={{ display: "flex" }}>{storyFn()}</div>)
    .add("default", () => (
        <TimeElapsedBox locale="en-US" timestamp={(Date.now()) / 1000 - 50} translations={{
            future: "in %s",
            past: "%s ago",
            s: "1 second",
            ss: "%d seconds",
            m: "1 minute",
            mm: "%d minutes",
            h: "1 hour",
            hh: "%d hours",
            d: "1 day",
            dd: "%d days",
            M: "1 month",
            MM: "%d months",
            y: "1 year",
            yy: "%d years"
        }}></TimeElapsedBox>
    ));
