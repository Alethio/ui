import { observable } from "mobx";
import { GridSortingOrder } from "./GridSortingOrder";
import { IGridFieldBase } from "./IGridFieldBase";
import { IGridSortingOptions } from "./IGridSortingOptions";

export class GridSortingOptions implements IGridSortingOptions {
    @observable
    private _sortField: IGridFieldBase | undefined = undefined;
    @observable
    private _sortOrder = GridSortingOrder.Default;

    private orderCycle: GridSortingOrder[] = [
        GridSortingOrder.Ascending,
        GridSortingOrder.Descending,
        GridSortingOrder.Default
    ];

    constructor(field?: IGridFieldBase | undefined) {
        if (field) {
            this.field = field;
            this.order = field.defaultSortOrder ? field.defaultSortOrder : GridSortingOrder.Ascending;
        }
    }

    public get field() {
        return this._sortField;
    }

    public set field(k: IGridFieldBase | undefined) {
        this._sortField = k;
    }

    public get order() {
        return this._sortOrder;
    }

    public set order(o: GridSortingOrder) {
        this._sortOrder = o;
    }

    public resetField() {
        this._sortField = undefined;
    }

    public setAscendingOrder() {
        this._sortOrder = GridSortingOrder.Ascending;
    }
    public setDescendingOrder() {
        this._sortOrder = GridSortingOrder.Descending;
    }

    public setNextOrder() {
        const idx = this.orderCycle.indexOf(this._sortOrder);
        this._sortOrder = this.orderCycle[(idx + 1) % this.orderCycle.length];
    }
}
