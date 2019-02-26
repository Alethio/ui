import { EventDispatcher } from "@puzzl/core/lib/event/EventDispatcher";

const defaultOpts: IMultiHoverOptions = {
    enterDelay: 400,
    leaveDelay: 400
};

export interface IMultiHoverOptions {
    /** Time since mouse enter event until hovered item is marked active (millis) */
    enterDelay?: number;
    /** Time since mouse leave event until item is marked inactive (millis) */
    leaveDelay?: number;
}

export class MultiHover<TActiveItem> {
    private options: IMultiHoverOptions;
    private showTimeoutId: number;
    private hideTimeoutId: number;
    /** Sometimes, mouseenter on new element happens before mouseout on old element */
    private hoveredElements = 0;
    private _onActiveChange = new EventDispatcher<this, TActiveItem | undefined>();

    get onActiveChange() {
        return this._onActiveChange.asEvent();
    }

    constructor(opts: IMultiHoverOptions = {}) {
        this.options = { ...defaultOpts, ...opts };
    }

    applyOpts(opts: Partial<IMultiHoverOptions>) {
        this.options = { ...this.options, ...opts };
    }

    enter(item?: TActiveItem) {
        this.hoveredElements++;
        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
            this.hideTimeoutId = (void 0)!;
        }
        this.showTimeoutId = setTimeout(() => this._onActiveChange.dispatch(this, item), this.options.enterDelay!);
    }

    leave() {
        this.hoveredElements--;
        if (this.hoveredElements > 0) {
            return;
        }

        if (this.showTimeoutId) {
            clearTimeout(this.showTimeoutId);
            this.showTimeoutId = (void 0)!;
        }
        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
        }
        this.hideTimeoutId = setTimeout(() => this._onActiveChange.dispatch(this, void 0), this.options.leaveDelay!);
    }
}
