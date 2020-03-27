import React from "react";
import { storiesOf } from "@storybook/react";
import { ExpanderAccordion } from "../expander/ExpanderAccordion";
import { AccordionItem } from "./AccordionItem";
import styled from "../../styled-components";
import { AccordionBasic } from "./AccordionBasic";
import { observable } from "mobx";
import { Observer } from "mobx-react";

interface IItemConfig {
    label: string;
    value: number;
}

const ContentArea = styled.div`
    background: ${props => props.theme.colors.base.bg.main};
    padding: 8px;
`;

const accordionItemToggle = observable.box(true);

storiesOf("control/accordion/" + AccordionBasic.name, module)
    .addParameters({
        info: {
            propTablesExclude: [ContentArea]
        }
    })
    .addDecorator(storyFn => <ContentArea>{storyFn()}</ContentArea>)
    .add("default", () => (
        <AccordionBasic<IItemConfig>
            initialOpen
            renderItems={(items, activeContent) => <div>
                <div style={{ display: "flex" }}>
                    {items.map((item, index) =>
                        <ExpanderAccordion open={item.isOpen} onClick={item.onClick} label={item.config.label}
                            value={item.config.value} locale="en-US" fullWidth />
                    )}
                </div>
                <div>
                    { activeContent }
                </div>
            </div>}
        >
            <AccordionItem<IItemConfig> label="Item 1" value={5}>
                Static content 1
            </AccordionItem>
            <AccordionItem<IItemConfig> label="Item 2" value={10}>
                Static content 2
            </AccordionItem>
        </AccordionBasic>
    ))
    .add("dynamic items", () => <div>
        <div>
            <button onClick={() => accordionItemToggle.set(!accordionItemToggle.get())}>Show/hide 3rd item</button>
        </div>
        <Observer>{() => <AccordionBasic<IItemConfig>
            initialOpen
            renderItems={(items, activeContent) => <div>
                <div style={{ display: "flex" }}>
                    {items.map((item, index) =>
                        <ExpanderAccordion key={index} open={item.isOpen} onClick={item.onClick}
                            label={item.config.label} value={item.config.value} locale="en-US" fullWidth />
                    )}
                </div>
                <div>
                    { activeContent }
                </div>
            </div>}
        >
            <AccordionItem<IItemConfig> label="Item 1" value={5}>
                Static content 1
            </AccordionItem>
            <AccordionItem<IItemConfig> label="Item 2" value={10}>
                Static content 2
            </AccordionItem>
            { accordionItemToggle.get() &&
            <AccordionItem<IItemConfig> label="Item 3" value={10} priority={2}>
                Static content 3 (may be toggled and will maintain position)
            </AccordionItem>
            }
            <AccordionItem<IItemConfig> label="Item 4" value={10}>
                Static content 4
            </AccordionItem>
        </AccordionBasic> }</Observer>
    </div>
    );
