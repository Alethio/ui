import React from "react";
import { storiesOf } from "@storybook/react";
import { Gauge } from "./Gauge";

storiesOf("data/vis/" + Gauge.name, module)
    .add("default", () => (
        <Gauge max={1000} min={1} value={400} width={200} height={100}
            backgroundColor="blue" color="red" lineColor="orange" />
    ));
