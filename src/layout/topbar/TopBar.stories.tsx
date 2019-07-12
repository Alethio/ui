import React from "react";
import { storiesOf } from "@storybook/react";
import { TopBar } from "./TopBar";
import { Page } from "../Page";
import { TopbarItem } from "./TopbarItem";
import { ToolbarIconButton } from "../toolbar/ToolbarIconButton";
import { AlethioIcon } from "../../icon/AlethioIcon";
import { Filler } from "../Filler";
import { LogoutIcon } from "../../icon/LogoutIcon";
import { Container } from "../Container";
import { Content } from "../Content";

storiesOf("layout/topbar/" + TopBar.displayName, module)
    .addParameters({
        info: {
            inline: false
        },
        viewport: {
            defaultViewport: "iphone6"
        }
    })
    .add("default", () => (
        <Container zIndex={0}>
            <Page>
                <TopBar zIndex={1}>
                    <TopbarItem title="Item 1">
                        <ToolbarIconButton Icon={AlethioIcon} />
                    </TopbarItem>
                    <Filler />
                    <TopbarItem>
                        <ToolbarIconButton Icon={LogoutIcon} />
                    </TopbarItem>
                </TopBar>
                <Container>
                    <Content>
                        Page content
                    </Content>
                </Container>
            </Page>
        </Container>
    ));
