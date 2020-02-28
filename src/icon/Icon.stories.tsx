import React from "react";
import { storiesOf } from "@storybook/react";
import { Tooltip } from "../overlay/tooltip/Tooltip";

let icons = require.context("./", false, /Icon\.tsx$/);

storiesOf("icon", module)
    .addParameters({
        info: {
            disable: true
        }
    })
    .addDecorator(storyFn => <div style={{ display: "flex", padding: 8, flexWrap: "wrap", width: 900}}>
        {storyFn()}</div>)
    .add("default", () =>
        icons.keys().map(k => k.replace(/\.\/(.*)\.tsx$/, "$1")).map(iconName => {
            let Icon = icons("./" + iconName + ".tsx")[iconName];
            return <Tooltip content={iconName}>
                <div style={{color: "blue"}}>
                    <Icon />
                </div>
            </Tooltip>;
        })
    );
