import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Toolbar } from "./toolbar/Toolbar";
import { ToolbarItem } from "./toolbar/ToolbarItem";
import { ToolbarIconButton } from "./toolbar/ToolbarIconButton";
import { AlethioIcon } from "../icon/AlethioIcon";
import { LogoutIcon } from "../icon/LogoutIcon";
import { Filler } from "./Filler";
import { VerticalBar } from "./VerticalBar";

export const Page = styled.div`
    flex: 1 1 auto;
    min-height: 100vh;
`;

export const Container = styled.div`
    display: flex;
`;

export const Content = styled.div`
    background-color: #F8FAFC;
    flex: 1 1 auto;
    padding: 48px 0 72px 0;
    min-height: 100vh;
    width: 300px;
    box-sizing: border-box;
`;

const SideBar = styled(VerticalBar)`
    padding-top: 38px;
    padding-bottom: 80px;
`;

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
                    <SideBar width={241} zIndex={1}>
                        Sidebar content
                    </SideBar>
                    <Content>
                        Page content
                    </Content>
                </Container>
            </Page>
        </Container>
    ));
