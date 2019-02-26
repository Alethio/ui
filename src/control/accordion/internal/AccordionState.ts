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

    constructor(private onError: (e: any, item: AccordionItemState<TItemConfig>) => void) {

    }

    getItems() {
        return this.items;
    }

    getActiveItem() {
        return this.activeItem;
    }

    @action
    buildItems(itemConfigs: TItemConfig[]) {
        this.items = itemConfigs.map((c, idx) => {
            let item = new AccordionItemState<TItemConfig>();
            item.index = idx;
            item.config = c;
            item.onClick = () => this.handleItemClick(item);
            return item;
        });
        this.activeItem = void 0;
    }

    private handleItemClick = async (item: AccordionItemState<TItemConfig>) => {
        // Only one item active at a time, but we can also toggle it off
        this.activeItem = item === this.activeItem ? void 0 : item;

        if (this.activeItem !== void 0) {
            await this.onItemExpanded(item);
        }
    }

    private async onItemExpanded(item: AccordionItemState<TItemConfig>) {
        try {
            item.resetContent();
            item.updateContent(await item.config.content(), AccordionItemContentStatus.Loaded);
        } catch (e) {
            this.onError(e, item);
            item.updateContent(void 0, AccordionItemContentStatus.Error);
        }
    }
}
