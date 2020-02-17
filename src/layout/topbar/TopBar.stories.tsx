import React from "react";
import { storiesOf } from "@storybook/react";
import { TopBar } from "./TopBar";
import { TopbarItem } from "./TopbarItem";
import { ToolbarIconButton } from "../toolbar/ToolbarIconButton";
import { Filler } from "../Filler";
import { LogoutIcon } from "../../icon/LogoutIcon";
import { HamburgerIcon } from "../../icon/HamburgerIcon";
import styled from "styled-components";
import { Dropdown } from "../../control/dropdown/Dropdown";
import { MobileMenuLayer } from "./MobileMenuLayer";
import { MobileMenuItem } from "./MobileMenuItem";
import { AlethioIcon } from "../../icon/AlethioIcon";

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
                    <Dropdown<void> renderMenu={(onSelectItem) =>
                        <MobileMenuLayer onRequestClose={() => onSelectItem()} open>
                            <MobileMenuItem title="Menu Item">
                                <ToolbarIconButton Icon={AlethioIcon} />
                            </MobileMenuItem>
                        </MobileMenuLayer>
                    }>{ ({requestToggle}) =>
                        <TopbarItem title="Item 1">
                            <ToolbarIconButton Icon={HamburgerIcon} onClick={requestToggle} />
                        </TopbarItem>
                    }
                    </Dropdown>
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
