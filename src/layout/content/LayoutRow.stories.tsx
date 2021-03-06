import React from "react";
import { storiesOf } from "@storybook/react";
import { LayoutRow } from "./LayoutRow";
import { LayoutRowItem } from "./LayoutRowItem";
import { LayoutSection } from "./LayoutSection";
import { Label } from "../../data/Label";
import { ValueBox } from "./box/ValueBox";
import { Box } from "./box/Box";
import styled from "../../styled-components";

const ContentWrapper = styled.div`
    padding: 8px;
    width: 800px;
    > [class^=${LayoutRow.name}] {
        outline: 1px red solid;
    }
    [class^=${Box.displayName}-] {
        outline: 1px green solid;
    }
`;

storiesOf("layout/content/" + LayoutRow.name, module)
    .addParameters({
        info: {
            propTablesExclude: [ValueBox, Label, ContentWrapper, React.Fragment]
        }
    })
    .addDecorator(s => <ContentWrapper>{s()}</ContentWrapper>)
    .add("default", () => <>
        <LayoutSection>
            <LayoutRow>
                <LayoutRowItem>
                    <Label>Item 1.1</Label>
                    <ValueBox>Value 1.1</ValueBox>
                </LayoutRowItem>
                <LayoutRowItem>
                    <Label>Item 1.2</Label>
                    <ValueBox>Value 1.2</ValueBox>
                    <ValueBox>Extra 1.2</ValueBox>
                </LayoutRowItem>
            </LayoutRow>
            <LayoutRow minWidth={800}>
                <LayoutRowItem>
                    <Label>Item 2.1</Label>
                    <ValueBox>Value 2.1</ValueBox>
                </LayoutRowItem>
                <LayoutRowItem>
                    <Label>Item 2.2</Label>
                    <ValueBox>Value 2.2</ValueBox>
                </LayoutRowItem>
                <LayoutRowItem>
                    <Label>Item 2.3</Label>
                    <ValueBox>Value 2.3</ValueBox>
                </LayoutRowItem>
            </LayoutRow>
            <LayoutRow>
                <LayoutRowItem>
                    <Label>Item 3.1</Label>
                    <ValueBox>Value 3.1</ValueBox>
                </LayoutRowItem>
            </LayoutRow>
        </LayoutSection>
        <LayoutSection>
            <LayoutRow>
                <LayoutRowItem>
                    <Label>Item 4.1</Label>
                    <ValueBox>Value 4.1</ValueBox>
                </LayoutRowItem>
                <LayoutRowItem>
                    <Label>Item 4.2</Label>
                    <ValueBox>Value 4.2</ValueBox>
                </LayoutRowItem>
            </LayoutRow>
        </LayoutSection>
    </>);
