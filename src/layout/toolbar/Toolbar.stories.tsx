import React from "react";
import { storiesOf } from "@storybook/react";
import { Toolbar } from "./Toolbar";
import { Container } from "../Container";
import { ToolbarItem } from "./ToolbarItem";
import { ToolbarIconButton } from "./ToolbarIconButton";
import { Filler } from "../Filler";
import { AlethioIcon } from "../../icon/AlethioIcon";
import { LogoutIcon } from "../../icon/LogoutIcon";

storiesOf("layout/toolbar/" + Toolbar.displayName, module)
    .addParameters({
        info: {
            inline: false
        }
    })
    .add("default", () => (
        <Container>
            <Toolbar>
                <ToolbarItem title="Item 1">
                    <ToolbarIconButton Icon={AlethioIcon} />
                </ToolbarItem>
                <Filler />
                <ToolbarItem>
                    <ToolbarIconButton Icon={LogoutIcon} />
                </ToolbarItem>
            </Toolbar>
        </Container>
    ));
