import * as React from "react";
import { AccordionItem } from "../AccordionItem";

export function getItemConfigsFromChildren<TItemConfig>(children: React.ReactNode) {
    let configs: TItemConfig[] = [];
    React.Children.map(children, c => {
        if (c === null || c === void 0) {
            // Just return and don't increment counter
            return;
        }

        const childIsAccordionItem = isAccordionItemInstance(c);
        if (childIsAccordionItem) {
            configs.push((c as React.ReactElement<TItemConfig>).props);
            return;
        }

        if (!(c as any).props) {
            return;
        }

        configs.push(...getItemConfigsFromChildren<TItemConfig>((c as any).props.children));
        return;
    });
    return configs;
}

// validate that c is an instance of AccordionItem
export function isAccordionItemInstance(c: React.ReactChild) {
    let childIsAccordionItem = false;
    try {
        const childType = (c as React.ReactElement<any>).type;
        childIsAccordionItem = (childType as typeof AccordionItem)._brand === "accordionItem";
    } catch (e) {
        // silent fail, assume that c is not an AccordionItem instance
    }
    return childIsAccordionItem;
}
