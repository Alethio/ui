import React from "react";
import { storiesOf } from "@storybook/react";
import { IconButton } from "./IconButton";
import { ArrowForwardIcon } from "../icon/ArrowForwardIcon";

storiesOf("control/button/" + IconButton.displayName, module)
    .add("default", () => (
        <IconButton Icon={ArrowForwardIcon}></IconButton>
    ))
    .add("custom color", () => (
        <IconButton Icon={ArrowForwardIcon} color="red"></IconButton>
    ))
    .add("larger", () => (
        <IconButton Icon={ArrowForwardIcon} iconSize={32}></IconButton>
    ));
