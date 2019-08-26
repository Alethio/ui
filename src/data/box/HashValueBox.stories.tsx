import React from "react";
import { storiesOf } from "@storybook/react";
import { HashValueBox } from "./HashValueBox";
import { ContractIcon } from "../../icon/ContractIcon";

storiesOf("data/box/" + HashValueBox.name, module)
    .addDecorator(storyFn => <div style={{ display: "flex", padding: 16}}>{storyFn()}</div>)
    .add("default", () => (
        <HashValueBox>0xffddeeccbbaabbccddeeff</HashValueBox>
    ))
    .add("short hash", () => (
        <HashValueBox>0xffddeeccbbaa</HashValueBox>
    ))
    .add("no tooltip", () => (
        <HashValueBox noTooltip>0xffddeeccbbaabbccddeeff</HashValueBox>
    ))
    .add("icon", () => (
        <HashValueBox Icon={ContractIcon}>0xffddeeccbbaabbccddeeff</HashValueBox>
    ));
