import React from "react";
import { sleep } from "@puzzl/core/lib/async/sleep";
import { storiesOf } from "@storybook/react";
import { AccordionVertical } from "./AccordionVertical";
import { ExpanderAccordion } from "../expander/ExpanderAccordion";
import { AccordionItem } from "./AccordionItem";
import { IAccordionItemConfig } from "./IAccordionItemConfig";
import { AccordionItemContentStatus } from "./AccordionItemContentStatus";
import { LayoutRow } from "../../layout/content/LayoutRow";
import { LayoutRowItem } from "../../layout/content/LayoutRowItem";
import { Label } from "../../data/Label";
import { AccordionContentFrame } from "./AccordionContentFrame";
import styled from "../../styled-components";

interface IItemConfig extends IAccordionItemConfig {
    label: string;
    value: number;
}

const ContentArea = styled.div`
    background: ${props => props.theme.colors.base.bg.main};
    padding: 8px;
`;

storiesOf("control/accordion/" + AccordionVertical.name, module)
    .addParameters({
        info: {
            propTablesExclude: [ContentArea]
        }
    })
    .addDecorator(storyFn => <ContentArea>{storyFn()}</ContentArea>)
    .add("default", () => (
        <AccordionVertical<IItemConfig>
            errorText="Loading failed."
            loadingText="Loading..."
            label="Accordion label"
            noDataContent={<div>No data to show</div>}
            onContentError={(e, item) => {
                // tslint:disable-next-line:no-console
                console.log("Failed loading content for item " + item.config.label);
            }}
            renderExpander={({ config, isOpen, onClick }) =>
                <ExpanderAccordion open={isOpen} onClick={onClick} label={config.label}
                    value={config.value} locale="en-US" fullWidth />
            }
        >
            <AccordionItem<IItemConfig> label="Item 1 (with delay)" value={5} content={async () => {
                await sleep(2000);
                return <div>Dynamically loaded content 1</div>;
            }} />
            <AccordionItem<IItemConfig> label="Item 2 (instant)" value={10}>
                <div>Static content</div>
            </AccordionItem>
            <AccordionItem<IItemConfig> label="Item 3 (error)" value={7}
                content={async () => { throw new Error(`Error`); }} />
        </AccordionVertical>
    ))
    .add("no items", () => (
        <AccordionVertical<IItemConfig>
            errorText="Loading failed."
            loadingText="Loading..."
            label="Accordion label"
            noDataContent={<div>No data to show</div>}
            onContentError={(e, item) => {
                // tslint:disable-next-line:no-console
                console.log("Failed loading content for item " + item.config.label);
            }}
            renderExpander={({ config, isOpen, onClick }) =>
                <ExpanderAccordion open={isOpen} onClick={onClick} label={config.label} locale="en-US" />
            }
        >
        </AccordionVertical>
    ))
    .add("custom content", () => (
        <AccordionVertical<IItemConfig>
            errorText="Loading failed."
            loadingText="Loading..."
            label="Accordion label"
            noDataContent={<div>No data found</div>}
            onContentError={(e, item) => {
                // tslint:disable-next-line:no-console
                console.log("Failed loading content for item " + item.config.label);
            }}
            renderExpander={({ config, isOpen, onClick }) =>
                <ExpanderAccordion open={isOpen} onClick={onClick} label={config.label} locale="en-US" />
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
            <AccordionItem<IItemConfig> label="Item 1" value={1} content={async () => {
                await sleep(2000);
                return <div>Dynamically loaded content 1</div>;
            }} />
            <AccordionItem<IItemConfig> label="Item 2" value={2} content={async () =>
                <div>Dynamically loaded content 2</div>} />
        </AccordionVertical>
    ))
    .add("with custom header", () => (
        <AccordionVertical<IItemConfig>
            errorText="Loading failed."
            loadingText="Loading..."
            label="Accordion label"
            noDataContent={<div>No data to show</div>}
            onContentError={(e, item) => {
                // tslint:disable-next-line:no-console
                console.log("Failed loading content for item " + item.config.label);
            }}
            renderExpander={({ config, isOpen, onClick }) =>
                <ExpanderAccordion open={isOpen} onClick={onClick} label={config.label} locale="en-US" />
            }
            renderHeader={({ config }) => <div>Custom header content for {config.label}</div>}
        >
            <AccordionItem<IItemConfig> label="Item 1" value={1} content={async () =>
                <div>Dynamically loaded content 1</div>} />
                <AccordionItem<IItemConfig> label="Item 2" value={2} content={async () =>
                <div>Dynamically loaded content 2</div>} />
        </AccordionVertical>
    ));
