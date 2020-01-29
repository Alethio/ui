import React from "react";
import { storiesOf } from "@storybook/react";
import { TopBar } from "./TopBar";
import { TopbarItem } from "./TopbarItem";
import { ToolbarIconButton } from "../toolbar/ToolbarIconButton";
import { AlethioIcon } from "../../icon/AlethioIcon";
import { Filler } from "../Filler";
import { LogoutIcon } from "../../icon/LogoutIcon";
import styled from "../../styled-components";

const Page = styled.div`
    flex: 1 1 auto;
    min-height: 100vh;
`;

export const Container = styled.div`
    display: flex;
    position: relative;
    z-index: 0;
`;
export const Content = styled.div`
    background-color: #F8FAFC;
    flex: 1 1 auto;
    padding: 48px 0 72px 0;
    min-height: 100vh;
    width: 300px;
    box-sizing: border-box;
`;

storiesOf("layout/topbar/" + TopBar.displayName, module)
    .addParameters({
        info: {
            inline: false,
            propTablesExclude: [Container, Page, Content]
        },
        viewport: {
            defaultViewport: "iphone6"
        }
    })
    .add("default", () => (
        <Container>
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
