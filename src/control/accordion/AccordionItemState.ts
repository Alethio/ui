import { observable, action } from "mobx";
import { IAccordionItemConfig } from "./IAccordionItemConfig";
import { AccordionItemContentStatus } from "./AccordionItemContentStatus";

export class AccordionItemState<TConfig extends IAccordionItemConfig> {
    public index: number;
    public config: TConfig;
    public onClick: () => void;
    @observable.ref
    private _content: React.ReactElement<{}> | undefined;
    @observable
    private _contentStatus = AccordionItemContentStatus.NotLoaded;

    @action
    updateContent(content: this["content"], contentStatus: this["contentStatus"]) {
        this._content = content;
        this._contentStatus = contentStatus;
    }

    @action
    resetContent() {
        this._content = void 0;
        this._contentStatus = AccordionItemContentStatus.NotLoaded;
    }

    get content() {
        return this._content;
    }

    get contentStatus() {
        return this._contentStatus;
    }
}
