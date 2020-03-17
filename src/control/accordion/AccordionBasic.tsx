import * as React from "react";
import { observer, PropTypes } from "mobx-react";
import { AccordionState } from "./internal/AccordionState";

export interface IAccordionBasicProps<TItemConfig> {
    children?: React.ReactNode;
    renderItems(args: {
        config: TItemConfig;
        content?: React.ReactElement<{}>;
        isOpen: boolean;
        onClick(): void;
    }[], activeContent?: React.ReactElement<{}>): React.ReactElement<{}>;
}

/**
 * Basic accordion with customizable rendering
 *
 * For each accordion item, a corresponding <AccordionItem /> instance should be passed as a child
 * to the accordion instance. Passing arbitrary props to each item is possible and is reflected
 * in the TItemConfig generic type parameter:
 *
 * ```ts
 *
 * interface IItemData {
 *     foo: string;
 * }
 * <AccordionBasic<IItemData> renderItems={(items, activeContent) => <div>...</div>}>
 *     <AccordionItem<IItemData> foo="bar">
 *         Item content
 *     </AccordionItem>
 * </AccordionBasic>
 * ```
 */
@observer
export class AccordionBasic<TItemConfig>
extends React.Component<IAccordionBasicProps<TItemConfig>> {
    // We use legacy context because the accordion and the children
    // may be instantiated from different apps library instances and the createContext API won't work in this case
    /** @internal */
    static childContextTypes = {
        // Just so we don't have to import react prop-types. We don't care about the shape anyway
        accordionState: PropTypes.objectOrObservableObject
    };
    /** @internal */
    private accordionState: AccordionState<TItemConfig>;

    constructor(props: IAccordionBasicProps<TItemConfig>) {
        super(props);

        this.accordionState = new AccordionState<TItemConfig>();
    }

    /** @internal */
    getChildContext() {
        return { accordionState: this.accordionState };
    }

    render() {
        let items = this.accordionState.getItems();
        let activeItem = this.accordionState.getActiveItem();

        return <>
            { /* Just make sure there wasn't something extra besides <AccordionItem>-s, which return null */ }
            <div style={{ position: "fixed", top: -10000, left: -10000 }}>
                { /* Children aren't actually visible, we just use this method as hook to add items dynamically */ }
                { this.props.children }
            </div>
            { this.props.renderItems(items.map(item => ({
                config: item.config,
                isOpen: item === activeItem,
                onClick: item.onClick,
                content: item.content
            })), activeItem?.content) }
        </>;
    }
}
