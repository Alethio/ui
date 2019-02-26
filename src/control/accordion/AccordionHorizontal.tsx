import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
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
    items: TItemConfig[] | undefined;
    loadingText: string;
    errorText: string;
    contentAnimSeconds?: number;
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
 * Accordion with async loading that uses the standard layout row/item components to display its data
 * Uses a horizontal layout, with expanders on the same row
 *
 * Shows loading/error/no data states
 */
@observer
export class AccordionHorizontal<TItemConfig extends IAccordionItemConfig>
extends React.Component<IAccordionHorizontalProps<TItemConfig>> {
    static defaultProps: Partial<IAccordionVerticalProps<any>> = {
        contentAnimSeconds: .2
    };

    private accordionState: AccordionState<TItemConfig>;
    @observable
    private expanderEls = new Map<number, HTMLElement>();
    private containerOffsetLeft: number | undefined;

    constructor(props: IAccordionHorizontalProps<TItemConfig>) {
        super(props);

        this.accordionState = new AccordionState<TItemConfig>(this.props.onContentError);
        this.accordionState.buildItems(this.props.items || []);
    }

    componentDidUpdate(prevProps: IAccordionHorizontalProps<TItemConfig>) {
        if (this.props.items !== prevProps.items) {
            this.accordionState.buildItems(this.props.items || []);
        }
    }

    render() {
        if (!this.props.items) {
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
        if (this.expanderEls.size && this.containerOffsetLeft) {
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
