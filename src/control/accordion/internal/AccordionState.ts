import { observable, action } from "mobx";
import { IAccordionItemConfig } from "../IAccordionItemConfig";
import { AccordionItemState } from "../AccordionItemState";
import { AccordionItemContentStatus } from "../AccordionItemContentStatus";

/** @internal */
export class AccordionState<TItemConfig extends IAccordionItemConfig> {
    @observable.shallow
    private items: AccordionItemState<TItemConfig>[];
    @observable.ref
    private activeItem: AccordionItemState<TItemConfig> | undefined;

    constructor(private onError?: (e: any, item: AccordionItemState<TItemConfig>) => void) {
        this.items = [];
    }

    getItems() {
        return this.items;
    }

    getActiveItem() {
        return this.activeItem;
    }

    private createItem(itemConfig: TItemConfig, idx: number) {
        let item = new AccordionItemState<TItemConfig>();
        item.index = idx;
        item.config = itemConfig;
        item.onClick = () => this.handleItemClick(item);
        return item;
    }

    addItem(itemConfig: TItemConfig) {
        this.items.push(this.createItem(itemConfig, this.items.length));
    }

    @action
    removeItem(itemConfig: TItemConfig) {
        let itemIndex = this.items.findIndex(it => it.config === itemConfig);
        if (itemIndex !== -1) {
            if (this.activeItem === this.items[itemIndex]) {
                this.activeItem = void 0;
            }
            this.items.splice(itemIndex, 1);
        }
    }

    @action
    updateItem(oldConfig: TItemConfig, newConfig: TItemConfig) {
        let item = this.items.find(it => it.config === oldConfig);
        if (item) {
            if (item.config.content !== newConfig.content && this.activeItem === item) {
                // tslint:disable:no-floating-promises
                this.onItemExpanded(item);
            }
            item.config = newConfig;
        }
    }

    private handleItemClick = async (item: AccordionItemState<TItemConfig>) => {
        // Only one item active at a time, but we can also toggle it off
        this.activeItem = item === this.activeItem ? void 0 : item;

        if (this.activeItem !== void 0) {
            await this.onItemExpanded(item);
        }
    }

    private async onItemExpanded(item: AccordionItemState<TItemConfig>) {
        if (typeof item.config.content === "function") {
            try {
                item.resetContent();
                item.updateContent(await item.config.content(), AccordionItemContentStatus.Loaded);
            } catch (e) {
                this.onError?.(e, item);
                item.updateContent(void 0, AccordionItemContentStatus.Error);
            }
        } else {
            item.resetContent();
            item.updateContent(item.config.children, AccordionItemContentStatus.Loaded);
        }
    }
}
