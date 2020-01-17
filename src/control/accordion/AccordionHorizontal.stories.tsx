import React from "react";
import { sleep } from "@puzzl/core/lib/async/sleep";
import { storiesOf } from "@storybook/react";
import { AccordionHorizontal } from "./AccordionHorizontal";
import { AccordionItem } from "./AccordionItem";
import { ExpanderAccordion } from "../expander/ExpanderAccordion";
import { IAccordionItemConfig } from "./IAccordionItemConfig";
import { AccordionItemContentStatus } from "./AccordionItemContentStatus";
import { LayoutRow } from "../../layout/content/LayoutRow";
import { LayoutRowItem } from "../../layout/content/LayoutRowItem";
import { Label } from "../../data/Label";
import { AccordionContentFrame } from "./AccordionContentFrame";
import styled from "../../styled-components";

interface IItemConfig extends IAccordionItemConfig {
    label: string;
}

const ExpanderWrapper = styled.div`
    &:first-child {
        margin-left: 0;
    }
    margin-left: 8px;
`;

const ContentArea = styled.div`
    background: ${props => props.theme.colors.base.bg.main};
    padding: 8px;
`;

storiesOf("control/accordion/" + AccordionHorizontal.name, module)
    .addParameters({
        info: {
            propTablesExclude: [ContentArea]
        }
    })
    .addDecorator(storyFn => <ContentArea>{storyFn()}</ContentArea>)
    .add("default", () => (
        <AccordionHorizontal<IItemConfig>
            errorText="Loading failed."
            loadingText="Loading..."
            label="Accordion label"
            noDataContent={<div>No data to show</div>}
            onContentError={(e, item) => {
                // tslint:disable-next-line:no-console
                console.log("Failed loading content for item " + item.config.label);
            }}
            renderExpander={({ config, isOpen, onClick }) =>
                <ExpanderWrapper>
                    <ExpanderAccordion open={isOpen} onClick={onClick} label={config.label} locale="en-US" />
                </ExpanderWrapper>
            }
        >
            <AccordionItem<IItemConfig> label="Item 1 (with delay)" content={async () => {
                await sleep(2000);
                return <div>Dynamically loaded content 1</div>;
            }} />
            <AccordionItem<IItemConfig> label="Item 2 (instant)" content={async () =>
                <div>Dynamically loaded content 2</div>} />
            <AccordionItem<IItemConfig> label="Item 3 (error) " content={async () => { throw new Error(`Error`); }} />
        </AccordionHorizontal>
    ))
    .add("no items", () => (
        <AccordionHorizontal<IItemConfig>
            errorText="Loading failed."
            loadingText="Loading..."
            label="Accordion label"
            noDataContent={<div>No data to show</div>}
            onContentError={(e, item) => {
                // tslint:disable-next-line:no-console
                console.log("Failed loading content for item " + item.config.label);
            }}
            renderExpander={({ config, isOpen, onClick }) =>
                <ExpanderWrapper>
                    <ExpanderAccordion open={isOpen} onClick={onClick} label={config.label} locale="en-US" />
                </ExpanderWrapper>
            }
        >
        </AccordionHorizontal>
    ))
    .add("custom content", () => (
        <AccordionHorizontal<IItemConfig>
            errorText="Loading failed."
            loadingText="Loading..."
            label="Accordion label"
            noDataContent={<div>No data found</div>}
            onContentError={(e, item) => {
                // tslint:disable-next-line:no-console
                console.log("Failed loading content for item " + item.config.label);
            }}
            renderExpander={({ config, isOpen, onClick }) =>
                <ExpanderWrapper>
                    <ExpanderAccordion open={isOpen} onClick={onClick} label={config.label} locale="en-US" />
                </ExpanderWrapper>
            }
            renderContent={({ content, status, arrowPosition }) => {
                if (status !== AccordionItemContentStatus.Loaded) {
                    return <LayoutRow>
                        <LayoutRowItem>
                            <Label></Label>
                            {content}
                        </LayoutRowItem>
                    </LayoutRow>;
                }

                return (
                    <div style={{border: "1px red solid"}}>
                        <AccordionContentFrame arrowPosition={arrowPosition}>{content}</AccordionContentFrame>
                    </div>
                );
            }}
        >
            <AccordionItem<IItemConfig> label="Item 1" content={async () => {
                await sleep(2000);
                return <div>Dynamically loaded content 1</div>;
            }} />
            <AccordionItem<IItemConfig> label="Item 2" content={async () =>
                <div>Dynamically loaded content 2</div>} />
        </AccordionHorizontal>
    ));
