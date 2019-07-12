import React from "react";
import { storiesOf } from "@storybook/react";
import { LayoutRow as LR, ILayoutRowProps} from "./LayoutRow";
import { LayoutRowItem } from "./LayoutRowItem";
import { LayoutSection } from "./LayoutSection";
import { Label } from "../../data/Label";
import { ValueBox as VB } from "./box/ValueBox";
import styled from "../../styled-components";

const LayoutRowWrapper = styled.div`
    outline: 1px red solid !important;
`;
const LayoutRow: React.StatelessComponent<ILayoutRowProps> = (props) =>
    <LayoutRowWrapper><LR {...props} /></LayoutRowWrapper>;
const ValueBox = styled(VB)`
    outline: 1px green solid;
`;

storiesOf("layout/content/" + LR.name, module)
    .addDecorator(s => <div style={{ padding: 8}}>{s()}</div>)
    .add("default", () => <div style={{width: 800}}>
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
    </div>);
