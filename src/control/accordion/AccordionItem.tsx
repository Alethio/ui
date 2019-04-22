import * as React from "react";
import { IAccordionItemConfig } from "./IAccordionItemConfig";

export class AccordionItem<TAccordionItemConfig extends IAccordionItemConfig>
extends React.Component<TAccordionItemConfig> {
    static _brand = "accordionItem";

    render() {
        // This is a fake component used as a wrapper for accordion item config
        return null;
    }
}
