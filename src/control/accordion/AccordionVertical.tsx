import * as React from "react";
import { observable, IReactionDisposer, when, reaction, runInAction } from "mobx";
import { observer, PropTypes } from "mobx-react";
import { IAccordionItemConfig } from "./IAccordionItemConfig";
import { LayoutRow } from "../../layout/content/LayoutRow";
import { LayoutRowItem } from "../../layout/content/LayoutRowItem";
import { Label } from "../../data/Label";
import { AccordionState } from "./internal/AccordionState";
import { AccordionContentWrapper } from "./internal/AccordionContentWrapper";
import { Height } from "../../fx/Height";
import { AccordionItemState } from "./AccordionItemState";
import { AccordionItemContentStatus } from "./AccordionItemContentStatus";

export interface IAccordionVerticalProps<TItemConfig extends IAccordionItemConfig> {
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
        isFullWidth: boolean;
        onClick(): void;
        onResize(): void;
    }): React.ReactElement<{}>;
    renderHeader?(args: {
        config: TItemConfig;
        isOpen: boolean;
    }): React.ReactNode;
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
 * Calculates the width of the largest expander and sets all expanders to the same width
 * Shows loading/error/no data states
 */
@observer
export class AccordionVertical<TItemConfig extends IAccordionItemConfig>
extends React.Component<IAccordionVerticalProps<TItemConfig>> {
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
    @observable
    private fixedExpanderWidth: number | undefined;
    private containerOffsetLeft: number | undefined;
    private widthWatchDisposer: IReactionDisposer | undefined;
    private refreshDisposer: IReactionDisposer | undefined;

    constructor(props: IAccordionVerticalProps<TItemConfig>) {
        super(props);

        this.accordionState = new AccordionState<TItemConfig>(this.props.onContentError);

        this.refreshDisposer = reaction(() => this.accordionState.getItems().map(i => i.config), () => {
            // Reset width and recalculate
            runInAction(() => {
                this.fixedExpanderWidth = void 0;
                this.expanderEls.clear();
            });
            this.destroyWidthWatch();
            this.setupWidthWatch();
        }, {
            // HACK: The reaction triggers before re-render with new items resulting in incorrect width
            // Debounce also helps with multiple triggers due to changes in each item
            delay: 100,
            equals: (itemConfigs: TItemConfig[], prevItemConfigs: TItemConfig[]) => {
                if (itemConfigs.length !== prevItemConfigs.length) {
                    return false;
                }
                return itemConfigs.every((item, idx) => item === prevItemConfigs[idx]);
            }
        });
    }

    /** @internal */
    getChildContext() {
        return { accordionState: this.accordionState };
    }

    componentDidMount() {
        this.setupWidthWatch();
    }

    private setupWidthWatch() {
        const items = this.accordionState.getItems();
        if (items.length) {
            this.widthWatchDisposer = when(() => this.expanderEls.size === items.length, () => {
                this.computeWidth();
            });
        }
    }

    private destroyWidthWatch() {
        if (this.widthWatchDisposer) {
            this.widthWatchDisposer();
            this.widthWatchDisposer = void 0;
        }
    }

    componentWillUnmount() {
        this.destroyWidthWatch();
        if (this.refreshDisposer) {
            this.refreshDisposer();
            this.refreshDisposer = void 0;
        }
    }

    private computeWidth() {
        let maxWidth = [...this.expanderEls.values()].reduce((max, el) => Math.max(max, el.offsetWidth), 0);
        // HACK: Add 1 to account for rounding errors (subpixel rendering)
        this.fixedExpanderWidth = maxWidth + 1;
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
            { items.map((item, idx) => <React.Fragment key={idx}>
                <LayoutRow responsive={{ignoreFirstLabel: "forLowRes"}}>
                    <LayoutRowItem>
                        <Label>{ !idx ? this.props.label : void 0}</Label>
                        <div
                            ref={ref => ref && this.expanderEls.set(idx, ref)}
                            style={{ width: this.fixedExpanderWidth }}
                        >
                            { this.props.renderExpander({
                                config: item.config,
                                isFullWidth: !!this.fixedExpanderWidth,
                                isOpen: item === activeItem,
                                onClick: item.onClick,
                                onResize: this.onExpanderResize
                            }) }
                        </div>
                        { this.props.renderHeader && this.props.renderHeader({
                            config: item.config,
                            isOpen: item === activeItem
                        }) }
                    </LayoutRowItem>
                </LayoutRow>
                <Height duration={this.props.contentAnimSeconds!}>
                    { item === activeItem && <AccordionContentWrapper<TItemConfig>
                        content={item.content}
                        config={item.config}
                        status={item.contentStatus}
                        arrowPosition={this.getContentArrowPosition()}
                        loadingDelay={this.props.contentAnimSeconds!}
                        errorText={this.props.errorText}
                        loadingText={this.props.loadingText}
                        renderContent={this.props.renderContent}
                    />}
                </Height>
            </React.Fragment>) }
        </div>;
    }

    private handleContainerRef = (ref: HTMLElement | null) => {
        if (ref) {
            this.containerOffsetLeft = ref.offsetLeft;
        }
    }

    private getContentArrowPosition() {
        if (this.expanderEls.size && this.containerOffsetLeft && this.fixedExpanderWidth) {
            let expanderEl = this.expanderEls.values().next().value;
            return expanderEl.offsetLeft - this.containerOffsetLeft + this.fixedExpanderWidth / 2;
        }

        return void 0;
    }

    private onExpanderResize = () => {
        this.fixedExpanderWidth = void 0;
        this.destroyWidthWatch();
        this.setupWidthWatch();
    }
}
