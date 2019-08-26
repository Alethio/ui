import React from "react";
import { storiesOf } from "@storybook/react";
import { Height } from "./Height";
import { Button } from "../control/Button";
import { observable } from "mobx";
import { Observer } from "mobx-react";

storiesOf("fx/" + Height.name, module)
    .addParameters({
        info: {
            propTablesExclude: [Observer, Button]
        }
    })
    .add("default", () => {
        let animating = observable.box(false);

        const animate = () => {
            animating.set(!animating.get());
        };

        return [
            <div style={{ display: "flex"}}>
                <Button onClick={animate}>Animate</Button>
            </div>,
            <Observer>{() => <Height duration={1}>
                    { animating.get() && <div style={{ height: 200, border: "1px red solid" }}>
                        Content
                    </div> }
                </Height>
            }</Observer>
        ];
    });
