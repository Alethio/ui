import * as React from "react";
import { IAccordionItemConfig } from "./IAccordionItemConfig";
import { PropTypes } from "mobx-react";
import { AccordionState } from "./internal/AccordionState";

/**
 * Component that can be passed as a child to AccordionHorizontal and AccordionVertical instances.
 *
 * The props that it receives depends on the `TAccordionItemConfig` generic type parameter and are also accessible
 * by the Accordion* instance in it's render* callback props.
 */
export class AccordionItem<TAccordionItemConfig extends IAccordionItemConfig>
extends React.Component<TAccordionItemConfig> {
    static contextTypes = {
        accordionState: PropTypes.objectOrObservableObject
    };

    /** @internal */
    context: {
        accordionState: AccordionState<TAccordionItemConfig>;
    };

    private itemConfig: TAccordionItemConfig;

    componentDidMount() {
        this.itemConfig = this.props;
        this.context.accordionState.addItem(this.itemConfig);
    }

    componentDidUpdate() {
        let oldItemConfig = this.itemConfig;
        this.itemConfig = this.props;
        this.context.accordionState.updateItem(oldItemConfig, this.itemConfig);
    }

    componentWillUnmount() {
        this.context.accordionState.removeItem(this.itemConfig);
    }

    render() {
        // This is a fake component used as a wrapper for accordion item config
        return null;
    }
}
