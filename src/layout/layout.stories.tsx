import React from "react";
import { storiesOf } from "@storybook/react";
import { Container } from "./Container";
import { Sidebar } from "./sidebar/Sidebar";
import { Content } from "./Content";
import { Toolbar } from "./toolbar/Toolbar";
import { ToolbarItem } from "./toolbar/ToolbarItem";
import { ToolbarIconButton } from "./toolbar/ToolbarIconButton";
import { AlethioIcon } from "../icon/AlethioIcon";
import { LogoutIcon } from "../icon/LogoutIcon";
import { Filler } from "./Filler";
import { Page } from "./Page";

storiesOf("layout/layout", module)
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
            <Page>
                <Container>
                    <Sidebar>
                        Sidebar content
                    </Sidebar>
                    <Content>
                        Page content
                    </Content>
                </Container>
            </Page>
        </Container>
    ));
