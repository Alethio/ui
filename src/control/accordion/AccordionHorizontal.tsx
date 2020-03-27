import * as React from "react";
import { observable } from "mobx";
import { observer, PropTypes } from "mobx-react";
import { IAccordionItemConfig } from "./IAccordionItemConfig";
import { LayoutRow } from "../../layout/content/LayoutRow";
import { LayoutRowItem } from "../../layout/content/LayoutRowItem";
import { Label } from "../../data/Label";
import { DomNodeProxy } from "../../util/react/DomNodeProxy";
import { AccordionState } from "./internal/AccordionState";
import { AccordionContentWrapper } from "./internal/AccordionContentWrapper";
import { Height } from "../../fx/Height";
import { AccordionItemState } from "./AccordionItemState";
import { AccordionItemContentStatus } from "./AccordionItemContentStatus";
import { IAccordionVerticalProps } from "./AccordionVertical";

export interface IAccordionHorizontalProps<TItemConfig extends IAccordionItemConfig> {
    label: string;
    noDataContent: React.ReactElement<{}>;
    loadingText: string;
    errorText: string;
    contentAnimSeconds?: number;
    children?: React.ReactNode;
    onContentError(e: any, item: AccordionItemState<TItemConfig>): void;
    renderExpander(args: {
        config: TItemConfig;
        isOpen: boolean;
        onClick(): void;
    }): React.ReactElement<{}>;
    renderContent?(args: {
        content?: React.ReactElement<{}>;
        status: AccordionItemContentStatus;
        arrowPosition?: number;
        config: TItemConfig;
    }): React.ReactElement<{}>;
}

/**
 * Accordion with async loading that uses the standard LayoutRow/LayoutItem components to display its data
 *
 * Uses a horizontal layout, with item expanders rendered on the same row.
 * For each accordion item, a corresponding <AccordionItem /> instance should be passed as a child
 * to the accordion instance (or it can be rendered asynchronously in a nested component).
 * Passing arbitrary props to each item is possible and is reflected in the TItemConfig generic type parameter.
 *
 * NB: Items can be added dynamically and asynchronously, but they will render in the order in which they were added.
 * E.g. dynamically inserting an item in children at a given index will still append the item after all existing items.
 * If you want to specify the index at which to render the item, pass a `priority` prop to the AccordionItem element.
 *
 * ```ts
 * import { IAccordionItemConfig } from "@alethio/ui/lib/control/accordion/IAccordionItemConfig";
 *
 * interface IItemData extends IAccordionItemConfig {
 *     foo: string;
 * }
 * <AccordionHorizontal<IItemData> ...>
 *     <AccordionItem<IItemData> foo="bar" content={async () => <div>Test</div>} />
 * </AccordionHorizontal>
 * ```
 */
@observer
export class AccordionHorizontal<TItemConfig extends IAccordionItemConfig>
extends React.Component<IAccordionHorizontalProps<TItemConfig>> {
    static defaultProps: Pick<IAccordionVerticalProps<any>, "contentAnimSeconds"> = {
        contentAnimSeconds: .2
    };

    // We use legacy context because the accordion and the children
    // may be instantiated from different apps library instances and the createContext API won't work in this case
    /** @internal */
    static childContextTypes = {
        // Just so we don't have to import react prop-types. We don't care about the shape anyway
        accordionState: PropTypes.objectOrObservableObject
    };
    /** @internal */
    private accordionState: AccordionState<TItemConfig>;

    @observable
    private expanderEls = new Map<number, HTMLElement>();
    private containerOffsetLeft: number | undefined;

    constructor(props: IAccordionHorizontalProps<TItemConfig>) {
        super(props);

        this.accordionState = new AccordionState<TItemConfig>(this.props.onContentError);
    }

    /** @internal */
    getChildContext() {
        return { accordionState: this.accordionState };
    }

    render() {
        return <>
            { /* Just make sure there wasn't something extra besides <AccordionItem>-s, which return null */ }
            <div style={{ position: "fixed", top: -10000, left: -10000 }}>
                { /* Children aren't actually visible, we just use this method as hook to add items dynamically */ }
                { this.props.children }
            </div>
            { this.renderItems() }
        </>;
    }

    private renderItems() {
        if (!this.accordionState.getItems().length) {
            return <LayoutRow>
                <LayoutRowItem>
                    <Label>{this.props.label}</Label>
                    {this.props.noDataContent}
                </LayoutRowItem>
            </LayoutRow>;
        }

        let items = this.accordionState.getItems();
        let activeItem = this.accordionState.getActiveItem();

        return <div ref={this.handleContainerRef}>
            <LayoutRow>
                <LayoutRowItem>
                    <Label>{this.props.label}</Label>
                    <div style={{ display: "flex" }}>
                        { items.map((item, idx) => <React.Fragment key={idx}>
                            { this.renderExpander({
                                config: item.config,
                                idx,
                                isOpen: item === activeItem,
                                onClick: item.onClick
                            }) }
                        </React.Fragment>) }
                    </div>
                </LayoutRowItem>
            </LayoutRow>
            <Height duration={this.props.contentAnimSeconds!}>
                { activeItem && <AccordionContentWrapper<TItemConfig>
                    content={activeItem.content}
                    config={activeItem.config}
                    status={activeItem.contentStatus}
                    arrowPosition={this.getContentArrowPosition(activeItem.index)}
                    loadingDelay={this.props.contentAnimSeconds!}
                    loadingText={this.props.loadingText}
                    errorText={this.props.errorText}
                    renderContent={this.props.renderContent}
                />}
            </Height>
        </div>;
    }

    private renderExpander({config, idx, isOpen, onClick}: {
        config: TItemConfig;
        idx: number;
        isOpen: boolean;
        onClick(): void;
    }) {
        return <DomNodeProxy
            onMount={ref => this.expanderEls.set(idx, ref)}
            onUnmount={ref => this.expanderEls.delete(idx)}
        >
            { this.props.renderExpander({
                config,
                isOpen,
                onClick
            }) }
        </DomNodeProxy>;
    }

    private handleContainerRef = (ref: HTMLElement | null) => { if (ref) {
        this.containerOffsetLeft = ref.offsetLeft;
    }}

    private getContentArrowPosition(idx: number) {
        if (this.expanderEls.size && this.containerOffsetLeft !== void 0) {
            if (!this.expanderEls.has(idx)) {
                throw new RangeError(`Index "${idx}" out of range`);
            }
            let expanderEl = this.expanderEls.get(idx)!;
            let expanderWidth = expanderEl.offsetWidth;
            return expanderEl.offsetLeft - this.containerOffsetLeft + expanderWidth / 2;
        }

        return void 0;
    }
}
